import {connect} from 'react-redux';

const CurrentSongData = ({currentSong}) => {
    if (!currentSong) {
        return <div
            className="flex-center"
            style={{
                width: "400px",
                height: "400px",
                borderRadius: "20px",
                marginBottom: "20px",
                border: "1px solid #7965D37F",
            }}
        >
            No song currently playing
        </div>;
    }

    return (
        <div>
            <img
                style={{
                    width: "400px",
                    height: "400px",
                    borderRadius: "20px",
                    marginBottom: "20px",
                    border: "1px solid #7965D37F",
                }}
                src={currentSong.image}
                alt={currentSong.title}
            />
        </div>
    );
};

const mapStateToProps = (state) => ({
    currentSong: state.currentSong,
});

export default connect(mapStateToProps)(CurrentSongData);
