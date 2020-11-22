// Get our elements - select them from the page
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Build out functions

// toggles the play/pause
const togglePlay = () => {
    // paused is a property that lives on the video
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// toggle the button play/pause icone
function toggleButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    console.log(icon);
    toggle.textContent = icon;
}

// hook up the event listeners 
video.addEventListener('click', togglePlay)
video.addEventListener('click', togglePlay)
video.addEventListener('play', toggleButton)
video.addEventListener('pause', toggleButton)
