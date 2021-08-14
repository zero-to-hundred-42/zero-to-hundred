import React from 'react';
import { Card } from 'semantic-ui-react';
import { CardFirst, CardSecond, CardThird } from '../../components';

const CardGroup = ({ data, dataNew }) => (
  <Card.Group centered itemsPerRow={3}>
    <CardFirst data={data} dataNew={dataNew} />
    <CardSecond data={data} dataNew={dataNew} />
    <CardThird data={data} dataNew={dataNew} />
  </Card.Group>
);

export default CardGroup;
