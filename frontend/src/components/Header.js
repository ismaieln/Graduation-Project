import React from 'react'
import { Route, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'
import useEventGaTracker from '../hooks/useEventGaTracker'

const Header = () => {
  let location = useLocation()

  const EventGaTracker = useEventGaTracker('Plan CTA')
  const userHistoryRoutes = useSelector((state) => state.userHistoryRoutes)
  const { routesHistory } = userHistoryRoutes
  const signupOriginPath = routesHistory[routesHistory.length - 1]

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img
                src='/logo.png'
                width='130'
                className='d-inline-block align-top'
                alt='Bundly logo'
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Route render={({ history }) => <SearchBox history={history} />} />

            <Nav
              activeKey={location.pathname}
              className='ml-auto'
              onClick={() => {
                EventGaTracker('Plan CTA clicked', signupOriginPath)
              }}
            >
              {userInfo && (
                <LinkContainer to='/plan'>
                  <Nav.Link>
                    <i className='fas fa-calculator'></i> Select Plan
                  </Nav.Link>
                </LinkContainer>
              )}
              <LinkContainer to='/faq'>
                <Nav.Link>FAQ</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown title='Account' id='username'>
                  <NavDropdown.Item disabled>{userInfo.name}</NavDropdown.Item>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/subscriptions'>
                    <NavDropdown.Item>Subscriptions</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
                  <LinkContainer to='/login'>
                    <Nav.Link>
                      <i className='fas fa-user'></i> Sign In
                    </Nav.Link>
                  </LinkContainer>
                </>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
