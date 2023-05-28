// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItemContainer, getTheAppItems, isActive} = props
  const {tabId, displayText} = tabItemContainer

  const getTheApp = () => {
    getTheAppItems(tabId)
  }
  const getTheClassName = isActive ? 'active-button' : 'normal-button'
  return (
    <li className="tab-items">
      <button type="button" className={getTheClassName} onClick={getTheApp}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
