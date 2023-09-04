import React from "react";
import "../styles/LowerMenu.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCog, faChartLine, faStar } from '@fortawesome/free-solid-svg-icons';

const LowerMenu = () => {

    console.log("Render LowerMenu")

    return(
        <div className="lower-menu">
            <div className="lower-menu__icons-left">
                <FontAwesomeIcon className="lower-menu__icon-fa" icon={faHome} />
                <FontAwesomeIcon className="lower-menu__icon-fa" icon={faChartLine} />
            </div>
            <div className="lower-menu__icons-right">
                <FontAwesomeIcon className="lower-menu__icon-fa" icon={faStar} />
                <FontAwesomeIcon className="lower-menu__icon-fa" icon={faCog} />
            </div>  
        </div>
    )
}

export default LowerMenu