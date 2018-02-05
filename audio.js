var focusMusicPlayer = new Howl({
    src: ['Sounds/FocusSound.mp3'],
    autoplay: true,
    loop: true,
    volume: 1,
});
// new Audio('Sounds/FocusSound.mp3');
// focusMusicPlayer.loop = true

function playQuestionFocusMusic() {
    focusMusicPlayer.play()
};

function playLastQuestionFocusMusic() {
    focusMusicPlayer = new Audio('Sounds/lastFocus.mp3')
    focusMusicPlayer.loop = true
    focusMusicPlayer.play()
}

function descreaseVolumeQuestionFocusMusic() {
    focusMusicPlayer.volume = 0.0;
}

function increaseVolumeQuestionFocusMusic() {
    focusMusicPlayer.volume = 1;
}

function playAudio(url, didEndCallback) {

    // var audio = new Audio(url);
    // audio.loop = false;
    // audio.play();
    // audio.onended = didEndCallback

    // createjs.Sound.registerSound(url, "x");
    // var audio = createjs.Sound.play("x");
    // audio.on('complete',didEndCallback,this);

    var sound = new Howl({
        src: [url],
        autoplay: true,
        loop: false,
        volume: 1,
        onend: didEndCallback
    });
    sound.play();
};