import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import MainArticle from './components/MainArticle'
import Section from './components/section'
import BigArticle from './components/BigArticle'
import blog1 from 'src/components/assets/Blogs/[1] Ang Agosto 2023 ay isang mabatong daan.png'
import blog2 from 'src/components/assets/Blogs/[2] Liham para sa isang batang Tomasino.png'
import blog3 from 'src/components/assets/Blogs/[3] Yakapin ang bawat sandali, Tomasino! Mga payo para sa unang taon sa kolehiyo.png'
import blog4 from 'src/components/assets/Blogs/[4] ‘Barbie’ celebrates and criticizes the complexities of womanhood.png'
import sports1 from 'src/components/assets/Sports/[1] Tiger Spikers jolt Blue Eagles for V-League top seat.png'
import sports2 from 'src/components/assets/Sports/[2] Ang Liga UST settles for another draw versus UP.png'
import sports3 from 'src/components/assets/Sports/[3] EJ Obiena bounces back takes top podium of ISTAF Berlin.png'
import sports4 from 'src/components/assets/Sports/[4] Josh Ybañez’s monster game lifts UST past FEU for fourth V-League win.png'
import reports1 from 'src/components/assets/Reports/[1] Mga Tomasino humakot ng pwesto sa August 2023 MTLE UST itinanghal na fifth top-performing school.png'
import reports2 from 'src/components/assets/Reports/[2] Tomasino pasok sa top 10 ng kauna-unahang food tech boards.png'
import reports3 from 'src/components/assets/Reports/[3] Mga Tomasino nanguna sa August 2023 BLEPP UST tinanghal na isa sa mga Top Performing-Schools-min.png'

import reports4 from 'src/components/assets/Reports/[4] Tiongco ‘Maging totoo sa sarili, mamayagpag’.png'
import mainImg from 'src/components/assets/mainArticle_bg.jpeg'
function App() {
  const latestItems = [
    {
      img: {sports1},
      category: 'SPORTS',
      date: 'September 09, 2023',
      desc: 'Ang Liga UST settles for another draw versus UP.png',
    },
    {
      img: {sports3},
      category: 'SPORTS',
      date: 'September 04, 2023',
      desc: 'EJ Obiena bounces back takes top podium of ISTAF Berlin.png',
    },
    {
      img: {sports4},
      category: 'SPORTS', 
      date: 'September 02, 2023',
      desc: 'Josh Ybañez’s monster game lifts UST past FEU for fourth V-League win.png',
    },
    {
      img: {blog1},
      category: 'BLOG',
      date: 'August 28, 2023',
      desc: 'Ang Agosto 2023 ay isang mabatong daan.png',
    },
  ];

  const moreItems = [
    {
      img: {reports1},
      category: 'REPORTS',
      date: 'August 21, 2023',
      desc: 'Mga Tomasino humakot ng pwesto sa August 2023 MTLE UST itinanghal na fifth top-performing school.png',
    },
    {
      img: {blog2},
      category: 'BLOGS',
      date: 'August 17, 2023',
      desc: 'Liham para sa isang batang Tomasino — payo at paalala para sa unang taon sa kolehiyo.',
    },
    {
      img: {blog3},
      category: 'BLOGS',
      date: 'August 11, 2023',
      desc: 'Yakapin ang bawat sandali — praktikal na payo para sa unang taon sa kolehiyo.',
    },
    {
      img: {blog4},
      category: 'BLOGS',
      date: 'July 31, 2023',
      desc: 'Barbie celebrates and criticizes the complexities of womanhood.png',
    },
  ];

  return (
    <>
      <main className='content'>
        <div className="not-centered right-part">
          <MainArticle
            image={mainImg}
            title="Tiger Spikers jolt Blue Eagles for V-League"
            category="Sports"
            desc="The Tiger Spikers now hold a 5-1 win-loss card while the Blue Eagles dropped to 4-1 as the V-League semi-finals"
            date="September 10, 2023"
          />
        </div>

        <Section section_name="Latest" items={latestItems} />

        <div className='BigArticleSection not-centered right-part'>
          <div className='BigArticleSectionContainer'>
            <BigArticle
              img={reports2}
              category="REPORTS"
              date="August 16, 2023"
              title="Tomasino pasok sa top 10 ng kauna-unahang food tech boards"
              desc="Mula sa 40 na mga estudyanteng nanguna sa FTLE 2023, tanging sina Caumban at isang alumna mula sa Xavier University ang pasok sa listahan na hindi nagmula sa Unibersidad ng Pilipinas."
            />
            <BigArticle
              img={reports4}
              category="REPORTS"
              date="August 08, 2023"
              title="Tiongco: ‘Maging totoo sa sarili, mamayagpag’"
              desc="Pagsulyap sa panayam at payo ni Tiongco ukol sa pagiging totoo sa sarili at pag-abot ng mga pangarap."
            />
          </div>
        </div>

        <Section section_name="More Articles" items={moreItems} />
      </main>
    </>
  )
}

export default App
