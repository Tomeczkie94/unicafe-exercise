import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './index.css';

const Header = (props) => {
  return (
      <h1>{props.text}</h1>
  )
}

const Button = (props) =>
  (
    <button onClick={props.handleClick}>{props.text}</button>
  )

const Statistic  = (props) => {
  return (
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )
}

const Statistics = (props) => {

  if(props.good > 0 || props.neutral > 0 || props.bad > 0) {

    return (
      <div>
        <Statistic  text="Good" value= {props.good}/>
        <Statistic  text="Neutral"value= {props.neutral}/>
        <Statistic  text="Bad" value= {props.bad}/>
        <Statistic  text="All" value= {props.good + props.neutral + props.bad} />
        <Statistic  text="Average" value= {(props.good * 1) + (props.bad * -1)/(props.good + props.neutral + props.bad)} />
        <p>Positive {(props.good/(props.good + props.neutral + props.bad)) * 100}% </p>
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
