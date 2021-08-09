import React from 'react'
import {Card} from 'semantic-ui-react'
import Statistic from '../Statistic/Statistic'

const CardExampleCard = ({data, dataNew}) => (
	<Card>
		<Card.Content>
			<Card.Header>코로나 확진현황</Card.Header>
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