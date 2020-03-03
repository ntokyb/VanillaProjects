const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//FUNCTIONS

//PLAY AND PAUSE ICON
function toggleVideoStatus(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

// UPDATE PLAY/PAUSE ICON
function updatePlayIcon(){
    if(video.paused){
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';

    }else{
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
}

//STOP VIDEO

function stopVideo(){
    video.currentTime = 0;
    video.pause();
}
//
function updateProgress(){
    progress.value = (video.currentTime / video.duration)*100;
}

//
function setVideoProgress(){
    video.currentTime = (+progress.value * video.duration)/100;

}

//EVENT LISTENERS
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);