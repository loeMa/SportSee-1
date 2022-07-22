import React from 'react';
import '../styles/components/navigation.css';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul >
                <li>{/* <NavLink to='/'> */}Accueil{/* </NavLink> */}  </li>
                <li>{/* <NavLink to='/'> */}Profil{/* </NavLink> */}  </li>
                <li>{/* <NavLink to='/'> */}Réglage{/* </NavLink> */}  </li>
                <li>{/* <NavLink to='/'> */}Communauté{/* </NavLink> */}  </li>
                

            </ul>
        </div>
    );
};

export default Navigation;