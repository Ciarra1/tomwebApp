import './BigArticle.css'
import { Link } from 'react-router-dom'

export default function MiniArticle({img, category, title, date, desc}){
    return(
        <>
        <div className='BigArticle-container'>
            <Link to="/article-page" state={{ img, category, title, date, desc }}>
              <img src={img} alt="" />
            </Link>
            <div className='BigArticle-info'>
                <div className='BigCategory-date'>
                    <button className='BigArticle-category'><p className='button-p'>{category} </p></button>
                    <p className='BigArticle-date'> • {date}</p>    
                </div>
                <div className='BigArticleTitle-desc'>
                <h3 className="BigArticle-title">{title}</h3>
                <p className='BigArticle-desc'>{desc}</p>
                </div>
            </div>
        </div>
        </>
    );
}