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
        <div className="absolute bottom-4 right-4 flex flex-col gap-3 items-end 
                      bg-black/50 backdrop-blur-sm p-3 border-2 border-cyan-electric/30
                      crt-overlay text-white">  {/* Added text-white here */}
            {/* Progress bar */}
            <div className="w-64 h-1 bg-gray-900/80 rounded-sm">
                <div
                    className="h-full bg-cyan-electric transition-[width] duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <div className="flex gap-3 items-center">
                {/* Volume Slider */}
                <div className="relative group">
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
                        className="w-24 h-1 bg-gray-900/80 rounded-sm cursor-cyber
                               appearance-none slider-vertical-gradient
                               thumb:appearance-none thumb:h-3 thumb:w-2 
                               thumb:bg-magenta-neon thumb:border-2 
                               thumb:border-cyan-electric/50"
                    />
                    <div className="absolute -top-5 right-0 text-cyan-electric 
                                  text-xs font-mono pointer-events-none"> 
                        VOL [{volume.toFixed(2)}]
                    </div>
                </div>

                {/* Boutons de contrôle */}
                <div className="flex gap-2 items-center border-l-2 border-cyan-electric/20 pl-2">
                    <button
                        onClick={isPlaying ? onPause : onPlay}
                        className="px-3 py-1 border-2 border-cyan-electric/40 
                               text-cyan-electric hover:border-cyan-electric
                               hover:text-cyan-electric hover:bg-cyan-electric/10
                               font-mono text-xs tracking-wider
                               transition-all duration-200 ease-crt
                               disabled:text-cyan-electric/30"
                        disabled={!isAudioReady}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.stopPropagation();
                            }
                        }}
                    >
                        {isPlaying ? '[[ PAUSE ]]' : '[[ PLAY ]]'}
                    </button>
                    <button
                        onClick={onNext}
                        className="px-3 py-1 border-2 border-magenta-neon/40 
                               text-magenta-neon hover:border-magenta-neon 
                               hover:text-magenta-neon hover:bg-magenta-neon/10
                               font-mono text-xs tracking-wider
                               transition-all duration-200 ease-crt
                               disabled:text-magenta-neon/30"
                        disabled={playlistLength <= 1}
                    >
                        NEXT_TRACK{'>'}{'>'}
                    </button>
                </div>
            </div>
        </div>
    );
}