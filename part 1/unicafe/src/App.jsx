import { useState } from "react"

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>
}

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Stadistics = ({ stats }) => {
  const { good, neutral, bad } = stats
  const all = good + neutral + bad

  if (all == 0) {
    return (
      <div>
        <h1>Stadistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  let average = 0
  let positive = 0

  if (all != 0) {
    average = (good - bad) / all
    positive = (good * 100) / all
  }

  return (
    <div>
      <h1>Stadistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average.toFixed(2)} />
          <StatisticLine text="positive" value={positive.toFixed(2)} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button text="Good" onClick={() => setGood(good + 1)} />
        <Button text="Neutral" onClick={() => setNeutral(neutral + 1)} />
        <Button text="Bad" onClick={() => setBad(bad + 1)} />
      </div>

      <Stadistics stats={{ good, neutral, bad }} />
    </div>
  )
}

export default App
