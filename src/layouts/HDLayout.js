
import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import logoFile from "../assets/img/argeo.svg";
import SideBar from "../components/SideBar";
import TicketForm from "../views/TicketForm";

class HDLayout extends Component {
    render() {
        return (
            <div className="main-container">
                <Row className="header">
                    <Col className="logo"> <img src={logoFile} /> </Col>
                </Row>

                <Row>
                    <SideBar />
                    <Col className="page-content">{this.props.children}</Col>
                </Row>
            </div>
        )
    }
}


export default HDLayout;