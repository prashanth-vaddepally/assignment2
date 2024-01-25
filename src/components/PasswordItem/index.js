import './index.css'

const PasswordItem = props => {
  const {eachList} = props
  const {websiteName, userName, password} = eachList

  return (
    <li className="the-box">
      <h1>{websiteName[0]}</h1>
      <div className="three-details">
        <h2>{websiteName}</h2>
        <p>{userName}</p>
        <p>{password}</p>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
        alt="delete"
        className="delete-button"
      />
    </li>
  )
}
export default PasswordItem
