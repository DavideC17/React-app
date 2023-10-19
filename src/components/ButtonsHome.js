import { Link } from 'react-router-dom';
import './css/ButtonsHome.css'

const ButtonsHome = () => {
    return (
        <div className='container-buttons'>
            <Link to='/get' type="button" className="btn btn-outline-primary btn-lg">GET</Link>
            <Link to='/post' className="btn btn-outline-success btn-lg">POST</Link>
            <Link to='/update' className="btn btn-outline-warning btn-lg">UPDATE</Link>
            <Link to='/delete' className="btn btn-outline-danger btn-lg">DELETE</Link>
        </div>
    );
}

export default ButtonsHome;