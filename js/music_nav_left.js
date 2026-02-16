// --- 1. DATA PLAYLIST ---
// Gunakan link raw.githubusercontent.com agar file bisa di-stream langsung
// --- 1. DATA PLAYLIST ---
const songList = [
    { 
        title: "Whataya Want From Me", 
        artist: "Adam Lambert", 
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/what_from_me.mp3", 
        cover: "linear-gradient(135deg, #feb47b, #ff7e5f)"
    }, 
    { 
        title: "Hall of Fame", 
        artist: "The Script ft. will.i.am", 
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/hall%20of%20fame.mp3", 
        cover: "linear-gradient(135deg, #4facfe, #00f2fe)"
    },
    {   
        title: "It's My Life",
        artist: "Bon Jovi",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/its_My_Life.mp3",
        cover: "linear-gradient(135deg, #43e97b, #38f9d7)"
    }, 
{   
        title: "Green Day - 21 Guns",
        artist: "Green Day",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/Green%20Day_21%20Gun.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
    title: "Iris",
    artist: "Goo Goo Dolls",
    // Gunakan format RAW agar lancar jaya
    src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/Iris.mp3",
    cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    }, 

{
        title: "Don't Cry",
        artist: "Guns N' Roses",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/dont%20cry%20gnr.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Bad Liar",
        artist: "Imagine Dragons",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/bad%20liar.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "In The End",
        artist: "Linkin Park",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/in%20the%20end.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
    title: "Young Dumb & Broke",
    artist: "Khalid",
    // Link sudah diperbaiki ke format RAW yang benar
    src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/young_dumb.mp3",
    cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Slow Dancing in the Burning Room",  
        artist: "John Mayer",
        // Pastikan file ini memang eksis di repo GitHub lo
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/slow_dacing.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Can We Kiss Forever?",
        artist: "Kina ft. Adriana Proenza",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/can_we_kiss.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Poker Face",
        artist: "Lady Gaga",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/poker_face.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Rain On Me",
        artist: "Lady Gaga & Ariana Grande",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/rain_on_me.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Numb",
        artist: "Linkin Park",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/numb.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Perfect",
        artist: "Simple Plan",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/Perfect_simpel.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Surender",
        artist: "Natalie Taylor",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/surender.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Something Like This",
        artist: "The Chainsmokers & Coldplay",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/something%20like%20this.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Akatsuki No Ito",
        artist: "Wakaki",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/akatsuki%20no%20ito.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "What I've Done",
        artist: "Linkin Park",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/what%20ive%20done.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    },
{
        title: "Where You Will Go",
        artist: "OneRepublic",
        // Link sudah diperbaiki ke format RAW yang benar
        src: "https://raw.githubusercontent.com/MrSukses89/my_music/main/where%20you%20will%20go.mp3",
        cover: "linear-gradient(135deg, #ff7e5f, #feb47b)"
    }
]; // <-- Pastikan ada kurung penutup ini!

// --- 2. SETUP AUDIO ---
let trackIndex = 0;
let isPlaying = false;
let audio = new Audio();
audio.crossOrigin = "anonymous"; // Penting agar tidak kena blokir CORS

// --- 3. FUNGSI LOAD LAGU ---
function loadTrack(index) {
    if (!songList[index]) return; 
    
    audio.src = songList[index].src;
    audio.load();
    
    // Update UI
    const titleEl = document.getElementById("song-title");
    const artistEl = document.getElementById("artist-name");
    if(titleEl) titleEl.innerText = songList[index].title;
    if(artistEl) artistEl.innerText = songList[index].artist;
    
    const albumArt = document.querySelector(".album-art");
    if(albumArt) albumArt.style.background = songList[index].cover;
    
    renderPlaylist();
}

// --- 4. KONTROL PLAY/PAUSE ---
function playMusic() {
    const playBtn = document.getElementById("play-btn");
    const wave = document.getElementById("wave-container");
    
    if (!isPlaying) {
        audio.play().then(() => {
            isPlaying = true;
            if(playBtn) playBtn.innerText = "⏸";
            if(wave) wave.style.display = "flex";
        }).catch(e => {
            console.log("Interaksi user diperlukan: Klik tombol play secara manual.");
        });
    } else {
        audio.pause();
        isPlaying = false;
        if(playBtn) playBtn.innerText = "▶";
        if(wave) wave.style.display = "none";
    }
}

function nextSong() {
    trackIndex = (trackIndex + 1) % songList.length;
    loadTrack(trackIndex);
    if (isPlaying) audio.play();
}

function prevSong() {
    trackIndex = (trackIndex - 1 + songList.length) % songList.length;
    loadTrack(trackIndex);
    if (isPlaying) audio.play();
}

// --- 5. INTERFACE TOGGLE ---
function toggleMusic() {
    const card = document.getElementById("music-card");
    if (!card) return;
    
    if (card.style.display === "none" || card.style.display === "") {
        card.style.display = "block";
    } else {
        card.style.display = "none";
        card.classList.remove("list-open");
        const sideList = document.getElementById("side-playlist");
        if(sideList) sideList.style.display = "none";
    }
}

function togglePlaylist() {
    const card = document.getElementById("music-card");
    const sideList = document.getElementById("side-playlist");
    if(!card || !sideList) return;

    card.classList.toggle("list-open");
    sideList.style.display = card.classList.contains("list-open") ? "block" : "none";
}

// --- 6. RENDER PLAYLIST ---
function renderPlaylist() {
    const playlistEl = document.getElementById("playlist");
    if(!playlistEl) return;
    
    playlistEl.innerHTML = "";
    songList.forEach((song, index) => {
        const li = document.createElement("li");
        li.className = `playlist-item ${index === trackIndex ? 'active' : ''}`;
        li.innerHTML = `<span>${song.title}</span><span style="opacity:0.5">${song.artist}</span>`;
        li.onclick = () => { 
            trackIndex = index; 
            loadTrack(trackIndex); 
            isPlaying = false; 
            playMusic(); 
        };
        playlistEl.appendChild(li);
    });
}

// --- 7. UPDATE PROGRESS BAR ---
audio.addEventListener('timeupdate', () => {
    const progress = document.getElementById("progress");
    const currentTimeEl = document.getElementById("current-time");
    const durationTimeEl = document.getElementById("duration-time");

    if (audio.duration) {
        const percent = (audio.currentTime / audio.duration) * 100;
        if(progress) progress.style.width = percent + "%";

        const formatTime = (t) => {
            let m = Math.floor(t / 60) || 0;
            let s = Math.floor(t % 60) || 0;
            return `${m}:${s < 10 ? '0' + s : s}`;
        };
        if(currentTimeEl) currentTimeEl.innerText = formatTime(audio.currentTime);
        if(durationTimeEl) durationTimeEl.innerText = formatTime(audio.duration);
    }
});

audio.addEventListener('ended', nextSong);

function seekAudio(event) {
    const container = document.querySelector('.progress-bar');
    if (!container) return;
    const containerWidth = container.clientWidth;
    const clickX = event.offsetX;
    const duration = audio.duration;
    
    if (duration) {
        audio.currentTime = (clickX / containerWidth) * duration;
    }
}

// JALANKAN SAAT HALAMAN SELESAI DILOAD
window.onload = () => {
    loadTrack(trackIndex);
};