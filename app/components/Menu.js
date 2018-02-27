import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '6px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    textAlign: 'center',
    overflow: 'hidden',
    background: 'rgba(0,0,0,0)',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMenuWrap: {
    width: '100%'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

export default class BurgerMenu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false})
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu () {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  render () {
    return (
      <div>
        <Menu
          styles={ styles }
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
          customBurgerIcon={ <img src="./img/burger.svg" /> }
          customCrossIcon={ false }
        >
          <a onClick={() => this.closeMenu()}>Home</a>
          <a onClick={() => this.closeMenu()}>About</a>
          <a onClick={() => this.closeMenu()}>Contact</a>
          <a onClick={() => this.closeMenu()}>Settings</a>
        </Menu>

      </div>
    )
  }
}
