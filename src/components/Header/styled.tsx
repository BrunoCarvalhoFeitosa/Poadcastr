import styled from 'styled-components';

export const HeaderContainer = styled.header`
  margin: 0 auto;
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.5rem;
  background: var(--white);
  border-bottom: 1px solid var(--gray-100);
`;

export const HeaderContainerLogo = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderContainerLogoImage = styled.div`
  img {
    cursor: pointer;
  }
`;

export const HeaderContainerSlogan = styled.div`
  margin-left: 2rem;
  padding: 0.25rem 0 0.25rem 2rem;
  border-left: 1px solid var(--gray-100);
`;

export const HeaderContainerSloganText = styled.p`
  cursor: pointer;
`;

export const HeaderContainerDate = styled.div`

`;

export const HeaderContainerDateText = styled.p`
  text-transform: capitalize;
`;