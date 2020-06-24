import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './index.css';

const Header = () => {
  return (
      <h1>Give Feedback</h1>
  )
}

const Button = (props) =>
  (
    <button onClick={props.handleClick}>{props.text}</button>
  )


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
      <Header />
      <Button handleClick= {() => addGoodFeedback(good + 1)} text='Good' />
      <Button handleClick= {() => addNeutralFeedback(neutral + 1)} text='Neutral' />
      <Button handleClick= {() => addBadFeedback(bad + 1)} text='Bad' />

      <Header />
      // This header will state: Statistics
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
