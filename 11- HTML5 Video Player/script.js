////////////////////////////////////////////////
// Get our elements - select them from the page
////////////////////////////////////////////////

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
// anything that has a data-skip attribute
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

////////////////////////////////////////////////
// Build out functions
////////////////////////////////////////////////
// toggles the play/pause
function togglePlay() {
    // paused is a property that lives on the video
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

//toggles play/pause button when played/paused
function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚'
    toggle.textContent = icon;
}

//skips
function skip() {
    console.log('skipping')
}


// hook up the event listeners 
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);
//bc there's more than one
skipButtons.forEach(button => button.addEventListener('click', skip))

