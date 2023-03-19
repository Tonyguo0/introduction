import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import reactLogo from '../assets/react.svg'

const BasicNbar = () => {
  return (
    <Navbar
      bg='dark'
      variant='dark'
      expand='lg'>
      <Container>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#exp'>EXP</Nav.Link>
            <Nav.Link href='#blog'>Blog</Nav.Link>
            <Nav.Link href='#projects'>Projects</Nav.Link>
            <NavDropdown
              title='Extra'
              id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Thoughts</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Games</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Randoms</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>Sample</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
           
            <a
              href='https://vitejs.dev'
              target='_blank'>
              <img
                src='/vite.svg'
                className='logo'
                alt='Vite logo'
              />
            </a>
            <a
              href='https://reactjs.org'
              target='_blank'>
              <img
                src={reactLogo}
                className='logo react'
                alt='React logo'
              />
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default BasicNbar
