export default async function Get_API(num) {
	async function is_in_data(md101_sn) {
		const res = await fetch(
			`http://localhost:3001/data?md101_sn=${md101_sn}`
		);
		const is_ok = res.ok;
		if (!is_ok) return 1;
		const json = await res.json();
		console.log(`id : ${md101_sn}, indata : ${json.length}`);
		return json.length;
	}

	function send_Data(row) {
		row.forEach((data) => {
			is_in_data(data.md101_sn).then((res) => {
				if (res === 0) {
					fetch(`http://localhost:3001/data`, {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(data),
					}).then((res) => {
						if (res.ok) {
							console.log("send ok!");
						}
					});
				}
			});
		});
	}

	const service_key =
		"SzNMfAEtQVOJgAxR%2BOZVYREQ6aHzQhlkPkuQFy9hNmrR07Lwe5%2BB6YTy7u7a4jAsyD2xQJ9UQAqAg0xjnok3BA%3D%3D";
	const complete_url = `http://apis.data.go.kr/1741000/DisasterMsg3/getDisasterMsg1List?ServiceKey=${service_key}&pageNo=${num}&numOfRows=10&type=json`;

	fetch(complete_url)
		.then((res) => {
			if (res.ok) return res.json();
		})
		.then((data) => {
			console.log(data);
			send_Data(data.DisasterMsg[1].row);
		});
}
