// import { useState } from "react"
// import DoaComponent from "./DoaComponent"
import SurahComponents from "./SurahComponents"
import HeaderPage from "./HeaderPage"

const HomePage = () => {
    // const [activeCategory, setActiveCategory] = useState('surat')

    return(
        <section className="bg-white h-screen overflow-scroll pb-32">
            <HeaderPage />
            
            <div className="py-8">
                {/* <div className="bg-white border-slate-100 border-b-2 bg-opacity-50 backdrop-blur-md sticky top-0 mb-5 z-10">
                    <div className="flex space-x-4 justify-around px-3 py-3">
                        <button onClick={() => setActiveCategory("surat")} className={activeCategory === "surat" ? "category-active" : ""}>
                            Surat
                        </button>

                        <button onClick={() => setActiveCategory("doa")} className={activeCategory === "doa" ? "category-active" : ""}>
                            Doa-Doa
                        </button>

                        <button>Juz'Amma</button>
                        <button>Tafsir</button>
                    </div>
                </div> */}

                <div className="px-4">
                    {/* {activeCategory === "surat" && <SurahComponents />}

                    {activeCategory === "doa" && <DoaComponent />} */}

                    <SurahComponents />
                </div>
            </div>
        </section>
    )
}

export default HomePage