document.addEventListener('DOMContentLoaded', function() {
  const playPauseButton = document.getElementById('play-pause')
  const muteButton = document.getElementById('mute')
  const volumeUpButton = document.getElementById('volume-up')
  const volumeDownButton = document.getElementById('volume-down')

  playPauseButton.addEventListener('click', () => send('play/pause'))
  muteButton.addEventListener('click', () => send('mute'))
  volumeUpButton.addEventListener('click', () => send('volume-up'))
  volumeDownButton.addEventListener('click', () => send('volume-down'))

  function send(key) {
    fetch('/control', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ key: key })
    })
  }
})
