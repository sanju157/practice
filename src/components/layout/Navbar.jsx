import React from 'react'
import { Button, Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import useAuthenticated from '@hooks/useAuthenticated';
import Logo from '@assets/Logo.png'

// features 
import { logoutUser } from '@features/authSlice';

export default function NavBar() {
    const path = window.location.pathname
    const isAuthenticated = useAuthenticated()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.auth.user)

    const navs = [
        {
            path: '/',
            content: "Home"
        },
        {
            path: '/products',
            content: "Products"
        }
    ]

    const handleLogout = () => {
      dispatch(logoutUser())
    }
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/">
                <div>
                    <img src={Logo} alt="Logo" />
                </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between'>
                <Nav className="me-auto">
                  {
                      navs.map((item, index) => (
                          <Nav.Link key={`${item?.path}-${index}`} href={item?.path} className={`${item?.path === path ? 'active' : ''} `}>{ item?.content }</Nav.Link>
                      ))
                  }
                </Nav>
                <Navbar.Text>
                    {/* <Button>
                        { isAuthenticated ? "Logout" : "Login" }
                    </Button> */}
                        {isAuthenticated && user && (
                          <Dropdown align="end">
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                              {user.username || 'Profile'}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              {/* <Dropdown.Header>Signed in as <strong>{user.username}</strong></Dropdown.Header>
                              <Dropdown.Divider /> */}
                              <Dropdown.Item 
                              onClick={handleLogout}
                              >Logout</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        )}
                        {
                            !isAuthenticated && <Link to="/login">Login</Link>
                        }
                </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  )
}
