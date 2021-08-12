import React from 'react'
import { Statistic, Icon } from 'semantic-ui-react'
import './Statistic.css'

const StatisticData = ({data, dataNew}) => (
    <div className="StatisticGroup">
        <Statistic color='green'>
          <Statistic.Value>
            <Icon name='plus square'/><br/>{data?.TotalRecovered}
          </Statistic.Value>
        </Statistic>
        <p style={{textAlign:"center"}}>
        <Statistic horizontal size='small' color='green'>
          <Statistic.Value>
            <Icon name="angle up"/>{data?.TodayRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Statistic.Value>
        </Statistic>
        </p>
    </div>
);

export default StatisticData