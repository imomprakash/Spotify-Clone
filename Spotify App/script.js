console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: " Mast Nazron Se Mp3", filepath: "songs/1.mp3", coverpath: "covers/a.jpg" },
    { songName: " Meri Zindagi Hai Tu", filepath: "songs/2.mp3", coverpath: "covers/b.jpg" },
    { songName: " Pyaar Karte Ho Na", filepath: "songs/3.mp3", coverpath: "covers/c.jpg" },
    { songName: " Tumse Pyaar Karke", filepath: "songs/4.mp3", coverpath: "covers/d.jpg" },
    { songName: " Dua Karo Mp3", filepath: "songs/5.mp3", coverpath: "covers/e.jpg" },
    { songName: " Jiye Toh Jiye Kaise", filepath: "songs/6.mp3", coverpath: "covers/f.jpg" },
    { songName: " Kanika Kapoor - Buhe Bariyan", filepath: "songs/7.mp3", coverpath: "covers/g.jpg" },
    { songName: " Naina - Chaap Tilak", filepath: "songs/8.mp3", coverpath: "covers/h.jpg" },
    { songName: " Arijit Singh - Dhokha", filepath: "songs/9.mp3", coverpath: "covers/i.jpg" },
    { songName: " Dil Pe Zakhm Mp3", filepath: "songs/10.mp3", coverpath: "covers/j.jpg" },

]

songItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})


// audioElement.play( );


// Handle play/ pause click 
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }

})
// Listen to Event
audioElement.addEventListener('timeupdate', () => {

    // Update Seekbar 
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;

})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex + 1}.mp3`
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })

})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})