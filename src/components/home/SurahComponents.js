import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../store/actions/index'
import axios from "axios"
import heptagonImg from './../../assets/image/heptagon.svg'
import WaitAnimationComponent from "../helper/WaitAnimationComponent"

const SurahComponents = () => {
    const dispatch = useDispatch();
	const { readSurah, loadingAnimation, waitAnimation } = bindActionCreators(actionCreators, dispatch);
    const isWaitAnimation = useSelector((state) => state.waitAnimation);
    const [dataSurah, setDataSurah] = useState([]);

    useEffect(() => {
        getDataSurah();
        // eslint-disable-next-line
    }, [])

    const getDataSurah = async () => {
        waitAnimation(true)

        setTimeout(async () => {
            try {
                const response = await axios.get("https://equran.id/api/v2/surat");
                setDataSurah(response.data.data)
                waitAnimation(false)
            } catch (error) {
            
            }
        }, 500);
    }

    const readDetailSurah = async (noSurah) => {
        loadingAnimation(true)
        setTimeout(async () => {
            try {
                const response = await axios.get(`https://equran.id/api/v2/surat/${noSurah}`);
                readSurah({
                    open: true,
                    data: response.data.data
                });
                loadingAnimation(false)
                console.log('response', response.data.data)
            } catch (error) {
                loadingAnimation(false)
            }
        }, 1600);
    }

    return(
        <>
            {isWaitAnimation &&  <WaitAnimationComponent />}
            
            {
                !isWaitAnimation && dataSurah.length !== 0 && dataSurah.map((surah, index) => (
                    <div key={index} className="card relative" onClick={() => readDetailSurah(surah.nomor)}>
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
            }
        </>
    )
}

export default SurahComponents