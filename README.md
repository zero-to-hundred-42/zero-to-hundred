코로나 OUT 
=============
***



![](https://user-images.githubusercontent.com/49050588/129475702-224b88e7-515e-44db-b9d8-415c88461e71.png)

* [HackaLearn Korea 2021](https://github.com/devrel-kr/HackaLearn) 참가 작품

* Demo : https://proud-tree-02fdce210.azurestaticapps.net/

* Team : zero-to-hundred-42(제로백)　 | 　[강희영](https://github.com/hekang42)　[엄현준](https://github.com/Eomhyunjun)　[김윤아](https://github.com/Kyalivia)　[박주은](https://github.com/humonnom)



<br>
아이폰에서는 재난문자가 저장이 안돼, 평소에 불편함이 있어왔습니다.<br> 이에 문제의식을 가지고 지역별로 재난문자를 확인 할 수 있는 사이트가 있으면 좋겠다는 생각에 만들게 되었습니다.   
<br>
<br>   
또한 같은 고충을 겪는 사람들끼리 소통할 수 있는 조그마한 창구가 있으면 더 좋지 않을까 하는 생각에 간단한 방명록도 만들었습니다.



### Tech Stack
***
* Azure Static Web Apps
* Azure function
* React, JSX
* HTML, CSS, JS   

<br>

### Build & Run
***

`git clone`으로 저장소를 받아옵니다.
```
git clone git@github.com:zero-to-hundred-42/zero-to-hundred.git
```

저장소가 저장된 폴더로 이동합니다.
```
cd zero-to-hundred
```

애플리케이션 종속성을 설치 및 웹앱을 실행합니다.
```
cd react-app
npm install
npm start
```

Azure Functions 앱을 로컬로 실행합니다.
```
cd api
func start
```

### license
***
[Microsoft/mslearn-staticwebapp-api](https://github.com/MicrosoftDocs/mslearn-staticwebapp-api) 템플릿 기반
MIT License
