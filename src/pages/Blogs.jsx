import Article from "../components/Article"
export default function Blogs() {
    return (
        <>
            <div className="category-header blogs-page-container not-centered">
                <div className="not-centered">
                <h1 className="category-header-title">Blogs</h1>
                <p className="category-header-desc">Discover a world of knowledge and inspiration in our blog section, featuring insightful articles on a variety of topics. </p>
                </div>
            </div>
            <div className="articles-div">
                        <Article
                        img="src/components/assets/mainArticle_bg.jpeg"
                            category="REPORTS"
                            title="Mga Tomasino humakot ng pwesto sa August 2023 MTLE; UST itinanghal na fifth top-performing school"
                            date="August 21, 2023"
                            desc="Hindi kagulat-gulat ang huminto muna at huminga ngayong Agosto dahil sa sunod-sunod na mga pangyayaring may dalang kunot ng noo, tawa, at malalim na pag-iisip."
                        />
                        <Article
                        img="src/components/assets/mainArticle_bg.jpeg"
                            category="REPORTS"
                            title="Mga Tomasino humakot ng pwesto sa August 2023 MTLE; UST itinanghal na fifth top-performing school"
                            date="August 16, 2023"
                            desc="Mula sa 40 na mga estudyanteng nanguna sa FTLE 2023, tanging sina Caumban at isang alumna mula sa Xavier University ang pasok sa listahan na hindi nagmula sa Unibersidad ng Pilipinas."
                        />
                        <Article
                        img="src/components/assets/mainArticle_bg.jpeg"
                            category="REPORTS"
                            title="Mga Tomasino humakot ng pwesto sa August 2023 MTLE; UST itinanghal na fifth top-performing school"
                            date="August 16, 2023"
                            desc="Mula sa 40 na mga estudyanteng nanguna sa FTLE 2023, tanging sina Caumban at isang alumna mula sa Xavier University ang pasok sa listahan na hindi nagmula sa Unibersidad ng Pilipinas."
                        />
                        <Article
                        img="src/components/assets/mainArticle_bg.jpeg"
                            category="REPORTS"
                            title="Mga Tomasino humakot ng pwesto sa August 2023 MTLE; UST itinanghal na fifth top-performing school"
                            date="August 16, 2023"
                            desc="Mula sa 40 na mga estudyanteng nanguna sa FTLE 2023, tanging sina Caumban at isang alumna mula sa Xavier University ang pasok sa listahan na hindi nagmula sa Unibersidad ng Pilipinas."
                        />
                        </div>
        </>
    )
}