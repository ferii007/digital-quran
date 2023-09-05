import { useEffect, useState } from "react"
import axios from "axios"
import heptagonImg from './../../assets/image/heptagon.svg'

const SurahComponents = () => {
    const [dataSurah, setDataSurah] = useState([]);

    useEffect(() => {
        getDataSurah();
    }, [])

    const getDataSurah = async () => {
        try {
            const response = await axios.get("https://equran.id/api/v2/surat");
            setDataSurah(response.data.data)
        } catch (error) {
            
        }
    }
    return(
        dataSurah.length !== 0 && dataSurah.map((surah, index) => (
            <div key={index} className="card relative">
                <div className='flex justify-between items-center'>
                    <div className='flex items-center space-x-4'>
                        <div className='relative flex justify-center'>
                            <img src={heptagonImg} alt='ayat' className='w-12 h-12' />
                            <span className='absolute top-3 text-lg font-bold'>{index + 1}</span>
                        </div>

                        <div>
                            <h2 className='text-lg font-bold text-defaultFontColor'>{surah.namaLatin}</h2>
                            <h4 className='text-sm text-secondFontColor uppercase'>{surah.tempatTurun} - {surah.jumlahAyat} Ayat </h4>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-defaultColor">{surah.nama}</h2>
                </div>
            </div>
        ))  
    )
}

export default SurahComponents