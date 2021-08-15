import React from 'react'
import { PostWrapper, Items } from '../../components';
import InfoList from './InfoList'

const confirmedCaseInfo=[
  {id: 1, site:"보건복지부", desc: "국내 발생현황", link: "http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=11&ncvContSeq=&contSeq=&board_id=&gubun="},
  {id: 2, site:"보건복지부", desc: "확진환자 이동경로", link: "http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=12&ncvContSeq=&contSeq=&board_id=&gubun="},
  {id: 3, site:"보건복지부", desc: "코로나19팩트& 이슈체크", link: "http://ncov.mohw.go.kr/factBoardList.do?brdId=3&brdGubun=33"},
  {id: 4, site:"보건복지부", desc: "보건복지부 트위터", link: "https://twitter.com/mohwpr"},
]

const vaccineInfo=[
  {id: 1, site:"질병관리청", desc: "질병관리청 예방접종 관련 자료", link: "http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=11&ncvContSeq=&contSeq=&board_id=&gubun="},
  {id: 2, site:"질병관리청", desc: "코로나 19예방접종", link: "https://ncv.kdca.go.kr/"},
  {id: 3, site:"질병관리청", desc: "코로나 19예방접종 사전예약 시스템", link: "https://ncvr2.kdca.go.kr"},
  {id: 4, site:"질병관리청", desc: "질병관리청 아프지마 TV(youtube)", link: "https://www.youtube.com/c/%EC%A7%88%EB%B3%91%EA%B4%80%EB%A6%AC%EC%B2%AD%EC%95%84%ED%94%84%EC%A7%80%EB%A7%88TV/videos"},
  {id: 5, site:"naver 지식백과", desc: "코로나19 백신 사전예약 10부제", link: "https://terms.naver.com/entry.naver?docId=6472047&cid=43667&categoryId=43667ㄴ"},
]

function InfoTitle(){
  return (
    <div className="info">
      <h2>코로나19 관련 정보</h2>
      <h4> 버튼을 클릭하시면 사이트가 새탭에 열립니다.</h4>
    </div>
  );
}

function Info() {
  return (
    <PostWrapper>
      <Items>
        <InfoTitle />
        <InfoList
          title="확진자관련정보"
          desc="확진자 관련 정보를 알려주는 사이트."
          sites={confirmedCaseInfo}
        />
        <InfoList
          title="백신관련정보"
          desc="코로나19 예방접종 관련 정보를 알려주는 사이트"
          sites={vaccineInfo}
        />
      </Items>
    </PostWrapper>
  );
}

export default Info
