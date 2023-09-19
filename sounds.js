document.addEventListener("DOMContentLoaded", function (event) {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  let waveform = "sine";
  const currGains = {}; // list of gain nodes

  const activeOscillators = {};
  let numKeysPressed = 0;
  const globalGain = audioCtx.createGain();
  globalGain.gain.setValueAtTime(0.8, audioCtx.currentTime);
  globalGain.connect(audioCtx.destination);

  const asdrTimes = {
    attack: 0.04,
    decay: 0.02,
    release: 0.04,
  };

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

  const waveformControl = document.getElementById("waveform");
  waveformControl.addEventListener("change", function (event) {
    waveform = event.target.value;
  });

  window.addEventListener("keydown", keyDown, false);
  window.addEventListener("keyup", keyUp, false);

  function keyDown(event) {
    const key = (event.detail || event.which).toString();
    if (keyboardFrequencyMap[key] && !activeOscillators[key]) {
      numKeysPressed += 1;
      playNote(key);
    }
  }

  function keyUp(event) {
    const key = (event.detail || event.which).toString();

    if (keyboardFrequencyMap[key] && activeOscillators[key]) {
      // decay gain node
      currGains[key].gain.setTargetAtTime(
        0,
        audioCtx.currentTime,
        5 * asdrTimes.release
      );

      console.log("shutting down node at", key);
      setTimeout(function () {
        if (currGains[key]) {
          console.log(
            "gain for node",
            key,
            "at stop:",
            currGains[key].gain.value
          );
          activeOscillators[key].stop();
          activeOscillators[key].disconnect(currGains[key]);

          delete activeOscillators[key];
          delete currGains[key];
          numKeysPressed -= 1;
        }
      }, 1000 * 20 * asdrTimes.release);
    }
  }

  function playNote(key) {
    const osc = audioCtx.createOscillator();
    const oscGainNode = audioCtx.createGain();
    currGains[key] = oscGainNode;

    oscGainNode.gain.setValueAtTime(0, audioCtx.currentTime);

    console.log(numKeysPressed);

    updateGains();

    osc.connect(oscGainNode).connect(audioCtx.destination);

    // attack
    oscGainNode.gain.exponentialRampToValueAtTime(
      globalGain.gain.value,
      audioCtx.currentTime + asdrTimes.attack
    );
    // decay
    oscGainNode.gain.exponentialRampToValueAtTime(
      globalGain.gain.value - 0.1,
      audioCtx.currentTime + asdrTimes.decay
    );

    osc.frequency.setValueAtTime(
      keyboardFrequencyMap[key],
      audioCtx.currentTime
    );
    osc.type = waveform;

    osc.start();
    console.log(currGains);
    activeOscillators[key] = osc;
    // console.log(activeOscillators);
  }

  function updateGains() {
    if (numKeysPressed > 0) {
      for (k in currGains) {
        currGains[k].gain.setValueAtTime(
          0.2 / numKeysPressed,
          audioCtx.currentTime
        );
        console.log("updated gain for node", k, ":", currGains[k].gain.value);
      }
    }
  }
});
