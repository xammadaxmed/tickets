import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TaxonomyContainer from './TaxonomyContainer';

function TaxonomyPopUp(props) {
    var screenWidth = window.innerWidth+" px";
    const [show, setShow] = useState(props.showModal);
    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    return (
        <>
            <a title="Search" className="float-right text-white font-weight-bolder ml-4"> <i className="bi bi-search"></i> </a>
            <a onClick={handleOpen} title="Add" className="float-right text-white font-weight-bolder"> <i className="bi bi-plus-square"></i> </a>

            <Modal id="popUpTaxonomy" style={{width:screenWidth}} size="lg" show={show} onHide={handleClose}>      
                <Modal.Header>
                    <Modal.Title>Taxonomy</Modal.Title>
                    <input style={{width:"300px"}} className='form-control form-control-sm' placeholder='Type here to search...'/>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <a className='taxonomy-tab-title active-tab' href='#'>Certificates</a>
                            <a className='taxonomy-tab-title' href='#'>Control Center</a>
                            <a className='taxonomy-tab-title' href='#'>Data Center </a>
                            <a className='taxonomy-tab-title' href='#'>Equipment</a>
                            <a className='taxonomy-tab-title' href='#'>Geography</a>
                            <a className='taxonomy-tab-title' href='#'>Locations</a>
                        </Col>
                    </Row>

                    <Row className='mt-4'>
                        <TaxonomyContainer/>
                    </Row>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Select
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default TaxonomyPopUp;