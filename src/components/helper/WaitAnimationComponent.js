import lottie from "lottie-web"
import { useEffect } from "react"
import { useSelector } from 'react-redux'
import waitAnimationJSON from '../../assets/animations/wait-animation.json'

const WaitAnimationComponent = () => {
    const isLoadingAnimation = useSelector((state) => state.loadingAnimation);

    useEffect(() => {
        if (isLoadingAnimation === true) {
        }
        lottie.loadAnimation({
            container: document.querySelector("#animation"),
            animationData: waitAnimationJSON,
            renderer: "svg", // "canvas", "html"
            loop: true, // boolean
            autoplay: true, // boolean
          })
    }, [isLoadingAnimation])
    
    return(
        <div className={`translate-y-1/3`}>
            <div id="animation" className="w-72 h-72 m-auto" />
        </div>
    )
}

export default WaitAnimationComponent