
import throttle from "lodash.throttle";

import Player from '@vimeo/player';


const player = new Player('vimeo-player');

player.on('play', function() {
    console.log('played the video!');
});

const onPlay = function (data) {
    localStorage.setItem("videoplayer-current-time",  data.seconds)
};


player.on('timeupdate', throttle(onPlay, 1000))

player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});
