let voices = [];
const msg = new SpeechSynthesisUtterance();

const stopButton = document.querySelector("#stop");
const speakButton = document.querySelector("#speak");
const voicesDropdown = document.querySelector('[name="voice"]')
const options = document.querySelectorAll('[type="range"],[name="text"]');

msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
		voices = this.getVoices();
		voicesDropdown.innerHTML= voices.map(voice=>`<option value="${voice.name}">${voice.name} ${voice.lang}</option>`).join('')
}

function setVoice() {
	console.log('changed voice to '+this.value);
	msg.voice = voices.find(voice=>voice.name === this.value);
	//console.log(msg);
	toggle();
}

function setOption() {
	console.log(this.name, this.value);
	msg[this.name]=this.value;
	toggle();
}

function toggle(flag=true) {
	speechSynthesis.cancel()
	if (flag) {
		speechSynthesis.speak(msg)	;
	}
	
	
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener("input",setVoice);
options.forEach(option=>option.addEventListener('input',setOption))
speakButton.addEventListener('click',toggle);
stopButton.addEventListener('click',()=>{toggle(false)});