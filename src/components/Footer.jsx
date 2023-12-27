import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <div style={{backgroundColor:'#022b42'}} className='text-light justify-content-center align-items-center d-flex w-100 flex-column p-5'>
      <div className="container row">
        <div className="col-4 media-player-about text-light">
          <h4>
          <img src="car-logo.png" alt="" style={{height:'30px',width:'30px'}}/>
          <Link style={{color:'red',textDecoration:'none',fontWeight:'bold'}} to={'/'}><span style={{color:'white'}}> E</span>-Cart</Link>
          </h4>
          <p style={{textAlign:'justify'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nobis doloribus rem praesentium rerum laborum velit eaque adipisci, maiores ipsam Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos esse nesciunt ut molestias
          </p>
        </div>
        <div className="col-4">
          <div className="row  text-light">
            <div className="col-6 links flex-column d-flex">
              <h4>Links</h4>
              <Link className='footer-links' to={'/'}>Home</Link>
              <Link className='footer-links' to={'/cart'}>Cart</Link>
              <Link className='footer-links' to={'/wishlist'}> Wishlist</Link>
            </div>
            <div className="col-6 guides flex-column d-flex">
              <h4>Guides</h4>
              <Link className='footer-links' to={'https://bootswatch.com'}>React</Link>
              <Link className='footer-links' to={'https://react-bootstrap.github.io'}>React Bootsrap</Link>
              <Link className='footer-links' to={'https://bootswatch.com'}>Boots Watch</Link>
            </div>
          </div>

        </div>
        <div className="col-4 contacts">
            <h4>Contact Us</h4>
            <form action="" className='footer-form'>
              <div className='d-flex gap-1'>
                <input className='contact-input w-100' type='text' placeholder='Enter your e-mail address'/>
                <button className='contact-input-btn bg-primary'>Subscribe</button>
              </div>
            </form>
            <div className="mt-3 social-media justify-content-evenly align-items-center d-flex p-2">
              <Link to={'https://bootswatch.com'}><i class="fa-brands fa-instagram fa-2x" style={{color:'white'}}></i></Link>
              <Link to={'https://bootswatch.com'}><i class="fa-brands fa-whatsapp fa-2x" style={{color:'white'}}></i></Link>
              <Link to={'https://bootswatch.com'}><i class="fa-brands fa-x-twitter fa-2x" style={{color:'white'}}></i></Link>
              <Link to={'https://bootswatch.com'}><i class="fa-brands fa-linkedin fa-2x" style={{color:'white'}}></i></Link>
            </div>
        </div>
        
      </div>
      <div className='p-2'><p>Copyright ©️ 2023 E-Cart. Built with react</p></div>
    </div>
  )
}

export default Footer