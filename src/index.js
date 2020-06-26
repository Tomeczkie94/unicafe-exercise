import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import Header from './Header.js';
import Button from './Button.js'
import './index.css';





const Statistic  = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

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

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGoodFeedback = () => {
    setGood(good + 1)
  }

  const addNeutralFeedback = () => {
    setNeutral(neutral + 1)
  }

  const addBadFeedback = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header text='Give feedback' />
      <Button handleClick= {addGoodFeedback} text='Good' />
      <Button handleClick= {addNeutralFeedback} text='Neutral' />
      <Button handleClick= {addBadFeedback} text='Bad' />
      <Header text='Statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
