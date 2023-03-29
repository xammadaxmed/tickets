import { Col } from "react-bootstrap";
import { faFile, faFileAlt, faNewspaper, faPenToSquare, faQuestionCircle, faStar, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBlog, faColumns, faDashboard, faHome, faList, faMobileAlt, faMobilePhone, faPhone, faPhoneAlt, faPowerOff, faSliders, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { Component } from "react";

class SideBar extends Component {
    render()
    {
        return (
            <Col className="sidebar col-2">
                <ul className="sidebar-menu-list">
                <li> <NavLink exact=""  activeClassName="active" to="/"> <FontAwesomeIcon className="sidebar-menu-icon" icon={faHome}></FontAwesomeIcon> Dashboard</NavLink> </li>
                    <li className="menu-seprator">Tickets</li>
                    <li> <NavLink  activeClassName="active" to="create-ticket"> <FontAwesomeIcon className="sidebar-menu-icon" icon={faPenToSquare}></FontAwesomeIcon>  New Ticket</NavLink> </li>
                    <li> <a href="#"> <FontAwesomeIcon className="sidebar-menu-icon" icon={faList}></FontAwesomeIcon>  My Tickets</a> </li>
                    <li className="menu-seprator">Contents</li>
                    <li> <a href="#"> <FontAwesomeIcon className="sidebar-menu-icon" icon={faPenToSquare}></FontAwesomeIcon>  New Content</a> </li>
                    <li> <a href="#"> <FontAwesomeIcon className="sidebar-menu-icon" icon={faList}></FontAwesomeIcon> My MyContents</a> </li>
                    <li className="menu-seprator">HD</li>
    
                    <li> <a href="#"><FontAwesomeIcon className="sidebar-menu-icon" icon={faTicket}></FontAwesomeIcon> HD Tickets</a> </li>
                    <li> <a href="#"> <FontAwesomeIcon className="sidebar-menu-icon" icon={faBlog}></FontAwesomeIcon> HD Contents</a> </li>
                    <li className="menu-seprator">Other</li>
    
                    <li> <a href="#"><FontAwesomeIcon className="sidebar-menu-icon" icon={faColumns}></FontAwesomeIcon> Content Collector</a> </li>
                    <li> <a href="#"><FontAwesomeIcon className="sidebar-menu-icon" icon={faStar}></FontAwesomeIcon> My Favourites</a> </li>
                    <li> <a href="#"><FontAwesomeIcon className="sidebar-menu-icon" icon={faUser}></FontAwesomeIcon> Profile</a> </li>
                    <li> <a href="#"><FontAwesomeIcon className="sidebar-menu-icon" icon={faSliders}></FontAwesomeIcon> Admin</a> </li>
                    <li> <a href="#"><FontAwesomeIcon className="sidebar-menu-icon" icon={faDashboard}></FontAwesomeIcon> Dashboards</a> </li>
                    <li> <a href="#"><FontAwesomeIcon className="sidebar-menu-icon" icon={faFileAlt}></FontAwesomeIcon> CC Maintenance</a> </li>
                    <li> <a href="#"><FontAwesomeIcon className="sidebar-menu-icon" icon={faMobileAlt}></FontAwesomeIcon> Contact</a> </li>
                    <li> <a href="#"><FontAwesomeIcon className="sidebar-menu-icon" icon={faQuestionCircle}></FontAwesomeIcon> Help</a> </li>
                    <li> <a href="#"><FontAwesomeIcon className="sidebar-menu-icon" icon={faPowerOff}></FontAwesomeIcon> Logout</a> </li>
                </ul>
            </Col>
            );
    }
}

export default SideBar;