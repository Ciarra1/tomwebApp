import './Article.css'
import { Link } from 'react-router-dom';
export default function Article({img,category,title, date,desc}){
    return(
        <>
        <div className='article-container not-centered right-part'>
            <div className='article-img-container'>
            <Link to="/article-page" state={{ img, category, title: desc, date, desc }}>
              <img className='article-img' src={img} alt="" />
            </Link>
            </div>
            <div className='article-info'>
                <div className='category-date'>

                    <button className='article-category'><p className='button-p'>{category}</p></button>
                    <p>•</p>
                    <p className='article-date'>{date}</p>
                </div>
                <h3 className='article-title'>{title}</h3>
                <p className='article-desc'>{desc}</p>
            
            </div>
        </div>
        </>
    );
}