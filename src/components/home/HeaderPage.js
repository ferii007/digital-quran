import { useSelector } from 'react-redux'
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
            <div className="absolute flex flex-col items-center w-full py-8">
                <h1 className="text-emerald-400 drop-shadow-xl text-4xl font-bold tracking-wide mb-3">D-Qur'an</h1>
                <h1 className="text-emerald-400 text-4xl font-bold tracking-widest capitalize">{currentTime}</h1>
                <h1 className="text-slate-200 font-bold tracking-widest">{lokasiJadwal}</h1>

                <div className="text-white bg-emerald-400 bg-opacity-40 backdrop-blur-sm rounded-md px-7 py-3 font-bold tracking-widest mt-4">
                    <span className='capitalize'>{nextPrayerTime}</span>
                </div>
            </div>

            <img src={heroImg} alt="" className="" />
        </div>
    )
}

export default HeaderPage