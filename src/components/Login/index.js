import './index.css'
import Cookies from 'js-cookie'
import {Component} from 'react'
import {Redirect} from 'react-router-dom'

class Login extends Component {
  state = {name: '', password: ''}

  onSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 1})
    history.replace('/')
  }

  submit = async event => {
    event.preventDefault()
    const {name, password} = this.state
    const details = {name, password}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(details),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccess(data.jwt_token)
    }
  }

  name = event => {
    this.setState({name: event.target.value})
  }

  pass = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {name, password} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect />
    }
    return (
      <div className="bg">
        <h1>Please Login</h1>
        <form onSubmit={this.submit}>
          <input value={name} onChange={this.name} type="text" />
          <input value={password} onChange={this.pass} type="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}
export default Login
