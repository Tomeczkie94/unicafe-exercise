import React, { useState } from 'react'
import Header from './Header.js';
import Button from './Button.js';
import Statistics from './Statistics.js';

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
      <Button handleClick={addGoodFeedback} text='Good' />
      <Button handleClick={addNeutralFeedback} text='Neutral' />
      <Button handleClick={addBadFeedback} text='Bad' />
      <Header text='Statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;
