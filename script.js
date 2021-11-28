console.log("Welcome to SONIC")

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/Material Girl - Madonna.mp3');
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "High On Life (feat. Bonn) - Martin Garrix, Bonn", filePath: "songs/High On Life (feat. Bonn) - Martin Garrix, Bonn.mp3", coverPath: "covers/1.jpg"},
    {songName: "Without Me - Halsey", filePath: "songs/Without Me - Halsey.mp3", coverPath: "covers/2.jpg"},
    {songName: "Bad Liar - Imagine Dragons", filePath: "songs/Bad Liar - Imagine Dragons.mp3", coverPath: "covers/3.jpg"},
    {songName: "Photograph - Ed Sheeran", filePath: "songs/Photograph - Ed Sheeran.mp3", coverPath: "covers/4.jpg"},
    {songName: "Better Now - Post Malone", filePath: "songs/Better Now - Post Malone.mp3", coverPath: "covers/5.jpg"},
    {songName: "Levitating (feat. DaBaby) - Dua Lipa", filePath: "songs/Levitating (feat. DaBaby) - Dua Lipa.mp3", coverPath: "covers/6.jpg"},
    {songName: "Material Girl - Madonna", filePath: "songs/Material Girl - Madonna.mp3", coverPath: "covers/7.jpg"},
    {songName: "What Makes You Beautiful - One Direction", filePath: "songs/What Makes You Beautiful - One Direction.mp3", coverPath: "covers/8.jpg"},
]       

songItems.forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //Update SEEKBAR
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = (e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = 'songs/${songIndex+1}.mp3';
        audioElement.currentTime = 0;
        audioElement,play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementsById('next').addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = 'songs/${songIndex+1}.mp3';
    audioElement.currentTime = 0;
    audioElement,play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementsById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = 'songs/${songIndex+1}.mp3';
    audioElement.currentTime = 0;
    audioElement,play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

