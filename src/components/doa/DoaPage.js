import { Icon } from "@iconify/react"

const DoaPage = () => {
    return(
        <section className="bg-white h-screen overflow-scroll">
            <div className='text-primaryColor pt-8 pb-4 sticky top-0 z-10 bg-white bg-opacity-50 backdrop-blur-md shadow-md'>
                <div className='flex justify-between items-center px-5'>
                    <Icon icon="ic:twotone-arrow-back-ios" className='w-7 h-7 sm:w-8 sm:h-8' />

                    <h1 className='text-2xl sm:text-3xl font-bold tracking-widest'>D-Qur'an</h1>    

                    <Icon icon="simple-line-icons:book-open" className='w-7 h-7 sm:w-8 sm:h-8' />
                </div>
            </div>

            <div className='py-24 px-3'>
                {/* <div className="card-gradient text-white relative overflow-hidden">
                    <div className=''>
                        <div className='flex items-start space-x-1'>
                            <Icon icon="ion:mic-outline" className='w-5 h-5 sm:w-6 sm:h-6' />
                            <h3 className='mb-1 sm:text-xl'>Murottal: Misyari Rasyid Al-Afasi</h3>
                        </div>

                        <hr className="pt-3 w-3/4" />

                        <div className='px-3 w-3/5'>
                            <h1 className="font-semibold text-xl sm:text-2xl tracking-widest">{detailSurah.namaLatin}</h1>

                            <h3 className='text-sm sm:text-base'>{detailSurah.arti}</h3>

                            <h3 className="uppercase text-sm sm:text-base pb-3">{detailSurah.tempatTurun} - {detailSurah.jumlahAyat} AYAT</h3>

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
                </div> */}

                {/* <div className='bg-slate-50 p-5 mt-20 rounded-md'>
                    {
                        detailSurah.ayat.slice(0, currentBatch * ayatPerBatch).map((ayat, index) => (
                            <div key={index} className='mb-16'>
                                <h1 className='text-right text-2xl sm:text-3xl font-bold tracking-wide leading-relaxed mb-2'>{ayat.teksArab}</h1>
                                <h3 className='text-sm sm:text-base tracking-widest text-slate-700 mb-1'>{ayat.teksLatin}</h3>
                                <h3 className='text-sm sm:text-base opacity-40 tracking-wide italic mb-4'>{ayat.teksIndonesia}</h3>

                                <div className='card-2'>
                                    <h5 className='bg-defaultColor text-white w-8 h-8 rounded-full flex justify-center items-center text-sm sm:text-base'>{ayat.nomorAyat}</h5>

                                    <div className='flex items-center space-x-3 sm:space-x-5 text-defaultColor'>
                                    
                                        {
                                            audioStatus[ayat.nomorAyat] && isAudioPlaying ? 
                                            <Icon icon="ph:pause" className='w-6 h-6 sm:w-7 sm:h-7' onClick={() => pauseAudio(ayat.nomorAyat)} />
                                            :
                                            <Icon icon="ph:play" className='w-6 h-6 sm:w-7 sm:h-7' onClick={() => playAudio(ayat.audio['05'], ayat.nomorAyat)} />
                                        }
                                        <Icon icon="tdesign:share" className='w-6 h-6 sm:w-7 sm:h-7' onClick={() => pauseAudio(ayat.nomorAyat)} />
                                        <Icon icon="material-symbols:bookmark-outline" className='w-6 h-6 sm:w-7 sm:h-7' />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div> */}
            </div>
            
            {/* <CSSTransition unmountOnExit in={showModalListSurah} timeout={500} classNames="slide-down">
                <ModalListSurah setShowModalListSurah={setShowModalListSurah} />
            </CSSTransition> */}
        </section>
    )
}

export default DoaPage