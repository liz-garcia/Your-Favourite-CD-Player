// Audio effect
export const createAudio = (source) => {
    const audio = document.createElement('audio');
    audio.src = source;
    document.body.appendChild(audio);
    return audio;
    }