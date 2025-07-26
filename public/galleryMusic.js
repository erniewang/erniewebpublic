//functions type shit jaascript LSP 


const pentatonic = [
    "C3", "D3", "E3", "G3", "A3",
    "C4", "D4", "E4", "G4", "A4"
];

// Diminished: Each note is a minor third (3 semitones) apart
const diminished = [
    "C3", "Eb3", "Gb3", "A3", "C4",
    "Eb4", "Gb4", "A4", "C5", "Eb5"
];

// Augmented: Each note is a major third (4 semitones) apart
const augmented = [
    "C3", "E3", "G#3", "C4", "E4",
    "G#4", "C5", "E5", "G#5", "C6"
];

// Perfect fourths: Each note is a perfect fourth (5 semitones) apart
const fourths = [
    "C3", "F3", "Bb3", "Eb4", "Ab4",
    "C5", "F5", "Bb5", "Eb6", "Ab6"
];

//simple helper functions
const r = (min, max) => Math.round(Math.random() * (max - min)) + min;

// Music functionality for gallery
const synth = new Tone.PolySynth(Tone.Synth, {
    maxPolyphony: 5,
    volume: -30
}).toDestination();

async function tonicNote() {
    const singleSynth = new Tone.Synth().toDestination();
    singleSynth.volume.value = -15;
    await Tone.start();
    singleSynth.triggerAttackRelease("C3", 9);
}

// Initialize and play initial sound
async function initializeAndPlaySound(lower = 0, upper = 14) {
    await Tone.start();
    console.log(r(lower, upper));
    // Play 1-3 random notes simultaneously
    synth.triggerAttackRelease(fourths[r(lower, upper)], r(2, 6));
}

export { initializeAndPlaySound, tonicNote }; 