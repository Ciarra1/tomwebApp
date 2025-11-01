import Article from "../components/Article"
export default function Blogs() {
    return (
        <>
            <div className="category-header blogs-page-container not-centered">
                <div className="not-centered category-header-container">
                <h1 className="category-header-title">Blogs</h1>
                <p className="category-header-desc">Discover a world of knowledge and inspiration in our blog section, featuring insightful articles on a variety of topics. </p>
                </div>
            </div>
            <div className="articles-div">
                        <Article
                        img="src/components/assets/Blogs/[1] Ang Agosto 2023 ay isang mabatong daan.png"
                            category="BLOGS"
                            title="Ang Agosto 2023 ay isang mabatong daan"
                            date="August 31, 2023"
                            desc="Hindi kagulat-gulat ang huminto muna at huminga ngayong Agosto dahil sa sunod-sunod na mga pangyayaring may dalang kunot ng noo, tawa, at malalim na pag-iisip."
                        />
                        <Article
                        img="src/components/assets/Blogs/[2] Liham para sa isang batang Tomasino.png"
                            category="BLOGS"
                            title="Liham para sa isang batang Tomasino"
                            date="August 17, 2023"
                            desc="Hindi ko muna sasabihin sa iyo kung ano ang mangyayari, pero ito lang ang ibibigay ko sa'yo: Lahat ng pagdadaanan mo ay may dahilan."
                        />
                        <Article
                        img="src/components/assets/Blogs/[3] Yakapin ang bawat sandali, Tomasino! Mga payo para sa unang taon sa kolehiyo.png"
                            category="BLOGS"
                            title="Yakapin ang bawat sandali, Tomasino! Mga payo para sa unang taon sa kolehiyo."
                            date="August 11, 2023"
                            desc="Sa pagtawid sa ilalim ng arko, dalhin ang mga payong ito para sanggain ang bawat patak ng ulan at kayanin ang unang taon sa kolehiyo."
                        />
                        <Article
                        img="src/components/assets/Blogs/[4] ‘Barbie’ celebrates and criticizes the complexities of womanhood.png"
                            category="BLOGS"
                            title="‘Barbie’ celebrates and criticizes the complexities of womanhood."
                            date="July 31, 2023"
                            desc="Greta Gerwig balances the pinks and pastels of Barbie Land, and the blunt grayness of a patriarchal society in one of the most anticipated films of the year."
                        />
                        </div>
        </>
    )
}