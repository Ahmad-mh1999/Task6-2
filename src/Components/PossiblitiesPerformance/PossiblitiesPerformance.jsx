import './PossiblitiesPerformance.css'
import Hotspot from './../../image/hotspot-sec2.jpeg'
import Ic8 from './../../image/ic8.png'
import Ic7 from './../../image/ic7.jpeg'
import Ic9 from './../../image/ic9.jpeg'
import Ic10 from './../../image/ic10.jpeg'
import Feature from './Feature/Feature'
function PossiblitiesPerformance() {
    return (
        <div className='Sec2'>
            <div className="container">
                <div className="vh-100 d-flex align-items-center justify-content-center flex-column gap-5 text-center">
                    <h1 className="fw-semibold">POSSIBILITIES. PERFORMANCE. POWER.</h1>
                    <p className="fs-3 opacity-50 second-text ">FASTER PROCESSING WITH LESS POWER</p>
                    <img className="sec2-image" src={Hotspot} alt="" />
                    <div className=" position-relative d-flex align-items-center justify-content-center flex-wrap">
                        <Feature 
                        type="one"
                        img={Ic7}
                        title="SCORPION PROCESSOR"
                        spec="Tristique senectus et netus et malesuada fames ac turpis."
                        />
                        <Feature 
                        type="tow"
                        img={Ic10}
                        title="DUAL SIM CARD"
                        spec="Donec ultrices tincidunt arcu non sodales neque sodales ut."
                        />
                        <Feature 
                        type="one"
                        img={Ic9}
                        title="48 MB CAMERA"
                        spec="Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed."
                        />
                        <Feature 
                        type="tow"
                        img={Ic8}
                        title="48 HRS BACKUP"
                        spec="Natoque penatibus et magnis dis parturient montes nascetur."
                        />
                </div>
            </div>
            </div>
        </div>
    )
}

export default PossiblitiesPerformance