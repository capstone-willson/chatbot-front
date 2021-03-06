const SocketIO = require(`socket.io`)
const history = require(`../mongodb/history.js`)

module.exports = (server, app, sessionMiddleware) => {	
	const io = SocketIO(server, {path:`/socket.io`})	
	
	app.set(`io`, io)

	io.use((socket, next) => {
		sessionMiddleware(socket.request, socket.request.res, next)
	})

    io.on(`connection`, socket => {
		const req = socket.request
		// const ip = req.headers[`x-forwarded-for`] || req.connection.remoteAddress
		let ip = req.headers['x-forwarded-for'] ||
			req.connection.remoteAddress ||
			req.socket.remoteAddress ||
			req.connection.socket.remoteAddress
		socket.join(socket.id)
        console.info(`새 클라이언트 접속`, ip, socket.id, req.id)

        socket.on(`disconnect`, () => {
            // socket.id = 사용자 고유ID, 사용자 구별
			console.info(`클라이언트 접속해제`, ip, socket.id)
			socket.leave(socket.id)
        })
        
        socket.on(`error`, error => {
            console.error(error)
        })
        
        // 사용자 커스텀 이벤트
        socket.on(`reply`, data => {
			socket.to(socket.id).emit(`botSay`, data)
			const _history = new history({
				ip: socket.id,
				user: `bot`,
				date: Date.now(),
				chat: data,
			})

			_history.save(error => {
				if (error) {
					console.error(error)
				}
			})
		})
		
		socket.on(`question`, data => {
			socket.to(socket.id).emit(`userSay`, data)

			const _history = new history({
				ip: socket.id,
				user: `user`,
				date: Date.now(),
				chat: data,
			})

			_history.save(error => {
				if (error) {
					console.error(error)
				}
			})
		})
		
		socket.on(`mute`, data => {
			socket.to(data).emit(`muted`)
		})
		
		socket.on(`unmute`, data => {
			socket.to(data).emit(`unmuted`)
		})
		
		socket.on(`replyRemote`, data => {
			socket.to(data.target).emit(`botSay`, data.chat)			
		})

		socket.on(`changeIp`, data => {
			socket.leave(socket.id)
			socket.join(data)
		})
    })
}