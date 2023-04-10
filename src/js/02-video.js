import Player from '@vimeo/player';//imports player from api vimeo
import throttle from 'lodash.throttle'; // imports method throttle 

const iframe = document.querySelector('iframe');//gets element iframe from html
const player = new Player(iframe); // create new constructor Player
const STORAGE_CR_TIME = "videoplayer-current-time" // varible for key in local storage

setCurrTime()//set current time in video 

player.on('timeupdate', throttle(saveTime, 1000));//return current time of playing video

function saveTime(data) {
	localStorage.setItem(STORAGE_CR_TIME, data.seconds);
}//this function set the current time in local storage for future using


function setCurrTime() {
	const setterTime = localStorage.getItem(STORAGE_CR_TIME)
	if (setterTime) {
		player.setCurrentTime(setterTime)
	}
}//this function is for setting the current time video. It takes data from local storage
