const waveform = "sine";
$(document).ready(function () {
  // Initialize Bootstrap Switch on the checkbox element
  $("#oscillatorSwitch").bootstrapSwitch();

  // Event handler for when the switch state changes
  $("#oscillatorSwitch").on(
    "switchChange.bootstrapSwitch",
    function (event, state) {
      if (state) {
        // The switch is ON, set the oscillator type to sine
        waveform = "sine";
        console.log("Switch is ON");
      } else {
        // The switch is OFF, set the oscillator type to sawtooth
        waveform = "sawtooth";
        console.log("Switch is OFF");
      }
    }
  );
});
document.addEventListener("DOMContentLoaded", function (event) {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const keyboardFrequencyMap = {
    90: 261.625565300598634, //Z - C
    83: 277.182630976872096, //S - C#
    88: 293.66476791740756, //X - D
    68: 311.12698372208091, //D - D#
    67: 329.627556912869929, //C - E
    86: 349.228231433003884, //V - F
    71: 369.994422711634398, //G - F#
    66: 391.995435981749294, //B - G
    72: 415.304697579945138, //H - G#
    78: 440.0, //N - A
    74: 466.163761518089916, //J - A#
    77: 493.883301256124111, //M - B
    81: 523.251130601197269, //Q - C
    50: 554.365261953744192, //2 - C#
    87: 587.32953583481512, //W - D
    51: 622.253967444161821, //3 - D#
    69: 659.255113825739859, //E - E
    82: 698.456462866007768, //R - F
    53: 739.988845423268797, //5 - F#
    84: 783.990871963498588, //T - G
    54: 830.609395159890277, //6 - G#
    89: 880.0, //Y - A
    55: 932.327523036179832, //7 - A#
    85: 987.766602512248223, //U - B
  };
  window.addEventListener("keydown", keyDown, false);
  window.addEventListener("keyup", keyUp, false);
  window.addEventListener("");

  activeOscillators = {};

  function keyDown(event) {
    const key = (event.detail || event.which).toString();
    if (keyboardFrequencyMap[key] && !activeOscillators[key]) {
      playNote(key);
    }
  }

  function keyUp(event) {
    const key = (event.detail || event.which).toString();
    if (keyboardFrequencyMap[key] && activeOscillators[key]) {
      activeOscillators[key].stop();
      delete activeOscillators[key];
    }
  }
  function playNote(key) {
    const osc = audioCtx.createOscillator();
    osc.frequency.setValueAtTime(
      keyboardFrequencyMap[key],
      audioCtx.currentTime
    );
    osc.type = "sine"; //choose your favorite waveform
    osc.connect(audioCtx.destination);
    osc.start();
    activeOscillators[key] = osc;
  }
});
