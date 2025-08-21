const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  const part = props.part
  const exercise = props.exercise
  return (
    <p>
      {part} {exercise}
    </p>
  )
}

const Content = (props) => {
  const parts = props.parts
  const part1 = parts[0].name
  const exercises1 = parts[0].exercises
  const part2 = parts[1].name
  const exercises2 = parts[1].exercises
  const part3 = parts[2].name
  const exercises3 = parts[2].exercises
  
  return (
      <div>
      <Part part={part1} exercise={exercises1} />
      <Part part={part2} exercise={exercises2} />
      <Part part={part3} exercise={exercises3} />
    </div>
  )
}

const Total = (props) => {
  const exercises = props.parts.map(part => part.exercises)
  let res = 0
  for (let i = 0; i < 3; i++) {
    res += exercises[i]
  }
  return <p>Number of exercises {res}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content
        parts={course.parts}
      />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
