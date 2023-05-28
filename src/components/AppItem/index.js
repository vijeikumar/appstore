// Write your code here
import './index.css'

const AppItem = props => {
  const {appItemsContainer} = props
  const {appName, imageUrl} = appItemsContainer

  return (
    <li className="app-container">
      <button className="button" type="button">
        <img src={imageUrl} className="img" alt={appName} />
        <p className="app-name">{appName}</p>
      </button>
    </li>
  )
}
export default AppItem
