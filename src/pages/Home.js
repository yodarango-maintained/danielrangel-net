import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className = 'full-wrapper'>
            <div className="my-svg"></div>
            <h1 className="main-title">D. R.<span>Web Artist</span></h1>

            <div className="button-wrapper">
            <Link to ='/works' className = 'std-button--link'>works</Link>
            <Link to = '/certifications' className = 'std-button--link'>certifications</Link>
            <a href="https://github.com/yodarango" target = "_blank" rel="noopener noreferrer" className = 'std-button--link'>github</a>
            </div>
        </div>
    )
}

export default Home
