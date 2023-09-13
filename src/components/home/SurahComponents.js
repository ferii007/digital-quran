import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../store/actions/index'
import axios from "axios"
import heptagonImg from './../../assets/image/heptagon.svg'
import WaitAnimationComponent from "../helper/WaitAnimationComponent"
import { saveDataSurahToIndexedDB, getDataSurahFromIndexedDB } from "../helper/indexedDB"

const SurahComponents = () => {
    const dispatch = useDispatch();
	const { waitAnimation, dataSurah, readDetailSurah } = bindActionCreators(actionCreators, dispatch);
    const isWaitAnimation = useSelector((state) => state.waitAnimation);
    const surah = useSelector((state) => state.dataSurah);

    useEffect(() => {
        getDataSurah();
        // eslint-disable-next-line
    }, [])

    const getSurah = async () => {
        try {
            const response = await axios.get("https://equran.id/api/v2/surat");
            dataSurah(response.data.data)
            saveDataSurahToIndexedDB(response.data.data);
            waitAnimation(false)
        } catch (error) {
        
        }
    }

    const getDataSurah = async () => {
        waitAnimation(true)

        try {
            getDataSurahFromIndexedDB().then((data) => {
                setTimeout(async () => {
                    if (data.length !== 0) {
                        // console.log('Data dari IndexedDB:', data);
                        dataSurah(data)
                        waitAnimation(false)
                    }else {
                        getSurah();
                    }
                }, 500);
            });
        } catch (error) {
            getSurah();
        }
    }

    return(
        <>
            {isWaitAnimation &&  <WaitAnimationComponent />}
            
            {
                !isWaitAnimation && surah.length !== 0 && surah.map((surah, index) => (
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