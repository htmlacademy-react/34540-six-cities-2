import MainScreen from '../../pages/main-screen/main-screen.tsx';

type AppScreenProps = {
  placesCount: number;
}

function App({placesCount}: AppScreenProps) {
  return (
    <MainScreen placesCount={placesCount}/>
  );
}

export default App;
