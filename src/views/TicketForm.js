
import { Component, useState } from "react";
import { Container, Row, Col, Card, Button, FormControl, FormLabel } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Spacer from "../components/Spacer";
import TaxonomyPopUp from "../components/TaxonomyPopUp";
import TagsInput from "../components/TagsInput";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Select2Helper from "../helpers/Select2Helper";
import Select from 'react-select';

function TicketForm() {
    const [tags, setTags] = useState([]);
    const [txtEmail, settxtEmail] = useState("abc@example.com");
    const [txtSubmittedBy, setTxtSubmittedBy] = useState("USER");
    const [txtSubmittedFor, setTxtSubmittedFor] = useState("USER");
    const [txtJobTitle, setTxtJobTitle] = useState("");
    const [txtDepartment, setTxtDepartment] = useState("");
    const [txtCompany, setTxtCompany] = useState("Test Company");
    const [txtPhone, setTxtPhone] = useState("");
    const [txtLocation, setTxtLocation] = useState("Locations>Brasil");
    const [txtIssueDetails, setTxtIssueDetails] = useState('');

    console.log(Select2Helper.HelpDeskOptions())

    var modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    };

    var formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
    ];

    function handleSubmit() {
        console.log(txtIssueDetails);
    }


    function setHelpDesk() {
        console.log('hello')
    }
    return (

        <Row className="mb-8">
            <Row className="">

                <Col className="d-flex justify-content-start p-2">
                    <h3>Ticket Input</h3>
                </Col>
                <Col className="d-flex justify-content-end p-2">
                    <Button className="m-1" variant="danger">Cancel</Button>
                    <Button className="m-1" variant="secondary">Save Draft</Button>
                    <Button onClick={handleSubmit} className="m-1" variant="primary">Submit</Button>
                </Col>
            </Row>

            <Spacer height="20px"></Spacer>
            <Row >
                <Col className="col-4">

                    <div className="card">
                        <CardHeader>User Profile</CardHeader>
                        <Card.Body>
                            <Row>
                                <Col className="form-group">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl value={txtEmail} className="form-control-sm"></FormControl>
                                </Col>
                            </Row>

                            <Row className="mt-2">
                                <Col className="form-group">
                                    <FormLabel>Submitted By</FormLabel>
                                    <FormControl value={txtSubmittedBy} className="form-control-sm"></FormControl>
                                </Col>

                                <Col className="form-group">
                                    <FormLabel>Submitted For </FormLabel>
                                    <FormControl value={txtSubmittedFor} className="form-control-sm"></FormControl>
                                </Col>
                            </Row>

                            <Row className="mt-2">
                                <Col className="form-group">
                                    <FormLabel>Job Title</FormLabel>
                                    <FormControl value={txtJobTitle} className="form-control-sm"></FormControl>
                                </Col>

                                <Col className="form-group">
                                    <FormLabel>Department</FormLabel>
                                    <FormControl value={txtDepartment} className="form-control-sm"></FormControl>
                                </Col>
                            </Row>


                            <Row className="mt-2">
                                <Col className="form-group">
                                    <FormLabel>Company</FormLabel>
                                    <FormControl value={txtCompany} className="form-control-sm"></FormControl>
                                </Col>

                                <Col className="form-group">
                                    <FormLabel>Phone</FormLabel>
                                    <FormControl value={txtPhone} className="form-control-sm"></FormControl>
                                </Col>
                            </Row>

                            <Row className="mt-2">

                                <Col className="form-group">
                                    <FormLabel>Location</FormLabel>
                                    <FormControl value={txtLocation} className="form-control-sm"></FormControl>
                                </Col>
                            </Row>
                        </Card.Body>
                    </div>



                    <div className="card mt-2">
                        <CardHeader>Ticket Submission Info</CardHeader>
                        <Card.Body>
                            <Row>
                                <Col className="form-group">
                                    <FormLabel>Help Desk*</FormLabel>
                                    <Select isClearable defaultInputValue="" options={Select2Helper.HelpDeskOptions()}/>
                                </Col>
                            </Row>


                            <Row className="mt-2">
                                <Col className="form-group">
                                    <FormLabel>Priority*</FormLabel>
                                    <Select isClearable defaultInputValue="" options={Select2Helper.PriorityOptions()}/>
                                </Col>
                            </Row>

                            <Row className="mt-2">
                                <Col className="form-group">
                                    <FormLabel>Due Date</FormLabel>
                                    <input type="date" className="form-control form-control-sm"></input>
                                </Col>
                            </Row>

                            <Row className="mt-2">
                                <Col className="form-group">
                                    <FormLabel>Reason For Priority</FormLabel>
                                    <textarea className="form-control form-control-sm"></textarea>
                                </Col>
                            </Row>


                        </Card.Body>
                    </div>



                    <div className="card mt-2">
                        <CardHeader>
                            <label>Taxonomy</label>
                            <TaxonomyPopUp />
                        </CardHeader>
                        <Card.Body>
                            <Row>
                                <Col >
                                    <ul className="taxonomy-list">
                                        <li> <a href="#">Locations > Brasil</a> </li>
                                        <li> <a href="#">Locations > USA</a> </li>
                                    </ul>
                                </Col>
                            </Row>

                        </Card.Body>
                    </div>



                    <div className="card mt-2">
                        <CardHeader>
                            <label>Shared With</label>
                        </CardHeader>
                        <Card.Body>
                            <Row className="mt-2">
                                <Col className="form-group">
                                    <FormLabel>Share With</FormLabel>
                                    <FormControl className="form-control-sm"></FormControl>
                                </Col>
                            </Row>

                            <Row className="mt-2">
                                <Col className="form-group">
                                    <FormLabel>Notify To</FormLabel>
                                    <FormControl className="form-control-sm"></FormControl>
                                </Col>
                            </Row>

                        </Card.Body>
                    </div>

                </Col>

                <Col className="col-5">
                    <div className="card">
                        <CardHeader>Ticket Details - Status: New</CardHeader>
                        <Card.Body>
                            <Row>
                                <Col className="form-group">
                                    <FormLabel>Subject*</FormLabel>
                                    <FormControl className="form-control-sm"></FormControl>
                                </Col>
                            </Row>

                            <Row className="mt-2">

                                <Col className="form-group">
                                    <FormLabel>Issue Details*</FormLabel>

                                    <ReactQuill modules={modules} formats={formats} style={{ height: "300px", marginBottom: "50px" }} theme="snow" value={txtIssueDetails} onChange={setTxtIssueDetails} />

                                    {/* <textarea className="form-control-sm form-control ticket-issue-details"></textarea> */}
                                </Col>
                            </Row>


                            <Row className="mt-2" >
                                <Col className="form-group">
                                    <FormLabel>Keywords</FormLabel>
                                    <TagsInput />
                                </Col>
                            </Row>
                        </Card.Body>
                    </div>


                    <div className="card mt-2">
                        <CardHeader>Other Details</CardHeader>
                        <Card.Body>
                            <Row>
                                <Col className="form-group">
                                    <FormLabel>Attachments (Maximum total files attachment size: 2M)</FormLabel>
                                    <input className="form-control form-control-sm" type="file" multiple />
                                </Col>
                            </Row>

                            <Row className="mt-4">
                                <Col className="form-group col-3">
                                    <FormLabel>Related Tickets</FormLabel>
                                    <FormControl className="form-control-sm"></FormControl>
                                </Col>

                                <Col className="form-group col-9">
                                    <FormLabel>Subject</FormLabel>
                                    <FormControl className="form-control-sm"></FormControl>
                                </Col>
                            </Row>


                            <Row className="mt-4">
                                <Col className="form-group col-3">
                                    <FormLabel>Related Contents</FormLabel>
                                    <FormControl className="form-control-sm"></FormControl>
                                </Col>

                                <Col className="form-group col-9">
                                    <FormLabel>Subject</FormLabel>
                                    <FormControl className="form-control-sm"></FormControl>
                                </Col>
                            </Row>


                            <Row className="mt-4">
                                <Col className="form-group">
                                    <FormLabel>Link (web page, share point etc)</FormLabel>
                                    <FormControl className="form-control-sm"></FormControl>
                                </Col>
                            </Row>



                        </Card.Body>
                    </div>
                </Col>

                <Col className="col-2">

                    <div className="card mt-2">
                        <CardHeader>Search Results</CardHeader>
                        <Card.Body>

                            <Row>
                                <Col>
                                    <ul class="nav nav-tabs">
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="#">Tickets</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Contents</a>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>

                            <Row>
                                <Col>


                                </Col>
                            </Row>



                        </Card.Body>
                    </div>
                </Col>
            </Row>

        </Row>

    );
}

export default TicketForm;