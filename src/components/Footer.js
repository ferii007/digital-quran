import { Icon } from "@iconify/react"

const Footer = () => {
    return(
        <>
            <div className="bg-white px-7 py-4 fixed bottom-0 left-0 right-0 top-shadow" >
                <div className="flex items-center justify-between text-slate-500 opacity-75">
                    <Icon icon="healthicons:register-book-outline" className="w-8 h-8" />
                    <Icon icon="fa6-solid:mosque" className="w-8 h-8" />
                    <Icon icon="gis:compass-alt" className="w-8 h-8" />
                    <Icon icon="material-symbols:bookmark-outline" className="w-8 h-8" />
                </div>
            </div>
        </>
    )
}

export default Footer