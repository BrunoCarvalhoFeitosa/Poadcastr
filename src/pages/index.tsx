import { GetStaticProps } from "next";
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import ptBR from "date-fns/locale/pt-BR";
import { usePlayer } from "../contexts/PlayerContext";
import { convertDurationToTimeString } from "../utils/convertDurationToTimeString";
import { api } from "../services/api";

import * as S from '../styles/HomePage/styled';

type Episode = {
  id: string;
  title: string;
  thumbnail: string;
  members: string;
  duration: number;
  durationAsString: string;
  url: string;
  publishedAt: string;
};

type HomeProps = {
  latestEpisodes: Episode[];
  allEpisodes: Episode[];
};

const Home = ({ latestEpisodes, allEpisodes }: HomeProps) => {
  const { playList } = usePlayer(),
        episodeList = [...latestEpisodes, ...allEpisodes];

  return (
    <S.HomeContainer>
      <Head>
        <title>Poadcastr | um poadcast para programadores e programadoras.</title>
      </Head>
      <S.HomeContainerLatestEpisodes>
        <S.HomeContainerLatestEpisodesTitle>
          Últimos lançamentos
        </S.HomeContainerLatestEpisodesTitle>
        <S.HomeContainerLatestEpisodesList>
          {latestEpisodes.map((episode, index) => {
            return (
              <li key={episode.id}>
                <S.HomeLatestEpisodesThumbnail>
                  <Image
                    width={192}
                    height={192}
                    src={episode.thumbnail}
                    alt={episode.title}
                    objectFit="cover"
                  />
                </S.HomeLatestEpisodesThumbnail>

                <S.HomeLatestEpisodesDetails>
                  <S.HomeLatestEpisodesDetailsName>
                    <Link href={`/episodes/${episode.id}`}>
                      <a>{episode.title}</a>
                    </Link>
                  </S.HomeLatestEpisodesDetailsName>
                  <S.HomeLatestEpisodesDetailsMembers>
                    {episode.members}
                  </S.HomeLatestEpisodesDetailsMembers>
                  <S.HomeLatestEpisodesDetailsPublication>
                    {episode.publishedAt}
                  </S.HomeLatestEpisodesDetailsPublication>
                  <S.HomeLatestEpisodesDetailsDuration>
                    {episode.durationAsString}
                  </S.HomeLatestEpisodesDetailsDuration>
                </S.HomeLatestEpisodesDetails>

                 <S.HomeLatestEpisodesPlayer>
                    <button type="button" onClick={() => playList(episodeList, index)}>
                      <img src="/play-green.svg" alt="Tocar episódio" />
                    </button>
                  </S.HomeLatestEpisodesPlayer>
              </li>
            );
          })}
        </S.HomeContainerLatestEpisodesList>
      </S.HomeContainerLatestEpisodes>

      <S.HomeContainerAllEpisodes>
        <S.HomeContainerAllEpisodesTitle>
          Todos episódios
        </S.HomeContainerAllEpisodesTitle>
        <table cellSpacing={0}>
          <thead>
            <th></th>
            <th>Podcast</th>
            <th>Integrantes</th>
            <th>Data</th>
            <th>Duração</th>
            <th></th>
          </thead>
          <tbody>
            {allEpisodes.map((episode, index) => {
              return (
                <tr key={episode.id}>
                  <td style={{ width: 80 }}>
                    <Image
                      width={120}
                      height={120}
                      src={episode.thumbnail}
                      alt={episode.title}
                      objectFit="cover"
                    />
                  </td>
                  <td>
                    <Link href={`/episodes/${episode.id}`}>
                      <a>{episode.title}</a>
                    </Link>
                  </td>
                  <td>{episode.members}</td>
                  <td style={{ width: 130 }}>{episode.publishedAt}</td>
                  <td>{episode.durationAsString}</td>
                  <td>
                    <button type="button" onClick={() => playList(episodeList, index + latestEpisodes.length)}>
                      <img src="/play-green.svg" alt="Tocar episódio" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

      </S.HomeContainerAllEpisodes>
    </S.HomeContainer>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('episodes', {
    params: {
      _limit: 12,
      _sort: 'published_at',
      _order: 'desc'
    }
  });

  const episodes = data.map(episode => {
    return {
      id: episode.id,
      title: episode.title,
      thumbnail: episode.thumbnail,
      members: episode.members,
      publishedAt: format(parseISO(episode.published_at), 'd MMM yy', { locale: ptBR }),
      duration: Number(episode.file.duration),
      durationAsString: convertDurationToTimeString(Number(episode.file.duration)),
      url: episode.file.url,
    }
  });

  const latestEpisodes = episodes.slice(0, 2),
        allEpisodes = episodes.slice(2, episodes.length);

  return {
    props: {
      latestEpisodes,
      allEpisodes
    },
    revalidate: 60 * 60 * 8, //8 hours
  };
}

export default Home;