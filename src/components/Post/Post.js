import React from 'react';
import './Post.css';
import { Table } from 'semantic-ui-react';
// import { Table } from '@material-ui/core';

const Post = ({data, dataNew}) => (
	<div className="Post">
		{data?.TotalCase}
		<h1 classNmae="h1">국내발생현황</h1>
		<hr style={{width:"20%", align:"center"}}/>
		<Table className="table" border="1px" aria-label="simple table">
			<th class="center aligned" colSpan="4">
				확진 환자
			</th>
			<th class="center aligned" colSpan="2">
				격리 해제
			</th>
			<th class="center aligned" colSpan="2">
				격리중
			</th><th class="center aligned" colSpan="2">
				사망
			</th>
			<tr>
				<td class="center aligned" rowSpan="2">
					누적
				</td>
				<td class="center aligned" colSpan="3">
					전일대비
				</td>
				<td class="center aligned" rowSpan="2">
					누적
				</td>
				<td class="center aligned" rowSpan="2">
					전일대비
				</td>
				<td class="center aligned" rowSpan="2">
					누적
				</td>
				<td class="center aligned" rowSpan="2">
					전일대비
				</td>
				<td class="center aligned" rowSpan="2">
					누적
				</td>
				<td class="center aligned" rowSpan="2">
					전일대비
				</td>
			</tr>
			<tr>
				<td class="center aligned">
					소계
				</td>
				<td class="center aligned" >
					국내발생
				</td>
				<td class="center aligned" >
					해외발생
				</td>
			</tr>
			<tr>
				<td class="center aligned">
					{data?.TotalCase}
				</td>
				<td class="center aligned redfont">
					+{dataNew?.korea.newCase}
				</td>
				<td class="center aligned redfont">
					{dataNew?.korea.newCcase}
				</td>
				<td class="center aligned redfont">
					{dataNew?.korea.newFcase}
				</td>
				<td class="center aligned">
					{data?.TotalRecovered}
				</td>
				<td class="center aligned redfont">
					+{data?.TodayRecovered}
				</td>
				<td class="center aligned">
					{data?.NowCase}
				</td>
				<td class="center aligned redfont">
					+{data?.TotalCaseBefore}
				</td>
				<td class="center aligned">
					{data?.TotalDeath}
				</td>
				<td class="center aligned redfont">
					+{data?.TodayDeath}
				</td>
			</tr>
		</Table>
	</div>
);

export default Post;