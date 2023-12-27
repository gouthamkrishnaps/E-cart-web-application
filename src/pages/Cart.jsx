import React from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../redux/slices/cartSlice';
import { Card, Col, Row, Table } from 'react-bootstrap'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart() {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    toast.success("Your order is Succesfully placed")
  }
  const handleShow = () => setShow(true);

  const cartArray = useSelector((state)=>state.cartReducer)
  console.log(cartArray);

  const Producttotal=[]
  
  const disptach = useDispatch()
 
  const cart =  useSelector((state)=>state.cartReducer)
  return (
    <div className='d-flex justify-content-center align-items-center w-100'>

        {cartArray?.length>0?
        <Row className='w-100'>
          <Col lg={6}>
          <Table className='shadow border'>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
              {cartArray?.map((item,index)=>(<tbody>
              <tr>
                <td>{index+1}</td>
                <td>{item.title.slice(0,20)}</td>
                <td> <img style={{width:'50px',height:'50px'}} src={item.thumbnail} alt="" /> </td>
                <td className='fw-bold'>$ {item.price}</td>
                <td><Button onClick={()=>disptach(removeFromCart(item.id))} variant="outline-primary"><i class="fa-solid fa-trash-can"></i></Button></td>
                {Producttotal.push(item.price)
                 
                }
              </tr>
            </tbody>))}
          </Table>
        </Col>
        <Col lg={6}>
                <div className='d-flex justify-content-center align-items-center'>
                <Card className='m-5 p-2 border' style={{ width: '18rem',backgroundColor:'white',boxShadow:'10px 10px 10px 0px grey'}}>
                  <h2 className='fw-bold text-center'>Checkout</h2>
                  <Card.Body className='fw-bold'>
                    <p>No of Items in Your Cart : <span  style={{color:'green'}}>{cart.length}</span></p>
                    <p>Discount : <span style={{color:'green'}}>0%</span></p>
                    <p>Delivery Charges: <span  style={{color:'green'}}><strike className='text-dark'>Rs.100</strike> Free</span></p>
                    <p>Total Amount to Pay <span style={{color:'red'}}>$ {Producttotal.reduce((num1,num2)=>num1+num2)}</span></p>
                    <p className='text-secondary'>You will save ₹100 on this order</p>
                    <div className="btn d-flex justify-content-between align-items-center">
                      <Button className='w-100' onClick={handleShow} variant='success'>Continue</Button>
                    </div>
                  </Card.Body>
                </Card>

                <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
                  <Modal.Header closeButton>
                    <h1>Invoice</h1>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="img">
                      <img src="https://www.watchstation.com/on/demandware.static/-/Library-Sites-WatchStationSharedLibrary/default/dwd759a869/customer_care/payment/Mobile_Card_View@2x.png" alt=""  style={{width:'100%'}}/>
                    </div>
                    <form action="">
                      <div className='p-2'>
                        <label htmlFor='cardnum'>Card number</label>
                        <input className='form-control w-100 rounded ' id='cardnum' type="text" placeholder='3451 5678 2389 3754'/>
                      </div>
                      <div className='p-2'>
                        <label htmlFor='cardname'>Name on card</label>
                        <input className='form-control w-100 rounded ' id='cardname' type="text" placeholder='John Emmanual'/>
                      </div>
                      <div className="d-flex gap-2 w-100">
                        <div className='p-2 w-100'>
                          <label htmlFor="date">Expiry date</label>
                          <input className='form-control w-100 rounded ' id='date' type="date" placeholder=''/>
                        </div>
                        <div className='p-2 w-100'>
                          <label htmlFor="code">Security code</label>
                          <input className='form-control w-100  rounded ' id='code' type="password" placeholder='* * * *'/>
                        </div>
                      </div>
                    </form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button className='w-100' variant="primary" onClick={handleClose}>Pay $ {Producttotal.reduce((num1,num2)=>num1+num2)}</Button>
                  </Modal.Footer>
                </Modal>
                </div>
        </Col>
        </Row>
        :<div style={{height:'90vh'}} className='d-flex justify-content-center align-items-center flex-column w-100'>
        <img src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG49.png" alt="Nothing to display" style={{width:'400px'}}/>
        <h2 className='mt-3 fw-bold'>Your Cart is Empty</h2>
        <Button variant='success' className='mt-3'><Link style={{color:'white',textDecoration:'none'}} to={'/'}>Got to home</Link></Button>
      </div>
      }
      <ToastContainer position="top-center" theme="colored" closeOnClick draggable/>
    </div>
  )
}

export default Cart