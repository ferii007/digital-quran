import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from './store/actions/index'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import HomePage from "./components/home/HomePage"
import SurahPage from "./components/surah/SurahPage"
import LoadingAnimationComponent from "./components/helper/LoadingAnimationComponent"
import Footer from './components/Footer'
import PrayPage from './components/pray/PrayPage'
import { useEffect } from 'react'
import WaitAnimationComponent from './components/helper/WaitAnimationComponent'
// import DoaPage from './components/doa/DoaPage'

function App() {
  const dispatch = useDispatch();
	const { currentTime } = bindActionCreators(actionCreators, dispatch);
  const isReadSurah = useSelector((state) => state.readSurah.open);
  const isReadDoa = useSelector((state) => state.readDoa.open);
  const isLoadingAnimation = useSelector((state) => state.loadingAnimation);
  const isLoadingGetDataSholat = useSelector((state) => state.loadingGetDataSholat);

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3600,
        min: 1024
      },
      items: 1
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 1
    }
  };

  useEffect(() => {
      currentTime()
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <main className={`${isLoadingAnimation ? 'hidden' : 'block'}`}>
      {isReadSurah === false && isReadDoa === false && (
        <>
          <Carousel
            keyBoardControl={false}
            swipeable={false}
            draggable={false}
            arrows={false}
            showDots={true}
            partialVisible={true}
            slidesToSlide={1}
            rtl={false}
            containerClass=""
            centerMode={false}
            focusOnSelect={true}
            customDot={<Footer />}
            responsive={responsive}
          >
            <HomePage />
            <PrayPage />
            <div>Item 3</div>
            <div>Item 4</div>
          </Carousel>
          
          {/* <Footer /> */}
        </>
      )}

        {isReadSurah === true && <SurahPage />}
        {/* {isReadDoa === true && <DoaPage />} */}

        {
          isLoadingGetDataSholat === true && 
          <div className='bg-black bg-opacity-50 absolute top-0 bottom-0 left-0 right-0'>
            <div className='translate-y-full'>
              <WaitAnimationComponent />
            </div>
          </div>
        }
      </main>

      {
        isLoadingAnimation && <LoadingAnimationComponent />
      }
    </>
  );
}

export default App;
