import './section.css';
import MiniArticle from './MiniArticle';
// Section is now data-driven: pass an `items` array prop where each item is
// { img, category, date, desc } and Section will render them.
export default function Section({ section_name, items }) {
    // default items if none provided (keeps existing behaviour)
    const defaults = [
        {
            img: 'src/components/assets/mainArticle_bg.jpeg',
            category: 'REPORTS',
            date: 'August 21, 2023',
            desc: 'Mga Tomasino humakot ng pwesto sa August 2023 MTLE; UST itinanghal na fifth top-performing school',
        },
        {
            img: 'src/components/assets/mainArticle_bg.jpeg',
            category: 'BLOGS',
            date: 'August 17, 2023',
            desc: 'Liham para sa isang batang Tomasino',
        },
        {
            img: 'src/components/assets/mainArticle_bg.jpeg',
            category: 'BLOGS',
            date: 'August 11, 2023',
            desc: 'Yakapin ang bawat sandali, Tomasino!: Mga payo para sa unang taon sa kolehiyo',
        },
        {
            img: 'src/components/assets/mainArticle_bg.jpeg',
            category: 'BLOGS',
            date: 'July 31, 2023',
            desc: '‘Barbie’ celebrates and criticizes the complexities of womanhood',
        },
    ];

    const list = Array.isArray(items) && items.length ? items : defaults;

    return (
        <div className={`not-centered right-margin ${section_name}`}>
            <h3 className="section-header">{section_name}</h3>
            <div className="section-articles articles-container">
                {list.map((it, idx) => (
                    <MiniArticle
                        key={idx}
                        img={it.img}
                        category={it.category}
                        date={it.date}
                        desc={it.desc}
                    />
                ))}
            </div>
        </div>
    );
}