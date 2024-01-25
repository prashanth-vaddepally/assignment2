import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'

import './index.css'

const initialList = []

class ThePage extends Component {
  state = {
    passwordsList: initialList,
    websiteName: '',
    userName: '',
    password: '',
  }

  onAddPassword = event => {
    event.preventDefault()
    const {websiteName, userName, password} = this.state
    const newPasswordDetails = {
      id: uuidv4(),
      websiteName,
      userName,
      password,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPasswordDetails],
      websiteName: '',
      userName: '',
      password: '',
    }))
  }

  onChangeWebsite = event => {
    this.setState({
      websiteName: event.target.value,
    })
  }

  onChangeUser = event => {
    this.setState({userName: event.target.value})
  }

  onChangePass = event => {
    this.setState({password: event.target.value})
  }

  render() {
    return (
      <div className="the-page">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo-size"
        />
        <div className="first-box">
          <form className="first-little-box" onSubmit={this.onAddPassword}>
            <h1 className="heading">Add New Password</h1>
            <div className="for-inputs">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="search-logo"
              />
              <input
                type="text"
                className="search-bar"
                placeholder="Enter Website"
                onChange={this.onChangeWebsite}
              />
            </div>
            <div className="for-inputs">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="search-logo"
              />
              <input
                type="text"
                className="search-bar"
                placeholder="Enter Username"
                onChange={this.onChangeUser}
              />
            </div>
            <div className="for-inputs">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="search-logo"
              />
              <input
                type="password"
                className="search-bar"
                placeholder="Enter Password"
                onChange={this.onChangePass}
              />
            </div>
            <button type="submit" className="add-button">
              Add
            </button>
          </form>

          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="image-setting"
          />
        </div>

        <div className="second-box">
          <div className="second-first-part">
            <h1 className="your-passwords">Your Passwords</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="down-search-logo"
            />
            <input type="search" placeholder="Search" className="down-search" />
          </div>
          <hr className="horizontal-line" />
          <ul>
            {passwordsList.map(eachList => (
              <PasswordItem key={eachList.id} eachList={eachList} />
            ))}
          </ul>
          <div className="for-checkbox">
            <input type="checkbox" className="check-box" id="checkk" />
            <label className="show-passes" htmlFor="checkk">
              Show Passwords
            </label>
          </div>
        </div>
      </div>
    )
  }
}
export default ThePage
