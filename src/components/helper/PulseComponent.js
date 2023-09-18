const PulseComponent = () => {
    return(
        <div className='py-10 sm:py-24 flex gap-10 px-4'>
            <div className='w-full h-2'>
                <div class="h-full w-full bg-white rounded animate-pulse" />
            </div>

            <div className='w-full h-2'>
                <div class="h-full w-full bg-white rounded animate-pulse" />
            </div>

            <div className='w-full h-2'>
                <div class="h-full w-full bg-white rounded animate-pulse" />
            </div>
        </div>
    )
}

export default PulseComponent