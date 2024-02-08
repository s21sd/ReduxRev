import { useDispatch } from 'react-redux'
import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Displaycount from './components/Displaycount'
function App() {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch({ type: "Add" });
  }
  const handleDecrement = () => {
    dispatch({ type: "Sub" })
  }

  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold text-body-emphasis">Centered hero</h1>
      <div className="col-lg-6 mx-auto my-2">
        <Displaycount />
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center my-3">
          <button onClick={handleIncrement} type="button" className="btn btn-primary btn-lg px-4 gap-3">+1</button>
          <button onClick={handleDecrement} type="button" className="btn  btn-primary btn-lg px-4">-1</button>
        </div>
      </div>
    </div>
  )
}

export default App
