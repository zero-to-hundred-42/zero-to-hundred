# 코로나OUT

![https://user-images.githubusercontent.com/49050588/129475702-224b88e7-515e-44db-b9d8-415c88461e71.png](https://user-images.githubusercontent.com/49050588/129475702-224b88e7-515e-44db-b9d8-415c88461e71.png)

- [HackaLearn Korea 2021](https://github.com/devrel-kr/HackaLearn) 참가 작품
- Demo : https://proud-tree-02fdce210.azurestaticapps.net/
- Team : zero-to-hundred-42(제로백) |　[강희영](https://github.com/hekang42)　[엄현준](https://github.com/Eomhyunjun)　[김윤아](https://github.com/Kyalivia)　[박주은](https://github.com/humonnom)

<br/>

## 프로젝트 배경

> 아이폰에서는 코로나 재난문자가 저장이 안돼, 평소에 불편함이 있어왔습니다. 이에 문제의식을 가지고 지역별로 재난문자를 확인 할 수 있는 사이트가 있으면 좋겠다는 생각에 만들게 되었습니다. 또한 같은 고충을 겪는 사람들끼리 소통할 수 있는 조그마한 창구가 있으면 더 좋지 않을까 하는 생각에 간단한 방명록도 만들었습니다.
### 

<br/>

## 기술 스택

- Azure Static Web Apps
- Azure function
- React, JSX
- HTML, CSS, JS

<br/>

## 설치 및 배포 방법

**[ 개발 도구 설치]**

- visual studio code
  - Azure Static Web Apps 확장 설치
  - Azure Functions 확장 설치
  - Azure Resources 확장 설치
- Node.js
- Azure Function CLI

```bash
npm install -g azure-functions-core-tools@3
```

- Azure Static Web Apps 확장 설치

```bash
npm install -g @azure/static-web-apps-cli
```
<br/>


**[로컬에서 설치 및 실행]**

1. `git clone`으로 저장소를 받아옵니다.

```bash
git clone <https://github.com/zero-to-hundred-42/zero-to-hundred.git>
```

1. 저장소가 저장된 폴더로 이동합니다.

```bash
cd zero-to-hundred
```

2. 애플리케이션 종속성을 설치 및 웹앱을 실행합니다.

```bash
cd react-app
npm install
npm start
```

3. 웹앱 실행과 동시에 api 폴더에서 Azure Functions 앱을 로컬로 실행합니다.

```bash
cd api
func start
```
<br/>


**[배포 방법]**

- 폴더 내에 있는 `.github 안에 있는 workflows 파일`은 지운다.
- 로컬에서 실행했던 폴더를 개인 깃헙 레포에 올린다.

1. 저장소가 저장된 폴더에서 Visual Studio Code를 실행합니다.

```bash
cd zero-to-hundred
code .
```

2. Visual Studio Code에서 

`Azure확장` 창을 연다.

- Azure에 로그인이 되어있어야 한다. → Azure 구독 선택
- GitHub에 로그인이 되어있어야 한다.

1. Static Web Apps 레이블 아래에서 더하기 기호를 선택합니다.
2. `애플리케이션 이름`을 입력합니다.
   - zero-to-hundred (임의로 입력)
3. `애플리케이션의 웹 프레임 워크`를 선택합니다.
   - react
4. `애플리케이션의 소스 코드의 위치`를 입력합니다.
   - react-app
5. build 결과과 산출되는 위치를 `6번에서 입력한 위치의 상대적으로 입력`합니다.
   - build
6. 앱이 만들어지면 Visual Studio Code에 확인 알림이 표시됩니다.
7. Static Web Apps 확장에서 `Portal에서 열기`를 선택한다.

- URL: 생성된 웹 사이트 주소
- 배포기록: GitHub Action의 기록

<br/>

### License

https://github.com/MicrosoftDocs/mslearn-staticwebapp-api 템플릿 기반

MIT 라이센스
