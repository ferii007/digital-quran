import { Icon } from "@iconify/react"

const Footer = () => {
    return(
        <>
            <div className="bg-white px-7 py-4 fixed bottom-0 left-0 right-0" style={{ boxShadow: '0px -3px 7px rgba(0, 0, 0, 0.1)' }}>
                <div className="flex items-center justify-between text-red-500">
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