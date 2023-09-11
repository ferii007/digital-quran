import { useSelector } from 'react-redux'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import HomePage from "./components/home/HomePage"
import SurahPage from "./components/surah/SurahPage"
import LoadingAnimationComponent from "./components/helper/LoadingAnimationComponent"
import Footer from './components/Footer'
import PrayPage from './components/pray/PrayPage'

function App() {
  const isReadSurah = useSelector((state) => state.readSurah.open);
  const isLoadingAnimation = useSelector((state) => state.loadingAnimation);

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
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

  return (
    <>
      <main className={`${isLoadingAnimation ? 'hidden' : 'block'}`}>
      {isReadSurah === false && (
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
            containerClass="container"
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
      </main>

      {
        isLoadingAnimation && <LoadingAnimationComponent />
      }
    </>
  );
}

export default App;
