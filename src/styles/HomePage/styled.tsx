import styled from 'styled-components';

export const HomeContainer = styled.div`
  padding: 0 4rem;
  height: calc(100vh - 6.5rem);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.25rem;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--purple-400);
  }
`;

export const HomeContainerLatestEpisodes = styled.section`
  box-sizing: border-box;
`;

export const HomeContainerLatestEpisodesTitle = styled.h2`
  margin-top: 3rem;
  margin-bottom: 1.5rem;
`;

export const HomeContainerLatestEpisodesList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  li {
    position: relative;
    display: flex;
    align-items: center;
    padding: 1.25rem;
    background: var(--white);
    border: 1px solid var(--gray-100);
    border-radius: 1.5rem;
  }
`;

export const HomeLatestEpisodesThumbnail = styled.div`
  img {
    width: 6rem;
    height: 6rem;
    border-radius: 1rem;
  }
`;

export const HomeLatestEpisodesDetails = styled.div`
  flex: 1;
  margin-left: 1rem;
`;

export const HomeLatestEpisodesDetailsName = styled.div`
  a {
    display: block;
    font-family: Lexend, sans-serif;
    font-weight: 600;
    text-decoration: none;
    line-height: 1.5rem;
    color: var(--gray-500);

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const HomeLatestEpisodesDetailsMembers = styled.div`
  font-size: 0.875rem;
  margin-top: 0.5rem;
  max-width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const HomeLatestEpisodesDetailsPublication = styled.div`
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.875rem; 
`;

export const HomeLatestEpisodesDetailsDuration = styled.div`
  display: inline-block;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  margin-left: 0.7rem;
  padding-left: 0.7rem;
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 3px;
    transform: translate(-50%, -50%);
    width: 4px;
    height: 4px;
    border-radius: 2px;
    background: var(--green-500);
  }
`;

export const HomeLatestEpisodesPlayer = styled.div`
  button {
    position: absolute;
    right: 2rem;
    bottom: 2rem;
    width: 2.5rem;
    height: 2.5rem;
    background: var(--white);
    border: 1px solid var(--gray-100);
    border-radius: 0.675rem;
    font-size: 0;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.93);
    }

    > img {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

export const HomeContainerAllEpisodes = styled.section`
  padding-bottom: 2rem;

  table {
    width: 100%;

    th,
    td {
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--gray-100);
    }

    th {
      font: 500 0.75rem Lexend, sans-serif;
      text-align: left;
      text-transform: uppercase;
      color: var(--gray-200);
    }

    td {
      font-size: 0%.875rem;

      img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 0.5rem;
      }

      a {
        font: 600 1rem Lexend, sans-serif;
        color: var(--gray-800);
        text-decoration: none;
        line-height: 1.4rem;

        &:hover {
          text-decoration: underline;
        }
      }

      button {
        width: 2rem;
        height: 2rem;
        background: var(--white);
        border: 1px solid var(--gray-100);
        border-radius: 0.5rem;
        font-size: 0;
        transition: filter 0.2s;

        &:hover {
          filter: brightness(0.93);
        }

        > img {
          width: 1.25rem;
          height: 1.25rem;
        }
      }
    }
  }
`;

export const HomeContainerAllEpisodesTitle = styled.h2`
  padding-top: 3rem;
  padding-bottom: 1rem;
`;