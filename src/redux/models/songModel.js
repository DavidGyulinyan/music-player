const createSong = (songName, artistName, trackNumber, file = null) => ({
    songName,
    artistName,
    trackNumber,
    file
});

export default createSong