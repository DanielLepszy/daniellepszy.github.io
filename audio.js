var focusMusicPlayer = null

function playQuestionFocusMusic() {
    focusMusicPlayer = new Howl({
        src: ['./Sounds/FocusSound.mp3'],
        autoplay: true,
        loop: true,
        volume: 1
    });
    focusMusicPlayer.play()
};

function playLastQuestionFocusMusic(didEndCallback) {
    focusMusicPlayer.stop()
    var focusMusicPlayer = new Howl({
        src: ['./Sounds/lastFocus.mp3'],
        autoplay: true,
        loop: true,
        volume: 1,
        onend: didEndCallback
    });
    focusMusicPlayer.play()
}

function descreaseVolumeQuestionFocusMusic() {
    volume([0],[focusMusicPlayer]);
    //focusMusicPlayer.volume = 0.0;
}

function increaseVolumeQuestionFocusMusic() {
    focusMusicPlayer.volume = 1;
}

function playAudio(url, didEndCallback) {
    var sound = new Howl({
        src: [url],
        autoplay: true,
        loop: false,
        volume: 1,
        onend: didEndCallback
    });
    sound.play();
};