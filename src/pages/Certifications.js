import { Link } from 'react-router-dom';

const Certifications = () => {
    return (
        <div className = 'full-wrapper'>
            <Link to = '/' className = 'back-arrow'></Link>
            <h1 className="main-title main-title--super-small">CERTIFICATIONS</h1>
            <div className="certificates-wrapper">
                <a href= "https://udemy-certificate.s3.amazonaws.com/image/UC-eedbbb76-281f-4031-b69c-f0ce46013573.jpg" target = '_blank' rel='noopener noreferrer' className = 'certificates-wrapper_certificate'></a>
                <a href= 'https://udemy-certificate.s3.amazonaws.com/image/UC-88f591a3-3fe0-41e7-92c3-7f62a830ad29.jpg' target = '_blank' rel='noopener noreferrer' className = 'certificates-wrapper_certificate'></a>
                <a href = 'https://udemy-certificate.s3.amazonaws.com/image/UC-bc4ca4fd-ea2c-4162-8777-1b693130c390.jpg' target = '_blank' rel='noopener noreferrer' className = 'certificates-wrapper_certificate'></a>
                <a href = 'https://udemy-certificate.s3.amazonaws.com/image/UC-53ffb6cf-89e3-48c0-8eaf-435339aeea32.jpg' target = '_blank' rel='noopener noreferrer' className = 'certificates-wrapper_certificate'></a>
                <a href = 'https://udemy-certificate.s3.amazonaws.com/image/UC-699db672-6e90-4263-9b59-5d4df3f34a86.jpg' target = '_blank' rel='noopener noreferrer' className = 'certificates-wrapper_certificate'></a>
                <a href = 'https://udemy-certificate.s3.amazonaws.com/image/UC-815a0eb3-aad6-482c-925a-fa3f6580fd64.jpg' target = '_blank' rel='noopener noreferrer' className = 'certificates-wrapper_certificate'></a>
                </div>
        </div>
    )
}

export default Certifications
