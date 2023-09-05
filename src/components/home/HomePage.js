import { useEffect } from "react"
import axios from "axios"
// import heroImg from './../../assets/image/hero-img.png'

const HomePage = () => {
    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        try {
            const testing = await axios.get("https://api.myquran.com/v1/sholat/kota/semua");
            console.log('testing', testing)
        } catch (error) {
            
        }
    }

    return(
        // <section className="relative py-10 w-screen overflow-hidden">
        //     <div className="px-3">
        //         <h1 className="text-4xl text-defaultColor font-bold mb-1">
        //             D-Qur'an
        //         </h1>

        //         <h3 className="w-1/2 mb-4">
        //             Digital Al-Qur'an dan Doa-Doa
        //         </h3>

        //         <h1 className="text-5xl font-bold">
        //             19:21
        //         </h1>

        //         <h4 className="font-bold mb-5">
        //             Kota Bandung
        //         </h4>

        //         <button className="bg-primaryColor text-white px-5 py-3 rounded-lg font-bold tracking-wider">
        //             Subuh 4:17 AM
        //         </button>
        //     </div>

        //     <img src={heroImg} alt="" className="absolute top-[12%] -right-4 w-2/3" />
        // </section>

        <section className="px-5 py-8">
            <div className="p-5 relative flex justify-center">
                <div className="heptagon block">
                </div>
                <h5 className="absolute text-7xl top-[35%]">1</h5>
            </div>
        </section>
    )
}

export default HomePage