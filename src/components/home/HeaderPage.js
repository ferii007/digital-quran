import { useEffect, useState } from 'react'

import heroImg from './../../assets/image/hero-img-2.png'

const HeaderPage = () => {
    const [waktuSekarang, setWaktuSekarang] = useState('00:00');

    const getTime = async () => {
        const now = new Date();
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();

        return {currentHour: currentHour, currentMinute: currentMinute}
    }

    useEffect(() => {
        getTime().then((res) => {
            const currentTime = `${res.currentHour}:${res.currentMinute.toString().padStart(2, "0")}`;
            setWaktuSekarang(currentTime)
        })
    }, [])

    useEffect(() => {
        setInterval(() => {
            getTime().then((res) => {
                const newTime = `${res.currentHour}:${res.currentMinute.toString().padStart(2, "0")}`;
                setWaktuSekarang(newTime)
            })
        }, 5000);
    }, [])
      
    return(
        <div className="relative">
                <div className="absolute flex flex-col items-center w-full py-8">
                    <h1 className="text-emerald-400 drop-shadow-xl text-4xl font-bold tracking-wide mb-3">D-Qur'an</h1>
                    <h1 className="text-emerald-400 text-4xl font-bold tracking-widest">{waktuSekarang}</h1>
                    <h1 className="text-slate-200 font-bold tracking-widest">Kota Bandung</h1>

                    <div className="text-white bg-emerald-400 bg-opacity-40 backdrop-blur-sm rounded-md px-7 py-3 font-bold tracking-widest mt-4">
                        <span className='capitalize'>{'Subuh'}</span>
                        <span> {'04:37'}</span>
                    </div>
                </div>

                <img src={heroImg} alt="" className="" />
            </div>
    )
}

export default HeaderPage