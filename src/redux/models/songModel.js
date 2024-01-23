const createSong = (id, songName, artistName, trackNumber, file = null, image = null) => ({
    id,
    songName,
    artistName,
    trackNumber,
    file,
    image
});

export default createSong
