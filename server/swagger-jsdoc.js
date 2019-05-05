'use strict'
 
module.exports = {
	swaggerDefinition: {
		// 정보
		info: {
			title: `Node.js Server API`,
			version: `0.0.1`,
			description: `Node.js 서버 API 설명서`,
		},
		// 주소
		host: `localhost:8080`,
		// 기본 root path
		basePath: `/`,
		contact: {
			email: `taeuk_kang@naver.com`,
		},
		// 각 api에서 설명을 기록할 때 사용할 constant들을 미리 등록해놓는것
		components: {
			res: {
				BadRequest: {
					description: `잘못된 요청.`,
					schema: {
						$ref: `#/components/errorResult/Error`,
					},
				},
				Forbidden: {
					description: `권한이 없슴.`,
					schema: {
						$ref: `#/components/errorResult/Error`,
					},
				},
				NotFound: {
					description: `없는 리소스 요청.`,
					schema: {
						$ref: `#/components/errorResult/Error`,
					},
				},
			},
			errorResult: {
				Error: {
					type: `object`,
					properties: {
						errMsg: {
							type: `string`,
							description: `에러 메시지 전달.`,
						},
					},
				},
			},
		},
		schemes: [`http`, `https`], // 가능한 통신 방식
		definitions: {
			'hanyangfoods': {
				type: `object`,
				properties: {
					placeId: {
						type: `number`,
					},
					foodList: {
						type: `object`,
					},
				},
			},
		},
	},
	apis: [`./routes/**/*.js`], // api 파일 위치들 
}
