import styled from 'styled-components';

export const EpisodeContainer = styled.div`
  margin: 0 auto;
  max-width: 45rem;
  padding: 3rem 2rem;
`;

export const EpisodeContainerThumbnail = styled.div`
  position: relative;

  img {
    border-radius: 1rem;
  }
`;

export const EpisodeContainerThumbnailBack = styled.div`
  button {
    width: 3rem;
    height: 3rem;
    border: 0;
    border-radius: 0.75rem;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
    z-index: 5;
    font-size: 0;
    background: var(--purple-500);
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.93);
    }
  }
`;

export const EpisodeContainerThumbnailPlay = styled.div`
  button {
    width: 3rem;
    height: 3rem;
    border: 0;
    border-radius: 0.75rem;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
    z-index: 5;
    font-size: 0;
    background: var(--green-500);
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.93);
    }
  }
`;

export const EpisodeContainerHeader = styled.div`
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--gray-100);
`;

export const EpisodeContainerHeaderTitle = styled.h2`
  margin-top: 2rem;
  margin-bottom: 1.5rem;
`;

export const EpisodeContainerHeaderItem = styled.span`
  display: inline-block;

  & + span {
    position: relative;
    margin-left: 1rem;
    padding-left: 1rem;

    &::before {
      content: '';
      width: 4px;
      height: 4px;
      border-radius: 2px;
      background: var(--green-500);
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(-50%, -50%);
    }
  }
`;

export const EpisodeContainerDescription = styled.div`
  margin-top: 2rem;
  line-height: 1.675rem;
  color: var(--gray-800);

  p {
    margin: 1.5rem 0;
  }
`;
