# 한양 챗봇 

## 저장소 클론하기

* 저장소를 로컬에 복사 합니다.
```
# git clone https://github.com/taeuk-gang/hanyang-chatbot.git 폴더명
# cd 폴더명
```

## 빌드 스크립트 사용

* npm 패키지를 설치하고, 빌드 스크립트를 실행합니다.
```
# 초기 설치시
# npm run init

# 프론트 개발 작업 명령
# npm run dev

# 서버 바로 실행 (프론트 변경된 내용 반영X)
# npm run server

# 프론트에서 작업한 내용을 서버로 복사 후, 서버 실행
# npm run server:bundle
```

* 아래와 같은 폴더가 생성됩니다.
```
ㄴ src (프론트 개발용 소스)
ㄴ ㅡ _locales (언어 소스)
ㄴ ㅡ modules (공용 소스)
ㄴ ㅡ components (각 엘리먼트별 모듈 파일)
ㄴ ㅡ *.js (라우팅될 페이지 파일)
ㄴ server (서버 개발용 소스)
ㄴ images (이미지 파일)
ㄴ assets (기타 파일)
```

## 테스트하기

* 개발과정 테스트
```
# npm run dev 실행
# localhost:9000/ 접속 후 테스트
```

* 배포 전 테스트
```
# npm run server:bundle
# http://hanyang-chatbot.kro.kr:8080/ 접속 후 테스트 (외부 IP)
```

## 배포하기
```
# 호스팅 도메인 이후 설정하여, 외부IP 설정
```