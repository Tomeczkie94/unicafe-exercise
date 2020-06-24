import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './index.css';

const Header = () => {
  return (
      <h1>Give Feedback</h1>
  )
}

const Button = () => {
  return (

      <button>Feedback Button</button>

  )
}

const App = () => {
  return (
    <div>
      <Header />
      <Button />
      <Button />
      <Button />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
