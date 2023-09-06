import { useSelector } from 'react-redux'

import HomePage from "./components/home/HomePage"
import SurahPage from "./components/surah/SurahPage"

function App() {
  const isReadSurah = useSelector((state) => state.readSurah.open);

  return (
    <main>
      {isReadSurah === false && <HomePage />}

      {isReadSurah === true && <SurahPage />}
    </main>
  );
}

export default App;
