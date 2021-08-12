import React from 'react'
import { Statistic, Icon } from 'semantic-ui-react'
import './Statistic.css'

const StatisticData = ({data, dataNew}) => (
    <div className="StatisticGroup">
        <Statistic color='red'>
          <Statistic.Value>
            <Icon name='users'/><br/>{data?.TotalCase}
          </Statistic.Value>
        </Statistic>
        <p style={{textAlign:"center"}}>
        <Statistic horizontal size='small' color='red'>
          <Statistic.Value>
            <Icon name="angle up"/>{dataNew?.korea.newCase}</Statistic.Value>
          <Statistic.Label><Icon name='home' />{dataNew?.korea.newCcase}<br/><Icon name='plane'/>{dataNew?.korea.newFcase}</Statistic.Label>
        </Statistic>
        </p>
    </div>
);

export default StatisticData