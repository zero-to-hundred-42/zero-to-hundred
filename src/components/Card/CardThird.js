import React from 'react'
import {Card} from 'semantic-ui-react'
import Statistic from '../Statistic/StatisticThird'
import './Card.css'

const CardExampleCard = ({data, dataNew}) => (
	<Card>
		<Card.Content>
			<Card.Header>사망</Card.Header>
		</Card.Content>
		<Card.Content>
			<Statistic
				data={data}
				dataNew={dataNew}
			/>
		</Card.Content>
	</Card>
)

export default CardExampleCard