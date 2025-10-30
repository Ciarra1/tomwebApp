import './header.css';
import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <>
            <div className="nav">
                <div className="left-part not-centered">
                    <Link to="/">
                        <h3 className="website-title">Webino Blogs</h3>
                    </Link>
                </div>
                <div className="right-part">
                    <ul>
                        <li><Link to="/reports" className="nav-link"><h4>Reports</h4></Link></li>
                        <li><Link to="/blogs" className="nav-link"><h4>Blogs</h4></Link></li>
                        <li><Link to="/sports" className="nav-link"><h4>Sports</h4></Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}