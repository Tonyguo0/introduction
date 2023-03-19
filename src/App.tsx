import { useState } from 'react'
import BasicNbar from './components/navbar'
import './App.css'
import Container from 'react-bootstrap/esm/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <BasicNbar />
      <Container>
        <div>
          <h1>My Name is Tony Guo and this is my portfolio website</h1>
        </div>

        <div className='card'>
          <button
            className='btn btn-primary'
            onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </Container>
    </div>
  )
}

export default App
