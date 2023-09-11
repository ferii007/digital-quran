import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from './../../store/actions/index'
import { Icon } from '@iconify/react'
import { CSSTransition } from 'react-transition-group'
import quranImg from './../../assets/image/quran.svg'
import ModalListSurah from './ModalListSurah'

const SurahPage = () => {
    const dispatch = useDispatch();
	const { readSurah } = bindActionCreators(actionCreators, dispatch);
    const detailSurah = useSelector((state) => state.readSurah.data);
    const [showModalListSurah, setShowModalListSurah] = useState(false);
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isFullAudioPlaying, setIsFullAudioPlaying] = useState(false);
    const [audioSrc, setAudioSrc] = useState("");
    const [audioFullSrc, setAudioFullSrc] = useState("");
    const [audioStatus, setAudioStatus] = useState({});
    const [currentBatch, setCurrentBatch] = useState(1);
    const ayatPerBatch = 10;
    const batchInterval = 1000;

    useEffect(() => {
        const totalBatches = Math.ceil(detailSurah.ayat.length / ayatPerBatch);
        let batchCounter = 1;

        const interval = setInterval(() => {
            if (batchCounter <= totalBatches) {
                setCurrentBatch(batchCounter);
                batchCounter++;
            } else {
                clearInterval(interval);
            }
        }, batchInterval);

        return () => {
            clearInterval(interval);
        };
    }, [detailSurah]);


    const toggleAudioStatus = (noAyat) => {
        const updatedAudioStatus = { ...audioStatus };
        for (const key in updatedAudioStatus) {
          updatedAudioStatus[key] = false; // Menetapkan semua elemen menjadi false
        }
        updatedAudioStatus[noAyat] = true; // Menetapkan elemen yang diklik menjadi true
        setAudioStatus(updatedAudioStatus);
    };
      
    const playAudio = (audioSrc, noAyat) => {
        stopAudio();
        setAudioSrc(audioSrc);
        setIsAudioPlaying(true);
        setIsFullAudioPlaying(false);
      
        toggleAudioStatus(noAyat); // Mengatur ulang status audio sebelum memulai pemutaran
      
        // Mendapatkan elemen audio dan memulai pemutaran
        const audioElement = document.querySelector('#audio');
        if (audioElement) {
          audioElement.play();
        }
    };
      
    const pauseAudio = (noAyat) => {
        setIsAudioPlaying(false);
    
        // Mendapatkan elemen audio dan menghentikan pemutaran
        const audioElement = document.querySelector('#audio');
        if (audioElement) {
            audioElement.pause();
        }

        setAudioStatus({ ...audioStatus, [noAyat]: false });
    };

    const stopAudio = () => {
        setAudioSrc('');
        setAudioFullSrc('');
        setIsAudioPlaying(false);
        setIsFullAudioPlaying(false);
    };

    const endAudio = () => {
        stopAudio();
        toggleAudioStatus("");
    };

    const playFullAudio = (audioFullSrc) => {
        // Hentikan pemutaran audio reguler
        stopAudio();
        
        // Jika audio penuh sedang diputar, pause
        if (isFullAudioPlaying) {
          setIsFullAudioPlaying(false);
          pauseFullAudio(); // Fungsi baru untuk mem-pause audio penuh
        } else {
          // Jika audio penuh tidak sedang diputar, mulai pemutaran audio penuh
          setAudioFullSrc(audioFullSrc);
          setIsAudioPlaying(false);
          setIsFullAudioPlaying(true);
          
          // Mendapatkan elemen audio penuh dan memulai pemutaran
          const audioFullElement = document.querySelector('#audioFull');
          if (audioFullElement) {
            audioFullElement.play();
          }
        }
    };
      
    const pauseFullAudio = () => {
        setIsFullAudioPlaying(false);
        
        // Mendapatkan elemen audio penuh dan menghentikan pemutaran
        const audioFullElement = document.querySelector('#audioFull');
        if (audioFullElement) {
          audioFullElement.pause();
        }
    };
      
    return(
        <section className="bg-white h-full">
            <div className='text-primaryColor pt-8 pb-4 sticky top-0 z-10 bg-white bg-opacity-50 backdrop-blur-md shadow-md'>
                <div className='flex justify-between items-center px-5'>
                    <Icon icon="ic:twotone-arrow-back-ios" className='w-7 h-7' onClick={() => readSurah()} />

                    <h1 className='text-2xl font-bold tracking-widest'>D-Qur'an</h1>    

                    <Icon icon="simple-line-icons:book-open" className='w-7 h-7' onClick={() => setShowModalListSurah(true)} />
                </div>
            </div>

            <div className='py-24 px-3'>
                <div className="card-gradient text-white relative overflow-hidden">
                    <div className=''>
                        <div className='flex items-start space-x-1'>
                            <Icon icon="ion:mic-outline" className='w-5 h-5' />
                            <h3 className='mb-1'>Murottal: Misyari Rasyid Al-Afasi</h3>
                        </div>

                        <hr className="pt-3 w-3/4" />

                        <div className='px-3 w-3/5'>
                            <h1 className="font-semibold text-xl tracking-widest">{detailSurah.namaLatin}</h1>

                            <h3 className='text-sm'>{detailSurah.arti}</h3>

                            <h3 className="uppercase text-sm pb-3">{detailSurah.tempatTurun} - {detailSurah.jumlahAyat} AYAT</h3>

                            <hr className="pt-3 w-3/4" />

                            <div>
                                {
                                    isFullAudioPlaying ? 
                                    <Icon icon="ph:pause" className='w-9 h-9' onClick={() => pauseFullAudio(detailSurah.audioFull['05'])} />
                                    :
                                    <Icon icon="ph:play" className='w-9 h-9' onClick={() => playFullAudio(detailSurah.audioFull['05'])} />
                                }
                            </div>
                        </div>

                    </div>

                    <img src={quranImg} alt="" className='absolute w-3/5 h-3/5 top-[39%] -right-7 opacity-90' />
                </div>

                <div className='bg-slate-50 p-5 mt-20 rounded-md'>
                    {
                        detailSurah.ayat.slice(0, currentBatch * ayatPerBatch).map((ayat, index) => (
                            <div key={index} className='mb-16'>
                                <h1 className='text-right text-2xl font-bold tracking-wide leading-relaxed mb-2'>{ayat.teksArab}</h1>
                                <h3 className='text-sm tracking-widest text-slate-700 mb-1'>{ayat.teksLatin}</h3>
                                <h3 className='text-sm opacity-40 tracking-wide italic mb-4'>{ayat.teksIndonesia}</h3>

                                <div className='card-2'>
                                    <h5 className='bg-defaultColor text-white w-8 h-8 rounded-full flex justify-center items-center text-sm'>{ayat.nomorAyat}</h5>

                                    <div className='flex items-center space-x-3 text-defaultColor'>
                                    
                                        {
                                            audioStatus[ayat.nomorAyat] && isAudioPlaying ? 
                                            <Icon icon="ph:pause" className='w-5 h-5' onClick={() => pauseAudio(ayat.nomorAyat)} />
                                            :
                                            <Icon icon="ph:play" className='w-5 h-5' onClick={() => playAudio(ayat.audio['05'], ayat.nomorAyat)} />
                                        }
                                        <Icon icon="tdesign:share" className='w-5 h-5' onClick={() => pauseAudio(ayat.nomorAyat)} />
                                        <Icon icon="material-symbols:bookmark-outline" className='w-5 h-5' />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {
                    audioSrc !== '' &&
                    <audio
                        id='audio'
                        className='hidden'
                        src={audioSrc}
                        autoPlay={isAudioPlaying}
                        onEnded={endAudio}
                    />
                }

                {
                    audioFullSrc !== '' &&
                    <audio
                        id='audioFull'
                        className='hidden'
                        src={audioFullSrc}
                        autoPlay={isFullAudioPlaying}
                        onEnded={endAudio}
                    />
                }
            </div>
            
            <CSSTransition unmountOnExit in={showModalListSurah} timeout={500} classNames="slide-down">
                <ModalListSurah setShowModalListSurah={setShowModalListSurah} />
            </CSSTransition>
        </section>
    )
}

export default SurahPage