import { useState, useEffect, useRef } from "react";

export function useLofiAudio(audioSrc: string = "/lofi.mp3") {
    const [isLofiPlaying, setIsLofiPlaying] = useState(false);
    const [lofiVolume, setLofiVolume] = useState(1);
    const lofiRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (lofiRef.current) {
            lofiRef.current.volume = lofiVolume;
        }
    }, [lofiVolume]);

    useEffect(() => {
        return () => {
            if (lofiRef.current) {
                lofiRef.current.pause();
                lofiRef.current = null;
            }
        };
    }, []);

    const toggleLofi = () => {
        if (!lofiRef.current) {
            lofiRef.current = new Audio(audioSrc);
            lofiRef.current.loop = true;
            lofiRef.current.volume = lofiVolume;
        }

        if (isLofiPlaying) {
            lofiRef.current.pause();
        } else {
            lofiRef.current
                .play()
                .catch((e) => console.error("Lofi play failed:", e));
        }
        setIsLofiPlaying(!isLofiPlaying);
    };

    return {
        isLofiPlaying,
        lofiVolume,
        setLofiVolume,
        toggleLofi,
    };
}
