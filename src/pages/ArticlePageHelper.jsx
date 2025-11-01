import './ArticlePage.css'
import Section from '../components/section'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
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
export default function ArticlePageHelper ({img,title,title_desc,date,desc}){
    const RelatedArticlesItems = [
    {
      img: {sports1},
      category: 'SPORTS',
      date: 'September 10, 2023',
      desc: 'The Tiger Spikers now hold a 5-1 win-loss card while the Blue Eagles dropped to 4-1 as the V-League semi-finals',
    },
    {
      img: {sports2},
      category: 'SPORTS',
      date: 'September 08, 2023',
      desc: 'Ang Liga UST settles for another draw in a hard-fought match with UP.',
    },
    {
      img: {sports3},
      category: 'SPORTS',
      date: 'September 02, 2023',
      desc: 'EJ Obiena bounces back and takes the top podium at ISTAF Berlin.',
    },
    {
      img: {sports4},
      category: 'SPORTS',
      date: 'August 28, 2023',
      desc: 'Josh Ybañez’s monster game lifts UST past FEU for their fourth V-League win.',
    },
  ];
  const location = useLocation();

  // scroll to top (header) whenever the route location changes
  useEffect(() => {
    // use smooth behavior so user sees the jump to header
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.key]);
    return(
        
        <>
            <div className='upper-divider pink h-400px'></div>
            <div className='main-img-div heroContainer'>
            <img className=' w-826px h-520px main-img heroImg' src={img} alt="" />
            </div>
            <div className='title-info'>
                <h1 className='title center w-680px justified'>{title}</h1>
                <p className='title-desc center w-500px justified'>{title_desc}</p>
                <div className='publisher-date-container center'>
                    <div className='publisher-div center w-680px'>
                        <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2812 4.75C11.2812 3.96264 10.9685 3.20753 10.4117 2.65078C9.85497 2.09403 9.09986 1.78125 8.3125 1.78125C7.52514 1.78125 6.77003 2.09403 6.21328 2.65078C5.65653 3.20753 5.34375 3.96264 5.34375 4.75C5.34375 5.53736 5.65653 6.29247 6.21328 6.84922C6.77003 7.40597 7.52514 7.71875 8.3125 7.71875C9.09986 7.71875 9.85497 7.40597 10.4117 6.84922C10.9685 6.29247 11.2812 5.53736 11.2812 4.75ZM3.5625 4.75C3.5625 3.49022 4.06294 2.28204 4.95374 1.39124C5.84454 0.500445 7.05272 0 8.3125 0C9.57228 0 10.7805 0.500445 11.6713 1.39124C12.5621 2.28204 13.0625 3.49022 13.0625 4.75C13.0625 6.00978 12.5621 7.21796 11.6713 8.10876C10.7805 8.99956 9.57228 9.5 8.3125 9.5C7.05272 9.5 5.84454 8.99956 4.95374 8.10876C4.06294 7.21796 3.5625 6.00978 3.5625 4.75ZM1.82949 17.2188H14.7955C14.4652 14.8697 12.4465 13.0625 10.0084 13.0625H6.6166C4.17852 13.0625 2.15977 14.8697 1.82949 17.2188ZM0 17.8979C0 14.2426 2.96133 11.2812 6.6166 11.2812H10.0084C13.6637 11.2812 16.625 14.2426 16.625 17.8979C16.625 18.5064 16.1314 19 15.5229 19H1.10215C0.493555 19 0 18.5064 0 17.8979Z" fill="#191A1C"/>
                        </svg>
                        <p className='publisher-name center .w-680px'>TomasinoWeb</p>
                    </div>
                    <div className='date-div center w-680px'>
                        <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.76786 0.890625C5.76786 0.39707 5.36183 0 4.85714 0C4.35246 0 3.94643 0.39707 3.94643 0.890625V2.375H2.42857C1.08906 2.375 0 3.44004 0 4.75V5.34375V7.125V16.625C0 17.935 1.08906 19 2.42857 19H14.5714C15.9109 19 17 17.935 17 16.625V7.125V5.34375V4.75C17 3.44004 15.9109 2.375 14.5714 2.375H13.0536V0.890625C13.0536 0.39707 12.6475 0 12.1429 0C11.6382 0 11.2321 0.39707 11.2321 0.890625V2.375H5.76786V0.890625ZM1.82143 7.125H15.1786V16.625C15.1786 16.9516 14.9054 17.2188 14.5714 17.2188H2.42857C2.09464 17.2188 1.82143 16.9516 1.82143 16.625V7.125Z" fill="#191A1C"/>
                        </svg>
                        <p className='date center w-680px'>{date}</p>
                    </div>
                </div>
               
            </div>
            <div className='article-desc-container'>
        <div className='articlePage-desc center w-680px'>
          {desc.split('\n\n').map((paragraph, index) => (
            <p className='space' key={index}>{paragraph}</p>
          ))}
        </div>
        
            </div>
            <div className='last-section'>
                <div className='seperator-line'></div>
                <Section section_name="Related-Articles" items={RelatedArticlesItems} />
            </div>
        </>
    )
}