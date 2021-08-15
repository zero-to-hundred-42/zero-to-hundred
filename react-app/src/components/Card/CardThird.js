import React from 'react'
import {Card} from 'semantic-ui-react'
import StatisticThird from '../Statistic/StatisticThird'

const CardThird= ({data, dataNew}) => (
	<Card>
		<Card.Content>
			<Card.Header>사망</Card.Header>
		</Card.Content>
		<Card.Content>
			<StatisticThird
				data={data}
				dataNew={dataNew}
			/>
		</Card.Content>
	</Card>
)

export default CardThird
