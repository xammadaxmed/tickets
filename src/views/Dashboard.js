import { Component } from "react";
import { Row, Col } from "react-bootstrap";


class Dashboard extends Component {
    render() {
        return (

            <Row className="mb-8">
                <Row className="">

                    <Col className="d-flex justify-content-start p-2">
                        <h3>Dashboard</h3>
                    </Col>
                   
                </Row>
            </Row>

        );
    }
}


export default Dashboard;