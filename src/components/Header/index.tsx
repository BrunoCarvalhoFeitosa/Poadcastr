import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import Link from 'next/link';

import * as S from './styled';

const Header = () => {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR
  });

  return (
    <S.HeaderContainer>
      <S.HeaderContainerLogo>
        <S.HeaderContainerLogoImage>
          <Link href="/">
            <img src="/logo.svg" alt="Podcastr logo" />
          </Link>
        </S.HeaderContainerLogoImage>
        <S.HeaderContainerSlogan>
          <S.HeaderContainerSloganText>
              O melhor para você ouvir, sempre.
          </S.HeaderContainerSloganText>
        </S.HeaderContainerSlogan>
      </S.HeaderContainerLogo>
      <S.HeaderContainerDate>
        <S.HeaderContainerDateText>
          {currentDate}
        </S.HeaderContainerDateText>
      </S.HeaderContainerDate>
    </S.HeaderContainer>
  );
};

export default Header;