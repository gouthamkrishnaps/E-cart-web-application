import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/usefetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

function Home() {
  const data = useFetch('https://dummyjson.com/products')
  console.log(data);

  const dispatch = useDispatch()
  return (
    <div>
        <Row className='m-5'>
          {
          data?.length>0?
          data?.map((item)=>(<Col className='p-4 mb-5' sm={12} md={6} lg={4} xl={3}>
          <Card className='product-card' style={{ width: '100%',boxShadow:'0 4px 8px 0 grey,0 6px 20px 0 grey' }}>
          <Card.Img variant="top" src={item.thumbnail} style={{height:'200px'}}/>
          <Card.Body>
            <Card.Title>{item.title.slice(0,20)}</Card.Title>
            <Card.Text>
              <p>{item.description.slice(0,35)}...</p>
              <p className='fs-4 fw-bold'>Price:$ {item.price}</p>
            </Card.Text>
            <div className=' d-flex justify-content-between align-items-center'>
              <Button onClick={()=>dispatch(addToWishlist(item))} variant="outline-primary"><i class="fa-solid fa-heart"></i></Button>
              <Button onClick={()=>dispatch(addToCart(item))} variant="outline-success"><i class="fa-solid fa-cart-plus"></i></Button>
            </div>
          </Card.Body>
          </Card>
        </Col>))
            :
            <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column w-100'>

              <div>
                <h1 className='fw-bold'><i class="fa-solid fa-spinner fa-spin-pulse fa-2"></i>  Loading.....</h1>
              </div>
            </div>
          }
        </Row>
    </div>
  )
}

export default Home