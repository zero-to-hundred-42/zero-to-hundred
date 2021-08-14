import React from "react";
import { Statistic, Icon } from "semantic-ui-react"
import "./Statistic.css"

const StatisticThird = ({ data, dataNew }) => (
	<div className="StatisticGroup">
	  <Statistic color="grey">
		<Statistic.Value>
		  <Icon name="minus" />
		  <br />
		  {data?.TotalDeath}
		</Statistic.Value>
	  </Statistic>
	  <p style={{ textAlign: "center" }}>
		<Statistic horizontal size="small" color="grey">
		  <Statistic.Value>
			<Icon name="angle up" />
			{data?.TodayDeath}
		  </Statistic.Value>
		</Statistic>
	  </p>
	</div>
  );

  export default StatisticThird;
