import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: window.location.pathname.slice(1) };
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Segment style={{ backgroundColor: '#2c2e3e', margin: '0' }}>
        <Menu style={{ border: 'none' }} inverted pointing secondary>
          <Menu.Item
            as={Link}
            to="/"
            name="home"
            active={activeItem === 'home' || activeItem === ''}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/example"
            name="example"
            active={activeItem === 'example'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    );
  }
}

export default NavBar;
