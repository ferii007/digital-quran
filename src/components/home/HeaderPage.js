import { useSelector } from 'react-redux'
// import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component'
import { getCurrentTime, getNextPrayerTime } from '../helper/dataTime'

import heroImg from './../../assets/image/hero-img-2.png'

const HeaderPage = () => {
    const lokasiJadwal = useSelector((state) => state.dataPrayTime.lokasi);
    const jadwalSholat = useSelector((state) => state.dataPrayTime.jadwalSholat);
    const time = useSelector((state) => state.currentTime);

    const currentTime = getCurrentTime(time);
    const nextPrayerTime = getNextPrayerTime(time, jadwalSholat);
      
    return(
        <div className="relative">
            <div className="absolute flex flex-col items-center w-full py-8 sm:py-24">
                <h1 className="text-emerald-400 drop-shadow-xl text-4xl sm:text-6xl font-bold tracking-wide mb-3">D-Qur'an</h1>
                <h1 className="text-emerald-400 text-4xl sm:text-6xl font-bold tracking-widest capitalize">{currentTime}</h1>
                <h1 className="text-slate-200 sm:text-xl font-bold tracking-widest">{`${lokasiJadwal ? lokasiJadwal : '.....'}`}</h1>

                <div className="text-white bg-emerald-400 bg-opacity-40 backdrop-blur-sm rounded-md px-7 py-3 font-bold tracking-widest mt-4 sm:text-xl">
                    <span className='capitalize'>{`${nextPrayerTime ? nextPrayerTime : '.....'}`}</span>
                </div>
            </div>

            <div className='h-72 sm:h-[30rem]'>
                <img src={heroImg} alt="" className="w-full h-full" />
            </div>
        </div>
    )
}

export default HeaderPage