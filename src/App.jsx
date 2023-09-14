import { Component } from 'react'
import './App.css'
import { UserClass, UserFunction, UserChildren } from '../components'

const users = [
  {name: 'Mark', years:'35'},
  {name: 'Anne', years:'30'},
  {name: 'John', years:'25'},
] 

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       users: [
        {name: 'Mark', years:35},
        {name: 'Anne', years:30},
        {name: 'John', years:25},
       ],
       tekst: "nešto random"
    }
  }

  uvecajGodine = () => {
    const newUsers = this.state.users.map (user => {
      return {...user, years: user.years + 1 }
    })
    this.setState({users: newUsers})
  }

  render(){
    const {users, tekst} = this.state
    return (
        <>
          <h1>State</h1>
          < UserClass name={users[0].name} years={users[0].years}/>
          < UserFunction name={users[1].name} years={users[1].years}/>
          < UserChildren name={users[2].name} years={users[2].years}>
            
          <p>{tekst}</p>
          </UserChildren>
          <button onClick={this.uvecajGodine}> Uvećaj godine</button>
        </>
    )
  }
  
}

export default App