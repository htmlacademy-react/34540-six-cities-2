import {MainPage} from '../../pages/main-page/main-page.tsx';

type TAppProps = {
  placesCount: number;
}

function App({placesCount}: TAppProps) {
  return (
    <MainPage placesCount={placesCount}/>
  );
}

export {App};
