// 1. Daftar Koleksi
const koleksiWallpaper = [
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1920",
    "wallpaper/gunung1.jpg",
    "wallpaper/4.jpg",
    "wallpaper/3.jpg",
    "wallpaper/6.jpg",
    "wallpaper/5.jpg",
    "wallpaper/7.jpg",
    "wallpaper/a1.jpeg",
    "wallpaper/a2.jpeg",
    "wallpaper/Wllpaper 2.jpg"
];

let currentIndex = 0;
let autoInterval = null;

// 2. Fungsi Klik Manual
function nextWallpaper() {
    currentIndex++;
    if (currentIndex >= koleksiWallpaper.length) {
        currentIndex = 0;
    }
    const targetWall = koleksiWallpaper[currentIndex];
    document.body.style.backgroundImage = `url('${targetWall}')`;
    console.log("Wallpaper: " + targetWall);
}

// 3. Fungsi Auto (2 Menit)
function toggleAutoWallpaper() {
    const isChecked = document.getElementById('autoWallpaperCheck').checked;
    if (isChecked) {
        autoInterval = setInterval(nextWallpaper, 120000);
        console.log("Auto ON");
    } else {
        clearInterval(autoInterval);
        autoInterval = null;
        console.log("Auto OFF");
    }
}

// 4. Jalankan saat Start
document.addEventListener('DOMContentLoaded', () => {
    // Load wallpaper pertama
    document.body.style.backgroundImage = `url('${koleksiWallpaper[0]}')`;
    
    // Jalankan jam (pastikan fungsi tick() sudah ada di bawah atau file lain)
    if (typeof tick === "function") {
        tick();
        setInterval(tick, 1000);
    }
    
    if (typeof renderCalendar === "function") {
        renderCalendar();
    }
});