// All chord and scale patterns in a nested array, each with 10 notes
const patterns = [
    // Pentatonic Variations
    ["C3", "D3", "E3", "G3", "A3", "C4", "D4", "E4", "G4", "A4"],              // Classic Pentatonic
    ["C3", "D3", "F3", "G3", "Bb3", "C4", "D4", "F4", "G4", "Bb4"],            // Minor Pentatonic
    ["C3", "D3", "E3", "G3", "A3", "C4", "D4", "F#4", "G4", "A4"],             // Pentatonic #11
    ["C3", "Eb3", "F3", "G3", "Bb3", "C4", "Eb4", "F4", "G4", "B4"],           // Pentatonic with Major 7
    
    // Major Variations
    ["C3", "E3", "G3", "B3", "D4", "E4", "G4", "B4", "D5", "E5"],              // Major 9
    ["C3", "E3", "G3", "A3", "B3", "C4", "E4", "G4", "A4", "B4"],              // Major 6/9
    ["C3", "E3", "G3", "B3", "D4", "F#4", "G4", "B4", "D5", "F#5"],            // Major #11
    ["C3", "E3", "G3", "B3", "C4", "E4", "F#4", "G4", "B4", "C5"],             // Lydian Major

    // Minor Variations
    ["C3", "Eb3", "G3", "Bb3", "D4", "Eb4", "G4", "Bb4", "D5", "Eb5"],         // Minor 9
    ["C3", "Eb3", "G3", "Bb3", "D4", "F4", "G4", "Bb4", "D5", "F5"],           // Minor 11
    ["C3", "Eb3", "G3", "B3", "D4", "Eb4", "G4", "B4", "D5", "Eb5"],           // Minor/Major 9
    ["C3", "Eb3", "G3", "A3", "B3", "C4", "Eb4", "G4", "A4", "B4"],            // Minor/Major 6/7

    // Diminished Variations
    ["C3", "Eb3", "Gb3", "A3", "C4", "Eb4", "Gb4", "A4", "C5", "Eb5"],         // Fully Diminished
    ["C3", "Eb3", "Gb3", "Bb3", "Db4", "Eb4", "Gb4", "Bb4", "Db5", "Eb5"],     // Half Diminished 11
    ["C3", "Eb3", "Gb3", "Bbb3", "C4", "Eb4", "Gb4", "Bbb4", "C5", "Eb5"],     // Diminished b9
    ["C3", "Eb3", "Gb3", "A3", "B3", "C4", "Eb4", "Gb4", "A4", "B4"],          // Diminished Major 7

    // Augmented Variations
    ["C3", "E3", "G#3", "C4", "E4", "G#4", "C5", "E5", "G#5", "C6"],           // Classic Augmented
    ["C3", "E3", "G#3", "B3", "D4", "E4", "G#4", "B4", "D5", "E5"],            // Augmented Major 9
    ["C3", "E3", "G#3", "B3", "C4", "E4", "G#4", "B4", "C5", "E5"],            // Augmented Major 7
    ["C3", "E3", "G#3", "Bb3", "D4", "E4", "G#4", "Bb4", "D5", "E5"]           // Augmented Dominant 9
];

var selectedChord = 0;

//simple helper functions
const r = (min, max) => Math.round(Math.random() * (max - min)) + min;

// Music functionality for gallery
const synth = new Tone.PolySynth(Tone.Synth, {
    maxPolyphony: 5,
    volume: -8
}).toDestination();

// Keep track of our tonic synth
let tonicSynth = null;

async function tonicNote() {
    selectedChord = r(0,19);  // Now selecting from 20 patterns
    
    // Clean up old synth if it exists
    if (tonicSynth) {
        tonicSynth.triggerRelease();
        tonicSynth.dispose();
    }

    // Stop all existing sounds
    Tone.Transport.stop();
    synth.releaseAll();
    await Tone.start();
    
    // Create new synth
    tonicSynth = new Tone.Synth().toDestination();
    tonicSynth.volume.value = -15;
    tonicSynth.triggerAttackRelease("C3", 9);
}

// Initialize and play initial sound
async function initializeAndPlaySound(lower = 0, upper = 14) {
    await Tone.start();
    console.log(r(lower, upper));
    // Play 1-3 random notes simultaneously
    synth.triggerAttackRelease(patterns[selectedChord][r(lower,upper)], r(2, 6));
}

export { initializeAndPlaySound, tonicNote }; 