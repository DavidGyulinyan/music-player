const createSong = (songName, artistName, trackNumber, file = null, image = null) => ({
    songName,
    artistName,
    trackNumber,
    file,
    image
});

export default createSong