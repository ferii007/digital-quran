import { Icon } from "@iconify/react"

const Footer = ({ index, onClick, active }) => {
    const iconSrc = [
        "healthicons:register-book-outline",
        "fa6-solid:mosque",
        "gis:compass-alt",
        "material-symbols:bookmark-outline",
    ]

    return(
        <>
            {/* <div className="bg-white px-7 py-4 fixed bottom-0 left-0 right-0 top-shadow" >
                <div className="flex items-center justify-between text-slate-500 opacity-75">
                    <Icon icon="healthicons:register-book-outline" className="w-8 h-8" />
                    <Icon icon="fa6-solid:mosque" className="w-8 h-8" />
                    <Icon icon="gis:compass-alt" className="w-8 h-8" />
                    <Icon icon="material-symbols:bookmark-outline" className="w-8 h-8" />
                </div>
            </div> */}

            <li className={`list-footer ${ active ? 'before:scale-100': "before:scale-0"}`}
                onClick={() => onClick()}
            >
                <Icon className={`${active ? "text-defaultColor opacity-100" : "text-slate-500 opacity-75"} w-8 h-8` } icon={iconSrc[index]} />
            </li>
        </>
    )
}

export default Footer