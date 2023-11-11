import './FooterAh.css'
import imgs1 from './../../image/mastercard-6.svg'
import imgs2 from './../../image/visa-10.svg'
import imgs3 from './../../image/paypal-3.svg'
import imgs4 from './../../image/gamex.svg'
import imgs5 from './../../image/discover-4.svg'

function FooterAh() {
  return (
    <footer>
        <div class=" up-container">
            <div class="container">
                <div class="footer-content d-flex align-items-center justify-content-center flex-column gap-5 text-center">
                    <div class="title text-center" >
                        <h3>SUBSCRIBE NOW</h3>
                        <h1 class=" fw-semibold">GET OUR UPDATES ALWAYS FAST</h1>
                        <p class="fs-4 opacity-50 second-text ">YOUR PERSONAL DATA WILL ALWAYS BE SAFE</p>
                    </div>
                    <div class="email-id d-flex flex-nowrap">
                        <input  type="text" placeholder="Enter Your Email ID" />
                        <i class="fa fa-angle-right"></i>
                    </div>
                    <div class="footer-anchor">
                        <a href="#">Search</a>
                        <a href="#">help</a>
                        <a href="#">information</a>
                        <a href="#">privacy policy</a>
                        <a href="#">shippeng details</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="constainer down-container">
            <div class="content ">
                <div class="info d-flex align-items-center justify-content-center gap-3">
                    <p class="pt-3">© 2023</p>
                    <a href="#">Phono (password: buddha)</a>
                    <a href="#">Design Themes</a>
                </div>
                <div className='svg'>
                    <a href="#"><img src={imgs1}  /></a>
                    <a href="#"><img src={imgs2}  /></a>
                    <a href="#"><img src={imgs3}  class="ps-3" /></a>
                    <a href="#"><img src={imgs4}  /></a>
                    <a href="#"><img src={imgs5}  /></a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default FooterAh