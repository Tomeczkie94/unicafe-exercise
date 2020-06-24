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

  const [good, setGood] = useState({
    goodClicks: 0,
    points: 0
  })

  const [neutral, setNeutral] = useState(0)

  const [bad, setBad] = useState({
    badClicks: 0,
    points: 0
  })

  const allClicks = good.goodClicks + neutral + bad.badClicks

  const addGoodFeedback = () => {
    const goodFeedback = {
      goodClicks: good.goodClicks +1,
      points: good.points +1,
    }
    setGood(goodFeedback)
  }

  const addNeutralFeedback = (newFeedback) => {
    setNeutral(newFeedback)
  }

  const addBadFeedback = () => {
    const badFeedback = {
      badClicks: bad.badClicks +1,
      points: bad.points -1,
    }
    setBad(badFeedback)
  }



  // const averageScore = points/allClicks

  return (
    <div>
      <Header text="Give feedback" />
      <Button handleClick= {addGoodFeedback} text="Good" />
      <Button handleClick= {() => addNeutralFeedback(neutral + 1)} text="Neutral" />
      <Button handleClick= {addBadFeedback} text="Bad" />

      <Header text="Statistics" />
      <Display text="Good" /> {good.goodClicks}
      <Display text="Neutral" /> {neutral}
      <Display text="Bad" /> {bad.badClicks}
      <Display text="All" /> {allClicks}
      <Display text="Average" />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
)
