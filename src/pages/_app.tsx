import Header  from "../components/Header";
import Player from '../components/Player';
import { PlayerContextProvider } from "../contexts/PlayerContext";

import GlobalStyle from "../styles/Global/styled";
import * as S from '../styles/App/styled';

const MyApp = ({ Component, pageProps }) => {
  return (
    <PlayerContextProvider>
      <S.AppContainer>
        <S.AppContainerMain>
          <Header />
          <Component {...pageProps} />
        </S.AppContainerMain>

        <Player />
        <GlobalStyle />
      </S.AppContainer>
    </PlayerContextProvider>
  );
}

export default MyApp
