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
    <p>{props.text}</p>
  )
}
const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addGoodFeedback = (newFeedback) => {
    setGood(newFeedback)
  }

  const addNeutralFeedback = (newFeedback) => {
    setNeutral(newFeedback)
  }

  const addBadFeedback = (newFeedback) => {
    setBad(newFeedback)
  }

  return (
    <div>
      <Header text='Give feedback' />
      <Button handleClick= {() => addGoodFeedback(good + 1)} text='Good' />
      <Button handleClick= {() => addNeutralFeedback(neutral + 1)} text='Neutral' />
      <Button handleClick= {() => addBadFeedback(bad + 1)} text='Bad' />

      <Header text='Statistics' />
      <Display text="Good"/>
      <Display text="Neutral"/>
      <Display text="Bad"/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
