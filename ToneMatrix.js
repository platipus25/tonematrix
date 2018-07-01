/*
var song = '[{\"time\":\"0:0:0\",\"note\":[\"C6\"],\"length\":\"16n\"},{\"time\":\"0:0:1\",\"note\":[\"B5\"],\"length\":\"16n\"},{\"time\":\"0:0:2\",\"note\":[\"A#5\"],\"length\":\"16n\"},{\"time\":\"0:0:3\",\"note\":[\"A5\"],\"length\":\"16n\"},{\"time\":\"0:1:0\",\"note\":[\"G#5\"],\"length\":\"16n\"},{\"time\":\"0:1:1\",\"note\":[\"G5\"],\"length\":\"16n\"},{\"time\":\"0:1:2\",\"note\":[\"E5\"],\"length\":\"16n\"},{\"time\":\"0:1:3\",\"note\":[\"D#5\"],\"length\":\"16n\"},{\"time\":\"0:2:0\",\"note\":[\"D5\"],\"length\":\"16n\"},{\"time\":\"0:2:1\",\"note\":[\"C#5\"],\"length\":\"16n\"},{\"time\":\"0:2:2\",\"note\":[\"G#4\"],\"length\":\"16n\"},{\"time\":\"0:2:3\",\"note\":[\"A4\"],\"length\":\"16n\"},{\"time\":\"0:3:0\",\"note\":[\"A#4\"],\"length\":\"16n\"},{\"time\":\"0:3:1\",\"note\":[\"B4\"],\"length\":\"16n\"},{\"time\":\"0:3:2\",\"note\":[\"D4\"],\"length\":\"16n\"},{\"time\":\"0:3:3\",\"note\":[\"D#4\"],\"length\":\"16n\"},{\"time\":\"1:0:0\",\"note\":[],\"length\":\"16n\"},{\"time\":\"1:0:1\",\"note\":[\"D3\"],\"length\":\"16n\"},{\"time\":\"1:0:2\",\"note\":[\"D#3\"],\"length\":\"16n\"},{\"time\":\"1:0:3\",\"note\":[\"F3\"],\"length\":\"16n\"},{\"time\":\"1:1:0\",\"note\":[\"D#3\"],\"length\":\"16n\"},{\"time\":\"1:1:1\",\"note\":[\"E3\"],\"length\":\"16n\"},{\"time\":\"1:1:2\",\"note\":[\"F3\"],\"length\":\"16n\"},{\"time\":\"1:1:3\",\"note\":[\"F#3\"],\"length\":\"16n\"},{\"time\":\"1:2:0\",\"note\":[\"A#3\"],\"length\":\"16n\"},{\"time\":\"1:2:1\",\"note\":[\"G3\"],\"length\":\"16n\"},{\"time\":\"1:2:2\",\"note\":[],\"length\":\"16n\"},{\"time\":\"1:2:3\",\"note\":[\"G4\"],\"length\":\"16n\"},{\"time\":\"1:3:0\",\"note\":[\"F4\"],\"length\":\"16n\"},{\"time\":\"1:3:1\",\"note\":[\"G4\"],\"length\":\"16n\"},{\"time\":\"1:3:2\",\"note\":[\"A4\"],\"length\":\"16n\"},{\"time\":\"1:3:3\",\"note\":[\"G4\"],\"length\":\"16n\"},{\"time\":\"2:0:0\",\"note\":[],\"length\":\"16n\"},{\"time\":\"2:0:1\",\"note\":[],\"length\":\"16n\"},{\"time\":\"2:0:2\",\"note\":[],\"length\":\"16n\"},{\"time\":\"2:0:3\",\"note\":[\"G4\"],\"length\":\"16n\"},{\"time\":\"2:1:0\",\"note\":[\"C#5\"],\"length\":\"16n\"},{\"time\":\"2:1:1\",\"note\":[\"F#4\"],\"length\":\"16n\"},{\"time\":\"2:1:2\",\"note\":[\"G4\"],\"length\":\"16n\"},{\"time\":\"2:1:3\",\"note\":[\"G4\"],\"length\":\"16n\"},{\"time\":\"2:2:0\",\"note\":[],\"length\":\"16n\"},{\"time\":\"2:2:1\",\"note\":[],\"length\":\"16n\"},{\"time\":\"2:2:2\",\"note\":[],\"length\":\"16n\"},{\"time\":\"2:2:3\",\"note\":[\"G4\"],\"length\":\"16n\"},{\"time\":\"2:3:0\",\"note\":[\"C#5\"],\"length\":\"16n\"},{\"time\":\"2:3:1\",\"note\":[\"F#4\"],\"length\":\"16n\"},{\"time\":\"2:3:2\",\"note\":[\"G4\"],\"length\":\"16n\"},{\"time\":\"2:3:3\",\"note\":[\"G4\"],\"length\":\"16n\"},{\"time\":\"3:0:0\",\"note\":[],\"length\":\"16n\"},{\"time\":\"3:0:1\",\"note\":[],\"length\":\"16n\"},{\"time\":\"3:0:2\",\"note\":[\"G4\"],\"length\":\"16n\"},{\"time\":\"3:0:3\",\"note\":[\"A4\"],\"length\":\"16n\"},{\"time\":\"3:1:0\",\"note\":[\"F#4\"],\"length\":\"16n\"},{\"time\":\"3:1:1\",\"note\":[\"G4\"],\"length\":\"16n\"},{\"time\":\"3:1:2\",\"note\":[\"G4\"],\"length\":\"16n\"},{\"time\":\"3:1:3\",\"note\":[],\"length\":\"16n\"},{\"time\":\"3:2:0\",\"note\":[],\"length\":\"16n\"},{\"time\":\"3:2:1\",\"note\":[],\"length\":\"16n\"},{\"time\":\"3:2:2\",\"note\":[],\"length\":\"16n\"},{\"time\":\"3:2:3\",\"note\":[\"G4\"],\"length\":\"16n\"},{\"time\":\"3:3:0\",\"note\":[\"A#3\"],\"length\":\"16n\"},{\"time\":\"3:3:1\",\"note\":[\"G#4\"],\"length\":\"16n\"},{\"time\":\"3:3:2\",\"note\":[\"G4\"],\"length\":\"16n\"},{\"time\":\"3:3:3\",\"note\":[\"G4\"],\"length\":\"16n\"}]'
song = JSON.parse(song)
var frame = new Frame(0, "4n", "4m", ["C3", "C6"], song)
var stop = frame.play(true)

[{time:"0:0:0", note:["C6"],length:"16n"},{time:"0:0:1", note:["B5"],length:"16n"},{time:"0:0:2", note:["A#5"],length:"16n"},{time:"0:0:3", note:["A5"],length:"16n"},{time:"0:1:0", note:["G#5"],length:"16n"},{time:"0:1:1", note:["G5"],length:"16n"},{time:"0:1:2", note:["E5"],length:"16n"},{time:"0:1:3", note:["D#5"],length:"16n"},{time:"0:2:0", note:["D5"],length:"16n"},{time:"0:2:1", note:["C#5"],length:"16n"},{time:"0:2:2", note:["G#4"],length:"16n"},{time:"0:2:3", note:["A4"],length:"16n"},{time:"0:3:0", note:["A#4"],length:"16n"},{time:"0:3:1", note:["B4"],length:"16n"},{time:"0:3:2", note:["D4"],length:"16n"},{time:"0:3:3", note:["D#4"],length:"16n"},{time:"1:0:0", note:[],length:"16n"},{time:"1:0:1", note:["D3"],length:"16n"},{time:"1:0:2", note:["D#3"],length:"16n"},{time:"1:0:3", note:["F3"],length:"16n"},{time:"1:1:0", note:["D#3"],length:"16n"},{time:"1:1:1", note:["E3"],length:"16n"},{time:"1:1:2", note:["F3"],length:"16n"},{time:"1:1:3", note:["F#3"],length:"16n"},{time:"1:2:0", note:["A#3"],length:"16n"},{time:"1:2:1", note:["G3"],length:"16n"},{time:"1:2:2", note:[],length:"16n"},{time:"1:2:3", note:["G4"],length:"16n"},{time:"1:3:0", note:["F4"],length:"16n"},{time:"1:3:1", note:["G4"],length:"16n"},{time:"1:3:2", note:["A4"],length:"16n"},{time:"1:3:3", note:["G4"],length:"16n"},{time:"2:0:0", note:[],length:"16n"},{time:"2:0:1", note:[],length:"16n"},{time:"2:0:2", note:[],length:"16n"},{time:"2:0:3", note:["G4"],length:"16n"},{time:"2:1:0", note:["C#5"],length:"16n"},{time:"2:1:1", note:["F#4"],length:"16n"},{time:"2:1:2", note:["G4"],length:"16n"},{time:"2:1:3", note:["G4"],length:"16n"},{time:"2:2:0", note:[],length:"16n"},{time:"2:2:1", note:[],length:"16n"},{time:"2:2:2", note:[],length:"16n"},{time:"2:2:3", note:["G4"],length:"16n"},{time:"2:3:0", note:["C#5"],length:"16n"},{time:"2:3:1", note:["F#4"],length:"16n"},{time:"2:3:2", note:["G4"],length:"16n"},{time:"2:3:3", note:["G4"],length:"16n"},{time:"3:0:0", note:[],length:"16n"},{time:"3:0:1", note:[],length:"16n"},{time:"3:0:2", note:["G4"],length:"16n"},{time:"3:0:3", note:["A4"],length:"16n"},{time:"3:1:0", note:["F#4"],length:"16n"},{time:"3:1:1", note:["G4"],length:"16n"},{time:"3:1:2", note:["G4"],length:"16n"},{time:"3:1:3", note:[],length:"16n"},{time:"3:2:0", note:[],length:"16n"},{time:"3:2:1", note:[],length:"16n"},{time:"3:2:2", note:[],length:"16n"},{time:"3:2:3", note:["G4"],length:"16n"},{time:"3:3:0", note:["A#3"],length:"16n"},{time:"3:3:1", note:["G#4"],length:"16n"},{time:"3:3:2", note:["G4"],length:"16n"},{time:"3:3:3", note:["G4"],length:"16n"}

*/

// timeSignature: "16n", "8n", "4n", "2n"
// length is in measures
// range is [low, high] in notes
function Song(song, timeSignature, length, range, callback, edit){
	this.song = song //(song || [{time:"0:0:0", note:["C6"],length:"16n"},{time:"0:0:1", note:["B5"],length:"16n"},{time:"0:0:2", note:["A#5"],length:"16n"},{time:"0:0:3", note:["A5"],length:"16n"},{time:"0:1:0", note:["G#5"],length:"16n"},{time:"0:1:1", note:["G5"],length:"16n"},{time:"0:1:2", note:["E5"],length:"16n"},{time:"0:1:3", note:["D#5"],length:"16n"},{time:"0:2:0", note:["D5"],length:"16n"},{time:"0:2:1", note:["C#5"],length:"16n"},{time:"0:2:2", note:["G#4"],length:"16n"},{time:"0:2:3", note:["A4"],length:"16n"},{time:"0:3:0", note:["A#4"],length:"16n"},{time:"0:3:1", note:["B4"],length:"16n"},{time:"0:3:2", note:["D4"],length:"16n"},{time:"0:3:3", note:["D#4"],length:"16n"},{time:"1:0:0", note:[],length:"16n"},{time:"1:0:1", note:["D3"],length:"16n"},{time:"1:0:2", note:["D#3"],length:"16n"},{time:"1:0:3", note:["F3"],length:"16n"},{time:"1:1:0", note:["D#3"],length:"16n"},{time:"1:1:1", note:["E3"],length:"16n"},{time:"1:1:2", note:["F3"],length:"16n"},{time:"1:1:3", note:["F#3"],length:"16n"},{time:"1:2:0", note:["A#3"],length:"16n"},{time:"1:2:1", note:["G3"],length:"16n"},{time:"1:2:2", note:[],length:"16n"},{time:"1:2:3", note:["G4"],length:"16n"},{time:"1:3:0", note:["F4"],length:"16n"},{time:"1:3:1", note:["G4"],length:"16n"},{time:"1:3:2", note:["A4"],length:"16n"},{time:"1:3:3", note:["G4"],length:"16n"},{time:"2:0:0", note:[],length:"16n"},{time:"2:0:1", note:[],length:"16n"},{time:"2:0:2", note:[],length:"16n"},{time:"2:0:3", note:["G4"],length:"16n"},{time:"2:1:0", note:["C#5"],length:"16n"},{time:"2:1:1", note:["F#4"],length:"16n"},{time:"2:1:2", note:["G4"],length:"16n"},{time:"2:1:3", note:["G4"],length:"16n"},{time:"2:2:0", note:[],length:"16n"},{time:"2:2:1", note:[],length:"16n"},{time:"2:2:2", note:[],length:"16n"},{time:"2:2:3", note:["G4"],length:"16n"},{time:"2:3:0", note:["C#5"],length:"16n"},{time:"2:3:1", note:["F#4"],length:"16n"},{time:"2:3:2", note:["G4"],length:"16n"},{time:"2:3:3", note:["G4"],length:"16n"},{time:"3:0:0", note:[],length:"16n"},{time:"3:0:1", note:[],length:"16n"},{time:"3:0:2", note:["G4"],length:"16n"},{time:"3:0:3", note:["A4"],length:"16n"},{time:"3:1:0", note:["F#4"],length:"16n"},{time:"3:1:1", note:["G4"],length:"16n"},{time:"3:1:2", note:["G4"],length:"16n"},{time:"3:1:3", note:[],length:"16n"},{time:"3:2:0", note:[],length:"16n"},{time:"3:2:1", note:[],length:"16n"},{time:"3:2:2", note:[],length:"16n"},{time:"3:2:3", note:["G4"],length:"16n"},{time:"3:3:0", note:["A#3"],length:"16n"},{time:"3:3:1", note:["G#4"],length:"16n"},{time:"3:3:2", note:["G4"],length:"16n"},{time:"3:3:3", note:["G4"],length:"16n"}])
	this.timeSignature = timeSignature
	this.length = length
	this.range = range
	this.callback = callback
	this.edit = edit
}

function Frame(index, songMetaObj = new Song({}, "8n", "1m", ["C3", "C6"], null, true)){
	this.index = index;
	this.edit = songMetaObj.edit;
	this.range = [Tone.Midi(songMetaObj.range[0]).toMidi(), Tone.Midi(songMetaObj.range[1]).toMidi(), Tone.Midi(songMetaObj.range[1]).toMidi() - Tone.Midi(songMetaObj.range[0]).toMidi()];
	this.song = songMetaObj.song;
	this.songMetaObj = songMetaObj;
	this.columns = []
	this.part = new Tone.Part(function(time, event){synth.triggerAttackRelease(event.note, event.length, time)}, [])
	this.DOM = $("<span></span>")
				.attr("id", "frame"+index)
				.appendTo(".target")
				.attr("class", "frame")
	for(var column = 0; column < parseFloat(songMetaObj.length) * parseFloat(songMetaObj.timeSignature); column++){
		if(column % parseFloat(songMetaObj.timeSignature) == 0) this.DOM.append($("<td></td>").css("background-color", "#cccccc67").attr("rowspan", this.range[2]).append($("<vb>")))
		this.columns.push(new Column(this, this.range))
	}
	this.get = function(){
		var output = []
		for(column in this.columns){
			var time = Tone.Time(parseInt(column) * Tone.Time(songMetaObj.timeSignature).toSeconds()).toBarsBeatsSixteenths();
			output[column] = {
				time:time,
				note:[],
				length:songMetaObj.timeSignature
			}
			for(note in this.columns[column].notes){
				if(this.columns[column].notes[note].active) output[column].note.push(Tone.Midi(this.columns[column].notes[note].note).toNote())
			}
		}
		this.song = output
		return output
	}
	this.set = function(song){
		this.clear()
		for(column in song){
			if(column < this.columns.length){
				for(note in song[column].note){
					thisNote = Tone.Midi(song[column].note[note]).toMidi()
					var index = this.range[1] - thisNote
					if(index < this.columns[column].notes.length) this.columns[column].notes[index].set(true);
				}
			}
		}
		
	}
	this.clear = function(){
		for(column in this.columns){
			for(note in this.columns[column].notes){
				this.columns[column].notes[note].set(false)
			}
		}
		this.part.stop()
	}
	this.play = function(loop){
		if(typeof synth == 'undefined') var synth = new Tone.PolySynth(this.range[2], Tone.Synth).toMaster();
		startTime = this.part.progress
		this.part.stop()
		this.part = new Tone.Part(function(time, event){synth.triggerAttackRelease(event.note, event.length, time)}, (songMetaObj.song = this.get()))
		this.part.loopEnd = songMetaObj.length;
		this.part.loop = this.edit;
		var thisRef = this
		Tone.Transport.start()
		this.part.start(startTime)
		if(typeof songMetaObj.callback == "function"){
			songMetaObj.callback(songMetaObj)
		}
		return function(){thisRef.part.loop=false;}
	}
	if(this.song != undefined){
		this.clear();
		this.set(this.song);
	}
	this.play();
}
function Column(parentRef, range){
	this.frame = parentRef
	this.notes = []
	for(x in range) range[x] = Tone.Midi(range[x]).toMidi();
	range[2] = (range[1] - range[0]);
	this.DOM = $("<td></td>").attr("rowspan", range[2]).appendTo(parentRef.DOM)
	for(var i = range[1]; i > range[0]; i--){
		this.notes.push(new Note(i, this))
	}
}
function Note(note, parentRef){
	this.column = parentRef;
	this.active = false;
	this.note = note;
	var thisNote = this;
	this.DOM =  $("<input/>")
				.attr("type", "checkbox")
				.css("background-size", "contain")
				.appendTo(this.column.DOM)
	if(!this.column.frame.edit){
		this.DOM.bind('change', function(e){
			thisNote.DOM.prop('checked', thisNote.active);
		})
	}else{
		this.DOM.bind('change', function(e){
					thisNote.set(e.target.checked); 
					console.log(thisNote);
					thisNote.column.frame.play();
				})
	}
	this.column.DOM.append($("<br>"))
	this.set = function(status){
		this.active = status
		this.DOM.prop('checked', status);
	}
	this.set((Math.random() < this.note * 0.001 && this.note % 3 == 0));
}