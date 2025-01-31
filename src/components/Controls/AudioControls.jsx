export default function AudioControls({
    onPlay,
    onPause,
    onNext,
    isPlaying,
    isAudioReady,
    playlistLength,
    volume,
    onVolumeChange,
    progress

}) {
    return (
        <div className="absolute bottom-4 right-4 flex gap-2 items-center">
            <div className="w-64 bg-gray-700 h-1 rounded">
                <div
                    className="bg-blue-500 h-full rounded transition-all duration-100"
                    style={{ width: `${progress}%` }}
                />
            </div>
            <div className="flex gap-2 items-center"></div>

            {/* Volume Slider */}
            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
                className="w-32 h-2 bg-gray-700 rounded-lg cursor-pointer"
            />

            {/* Existing buttons */}
            <button
                onClick={isPlaying ? onPause : onPlay}
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
                disabled={!isAudioReady}
            >
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button
                onClick={onNext}
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors"
                disabled={playlistLength <= 1}
            >
                Next
            </button>
        </div>
    );
}