let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video');
let title = document.querySelector('.main-video .title');
listVideo.forEach(video =>{
    video.onclick = () =>{ 
		document.getElementById("zapoln").style.display = "none";
		document.getElementById("pokaz").style.display = "block";
		listVideo.forEach(vid => vid.classList.remove('active'));
		video.classList.add('active');
		if(video.classList.contains('active')){
			let src = video.children[0].getAttribute('src');
			mainVideo.src = src;
			let text = video.children[1].innerHTML;
			title.innerHTML	= text;
		};
	};
});

function ubrat(){
	document.getElementById("pokaz").style.display = "none";
	document.getElementById("zapoln").style.display = "block";
}
function vernut(){
	document.getElementById("pokaz").style.display = "block";
	document.getElementById("zapoln").style.display = "none";
}

