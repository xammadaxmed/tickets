import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NotFound() {
    return (
        <div className="d-flex justify-content-center p-2">
            <h1><FontAwesomeIcon style={{fontSize:"50px"}} icon={faExclamationTriangle}></FontAwesomeIcon>  Page Not Found</h1>
        </div>
    )
}