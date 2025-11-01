import { Link } from 'react-router-dom';
import './MiniArticle.css'

export default function MiniArticle({img, category, date, desc}){
    return(
        <>
        <div className='miniArticle_container'>
            <Link to="/article-page" state={{ img, category, title: desc, date, desc }}>
             <div className="miniArticle-img-wrapper">
                <img src={img} alt="" />
            </div>
            </Link>
            <div className='miniArticle-info'>
                <div className='category-date'>
                    <button className='article-category'><p className='button-p'>{category} </p></button>
                    <p className='miniArticle-date'> • {date}</p>
                </div>
                <p className='miniArticle-desc'>{desc}</p>
            </div>
        </div>
        </>
    );
}