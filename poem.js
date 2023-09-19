// Original Word Lists
const nouns = [
  "moon",
  "rose",
  "whisper",
  "ocean",
  "mountain",
  "song",
  "dream",
  "rain",
  "sunset",
  "heart",
  "tree",
  "bird",
  "star",
  "kiss",
  "teardrop",
  "silence",
  "love",
  "shadow",
  "breeze",
  "smile",
  "echo",
  "dawn",
  "hope",
  "river",
  "passion",
  "fire",
  "snowflake",
  "laughter",
  "sunshine",
  "soul",
  "seashell",
  "garden",
  "reflection",
  "time",
  "crystal",
  "serenity",
  "embrace",
  "journey",
  "beauty",
  "harmony",
  "whisper",
  "wonder",
  "sorrow",
  "mystery",
  "butterfly",
  "secret",
  "dream",
  "magic",
];

const verbs = [
  "dance",
  "sing",
  "kiss",
  "whisper",
  "breathe",
  "wander",
  "melt",
  "soar",
  "embrace",
  "tangle",
  "sail",
  "ripple",
  "dream",
  "awaken",
  "listen",
  "ignite",
  "explore",
  "linger",
  "echo",
  "blossom",
  "reverie",
  "drift",
  "glisten",
  "yearn",
  "enchant",
  "murmur",
  "quiver",
  "entwine",
  "adore",
  "dazzle",
  "whirl",
  "tender",
  "cradle",
  "illuminate",
  "savor",
  "cherish",
  "surrender",
  "captivate",
  "flutter",
  "glow",
  "envelop",
  "awaken",
  "cascade",
  "sparkle",
  "treasure",
  "whisk",
  "hover",
  "linger",
];

const adjectives = [
  "gentle",
  "serene",
  "eternal",
  "whispering",
  "captivating",
  "luminous",
  "fragrant",
  "mystical",
  "enchanted",
  "velvet",
  "radiant",
  "ethereal",
  "delicate",
  "silken",
  "tranquil",
  "mesmerizing",
  "fleeting",
  "tender",
  "resplendent",
  "bewitching",
  "spellbound",
  "vivid",
  "dazzling",
  "charmed",
  "harmonious",
  "soothing",
  "elusive",
  "enigmatic",
  "timeless",
  "celestial",
  "twinkling",
  "sapphire",
  "sensual",
  "enchanting",
  "mysterious",
  "sublime",
  "golden",
  "velvet",
  "whimsical",
  "gossamer",
  "infinite",
  "whispered",
  "ethereal",
  "suspended",
  "captivating",
  "sacred",
  "melodic",
  "effervescent",
  "glimmering",
  "sapphire",
];

const adverbs = [
  "gently",
  "silently",
  "tenderly",
  "endlessly",
  "whisperingly",
  "intimately",
  "magically",
  "serenely",
  "gracefully",
  "eloquently",
  "lightly",
  "dreamily",
  "effortlessly",
  "softly",
  "melodically",
  "sensually",
  "bewitchingly",
  "luminously",
  "elegantly",
  "vividly",
  "mystically",
  "eternally",
  "captivatingly",
  "synchronously",
  "entrancingly",
  "soothingly",
  "tangibly",
  "sparklingly",
  "enigmatically",
  "timelessly",
  "divinely",
  "mesmerizingly",
  "gracefully",
  "radiantly",
  "suspensefully",
  "serendipitously",
  "vividly",
  "silkenly",
  "whimsically",
  "lustrously",
  "subtly",
  "ethereally",
  "tranquilly",
  "effervescently",
  "majestically",
  "gloriously",
  "glowingly",
  "gently",
  "graciously",
  "tangibly",
];

// Evil Twin Lists
const evilTwinNouns = [
  "shadow",
  "malice",
  "hate",
  "thorns",
  "abyss",
  "nightmare",
  "demon",
  "void",
  "dusk",
  "ugliness",
];

const evilTwinVerbs = [
  "sneer",
  "wail",
  "condemn",
  "exploit",
  "obscure",
  "curse",
  "stumble",
  "fall",
  "wither",
  "forget",
];

const evilTwinAdjectives = [
  "harsh",
  "grim",
  "chaotic",
  "dull",
  "repugnant",
  "agitated",
  "sinister",
  "cursed",
  "dreary",
  "ugly",
];

const evilTwinAdverbs = [
  "cruelly",
  "viciously",
  "ruthlessly",
  "dissonantly",
  "nevermore",
  "haphazardly",
  "malevolently",
  "awkwardly",
  "bitterly",
  "hatefully",
];

// Poetic Sentence Frames
const poeticSentenceFrames = [
  "Ode to the [noun], thou art a [adjective] [noun] of [noun].",
  "In the [noun], where [noun] [verb]s like [noun]s.",
  "A [adjective] [noun] [verb]s in the [noun].",
  "Thy [noun] is as [adjective] as the [noun].",
  "A [noun] of [noun] and [noun] [verb]s the [noun].",
  "[adverb], the [noun] [verb]s [adjective].",
  "[verb]ing through the [noun], I found [noun].",
  "The [noun] [verb]ed, and I felt [adjective].",
  "Ode to the [adjective] [noun] in the [noun].",
  "[noun]s [verb] in the [adjective] [noun].",
  "Like [adjective] [noun]s in a [noun] [verb]ing.",
  "In the [adjective] [noun], we [verb] [adverb].",
  "The [noun] [verb]s with [adjective] grace.",
  "Thou art the [noun] that [verb]s [adjective].",
  "Where [noun] [verb]s with [adjective] [noun].",
  "The [adjective] [noun] [verb]s [adverb].",
  "Ode to the [noun], a [adjective] [noun] of [noun].",
  "In the [noun], we find [noun] and [noun].",
  "A [adjective] [noun] [verb]s [adverb].",
  "Thy [noun] [verb]s in the [noun].",
  "[adjective] [noun]s [verb] in the [noun].",
  "In [adverb] [noun], we [verb] [adjective].",
  "The [noun] [verb]s [adjective] and [adjective].",
  "Ode to the [adjective] [noun] [verb]ing.",
  "[adjective] [noun]s in a [noun] [verb]ing.",
];

let currentWordIndex = 0;
let currentWordPosition = 0;
let displayedText = ""; // To store the displayed text

// Function to log one word at a time
// Function to log one word at a time
function logNextWord() {
  const waveformSelect = document.getElementById("waveform");
  const selectedWaveform = waveformSelect.value;

  let currentNouns = nouns;
  let currentVerbs = verbs;
  let currentAdjectives = adjectives;
  let currentAdverbs = adverbs;

  if (selectedWaveform === "sawtooth") {
    currentNouns = evilTwinNouns;
    currentVerbs = evilTwinVerbs;
    currentAdjectives = evilTwinAdjectives;
    currentAdverbs = evilTwinAdverbs;
  }

  if (currentWordIndex < poeticSentenceFrames.length) {
    const currentFrame = poeticSentenceFrames[currentWordIndex];
    const replacedFrame = currentFrame.replace(
      /\[(noun|verb|adjective|adverb)\]/g,
      (match) => {
        const partOfSpeech = match.slice(1, -1);
        switch (partOfSpeech) {
          case "noun":
            let noun =
              currentNouns[Math.floor(Math.random() * currentNouns.length)];
            if (currentWordPosition === 0) {
              noun = noun.charAt(0).toUpperCase() + noun.slice(1); // Capitalize the first word
            }
            return noun;
          case "verb":
            let verb =
              currentVerbs[Math.floor(Math.random() * currentVerbs.length)];
            if (currentWordPosition === 0) {
              verb = verb.charAt(0).toUpperCase() + verb.slice(1); // Capitalize the first word
            }
            if (verb.endsWith("e") && replacedFrame.includes(match + "ed")) {
              verb = verb.slice(0, -1); // Remove the extra 'e'
            }
            return verb;
          case "adjective":
            let adjective =
              currentAdjectives[
                Math.floor(Math.random() * currentAdjectives.length)
              ];
            if (currentWordPosition === 0) {
              adjective =
                adjective.charAt(0).toUpperCase() + adjective.slice(1); // Capitalize the first word
            }
            return adjective;
          case "adverb":
            let adverb =
              currentAdverbs[Math.floor(Math.random() * currentAdverbs.length)];
            if (currentWordPosition === 0) {
              adverb = adverb.charAt(0).toUpperCase() + adverb.slice(1); // Capitalize the first word
            }
            return adverb;
          default:
            return match;
        }
      }
    );
    const words = replacedFrame.split(/\s+/);

    if (currentWordPosition < words.length) {
      displayedText += " " + words[currentWordPosition];
      document.getElementById("wordDisplay").textContent = displayedText.trim();
      currentWordPosition++;
    } else {
      displayedText += "\n"; // Add a newline to separate frames
      currentWordPosition = 0;
      currentWordIndex++;
    }
  }
}

// Event listener for keypress
document.addEventListener("keypress", logNextWord);
