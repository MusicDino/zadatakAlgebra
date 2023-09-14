import { Component } from 'react'
import './App.css'
import { UserClass, UserFunction, UserChildren } from '../components'

const users = [
  {name: 'Marc', years:'35'},
  {name: 'Anne', years:'30'},
  {name: 'John', years:'25'},
] 

class App extends Component {
  render(){
    return (
        <>
          <h1>State</h1>
          < UserClass name={users[0].name} years={users[0].years}/>
          < UserFunction name={users[1].name} years={users[1].years}/>
          < UserChildren name={users[2].name} years={users[2].years}>
          
          </UserChildren>

        </>
    )
  }
  
}

export default App