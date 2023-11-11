import './CameraBattary.css'
import OneFeature from './OneFeature/OneFeature'
import img1 from './../../image/ic12.jpeg'
import img2 from './../../image/ic11.jpeg'
import img3 from './../../image/ic13.avif'
function CameraBattary() {
    return (
        <div class="container section1 mt-5">
            <div class="vh-100 d-flex align-items-center justify-content-center flex-column gap-5 ">
                <h1 class="fw-bold ridj">WHAT MAKES THE ESSENTIAL DIFFERENT ?</h1>
                <p class="fs-3 opacity-50 second-text ">EXPERIENCE HIGH PERFORMANCE AND SECURE</p>
                <div class=" d-flex align-items-center justify-content-center flex-wrap">
                    <OneFeature image={img1} title='DUAL CAMERA' spec='Perfect Cut' />
                    <OneFeature image={img2} title='AI PROCESSING' spec='PRETTY' />
                    <OneFeature image={img3} title='8GB DDR5 RAM' spec='MOST POPULAR' />
                </div>
            </div>
        </div>
    )
}

export default CameraBattary