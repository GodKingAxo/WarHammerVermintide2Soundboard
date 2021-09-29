const sounds = ['oi', 'explosives', 'healing', 'bomb', 'grimoire', 'careful', 'grab-those-bandages', 'no-point', 'get-that-bloody-thing-off-me', 'moan-1', 'hysterical-laugh']
//Add more sounds in future
sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play();
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song =  document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}