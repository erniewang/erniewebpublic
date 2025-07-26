// Music theory utilities – interval formulas for common chord families

export const chordFamilies = {
    major: {
        triad: [0, 4, 7],                // Major triad
        sixth: [0, 4, 7, 9],             // Major 6
        seventh: [0, 4, 7, 11],          // Major 7
        ninth: [0, 4, 7, 11, 14]        // Major 9
    },
    minor: {
        triad: [0, 3, 7],                // Minor triad
        sixth: [0, 3, 7, 9],             // Minor 6
        seventh: [0, 3, 7, 10],          // Minor 7
        ninth: [0, 3, 7, 10, 14],        // Minor 9
        eleventh: [0, 3, 7, 10, 14, 17]  // Minor 11
    },
    diminished: {
        triad: [0, 3, 6],                // Diminished triad
        seventh: [0, 3, 6, 9],           // Diminished 7 (fully dim)
        halfDim7: [0, 3, 6, 10]          // Half-diminished (m7♭5)
    },
    augmented: {
        triad: [0, 4, 8],                // Augmented triad
        dom7: [0, 4, 8, 10],             // Augmented dominant 7
        maj7: [0, 4, 8, 11]              // Augmented major 7
    },
    sus: {
        sus2: [0, 2, 7],                 // Suspended 2
        sus4: [0, 5, 7]                  // Suspended 4
    }
};

// Convenience – turn the object into an ordered array for numeric indexing
export const noteChords = Object.values(chordFamilies).map(variationObj =>
    Object.values(variationObj).flat()
);
    