import './index.css'

const BrowserHistory = props => {
  const {historyItem, deleteUser} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const onDeleteButton = () => {
    deleteUser(id)
  }
  return (
    <li className="container">
      <div className="card-containers">
        <p className="time-accessed">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="image-url" />
        <p className="domain-url">{domainUrl}</p>

        <p className="title">{title}</p>

        <div className="button-container">
          <button
            className="image-container"
            type="button"
            onClick={onDeleteButton}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              className="img-button"
              alt="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default BrowserHistory
