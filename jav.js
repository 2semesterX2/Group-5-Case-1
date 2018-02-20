var myPauseTime = 0; // to keep track of where video was paused
var videos = document.querySelectorAll("video"); // put videos in array

window.onscroll = function () { // when srcoll

    videos.forEach(video => { // for each video
        
        if (isVisible(video)) { // if is in view
            if (!(video.currentTime > 0) || (video.currentTime == myPauseTime)) { // and if is not playing
                video.play(); // play
            }
        } else { //otherwise
            video.pause(); // pause
            myPauseTime = video.currentTime; //and put to beginning
        }

    });

}

function isVisible(el) { // used for all tests of visibility
    return (el.getBoundingClientRect().top >= 0 &&
        el.getBoundingClientRect().bottom < window.innerHeight)
}



var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 4000);
}