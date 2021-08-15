import React from 'react'
import {Card} from 'semantic-ui-react'
import StatisticFirst from '../Statistic/StatisticFirst'
import './Card.css'

const CardFirst = ({data, dataNew}) => (
	<Card>
		<Card.Content>
			<Card.Header>확진자</Card.Header>
		</Card.Content>
		<Card.Content>
			<StatisticFirst
				data={data}
				dataNew={dataNew}
			/>
		</Card.Content>
	</Card>
)

export default CardFirst
