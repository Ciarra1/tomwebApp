import './Article.css'
export default function Article({img,category,title, date,desc}){
    return(
        <>
        <div className='article-container not-centered'>
            <img className="article-img" src={img} alt="" />
            <div className='article-info'>
                <div className='category-date'>

                    <button className='article-category'><p className='button-p'>{category}</p></button>
                    
                    <p className='article-date'> • {date}</p>
                </div>
                <h3 className='article-title'>{title}</h3>
                <p className='article-desc'>{desc}</p>
            
            </div>
        </div>
        </>
    );
}