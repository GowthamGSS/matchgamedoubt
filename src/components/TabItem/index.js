const TabItem = props => {
  const {ele, TabClick} = props
  const {displayText, tabId} = ele

  const clickTab = () => {
    TabClick(tabId)
  }

  return (
    <li>
      <button type="button" onClick={clickTab}>
        <p>{displayText}</p>
      </button>
    </li>
  )
}
export default TabItem
