import './App.css'
import {Component} from 'react'

// These are the list used in the application. You can move them to any component needed.
// eslint-disable-next-line
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {itemDetails: [], userInput: ''}

  componentDidMount = () => {
    this.setState({itemDetails: initialHistoryList})
  }

  userInput = event => {
    this.setState({userInput: event.target.value})
  }

  filteredList = () => {
    const {itemDetails, userInput} = this.state
    const updatedList = itemDetails.filter(eachOne => {
      if (eachOne.title.toLowerCase().includes(userInput.toLowerCase())) {
        return eachOne
      }
      return null
    })
    return updatedList
  }

  deleteItem = id => {
    const {itemDetails} = this.state
    const deletedList = itemDetails.filter(eachOne => eachOne.id !== id)
    this.setState({itemDetails: deletedList})
  }

  render() {
    const updatedList = this.filteredList()
    console.log(updatedList)
    return (
      <div className="app-container">
        <div className="heading-container">
          <div className="main-logo">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="domain-logo-sizing"
            />
          </div>
          <div className="outside">
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search-log"
                className="search-logo-styling"
              />
              <input
                type="search"
                className="search-styling"
                onChange={this.userInput}
                placeholder="search history"
              />
            </div>
          </div>
        </div>

        {updatedList.length === 0 && (
          <div className="empty-container">
            <p className="empty-para">There is no history to show</p>
          </div>
        )}

        <ul className="unOrdered-list">
          {updatedList.map(eachItem => {
            const buttonClicked = () => {
              this.deleteItem(eachItem.id)
            }
            return (
              <li className="items-container" key={eachItem.id}>
                <div className="time-container">
                  <p className="time-para">{eachItem.timeAccessed}</p>
                </div>

                <div className="app-details">
                  <img
                    src={eachItem.logoUrl}
                    alt="domain logo"
                    className="icon-size"
                  />
                  <p className="site-name">{eachItem.title}</p>
                  <p className="url-name">{eachItem.domainUrl}</p>
                </div>

                <div className="button-container">
                  <button
                    type="button"
                    className="button-styling"
                    onClick={buttonClicked}
                    data-testid="delete"
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                      alt="delete"
                    />
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default App
