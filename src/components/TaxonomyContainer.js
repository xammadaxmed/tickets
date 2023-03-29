import { Col } from "react-bootstrap";
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeartCircleBolt, faHeartCirclePlus, faHeartCircleXmark, faHeartPulse, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TaxonomyContainer() {

    return (
        
        <>
            <Col className="col-3" >
                <ul className='taxonomy-container'>
                    <li> <a href='#'> <FontAwesomeIcon icon={faPlusCircle} /> </a> Container Control Center <a href='#' className='float-right'> <FontAwesomeIcon icon={faHeartCirclePlus} /> </a></li>
                    <li> <a href='#'> <FontAwesomeIcon icon={faPlusCircle} /> </a> Mission Control <a href='#' className='float-right'> <FontAwesomeIcon icon={faHeart} /> </a></li>
                    <li className="active-taxonomy"> <a href='#'> <FontAwesomeIcon icon={faPlusCircle} /> </a> LARS <a href='#' className='float-right'> <FontAwesomeIcon icon={faHeart} /> </a></li>
                    <li> <a href='#'> <FontAwesomeIcon icon={faPlusCircle} /> </a> Hugin UAV <a href='#' className='float-right'> <FontAwesomeIcon icon={faHeart} /> </a></li>
                    <li> <a href='#'> <FontAwesomeIcon icon={faPlusCircle} /> </a> Mission Control Center <a href='#' className='float-right'> <FontAwesomeIcon icon={faHeart} /> </a></li>
                    <li> <a href='#'> <FontAwesomeIcon icon={faPlusCircle} /> </a> Navigation and Control Sensor <a href='#' className='float-right'> <FontAwesomeIcon icon={faHeart} /> </a></li>
                    <li> <a href='#'> <FontAwesomeIcon icon={faPlusCircle} /> </a> Navigation and Control Sensor <a href='#' className='float-right'> <FontAwesomeIcon icon={faHeart} /> </a></li>
                    <li> <a href='#'> <FontAwesomeIcon icon={faPlusCircle} /> </a> Navigation and Control Sensor <a href='#' className='float-right'> <FontAwesomeIcon icon={faHeart} /> </a></li>
                    <li> <a href='#'> <FontAwesomeIcon icon={faPlusCircle} /> </a> Navigation and Control Sensor <a href='#' className='float-right'> <FontAwesomeIcon icon={faHeart} /> </a></li>
                    <li> <a href='#'> <FontAwesomeIcon icon={faPlusCircle} /> </a> Navigation and Control Sensor <a href='#' className='float-right'> <FontAwesomeIcon icon={faHeart} /> </a></li>
                    <li> <a href='#'> <FontAwesomeIcon icon={faPlusCircle} /> </a> Navigation and Control Sensor <a href='#' className='float-right'> <FontAwesomeIcon icon={faHeart} /> </a></li>
                    <li> <a href='#'> <FontAwesomeIcon icon={faPlusCircle} /> </a> Navigation and Control Sensor <a href='#' className='float-right'> <FontAwesomeIcon icon={faHeart} /> </a></li>
                    <li> <a href='#'> <FontAwesomeIcon icon={faPlusCircle} /> </a> Navigation and Control Sensor <a href='#' className='float-right'> <FontAwesomeIcon icon={faHeart} /> </a></li>
                    <li> <a href='#'> <FontAwesomeIcon icon={faPlusCircle} /> </a> Navigation and Control Sensor <a href='#' className='float-right'> <FontAwesomeIcon icon={faHeart} /> </a></li>
                    <li> <a href='#'> <FontAwesomeIcon icon={faPlusCircle} /> </a> Navigation and Control Sensor <a href='#' className='float-right'> <FontAwesomeIcon icon={faHeart} /> </a></li>
                    <li> <a href='#'> <FontAwesomeIcon icon={faPlusCircle} /> </a> Navigation and Control Sensor <a href='#' className='float-right'> <FontAwesomeIcon icon={faHeart} /> </a></li>
                    <li> <a href='#'> <FontAwesomeIcon icon={faPlusCircle} /> </a> Navigation and Control Sensor <a href='#' className='float-right'> <FontAwesomeIcon icon={faHeart} /> </a></li>
                    <li> <a href='#'> <FontAwesomeIcon icon={faPlusCircle} /> </a> Navigation and Control Sensor <a href='#' className='float-right'> <FontAwesomeIcon icon={faHeart} /> </a></li>
                    <li> <a href='#'> <FontAwesomeIcon icon={faPlusCircle} /> </a> Navigation and Control Sensor <a href='#' className='float-right'> <FontAwesomeIcon icon={faHeart} /> </a></li>
                    <li> <a href='#'> <FontAwesomeIcon icon={faPlusCircle} /> </a> Navigation and Control Sensor <a href='#' className='float-right'> <FontAwesomeIcon icon={faHeart} /> </a></li>
                    <li> <a href='#'> <FontAwesomeIcon icon={faPlusCircle} /> </a> Navigation and Control Sensor <a href='#' className='float-right'> <FontAwesomeIcon icon={faHeart} /> </a></li>
                    <li> <a href='#'> <FontAwesomeIcon icon={faPlusCircle} /> </a> Navigation and Control Sensor <a href='#' className='float-right'> <FontAwesomeIcon icon={faHeart} /> </a></li>
                </ul>
                <ul className='taxonomy-expert-container'>
                    <li>Kashif Jilani</li>
                    <li>Eva</li>
                    <li>Hammad</li>
                </ul>
            </Col>
        </>
    );

}