import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../store/actions/index'
import { Icon } from "@iconify/react"

import { getCurrentTime, getNextPrayerTime, formatDate, formatDateToSlashFormat } from '../helper/dataTime'
import { useEffect, useState } from 'react'

const PrayPage = () => {
    const dispatch = useDispatch();
	const { getJadwalSholatAPI } = bindActionCreators(actionCreators, dispatch);
    const lokasiJadwal = useSelector((state) => state.dataPrayTime.lokasi);
    const semuaJadwal = useSelector((state) => state.dataPrayTime.semuaJadwal);
    const jadwalSholat = useSelector((state) => state.dataPrayTime.jadwalSholat);
    const date = useSelector((state) => state.dataPrayTime.date);
    const time = useSelector((state) => state.currentTime);

    const [currentDate, setCurrentDate] = useState(new Date());

    const nextPrayerTime = getNextPrayerTime(time, jadwalSholat);
    const currentTime = getCurrentTime(time);
    const formattedDate = formatDate(date)

    const handleNextDay = async () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + 1);
        setCurrentDate(newDate);
    }

    const handleBackDay = async () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() - 1);
        setCurrentDate(newDate);
    }

    useEffect(() => {
        getJadwalSholatAPI(formatDateToSlashFormat(currentDate), 1219)
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentDate])

    const icon = [
        "fa-solid:cloud-moon",
        "game-icons:sun-cloud",
        "tabler:sunset-2",
        "ri:sun-foggy-fill",
        "fa6-solid:cloud-sun",
        "ion:partly-sunny-sharp",
        "ri:moon-foggy-fill",
        "fa-solid:cloud-moon",
    ]

    return(
        <>
            <section className="relative h-screen overflow-scroll pb-32">
                <div className="header-bg -z-10"></div>
                
                <div className="text-white font-bold px-8 py-6 sm:py-20 flex flex-col gap-2">
                    <h3 className="text-3xl sm:text-5xl tracking-widest ">Jadwal Sholat</h3>
                    <h4 className="text-xl sm:text-3xl tracking-wide capitalize">{lokasiJadwal}</h4>
                    <h5 className="text-xl sm:text-3xl tracking-widest">{currentTime}</h5>
                </div>

                <h1 className="text-center text-white text-3xl sm:text-5xl font-bold tracking-wider mt-20 mb-16 capitalize">{nextPrayerTime}</h1>

                <div className="px-8">
                    <div className="flex items-center justify-between bg-slate-100 font-bold py-5 px-4 text-xl sm:text-3xl tracking-wide rounded-full">
                        <Icon icon="ic:twotone-arrow-back-ios" className='w-7 h-7 sm:w-9 sm:h-9'  onClick={() => handleBackDay()} />
                        {formattedDate}
                        <Icon icon="ic:twotone-arrow-back-ios" className='w-7 h-7 sm:w-9 sm:h-9 rotate-180' onClick={() => handleNextDay()} />
                    </div>
                </div>

                <div className="text-white text-xl sm:text-2xl font-bold tracking-wider py-10 sm:py-24 flex flex-col gap-5">
                    {
                        semuaJadwal.length !== 0 &&
                        semuaJadwal.map((data, index) => (
                            <div key={index} className="grid grid-cols-11 sm:grid-cols-12 px-6 sm:px-12 items-center">
                                <div className='col-span-4 sm:col-span-5'>
                                    <Icon icon={icon[index]} className="w-10 h-10 sm:w-12 sm:h-12 " />
                                </div>
                                <span className="col-span-5 sm:col-span-6 capitalize">{data[0]}</span>
                                <span className="col-span-2 sm:col-span-1 text-right">{data[1]}</span>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default PrayPage