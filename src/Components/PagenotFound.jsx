
import { useRouteError } from "react-router-dom";//handles routing errors event
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


function Pagenotfound(){
    const error = useRouteError();
    // Object destructuring method
    const {data,status,statusText} = error;
    console.log(error);
    
    return(
        <>
        <div className="backtohome">
          {/* creating a link to go back to browse */}
          <Link >
            <FontAwesomeIcon icon={faArrowLeft} /> <span>Back to Home </span>
          </Link>
        </div>
        <h2>The url is incorrect please check the url</h2>
        {/* object destructuring implementation */}
        <h2>{data} </h2>
        <h2>Page Status : {status} </h2>
        <h2>Error Message : {statusText} </h2>

        </>
    )
}
export default Pagenotfound;