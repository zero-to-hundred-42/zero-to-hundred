import { PostWrapper, Items } from '../../components';
import React from 'react'
import { Button, Item } from 'semantic-ui-react'

function BoardTitle() {
	return (
    <div>
      <h1 className="board_title">확진자 관련정보</h1>
      <h4 className="board_desc">확진자 관련 정보 웹사이트</h4>
    </div>
  );
}


	const sites=[
		{id: 1, site:"보건복지부", desc: "국내발생현황", link: "http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=11&ncvContSeq=&contSeq=&board_id=&gubun="},
		{id: 2, site:"보건복지부", desc: "확진환자 이동경로", link: "http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=12&ncvContSeq=&contSeq=&board_id=&gubun="},
		{id: 3, site:"보건복지부", desc: "코로나19팩트&이슈체크", link: "http://ncov.mohw.go.kr/factBoardList.do?brdId=3&brdGubun=33"},
		{id: 4, site:"보건복지부", desc: "보건복지부 트위터", link: "https://twitter.com/mohwpr"},
	]

function GetItemGroup(){


	let site_lists = [];

	for (let i = 0; i < sites.length; i++)
	{
		site_lists.push(
      <Item >
        <Item.Content>
          <Item.Header as='a'>{sites[i].desc}</Item.Header>
          <Item.Description>{sites[i].site}</Item.Description>

        </Item.Content>
		<a href={sites[i].link} target="_blank" rel="noreferrer" >
		<Button primary floated='right'>Open site</Button>
		</a>
      </Item>
    );
	}


	return <Item.Group divided>{site_lists}</Item.Group>;
}

function Info(){
  return (
    <Items>
      <PostWrapper>
        <BoardTitle />
        <GetItemGroup />
      </PostWrapper>
    </Items>
  );
}

export default Info
