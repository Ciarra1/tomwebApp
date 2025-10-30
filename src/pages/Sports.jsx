import Article from "../components/Article"
export default function Sports() {
    return (
        <>
            <div className="category-header sports-page-container">
                <div className="not-centered">
                <h1 className="category-header-title">Sports</h1>
                <p className="category-header-desc">From game-changing plays to inspiring athlete profiles, we've got your front-row seat to the exciting realm of sports.</p>
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