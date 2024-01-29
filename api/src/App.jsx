import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [user, setUser] = useState("")
  const [password, setPassword] = useState("")

  const student = async () => {
    let result = await axios.post("http://localhost:4000/data/register", {
      UserName: user,
      password: password
    })
    result = result.data
    console.log(result);  
}
   return (
    <>
      <div className="container">
        <form className='' >
          <input type="text" placeholder='Username' value={user} onChange={(e) => setUser(e.target.value)} />
          <br />
          <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <div>
            <button onClick={(e) => {
            e.preventDefault()
            student()
            }}
            type='submit'>Submit</button>
          </div>
        </form>
      </div>


    </>
  )
}

export default App
