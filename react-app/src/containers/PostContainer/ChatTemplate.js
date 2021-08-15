import React, { useState } from "react";
import ex_data from "../db/data.json";
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
// import { Button, Card} from 'react-bootstrap';
import { Input, Comment, Header, Button } from 'semantic-ui-react'

/*
** ChatTemplate의 return 에서 MsgContent 태그에 들어갈 내용들 담는 컨포넌트 입니다.
*/
function MsgContent({ data }) {
	let i = 0;
	const result = data.map(
		(value) => {
			if (i > 20)
				return ;
			i++;
			return (
				<Comment key={value.md101_sn} style={{marginBottom : "2em"}}>
					<Comment.Content>
						<Comment.Author>{value.create_date}</Comment.Author>
						<Comment.Text>{value.msg}</Comment.Text>
					</Comment.Content>
				</Comment>
			);
	});

	return (
		<Comment.Group size='large'>
			<Header as='h3' dividing>
				{data[0].location_name}
			</Header>
			{result}
		</Comment.Group>
	);
}


export default function ChatTemplate() {
	const [loca_cont, setLocacont] = useState(see_all_list());
	const [data, setData] = useState([
		{
			"create_date": "",
			"id" : "",
			"location_id": "",
			"location_name": "",
			"md101_sn": "",
			"msg": "왼쪽 검색창에 다음과 같이 입력하세요 ex) [서울 전체] or [서울 금천구]",
			"send_platform": ""
		}
	]);

	/*
	location sort 해보려고 하는데 미완 하고 다시 푸쉬할게요
var ret = ex_data.data.map( (data) => {
	const res = {"num": data.location_id, "name" : data.location_name}
	return res;
});

const arr_ret = ret.sort(function(a, b) {
	return a.num - b.num;
})

const set = new Set(arr_ret);
const uniqueArr = [...set];

console.log("ret :");
console.log(uniqueArr);

*/

	/*
	Get_API 함수는 API정보를 땡겨서 db의 data.json에 정보를 넣어줌니다. 15초 단위로 setInterval 합니다
	let num = 1;
	setInterval(()=> {
		Get_API(num);
		num += 1;
	},1500);
	*/
	
	
	/*
	** tbody 안의 {loca_cont} 에 들어갈 태그들을 담는 함수입니다.
	*/
	function see_all_list() {

		const onClick = (e) => {
			const result = ex_data.data.filter((data) => data.location_name === e.currentTarget.value);
			setData(result);
		}

		let i = 0;
		const result = ex_data.location.map(
			(value) => {
				if (i > 20)
					return ;
				i++;
				return (
						<div key={value.num} className="d-grid gap-2">
							<Button variant="outline-secondary" size="sm" onClick={onClick} value={value.name}>
								{value.name}
							</Button>{' '}
						</div>
				)
		});
		return result
	}

	function see_list(data) {
		const result = data.map(
			(value) => {
				return (
					<div key={value.num} className="d-grid gap-2">
						<Button variant="outline-secondary" size="sm" onClick={onClick} value={value.name}>
							{value.name}
						</Button>{' '}
					</div>
				)
		});
		setLocacont(result);
	}


	/*
	** input 태그에 값을 검색 후 나오는 버튼을 클릭했을 때
	** API에서 해당 값을 찾아 가져와주는 클릭 이벤트 함수입니다.
	*/

	const onClick = (e) => {
		/* 
		fetch(`http://localhost:3001/data?location_name=${e.currentTarget.value}`)
		.then((first) => first.json())
		.then((last) => {
			console.log("test");
			console.log(last);
			setData(last);
		});
		*/
		const result = ex_data.data.filter((data) => data.location_name === e.currentTarget.value);
		setData(result);
	}


	/*
	** <input type="text" onChange={find_Location} /> 태그에 입력 되는 값들을 가져와서
	** data.json의 location 에 있는 내용과 비교합니다. 비교해서 있으면 띄워주고 없으면 다른 값들을 띄워줍니다.
	*/

	function find_Location(e) {
		var search_this = e.target.value;
		/*
		** rest-api 사용 시 마지막 then에 값을 넣어주면 됩니다.
		fetch(`http://localhost:3001/location`)
		.then((res) => {
			if (res.ok) return res.json();
		})
		.then((data) => { });
		*/

			const result = ex_data.location.filter((odata) => {
				if (odata.name.indexOf(search_this) > -1)
					return odata.name;
				return 0;
			});
			if (e.target.value === "")
			{
				see_list(ex_data.location);
			}
			else if (result === undefined)
			{
				setLocacont(<tr><td>없는 지역입니다.</td></tr>);
			}
			else
			{
				see_list(result);
			}

	}

	return (
		<div  style={{
			backgroundColor : "white",
			border: "1px outset #d4d4d5",
			borderRadius : "10px",
			display : "flex",
			margin : "20px 0 20px 0"
			}}>
			<div style={{padding : "0 1.5em 1.5em 1.5em", marginTop : "1.5em"}}>
				<Input type="tet"x onChange={find_Location} style={{height : "2em", marginBottom : "20px"}}/>
				{loca_cont}
			</div>
			<div style={{borderLeft:"1px outset #d4d4d5", padding : "0 1.5em 1.5em 1.5em", marginTop : "1.5em"}}>
					<MsgContent data={data}/>
			</div>
		</div>
	);
}

