import Work from "../components/Work";
import { Link } from 'react-router-dom';

const Works = () => {
    return (
        <div className = 'full-wrapper'>
        <Link to = '/' className = 'back-arrow'></Link>
            <h1 className="main-title main-title--small">WORKS</h1>
            <Work />
        </div>
    )
}

export default Works
