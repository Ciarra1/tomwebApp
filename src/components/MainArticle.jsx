import { FaRegCalendarAlt } from "react-icons/fa";
import "./mainArticle.css"; 

export default function MainArticle({ image, category, title, desc, date }) {
  return (
    <div
      className="mainArticle"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="mainArticle_content">
        <h1 className="mainArticle_title">{title}</h1>
        <p className="mainArticle_desc">
          <b>{category}</b> — {desc}
        </p>
        <div className="article-card_footer">
          <FaRegCalendarAlt className="article-card__icon" />
          <span className="article-card__date">{date}</span>
        </div>
      </div>
    </div>
  );
}
