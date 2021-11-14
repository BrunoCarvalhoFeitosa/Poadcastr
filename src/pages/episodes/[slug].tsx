import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { usePlayer } from '../../contexts/PlayerContext';
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';
import { api } from '../../services/api';

import * as S from './styled';

type Episode = {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  members: string;
  duration: number;
  durationAsString: string;
  url: string;
  publishedAt: string;
};

type EpisodeProps = {
    episode: Episode;
};

const Episode = ({ episode }: EpisodeProps) => {
  const { play } = usePlayer();

  return (
    <S.EpisodeContainer>
      <Head>
        <title>Poadcastr | {episode.title}</title>
      </Head>
      <S.EpisodeContainerThumbnail>
        <S.EpisodeContainerThumbnailBack>
          <Link href="/">
            <button type="button">
              <img src="/arrow-left.svg" alt="Voltar" />
            </button>
          </Link>
        </S.EpisodeContainerThumbnailBack>
        <Image
          width={700}
          height={160}
          src={episode.thumbnail}
          objectFit="cover"
        />
        <S.EpisodeContainerThumbnailPlay>
          <button type="button" onClick={() => play(episode)}>
            <img src="/play.svg" alt="Tocar episódio" />
          </button>
        </S.EpisodeContainerThumbnailPlay>
      </S.EpisodeContainerThumbnail>

      <S.EpisodeContainerHeader>
        <S.EpisodeContainerHeaderTitle>
          {episode.title}
        </S.EpisodeContainerHeaderTitle>
        <S.EpisodeContainerHeaderItem>
          {episode.members}
        </S.EpisodeContainerHeaderItem>
        <S.EpisodeContainerHeaderItem>
          {episode.publishedAt}
        </S.EpisodeContainerHeaderItem>
        <S.EpisodeContainerHeaderItem>
          {episode.durationAsString}
        </S.EpisodeContainerHeaderItem>
      </S.EpisodeContainerHeader>

      <S.EpisodeContainerDescription
        dangerouslySetInnerHTML={{ __html: episode.description }}
      />
    </S.EpisodeContainer>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params;
  const { data } = await api.get(`episodes/${slug}`);

  const episode = {
    id: data.id,
    title: data.title,
    thumbnail: data.thumbnail,
    members: data.members,
    publishedAt: format(parseISO(data.published_at), 'd MMM yy', { locale: ptBR }),
    duration: Number(data.file.duration),
    durationAsString: convertDurationToTimeString(Number(data.file.duration)),
    description: data.description,
    url: data.file.url,
  }
  
  return {
    props: {
      episode
    },
    revalidate: 60 * 60 * 24, //24 hours
  }
}

export default Episode;