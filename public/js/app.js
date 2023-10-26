// Obtener referencias a los elementos


function play_audio(){
    let playButton = document.getElementById('playButton');
    let audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer.paused) {
        // Iniciar la reproducción
        audioPlayer.play();
        alertify.success('Play a la canción!');
    } else {
        // Pausar la reproducción
        audioPlayer.pause();
        alertify.message('Se detuvo la canción!');
    }
}