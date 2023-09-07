import { useSelector } from 'react-redux'

import HomePage from "./components/home/HomePage"
import SurahPage from "./components/surah/SurahPage"
import LoadingAnimationComponent from "./components/helper/LoadingAnimationComponent"

function App() {
  const isReadSurah = useSelector((state) => state.readSurah.open);
  const isLoadingAnimation = useSelector((state) => state.loadingAnimation);

  return (
    <>
      <main className={`${isLoadingAnimation ? 'hidden' : 'block'}`}>
        {isReadSurah === false && <HomePage />}

        {isReadSurah === true && <SurahPage />}
      </main>

      {
        isLoadingAnimation && <LoadingAnimationComponent />
      }
    </>
  );
}

export default App;
