import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import MainArticle from './components/MainArticle'
import Section from './components/section'
import BigArticle from './components/BigArticle'
function App() {
  const latestItems = [
    {
      img: 'src/components/assets/Sports/[2] Ang Liga UST settles for another draw versus UP.png',
      category: 'SPORTS',
      date: 'September 09, 2023',
      desc: 'Ang Liga UST settles for another draw versus UP.png',
    },
    {
      img: 'src/components/assets/Sports/[3] EJ Obiena bounces back takes top podium of ISTAF Berlin.png',
      category: 'SPORTS',
      date: 'September 04, 2023',
      desc: 'EJ Obiena bounces back takes top podium of ISTAF Berlin.png',
    },
    {
      img: 'src/components/assets/Sports/[4] Josh Ybañez’s monster game lifts UST past FEU for fourth V-League win.png',
      category: 'SPORTS', 
      date: 'September 02, 2023',
      desc: 'Josh Ybañez’s monster game lifts UST past FEU for fourth V-League win.png',
    },
    {
      img: 'src/components/assets/Blogs/[1] Ang Agosto 2023 ay isang mabatong daan.png',
      category: 'BLOG',
      date: 'August 28, 2023',
      desc: 'Ang Agosto 2023 ay isang mabatong daan.png',
    },
  ];

  const moreItems = [
    {
      img: 'src/components/assets/Reports/[1] Mga Tomasino humakot ng pwesto sa August 2023 MTLE UST itinanghal na fifth top-performing school.png',
      category: 'REPORTS',
      date: 'August 21, 2023',
      desc: 'Mga Tomasino humakot ng pwesto sa August 2023 MTLE UST itinanghal na fifth top-performing school.png',
    },
    {
      img: 'src/components/assets/Blogs/[2] Liham para sa isang batang Tomasino.png',
      category: 'BLOGS',
      date: 'August 17, 2023',
      desc: 'Liham para sa isang batang Tomasino — payo at paalala para sa unang taon sa kolehiyo.',
    },
    {
      img: 'src/components/assets/Blogs/[3] Yakapin ang bawat sandali, Tomasino! Mga payo para sa unang taon sa kolehiyo.png',
      category: 'BLOGS',
      date: 'August 11, 2023',
      desc: 'Yakapin ang bawat sandali — praktikal na payo para sa unang taon sa kolehiyo.',
    },
    {
      img: "src/components/assets/Blogs/[4] ‘Barbie’ celebrates and criticizes the complexities of womanhood.png",
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
            image="src/components/assets/mainArticle_bg.jpeg"
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
              img="src/components/assets/Reports/[2] Tomasino pasok sa top 10 ng kauna-unahang food tech boards.png"
              category="REPORTS"
              date="August 16, 2023"
              title="Tomasino pasok sa top 10 ng kauna-unahang food tech boards"
              desc="Mula sa 40 na mga estudyanteng nanguna sa FTLE 2023, tanging sina Caumban at isang alumna mula sa Xavier University ang pasok sa listahan na hindi nagmula sa Unibersidad ng Pilipinas."
            />
            <BigArticle
              img="src/components/assets/Reports/[4] Tiongco ‘Maging totoo sa sarili, mamayagpag’.png"
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
