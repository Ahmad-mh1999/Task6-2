import { useState } from 'react';
import './Aside.css'
function Aside({props}) {
    
    let toggleClassCheck = props.navClicked ? 'active': '';
    return (
        <aside className="Sidbar">
            <nav className={`menu d-flex justify-content-ce align-items-start flex-column ${toggleClassCheck}`}>
                <a href="#" className="menu-item mb-3 is-active">home</a>
                <a href="#" className="menu-item mb-3">Collaction</a>
                <a href="#" className="menu-item mb-3">shop</a>
                <a href="#" className="menu-item mb-3">android</a>
                <a href="#" className="menu-item mb-3">pages</a>
                <a href="#" className="menu-item mb-3">new arrivels</a>
            </nav>
        </aside>
    )
}

export default Aside