import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);
  const dispatch = useDispatch()

  const handleWishlist=(item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
  }

  return (
    <div>
      <Row className='m-5'>
          {
          wishlistArray?.length>0?
          wishlistArray?.map((item)=>(<Col className='p-4 mb-5' sm={12} md={6} lg={4} xl={3}>
          <Card className='product-card' style={{ height:'400px', width: '100%',boxShadow:'0 4px 8px 0 grey,0 6px 20px 0 grey' }}>
          <Card.Img variant="top" src={item.thumbnail} style={{height:'200px'}}/>
          <Card.Body>
            <Card.Title>{item.title.slice(0,20)}</Card.Title>
            <Card.Text>
              <p>{item.description.slice(0,35)}...</p>
              <p className='fs-4 fw-bold'>Price:$ {item.price}</p>
            </Card.Text>
            <div className='d-flex justify-content-between align-items-center'>
              <Button onClick={()=>dispatch(removeFromWishlist(item.id))} variant="outline-primary"><i class="fa-solid fa-trash-can"></i></Button>
              <Button onClick={()=>handleWishlist(item)} variant="outline-success"><i class="fa-solid fa-cart-plus"></i></Button>
            </div>
          </Card.Body>
          </Card>
        </Col>))
            :<div style={{height:'90vh'}} className='d-flex justify-content-center align-items-center flex-column w-100'>
              <img src="https://cdn0.iconfinder.com/data/icons/shopping-and-e-commerce-98/512/58_Wishlist-1024.png" alt="Nothing to display" style={{width:'300px'}}/>
              <h2 className='mt-3 fw-bold'>Your Wishlist is Empty</h2>
              <Button variant='success' className='mt-3'><Link style={{color:'white',textDecoration:'none'}} to={'/'}>Got to home</Link></Button>
            </div>
          }
        </Row>
    </div>
  )
}

export default Wishlist