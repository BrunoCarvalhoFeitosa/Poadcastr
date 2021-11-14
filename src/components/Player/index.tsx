import { useEffect, useRef, useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Image from 'next/image';
import { usePlayer } from '../../contexts/PlayerContext';
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';

import * as S from './styled';

const Player = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);

  const {
    episodeList,
    currentEpisodeIndex,
    isPlaying,
    isLooping,
    isShuffling,
    setPlayingState,
    togglePlay,
    toggleLoop,
    toggleShuffle,
    playPrevious,
    playNext,
    clearPlayerState,
    hasPrevious,
    hasNext
  } = usePlayer();

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  function setupProgressListener() {
    audioRef.current.currentTime = 0;

    audioRef.current.addEventListener('timeupdate', () => {
      setProgress(Math.floor(audioRef.current.currentTime));
    })
  }

  function handleSeek(amount: number) {
    audioRef.current.currentTime = amount;
    setProgress(amount);
  }

  function handleEpisodeEnded() {
    hasNext
      ? playNext()
      : clearPlayerState();
  }

  const episode = episodeList[currentEpisodeIndex];

  return (
    <S.PlayerContainer>
      <S.PlayerContainerHeader>
        <S.PlayerContainerHeaderImage>
          <img src="/playing.svg" alt="Tocando agora" />
        </S.PlayerContainerHeaderImage>
        <S.PlayerContainerHeaderText>
          Tocando agora
        </S.PlayerContainerHeaderText>
      </S.PlayerContainerHeader>

      { episode ? (
        <S.PlayerContainerCurrentEpisode>
          <S.PlayerContainerCurrentEpisodeImage>
            <Image
              width={592}
              height={592}
              src={episode.thumbnail}
              objectFit="cover"
            />
          </S.PlayerContainerCurrentEpisodeImage>
          <S.PlayerContainerCurrentEpisodeTitle>
            {episode.title}
          </S.PlayerContainerCurrentEpisodeTitle>
          <S.PlayerContainerCurrentEpisodeMembers>
            {episode.members}
          </S.PlayerContainerCurrentEpisodeMembers>
        </S.PlayerContainerCurrentEpisode>
      ) : (
        <S.PlayerContainerEmptyEpisode>
          <S.PlayerContainerEmptyEpisodeText>
            Selecione um poadcast para ouvir
          </S.PlayerContainerEmptyEpisodeText>
        </S.PlayerContainerEmptyEpisode>
      )}

      <S.PlayerContainerFooter className={!episode ? 'empty' : ''}>
        <S.PlayerContainerFooterProgress className='empty'>
          <S.InitialProgress>{convertDurationToTimeString(progress)}</S.InitialProgress>
          <S.SliderProgress>
            { episode ? (
              <Slider
                max={episode.duration}
                value={progress}
                onChange={handleSeek}
                trackStyle={{ backgroundColor: '#04D361' }}
                railStyle={{ backgroundColor: '#9f75ff' }}
                handleStyle={{ borderColor: '#04D361', borderWidth: 4 }}
              />
            ) : (
              <S.EmptySlider />
            )}
          </S.SliderProgress>
          <S.FinalProgress>{convertDurationToTimeString(episode?.duration ?? 0)}</S.FinalProgress>
        </S.PlayerContainerFooterProgress>

        <S.PlayerContainerAudio>
          { episode && (
            <audio
              src={episode.url}
              ref={audioRef}
              autoPlay
              loop={isLooping}
              onPlay={() => setPlayingState(true)}
              onPause={() => setPlayingState(false)}
              onEnded={handleEpisodeEnded}
              onLoadedMetadata={setupProgressListener}
            />
          )}
        </S.PlayerContainerAudio>

        <S.PlayerContainerFooterButtons>
          <S.PlayerContainerButton>
            <button
              type="button"
              onClick={toggleShuffle}
              disabled={!episode || episodeList.length === 1}
              className={isShuffling ? 'isActive' : ''}
            >
              <img src="/shuffle.svg" alt="Embaralhar" />
            </button>
          </S.PlayerContainerButton>
          <S.PlayerContainerButton>
            <button
              type="button"
              onClick={playPrevious}
              disabled={!episode || !hasPrevious}
            >
              <img src="/play-previous.svg" alt="Tocar anterior" />
            </button>
          </S.PlayerContainerButton>
          <S.PlayerContainerButton>
            <button
              type="button"
              className="playButton"
              disabled={!episode}
              onClick={togglePlay}
            >
              { isPlaying
                ? <img src="/pause.svg" alt="Tocar/Pausar" />
                : <img src="/play.svg" alt="Tocar/Pausar" />
              }
            </button>
          </S.PlayerContainerButton>
          <S.PlayerContainerButton>
            <button
              type="button"
              onClick={playNext}
              disabled={!episode || !hasNext}
            >
              <img src="/play-next.svg" alt="Tocar Próxima" />
            </button>
          </S.PlayerContainerButton>
          <S.PlayerContainerButton>
            <button
              type="button"
              onClick={toggleLoop}
              className={isLooping ? 'isActive' : ''}
              disabled={!episode}
            >
              <img src="/repeat.svg" alt="Repetir" />
            </button>
          </S.PlayerContainerButton>
        </S.PlayerContainerFooterButtons>
      </S.PlayerContainerFooter>
    </S.PlayerContainer>
  );
};

export default Player;