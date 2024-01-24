// Function to create a song object with the given properties
const createSong = (id, songName, artistName, trackNumber, file = null) => ({
    id, // Unique identifier for the song
    songName, // Name of the song
    artistName, // Name of the artist
    trackNumber, // Track number
    file, // File path for the song audio
});

// Export the createSong function to be used elsewhere in the application
export default createSong;
