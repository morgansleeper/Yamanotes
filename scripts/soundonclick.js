// Mouseover/ Click sound effect- by JavaScript Kit (www.javascriptkit.com)
// Visit JavaScript Kit at http://www.javascriptkit.com/ for full source code

//** Usage: Instantiate script by calling: var uniquevar=createsoundbite("soundfile1", "fallbackfile2", "fallebacksound3", etc)
//** Call: uniquevar.playclip() to play sound

var html5_audiotypes={ //define list of audio file extensions and their associated audio types. Add to it if your specified audio file isn't on this list:
	"mp3": "audio/mpeg",
	"mp4": "audio/mp4",
	"ogg": "audio/ogg",
	"wav": "audio/wav"
}

function createsoundbite(sound){
	var html5audio=document.createElement('audio')
	if (html5audio.canPlayType){ //check support for HTML5 audio
		for (var i=0; i<arguments.length; i++){
			var sourceel=document.createElement('source')
			sourceel.setAttribute('src', arguments[i])
			if (arguments[i].match(/\.(\w+)$/i))
				sourceel.setAttribute('type', html5_audiotypes[RegExp.$1])
			html5audio.appendChild(sourceel)
		}
		html5audio.load()
		html5audio.playclip=function(){
			html5audio.pause()
			html5audio.currentTime=0
			html5audio.play()
		}
		return html5audio
	}
	else{
		return {playclip:function(){throw new Error("Your browser doesn't support HTML5 audio unfortunately")}}
	}
}

//Initialize sound clips:

var aratana=createsoundbite("audio/aratana.mp3")
var astrob=createsoundbite("audio/astrob.mp3")
var bella=createsoundbite("audio/bella.mp3")
var bellb=createsoundbite("audio/bellb.mp3")
var beyondtheline=createsoundbite("audio/beyondtheline.mp3")
var beautifulhill=createsoundbite("audio/beautifulhill.mp3")
var chime=createsoundbite("audio/chime.mp3")
var fightingspirita=createsoundbite("audio/fightingspirita.mp3")
var flowershop=createsoundbite("audio/flowershop.mp3")
var gotadelvient=createsoundbite("audio/gotadelvient.mp3")
var hananohorokobi=createsoundbite("audio/hananohorokobi.mp3")
var harajukua=createsoundbite("audio/harajukua.mp3")
var haru=createsoundbite("audio/haru.mp3")
var harunew=createsoundbite("audio/harunew.mp3")
var harutrem=createsoundbite("audio/harutrem.mp3")
var mellowtime=createsoundbite("audio/mellowtime.mp3")
var melody=createsoundbite("audio/melody.mp3")
var ogawav1=createsoundbite("audio/ogawav1.mp3")
var railroadsongb=createsoundbite("audio/railroadsongb.mp3")
var sakurab=createsoundbite("audio/sakurab.mp3")
var seseragi=createsoundbite("audio/seseragi.mp3")
var sf1=createsoundbite("audio/sf1.mp3")
var sf3=createsoundbite("audio/sf3.mp3")
var sh1=createsoundbite("audio/sh1.mp3")
var sh21=createsoundbite("audio/sh21.mp3")
var sh23=createsoundbite("audio/sh23.mp3")
var sh3=createsoundbite("audio/sh3.mp3")
var sh5=createsoundbite("audio/sh5.mp3")
var sh6=createsoundbite("audio/sh6.mp3")
var springbox=createsoundbite("audio/springbox.mp3")
var sunlight=createsoundbite("audio/sunlight.mp3")
var sweetcall=createsoundbite("audio/sweetcall.mp3")
var thirdman=createsoundbite("audio/thirdman.mp3")
var twinklingskyline=createsoundbite("audio/twinklingskyline.mp3")
var uminoeki=createsoundbite("audio/uminoeki.mp3")
var watercrown=createsoundbite("audio/watercrown.mp3")
