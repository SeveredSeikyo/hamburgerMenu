import {withRouter, Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {BsInfoCircleFill} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'
import 'reactjs-popup/dist/index.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import './index.css'

const Header = () => (
  <div>
    <div className="header-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="trigger-button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="hamburger-icon" />
          </button>
        }
      >
        {close => (
          <div className="popup-container">
            <div>
              <button
                type="button"
                className="close-button"
                onClick={() => close()}
                data-testid="closeButton"
              >
                <IoMdClose className="close-icon" />
              </button>
            </div>
            <div>
              <ul>
                <li>
                  <div className="flex-container">
                    <AiFillHome className="icon" />
                    <Link to="/" onClick={() => close()}>
                      <h1>Home</h1>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex-container">
                    <BsInfoCircleFill className="icon" />
                    <Link to="/about" onClick={() => close()}>
                      <h1>About</h1>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)
