"use client";

import ContentList from 'app/components/ContentList';
import { useState, useEffect } from 'react';

export default function Page() {
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
    const [isAudioReady, setIsAudioReady] = useState(false);
    
    useEffect(() => {
        const audioElement = new Audio('/sounds/ya.mp3');
        audioElement.addEventListener('canplaythrough', () => {
            setIsAudioReady(true);
        });
        audioElement.addEventListener('error', (e) => {
            console.error('오디오 로딩 오류:', e);
        });
        setAudio(audioElement);

        return () => {
            audioElement.removeEventListener('canplaythrough', () => {});
            audioElement.removeEventListener('error', () => {});
        };
    }, []);

    const playCatSound = () => {
        if (audio && isAudioReady) {
            audio.play().catch(e => console.error('재생 오류:', e));
        } else {
            console.log('오디오가 아직 준비되지 않았습니다.');
        }
    };

    return (
        <div className="container mx-auto px-4">
            <header className="flex justify-between items-center py-4">
                <h1 className="text-2xl font-bold">ddddd</h1>
                <div className="flex items-center">
                    <input type="search" placeholder="검색" className="mr-4 p-2 border rounded" />
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                </div>
            </header>

            <main>
                <button 
                    onClick={playCatSound} 
                    className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
                    disabled={!isAudioReady}
                >
                    {isAudioReady ? '고양이 소리 재생' : '오디오 로딩 중...'}
                </button>
                <ContentList />
            </main>
        </div>
    );
}