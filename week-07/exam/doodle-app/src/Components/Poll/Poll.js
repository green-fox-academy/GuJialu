import React, { useState, useEffect } from 'react';
import FormOptions from '../generic/FormOptions/FromOptions';
import GraphBar from '../generic/GraphBar/GraphBar';
import H1 from '../generic/H1/H1';
import Panel from '../generic/Panel/Panel';


function Poll({ name }) {

  const [options, setOptions] = useState([]);
  const [question, setQuestion] = useState('');
  const [voted, setVoted] = useState(false);

  useEffect(() => {
    console.log('onmount');
    fetch('/api/poll')
      .then((res => { console.log(res); return res.json(); }))
      .then((resObj) => {
        console.log(resObj);
        setOptions(resObj.options);
        setQuestion(resObj.question);
      });
  }, [])

  function vote(id) {
    fetch(`/api/vote/${id}`, {
      method: 'post',
    })
      .then((res => { console.log(res); return res.json(); }))
      .then((resObj) => {
        console.log(resObj);
        setOptions(resObj.options);
        setQuestion(resObj.question);
        setVoted(true);
        console.log('voted======');
      });
  }

  let totalVotes = 0;
  for (let option of options) {
    totalVotes += option.votes;
  }
  const labelsAndLengthes = options.map((option) => ({
    label: `${option.name}: ${option.votes} votes`,
    length: option.votes / totalVotes * 100
  }))

  return (
    <Panel>
      <H1>{question}</H1>
      {
        voted ?
          <GraphBar labelsAndLengthes={labelsAndLengthes} />
          :
          <FormOptions
            options={options}
            onSubmit={vote}
          />
      }
    </Panel>
  );

}

export default Poll;
