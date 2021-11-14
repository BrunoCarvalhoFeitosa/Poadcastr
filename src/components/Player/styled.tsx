import styled from 'styled-components';

export const PlayerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 3rem 4rem;
  width: 30rem;
  height: 100vh;
  background: var(--purple-500);
  color: var(--white);
`;

export const PlayerContainerHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const PlayerContainerHeaderImage = styled.div`
  margin-right: 1rem;
`;

export const PlayerContainerHeaderText = styled.strong`
  font-family: Lexend, sans-serif;
  font-weight: 600;
`;

export const PlayerContainerCurrentEpisode = styled.div`

`;

export const PlayerContainerCurrentEpisodeImage = styled.div`
  img {
    border-radius: 1.5rem;
  }
`;

export const PlayerContainerCurrentEpisodeTitle = styled.h4`
  display: block;
  margin-top: 2rem;
  font: 600 1.24rem Lexend, sans-serif;
  text-align: center;
  line-height: 1.75rem;
  color: var(--white);
`;

export const PlayerContainerCurrentEpisodeMembers = styled.span`
  display: block;
  margin-top: 1rem;
  line-height: 1.5rem;
  text-align: center;
  opacity: 0.6;
`;


export const PlayerContainerEmptyEpisode = styled.div`
  width: 100%;
  height: 20rem;
  padding: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px dashed var(--purple-300);
  border-radius: 1.5rem;
  background: linear-gradient(143.8deg, rgba(145, 100, 250, 0.8) 0%, rgba(0, 0, 0, 0) 100%);
`;

export const PlayerContainerEmptyEpisodeText = styled.div`
  text-align: center;
`;

export const PlayerContainerFooter = styled.div`
  width: 100%;
  align-self: stretch;
`;

export const PlayerContainerFooterProgress = styled.div`
  display: flex;
  align-items: center;
  gap: .6rem;
  font-size: 0.875rem;

  &.empty {
    opacity: 0.5;
  }
`;

export const InitialProgress = styled.span`
  display: inline-block;
  width: 4rem;
  text-align: center;
`;

export const SliderProgress = styled.div`
  flex: 1;
`;

export const EmptySlider = styled.div`
  width: 100%;
  height: 4px;
  background: var(--purple-300);
  border-radius: 2px;
`;

export const FinalProgress = styled.span`
  display: inline-block;
  width: 4rem;
  text-align: center;
`;

export const PlayerContainerAudio = styled.div`
  display: none;
`;

export const PlayerContainerFooterButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.5rem;
  gap: 1.5rem;

  button {
    background: transparent;
    border: 0;
    font-size: 0;

    &.playButton {
      width: 4rem;
      height: 4rem;
      border-radius: 1rem;
      background: var(--purple-400);
      transition: filter 0.2s;

      &:hover:not(:disabled) {
        filter: brightness(0.95);
      }
    }
  }
`;

export const PlayerContainerButton = styled.div`
  button {
    transition: filter 0.2s;

    &:disabled {
      opacity: 0.2;
      cursor: not-allowed;
    }

    &.isActive {
      filter: invert(0.35) sepia(1) saturate(3) hue-rotate(100deg);
    }

    &.isActive:hover {
      filter: brightness(0.6) invert(0.35) sepia(1) saturate(3) hue-rotate(100deg);
    }

    &:hover:not(:disabled) {
      filter: brightness(0.6);
    }
  }
`;

