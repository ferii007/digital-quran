import { Icon } from "@iconify/react"

const PrayPage = () => {
    return(
        <>
            <div className="relative h-screen w-screen">
                <div className="header-bg -z-10"></div>
                
                <div className="text-white font-bold px-8 py-6">
                    <h3 className="text-3xl tracking-widest ">Jadwal Sholat</h3>
                    <h4 className="text-xl tracking-wide">Kota Bandung</h4>
                    <h5 className="text-xl tracking-widest">01:38</h5>
                </div>

                <h1 className="text-center text-white text-3xl font-bold tracking-wider mt-20 mb-16">Subuh 4:37 AM</h1>

                <div className="px-8">
                    <div className="flex items-center justify-between bg-slate-100 font-bold py-5 px-4 text-xl tracking-wide rounded-full">
                        <Icon icon="ic:twotone-arrow-back-ios" className='w-7 h-7' />
                        11 September 2023
                        <Icon icon="ic:twotone-arrow-back-ios" className='w-7 h-7 rotate-180' />
                    </div>
                </div>

                <div className="text-white text-xl font-bold tracking-wider py-10 flex flex-col gap-5">
                    <div className="grid grid-cols-12 items-center">
                        <Icon icon="fa-solid:cloud-moon" className="w-10 h-10 col-span-3 col-start-2" />
                        <span className="col-span-2">Imsak</span>
                        <span className="col-span-5 text-right">4:27 AM</span>
                    </div>

                    <div className="grid grid-cols-12 items-center">
                        <Icon icon="fa-solid:cloud-moon" className="w-10 h-10 col-span-3 col-start-2" />
                        <span className="col-span-2">Subuh</span>
                        <span className="col-span-5 text-right">4:37 AM</span>
                    </div>

                    <div className="grid grid-cols-12 items-center">
                        <Icon icon="fa-solid:cloud-moon" className="w-10 h-10 col-span-3 col-start-2" />
                        <span className="col-span-2">Terbit</span>
                        <span className="col-span-5 text-right">5:53 AM</span>
                    </div>

                    <div className="grid grid-cols-12 items-center">
                        <Icon icon="fa-solid:cloud-moon" className="w-10 h-10 col-span-3 col-start-2" />
                        <span className="col-span-2">Dhuha</span>
                        <span className="col-span-5 text-right">6:15 AM</span>
                    </div>

                    <div className="grid grid-cols-12 items-center">
                        <Icon icon="fa-solid:cloud-moon" className="w-10 h-10 col-span-3 col-start-2" />
                        <span className="col-span-2">Dzhuhur</span>
                        <span className="col-span-5 text-right">11:54 AM</span>
                    </div>

                    <div className="grid grid-cols-12 items-center">
                        <Icon icon="fa-solid:cloud-moon" className="w-10 h-10 col-span-3 col-start-2" />
                        <span className="col-span-2">Ashar</span>
                        <span className="col-span-5 text-right">15:15 PM</span>
                    </div>

                    <div className="grid grid-cols-12 items-center">
                        <Icon icon="fa-solid:cloud-moon" className="w-10 h-10 col-span-3 col-start-2" />
                        <span className="col-span-2">Maghrib</span>
                        <span className="col-span-5 text-right">17:57 PM</span>
                    </div>

                    <div className="grid grid-cols-12 items-center">
                        <Icon icon="fa-solid:cloud-moon" className="w-10 h-10 col-span-3 col-start-2" />
                        <span className="col-span-2">Isya</span>
                        <span className="col-span-5 text-right">19:10 PM</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrayPage