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

//skip ahead and behind
function skip() {
    //name of attribute and property of attribute in dot .
    console.log(this.dataset.skip);
    video.currentTime += +this.dataset.skip
}

//range
function handleRangeUpdate() {
    //makes the value of the video equal to the value of where the mouse is on vid
    video[this.name] = this.value;
    // console.log(this.value);
    // console.log(this.name);
    // console.log(video[this.name])
}

//update the value of the progress bar
function handleProgress() {
    //update width of progress bar
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
    //where you click on progress / width of it
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    //when clicked update video time
    video.currentTime = scrubTime;
}


// hook up the event listeners 
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
//bc there's more than one
skipButtons.forEach(button => button.addEventListener('click', skip));
// for when we drag updates at stop
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
//updates while being dragged
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
let mousedown = false;
progressBar.addEventListener('click', scrub);
progressBar.addEventListener('mousemove', scrub);
progressBar.addEventListener('mousedown', () => mousedown);
progressBar.addEventListener('mouseup', scrub);
// (21.50)