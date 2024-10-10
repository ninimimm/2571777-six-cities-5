import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';

type AppScreenProps = {
  rentalOffersNumber: number;
};

function App({ rentalOffersNumber }: AppScreenProps): JSX.Element {
  return <WelcomeScreen rentalOffersNumber={rentalOffersNumber} />;
}

export default App;
