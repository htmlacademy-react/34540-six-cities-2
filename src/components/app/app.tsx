import MainPage from '../../pages/main-page/main-page.tsx';

type TAppScreenProps = {
  placesCount: number;
}

function App({placesCount}: TAppScreenProps) {
  return (
    <MainPage placesCount={placesCount}/>
  );
}

export default App;
