import { useEffect, useState } from "react"
import axios from "axios"
import { Icon } from "@iconify/react"

const PrayPage = () => {
    const [dataSholatAPI, setDataSholatAPI] = useState({})
    const [dataJadwalSholat, setDataJadwalSholat] = useState([])

    useEffect(() => {
        getJadwalSholat()
    }, [])

    const getJadwalSholat = async () => {
        try {
            const response = await axios.get(`https://api.myquran.com/v1/sholat/jadwal/1219/2021/06/23`)
            console.log('response', response)

            const data = response.data.data
            const dataJadwal = {
                imsak: data.jadwal.imsak,
                subuh: data.jadwal.subuh,
                terbit: data.jadwal.terbit,
                dhuha: data.jadwal.dhuha,
                dzuhur: data.jadwal.dzuhur,
                ashar: data.jadwal.ashar,
                maghrib: data.jadwal.maghrib,
                isya: data.jadwal.isya,
            }
            
            setDataSholatAPI(data)
            setDataJadwalSholat(Object.entries(dataJadwal))
        } catch (error) {
            
        }
    }
    return(
        <>
            <div className="relative h-screen w-screen">
                <div className="header-bg -z-10"></div>
                
                <div className="text-white font-bold px-8 py-6 flex flex-col gap-2">
                    <h3 className="text-3xl tracking-widest ">Jadwal Sholat</h3>
                    <h4 className="text-xl tracking-wide">{dataSholatAPI.lokasi}</h4>
                    <h5 className="text-xl tracking-widest">01:38</h5>
                </div>

                <h1 className="text-center text-white text-3xl font-bold tracking-wider mt-20 mb-16">Subuh 4:37 AM</h1>

                <div className="px-8">
                    <div className="flex items-center justify-between bg-slate-100 font-bold py-5 px-4 text-xl tracking-wide rounded-full">
                        <Icon icon="ic:twotone-arrow-back-ios" className='w-7 h-7' />
                        11 September 2023
                        <Icon icon="ic:twotone-arrow-back-ios" className='w-7 h-7 rotate-180' />
                    </div>
                </div>

                <div className="text-white text-xl font-bold tracking-wider py-10 flex flex-col gap-5">
                    {
                        dataJadwalSholat.length !== 0 &&
                        dataJadwalSholat.map((data, index) => (
                            <div key={index} className="grid grid-cols-12 items-center">
                                <Icon icon="fa-solid:cloud-moon" className="w-10 h-10 col-span-3 col-start-2" />
                                <span className="col-span-2 capitalize">{data[0]}</span>
                                <span className="col-span-5 text-right">{data[1]} AM</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default PrayPage