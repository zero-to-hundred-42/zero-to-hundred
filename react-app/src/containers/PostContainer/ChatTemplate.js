import React, { useState } from "react";
import ex_data from "../db/data.json";

/*
** ChatTemplate의 return 에서 MsgContent 태그에 들어갈 내용들 담는 컨포넌트 입니다.
*/
function MsgContent({ data }) {
	const result = data.map(
		(value) => {
			return (
				<tr key={value.md101_sn}>
					<td>{value.location_id}</td>
					<td>{value.location_name}</td>
					<td>{value.msg}</td>
				</tr>
			);
	});

	return (
		<tbody>
			{result}
		</tbody>
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

		const result = ex_data.location.map(
			(value) => {
				return (<tr key={value.num}>
					<td>
						<button onClick={onClick} value={value.name}>
							{value.name}
						</button>
					</td>
				</tr>)
		});
		return result
	}

	function see_list(data) {
		console.log("this_is_see_list");
		console.log(data);
		const result = data.map(
			(value) => {
				return (<tr key={value.num}>
					<td>
						<button onClick={onClick} value={value.name}>
							{value.name}
						</button>
					</td>
				</tr>)
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
			console.log("res :");
			console.log(result);
			if (e.target.value === "")
			{
				console.log("내용 없음");
				see_list(ex_data.location);
			}
			else if (result === undefined)
			{
				console.log("잘못된 내용");
				setLocacont(<tr><td>없는 지역입니다.</td></tr>);
			}
			else
			{
				console.log("내용 있음");
				see_list(result);
			}

	}

	return (
		<div
            style={{
            display : "grid",
            gridTemplateColumns : "1fr 1fr"
        }}>
			<div className="left">
				<table>
					<thead>
						<tr>
							<th>
								<input type="text" onChange={find_Location} />
							</th>
						</tr>
					</thead>
					<tbody>
						{loca_cont}
					</tbody>
				</table>
			</div>

			<div className="right">
				<table>
					<MsgContent data={data}/>
				</table>
			</div>
		</div>
	);
}

