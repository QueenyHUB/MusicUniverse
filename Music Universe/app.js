let currentIndex = 0; // Kezdeti index
const planets = document.querySelectorAll('.planet');
const slider = document.querySelector('.slider');

function moveSlider(direction) {
    // Teljes bolygók száma
    const totalPlanets = planets.length;

    // Új index kiszámítása
    currentIndex += direction;

    // Ellenőrzés, hogy ne lépjük túl a határokat
    if (currentIndex < 0) {
        currentIndex = totalPlanets - 1; // Ha visszamegyünk az elejére, ugrik az utolsóhoz
    } else if (currentIndex >= totalPlanets) {
        currentIndex = 0; // Ha túllépünk az utolsón, ugrik az elsőhöz
    }

    // A slider eltolása az aktuális index alapján
    slider.style.transform = `translateX(${-currentIndex * 100}%)`;
}