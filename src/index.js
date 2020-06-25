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

const Display = (props) => {
  return (
    <div>
      <p>{props.text}</p><p>{props.value}</p>
    </div>
  )
}

const Statistics = (props) => {
  return (
    <div>
      <Display text="Good" value= {props.good}/>
      <Display text="Neutral"value= {props.neutral}/>
      <Display text="Bad" value= {props.bad}/>
      <Display text="All" value= {props.good + props.neutral + props.bad} />
      <Display text="Average" value= {(props.good * 1) + (props.bad * -1)/(props.good + props.neutral + props.bad)} />
    </div>
  )
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

  // const average = points/all;

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
