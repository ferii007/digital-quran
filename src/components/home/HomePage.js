import { useState } from "react"
import { CSSTransition } from "react-transition-group"
import PrayComponents from "./PrayComponents"
import SurahComponents from "./SurahComponents"

const HomePage = () => {
    const [activeCategory, setActiveCategory] = useState('surat')
    return(
        <section className="px-4 py-8">
            <div className="flex space-x-4 justify-around border-b-2 border-slate-100 mb-5">
                <button onClick={() => setActiveCategory("surat")} className={activeCategory === "surat" ? "category-active" : ""}>
                    Surat
                </button>

                <button onClick={() => setActiveCategory("doa")} className={activeCategory === "doa" ? "category-active" : ""}>
                    Doa-Doa
                </button>

                <button>Juz'Amma</button>
                <button>Tafsir</button>
            </div>

            <CSSTransition
                in={activeCategory === "surat"}
                timeout={1000}
                classNames="slide-up"
                unmountOnExit
            >
                <div>
                    <SurahComponents />
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeCategory === "doa"}
                timeout={1000}
                classNames="slide-up"
                unmountOnExit
            >
                <div>
                    <PrayComponents />
                </div>
            </CSSTransition>
        </section>
    )
}

export default HomePage