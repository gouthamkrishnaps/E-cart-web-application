import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';


function Header() {
  //to access state useselelcter hook is used
  const wishlist = useSelector((state)=>state.wishlistReducer) //here the state represent store
  //console.log(wishlist);

  const cart =  useSelector((state)=>state.cartReducer)
  console.log(cart);
  return (
    <div className='text-light'  style={{marginBottom:'100px'}}>
        <Navbar fixed="top" expand="lg" style={{backgroundColor:'#022b42'}} >
            <Container>
            <Navbar.Brand >
              <img src="car-logo.png" alt="" style={{height:'40px',width:'40px'}}/>
              <Link style={{color:'red',textDecoration:'none',fontSize:'30px',fontWeight:'bold'}} to={'/'}><span style={{color:'white'}}> E</span>-Cart</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto gap-2">
                <Nav.Link className='btn border rounded '>
                  <Link style={{color:'white',textDecoration:'none',fontSize:'20px'}} to={'/wishlist'}><i class="fa-solid fa-heart" style={{color:'red'}}></i> Wishlist <Badge pill bg="primary">{wishlist.length}</Badge></Link>
                </Nav.Link>
                <Nav.Link  className='btn border rounded '>
                  <Link style={{color:'white',textDecoration:'none',fontSize:'20px'}} to={'/cart'}><i class="fa-solid fa-cart-shopping" style={{color:'yellow'}}> </i> Cart  <Badge pill bg="primary">{cart.length}</Badge></Link>
                  </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
  </div>
  )
}

export default Header