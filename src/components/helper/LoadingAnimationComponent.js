import lottie from "lottie-web"
import { useEffect } from "react"
import { useSelector } from 'react-redux'
import loadingAnimationJSON from '../../assets/animations/loading-animation.json'

const LoadingAnimationComponent = () => {
    const isLoadingAnimation = useSelector((state) => state.loadingAnimation);

    useEffect(() => {
        if (isLoadingAnimation === true) {
            lottie.loadAnimation({
                container: document.querySelector("#animation"),
                animationData: loadingAnimationJSON,
                renderer: "svg", // "canvas", "html"
                loop: true, // boolean
                autoplay: true, // boolean
              })
        }
    }, [isLoadingAnimation])
    
    return(
        <div className={`bg-white absolute z-50 top-0 bottom-0 left-0 right-0 flex items-center`}>
            <div id="animation" className="w-96 h-96 m-auto" />
        </div>
    )
}

export default LoadingAnimationComponent