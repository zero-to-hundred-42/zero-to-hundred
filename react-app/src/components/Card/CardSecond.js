import React from 'react'
import {Card} from 'semantic-ui-react'
import StatisticSecond from '../Statistic/StatisticSecond'
import './Card.css'

const CardSecond = ({data, dataNew}) => (
	<Card>
		<Card.Content>
			<Card.Header>μμΉμ</Card.Header>
		</Card.Content>
		<Card.Content>
			<StatisticSecond
				data={data}
				dataNew={dataNew}
			/>
		</Card.Content>
	</Card>
)

export default CardSecond
