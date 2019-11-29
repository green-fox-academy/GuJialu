import React from 'react';
import Bar from '../Bar/Bar';
import P from '../P/P';

function GraphBar({ labelsAndLengthes }) {

  const barList = labelsAndLengthes.map((labelAndLength, index) =>
    <div key={index}>
      <P>{labelAndLength.label}</P>
      <Bar length={labelAndLength.length} />
    </div>
  )

  return (
    <div className="GraphBar">
      {barList}
    </div>
  );
}

export default GraphBar;
