import './Innovative.css'
import InnovativeFeatures from './../InnovativeFeature/InnovativeFeature'
import img1 from './../../image/ic5-sec3.png'
import img2 from './../../image/ic6-sec3.jpeg'
import img3 from './../../image/ic3-sec3.jpeg'
import img0 from './../../image/center-img-sec3.jpeg'
function Innovative() {
  return (
    <div className='Sec3'>
            <div className="container">
                <div className="vh-100 d-flex align-items-center justify-content-center flex-column gap-5 text-center">
                    <h1 className="fw-semibold">INNOVATIVE QUALITIES & FEATURES</h1>
                    <p className="fs-3 opacity-50  ">SHOW YOURS TO THE WORLD</p>
                    <div className="row">
                        <div className="col-lg-4 col-sm-12 Ah-features-container ">
                            <InnovativeFeatures img={img1} left='true' />
                            <InnovativeFeatures img={img2} left='true' />
                            <InnovativeFeatures img={img3} left='true' />
                        </div>
                        <div className="col-lg-4 col-sm-12 py-2">
                        <img src={img0} alt="this is image"
                            className="img-fluid w-100" />
                        </div>
                        <div className="col-lg-4 col-sm-12 Ah-features-container ">
                            <InnovativeFeatures img={img1} />
                            <InnovativeFeatures img={img2} />
                            <InnovativeFeatures img={img3} />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
  )
}

export default Innovative