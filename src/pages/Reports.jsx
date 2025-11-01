import Article from "../components/Article";
import reports1 from 'src/components/assets/Reports/[1] Mga Tomasino humakot ng pwesto sa August 2023 MTLE UST itinanghal na fifth top-performing school.png'
import reports2 from 'src/components/assets/Reports/[2] Tomasino pasok sa top 10 ng kauna-unahang food tech boards.png'
import reports3 from 'src/components/assets/Reports/[3] Mga Tomasino nanguna sa August 2023 BLEPP UST tinanghal na isa sa mga Top Performing-Schools-min.png'

import reports4 from 'src/components/assets/Reports/[4] Tiongco ‘Maging totoo sa sarili, mamayagpag’.png'

export default function Reports() {
    return (
        <>
        <div className="page-container">
            <div className="category-header reports-page-container ">
                <div className="not-centered category-header-container">
                <h1 className="category-header-title">Reports</h1>
                <p className="category-header-desc">Delve into in-depth analysis and comprehensive reports on trending topics, industry trends, and insightful research findings.</p>
                </div>
            </div>
            <div className="articles-div">
            <Article
            img={reports1}
                category="REPORTS"
                title="Mga Tomasino humakot ng pwesto sa August 2023 MTLE UST itinanghal na fifth top-performing school"
                date="August 21, 2023"
                desc="367 mula sa 391 na mga Tomasinong kumuha ng pagsusulit ang nakapasa dahilan upang itanghal na pang lima ang Unibersidad sa mga top-performing schools sa August 2023 MTLE."
            />
            <Article
            img={reports2}
                category="REPORTS"
                title="Tomasino pasok sa top 10 ng kauna-unahang food tech boards"
                date="August 16, 2023"
                desc="Mula sa 40 na mga estudyanteng nanguna sa FTLE 2023, tanging sina Caumban at isang alumna mula sa Xavier University ang pasok sa listahan na hindi nagmula sa Unibersidad ng Pilipinas."
            />
            <Article
            img={reports3}
                category="REPORTS"
                title="Mga Tomasino nanguna sa August 2023 BLEPP UST tinanghal na isa sa mga Top Performing-Schools-min"
                date="August 16, 2023"
                desc="Pitong Tomasino ang nakasungkit ng pwesto sa August 2023 Psychometrician licensure examination habang isa naman para sa Psychology Licensure Examination."
            />
            <Article
            img={reports4}
                category="REPORTS"
                title="Tiongco ‘Maging totoo sa sarili, mamayagpag’"
                date="August 16, 2023"
                desc="ICYMI: Ayon kay Tiongco, hindi kailangang itago ang totoong sarili upang mapabilang sa paaralan dahil ang pagiging totoo pati na rin ang pagtitiwala ang bubuo ng makabuluhang koneksyon sa buhay."
            />
            </div>
        </div>
        </>
    )
}