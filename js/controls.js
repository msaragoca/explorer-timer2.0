export default function Controls({
  buttonStop,
  buttonSet,
  buttonPause,
  buttonPlay
}){

  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
  }

  function pause() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function reset() {
    buttonStop.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function getMinutes(){
    let newMinutes = prompt('Quantos minutos?')
    if(!newMinutes){
    resetTimer()
    return false;
    }

    return newMinutes
    
    }

  return {
    play,
    pause,
    reset,
    getMinutes
  }
}
