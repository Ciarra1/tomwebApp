import Article from "../components/Article"

import sports1 from 'src/components/assets/Sports/[1] Tiger Spikers jolt Blue Eagles for V-League top seat.png'
import sports2 from 'src/components/assets/Sports/[2] Ang Liga UST settles for another draw versus UP.png'
import sports3 from 'src/components/assets/Sports/[3] EJ Obiena bounces back takes top podium of ISTAF Berlin.png'
import sports4 from 'src/components/assets/Sports/[4] Josh Ybañez’s monster game lifts UST past FEU for fourth V-League win.png'

export default function Sports() {
    return (
        <>
            <div className="category-header sports-page-container ">
                <div className="not-centered category-header-container">
                <h1 className="category-header-title">Sports</h1>
                <p className="category-header-desc">From game-changing plays to inspiring athlete profiles, we've got your front-row seat to the exciting realm of sports.</p>
                </div>
            </div>
            <div className="articles-div">
                        <Article
                        img={sports1}
                            category="SPORTS"
                            title="Tiger Spikers jolt Blue Eagles for V-League top seat"
                            date="August 21, 2023"
                            desc="The Tiger Spikers now hold a 5-1 win-loss card while the Blue Eagles dropped to 4-1 as the V-League semi-finals nears."
                        />
                        <Article
                        img={sports2}
                            category="SPORTS"
                            title="Ang Liga UST settles for another draw versus UP"
                            date="August 16, 2023"
                            desc="`Golden Booters’ veteran winger Chris Valderama answered back and scored the lone goal for UST right before halftime."
                        />
                        <Article
                        img={sports3}
                            category="SPORTS"
                            title="EJ Obiena bounces back takes top podium of ISTAF Berlin"
                            date="August 16, 2023"
                            desc="Following a last-spot finish of 5.60m in the recent Wanda Diamond League in Zurich, Switzerland on Thursday (Friday in Manila), the Thomasian alumnus rebounded big time with a 5.92m clear in three attempts to claim the top spot of the outdoor tournament."
                        />
                        <Article
                        img={sports4}
                            category="SPORTS"
                            title="Josh Ybañez’s monster game lifts UST past FEU for fourth V-League win"
                            date="August 16, 2023"
                            desc="Ybañez was virtually unstoppable in the match, posting 33 points off 29 attacks, three blocks, and one ace, punctuated by a cross-court hit that sealed the win and a semi-final berth for UST."
                        />
                        </div>
        </>
    )
}