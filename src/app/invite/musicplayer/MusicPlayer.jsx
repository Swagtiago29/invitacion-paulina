import React from 'react'
import { useEffect, useRef, useState } from 'react';
import music1 from '../../../assets/music/music1.mp3';

function MusicPlayer() {

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    function formatTime(time) {
        if (!Number.isFinite(time)) return '0:00';

        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        return `${minutes}:${String(seconds).padStart(2, '0')}`;
    }

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.play().catch(() => { });

        const playOnScroll = () => {
            audio.play().catch(() => { });
        };

        window.addEventListener('scroll', playOnScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener('scroll', playOnScroll);
        };
    }, []);

    const toggleMusic = async () => {
        const audio = audioRef.current;

        if (!audio) return;

        console.log('Button clicked!');
        console.log('Paused:', audio.paused);
        console.log('Volume:', audio.volume);

        try {
            if (audio.paused) {
                audio.volume = 1;
                await audio.play();
                console.log('Playing:', !audio.paused);
            } else {
                audio.pause();
            }
        } catch (error) {
            console.error('Playback failed:', error);
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration || 0);
        }
    };

    const handleProgressClick = (event) => {
        const audio = audioRef.current;
        if (!audio || !duration) return;

        const rect = event.currentTarget.getBoundingClientRect();
        const ratio = (event.clientX - rect.left) / rect.width;
        audio.currentTime = Math.max(0, Math.min(1, ratio)) * duration;
    };

    return (
        <>
            <audio
                ref={audioRef}
                src={music1}
                loop
                preload="auto"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                onDurationChange={handleLoadedMetadata}
            />

            <div
                style={{
                    position: 'fixed',
                    top: '0px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 'min(400px, calc(100vw - 00px))',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '5px 16px',
                    paddingBottom: '10px',
                    borderRadius: '15px',
                    backgroundColor: '#344f6b8a',
                    boxShadow: '0 4px 18px rgba(0,0,0,0.18)',
                    zIndex: 1000,
                    boxSizing: 'border-box',
                }}
            >
                <button
                    onClick={toggleMusic}
                    aria-label={isPlaying ? 'Pause music' : 'Play music'}
                    style={{
                        border: 'none',
                        background: '#3879aa',
                        color: 'white',
                        borderRadius: '50%',
                        width: '22px',
                        height: '22px',
                        flexShrink: 0,
                        fontSize: '15px',
                        cursor: 'pointer',
                    }}
                >
                    {isPlaying ? 'Ⅱ' : '▷'}
                </button>

                <div style={{ position: 'relative', flex: 1, minWidth: 0, top: '10px' }}>
                    <div
                        onClick={handleProgressClick}
                        title="Click to seek"
                        style={{
                            height: '5px',
                            background: '#e8dce9a1',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            overflow: 'hidden',
                        }}
                    >
                        <div
                            style={{
                                width: duration
                                    ? `${(currentTime / duration) * 100}%`
                                    : '0%',
                                height: '100%',
                                background: '#3879aa',
                                borderRadius: '5px',
                                transition: 'width 0.15s linear',
                            }}
                        />
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            fontSize: '10px',
                            color: 'white',
                        }}
                    >
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MusicPlayer
