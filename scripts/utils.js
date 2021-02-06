var currentStation = ""
function onClickFunction(audio, station) {
	if (!audio) {
		return
	}

	if (audio.paused || station !== currentStation) {
		pauseall()
		audio.playclip()
		currentStation = station
	}
	else {
		audio.pause()
	}
}
