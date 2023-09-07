import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../store/actions/index'
import { Icon } from '@iconify/react'
import heptagonImg from './../../assets/image/heptagon.svg'
import { useEffect } from 'react'

const ModalListSurah = ({setShowModalListSurah}) => {
    const dispatch = useDispatch();
	const { readDetailSurah } = bindActionCreators(actionCreators, dispatch);
    const surah = useSelector((state) => state.dataSurah);
    const detailSurah = useSelector((state) => state.readSurah.data);

    const readAnotherSurah = (nomor) => {
        setShowModalListSurah(false);
        readDetailSurah(nomor)
    }

    return(
        <div className="bg-black fixed top-0 bottom-0 left-0 right-0 bg-opacity-30 z-20">
            <div className="bg-white py-5 fixed top-10 bottom-10 left-3 right-3 rounded-xl shadow-2xl overflow-hidden">
                <div className='pb-3 border-b-2'>
                    <div className='flex justify-between items-center px-3 text-primaryColor'>
                        <h1 className='text-lg tracking-wide'>Daftar Surat</h1>

                        <Icon icon="ic:round-close" className='w-7 h-7' onClick={() => setShowModalListSurah(false)} />
                    </div>
                </div>

                <div className='h-full px-3 py-8 overflow-scroll'>
                    {
                        surah.length !== 0 && surah.map((surah, index) => (
                            <div key={index} className={`${detailSurah.namaLatin === surah.namaLatin ? 'card-active pointer-events-none' : 'card pointer-events-auto'} relative`} onClick={() => readAnotherSurah(surah.nomor)}>
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
                                </div>
                            </div>
                        ))  
                    }
                </div>
            </div>
        </div>
    )
}

export default ModalListSurah