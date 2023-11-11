import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import logo from './../../image/logo.jpeg'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from "react-router-dom";
function Navbar() {
    const [closeButton , setCloseButton]= useState(false);
    function handleClose() {
        setCloseButton(closeButton => !closeButton);
    }
    let closeCheck =closeButton ? 'd-none': '';
    const [navClicked, setNavClicked] = useState(false);
    function handleClick() {
        setNavClicked(navClicked => !navClicked);
    }
    let toggleClassCheck = navClicked ? 'active' : '';
    return (
        <>
            <div className={`sales ${closeCheck}`} >
                <div className="container text-center pt-2">
                    <h4>Long Weekend Sale Up to 50% OFF <span>Shop Now </span></h4>
                    <i className="fa fa-close" id="sales-close" onClick={handleClose}></i>
                </div>
            </div>
            <nav className="pb-1 main-nav ">
                <div className="container d-flex align-items-center justify-content-between pt-3">
                    <div className="navbar-brand order-lg-0">
                        <img src={logo} alt="" />
                    </div>
                    <Link to="#" className="toggle-button " >
                        <FaIcons.FaBars onClick={handleClick} />
                    </Link>
                    <div className="order-lg-1 icons d-flex align-items-center justify-content-center gap-3">
                        <div className="toggle-shopping">
                            <AiIcons.AiOutlineShoppingCart />
                        </div>
                        <div>
                            <AiIcons.AiFillHeart />
                        </div>
                        <div>
                            <AiIcons.AiOutlineSearch />
                        </div>
                    </div>
                    <ul className=" nav-menu pt-3 gap-3 ">
                        <li className="nav-item fw-bold mx-2">
                            <Link to='/'>Home</Link>
                        </li>
                        <li className="nav-item fw-bold mx-2">
                            <Link to=''>Collaction</Link>
                        </li>
                        <li className="nav-item fw-bold mx-2">
                            <Link to=''>shop</Link>
                        </li>
                        <li className="nav-item fw-bold mx-2">
                            <Link to=''>android</Link>
                        </li>
                        <li className="nav-item fw-bold mx-2">
                            <Link to='NewArrivels'>new arrivels</Link>
                        </li>
                        <li className="nav-item fw-bold mx-2">
                            <Link to=''>pages</Link>
                        </li>
                    </ul>
                    <div className=" dropdown order-lg-3">
                        <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
                            aria-expanded="false">Lang</button>
                        <ul className="dropdown-menu menuflags">

                        </ul>
                    </div>
                    <aside className={`Sidbar ${toggleClassCheck}`}>
                        <nav className="menu d-flex justify-content-ce align-items-start flex-column" >
                            <ul className=" side-menu align-items-start justify-content-start  flex-column pt-3 gap-3">
                                <li className="nav-item fw-bold mx-2">
                                    <Link to='/'>Home</Link>
                                </li>
                                <li className="nav-item fw-bold mx-2">
                                    <Link to=''>Collaction</Link>
                                </li>
                                <li className="nav-item fw-bold mx-2">
                                    <Link to=''>shop</Link>
                                </li>
                                <li className="nav-item fw-bold mx-2">
                                    <Link to=''>android</Link>
                                </li>
                                <li className="nav-item fw-bold mx-2">
                                    <Link to='NewArrivels'>new arrivels</Link>
                                </li>
                                <li className="nav-item fw-bold mx-2">
                                    <Link to=''>pages</Link>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                </div>
            </nav>
        </>
    )
}

export default Navbar