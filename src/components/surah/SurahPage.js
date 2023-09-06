import quranImg from './../../assets/image/quran.svg'

const SurahPage = () => {
    return(
        <section className="px-5 py-24 pb-[200000px]">
            <div className="card-gradient text-white relative overflow-hidden">
                <div className='px-3'>
                    <h1 className="font-semibold text-xl tracking-widest">Al-Fatihah</h1>
                    <h3 className="pb-2">Pembukaan</h3>

                    <hr className="pt-4 w-32" />

                    <h3 className="text-lg">MEKKAH - 7 AYAT</h3>
                </div>

                <img src={quranImg} alt="" className='absolute w-3/5 h-3/5 top-[39%] -right-7 opacity-90' />
            </div>
        </section>
    )
}

export default SurahPage