import React from 'react';
import Statistic from './Statistic.js'

const Statistics = (props) => {

  if(props.good + props.neutral + props.bad !== 0) {

    return (
      <div>
        <table>
          <tbody>
            <Statistic  text="Good" value= {props.good}/>
            <Statistic  text="Neutral"value= {props.neutral}/>
            <Statistic  text="Bad" value= {props.bad}/>
            <Statistic  text="All" value= {props.good + props.neutral + props.bad} />
            <Statistic  text="Average" value= {(props.good * 1) + (props.bad * -1)/(props.good + props.neutral + props.bad)} />
            <Statistic text="Positive" value= {(props.good/(props.good + props.neutral + props.bad)) * 100 + '%'} />
          </tbody>
        </table>
      </div>
    )
  }
  else {
    return (
      <p>No feedback given</p>
    )
  }
}

export default Statistics;
