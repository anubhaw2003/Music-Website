let popSongLeft = document.getElementById("popSongLeft");
let popSongRight = document.getElementById("popSongRight");
let popSong = document.getElementsByClassName("popSong")[0];


popSongRight.addEventListener('click',()=> {
    popSong.scrollLeft+=330;
})

popSongLeft.addEventListener('click',()=> {
    popSong.scrollLeft-=330;
})

let popArtLeft = document.getElementById("popArtLeft");
let popArtRight = document.getElementById("popArtRight");
let ArtistBx = document.getElementsByClassName("ArtistBx")[0];


popArtRight.addEventListener('click',()=> {
    ArtistBx.scrollLeft+=330;
})

popArtLeft.addEventListener('click',()=> {
    ArtistBx.scrollLeft-=330;
})


const music = new Audio('audio/_Birthday Bash_ FULL VIDEO SONG _ Yo Yo Honey Singh _ Dilliwaali Zaalim Girlfriend _ Divyendu Sharma(MP3_70K).mp3');
// music.play();
const songs = [
    {
        id: 1,
        songName:`On My Way <br>
                            <div class="subtitle">Alan Walker</div>`,
        poster: "images/1.jpeg"
    },
    {
        id: 2,
        songName:`Song Name <br>
                            <div class="subtitle">Artist Name</div>`,
        poster: "images/1.jpeg"
    },
    {
        id: 3,
        songName:`On My Way <br>
                            <div class="subtitle">Alan Walker</div>`,
        poster: "images/1.jpeg"
    },
    {
        id: 4,
        songName:`On My Way <br>
                            <div class="subtitle">Alan Walker</div>`,
        poster: "images/1.jpeg"
    },
    {
        id: 5,
        songName:`On My Way <br>
                            <div class="subtitle">Alan Walker</div>`,
        poster: "images/1.jpeg"
    },
    {
        id: 6,
        songName:`On My Way <br>
                            <div class="subtitle">Alan Walker</div>`,
        poster: "images/1.jpeg"
    },
    {
        id: 7,
        songName:`On My Way <br>
                            <div class="subtitle">Alan Walker</div>`,
        poster: "images/1.jpeg"
    },
    {
        id: 8,
        songName:`On My Way <br>
                            <div class="subtitle">Alan Walker</div>`,
        poster: "images/1.jpeg"
    },
    {
        id: 9,
        songName:`On My Way <br>
                            <div class="subtitle">Alan Walker</div>`,
        poster: "images/1.jpeg"
    },
    {
        id: 10,
        songName:`On My Way <br>
                            <div class="subtitle">Alan Walker</div>`,
        poster: "images/1.jpeg"
    },
    {
        id: 11,
        songName:`On My Way <br>
                            <div class="subtitle">Alan Walker</div>`,
        poster: "images/1.jpeg"
    },
    {
        id: 12,
        songName:`On My Way <br>
                            <div class="subtitle">Alan Walker</div>`,
        poster: "images/1.jpeg"
    },
    {
        id: 13,
        songName:`On My Way <br>
                            <div class="subtitle">Alan Walker</div>`,
        poster: "images/1.jpeg"
    },
    {
        id: 14,
        songName:`On My Way <br>
                            <div class="subtitle">Alan Walker</div>`,
        poster: "images/1.jpeg"
    },
    {
        id: 15,
        songName:`On My Way <br>
                            <div class="subtitle">Alan Walker</div>`,
        poster: "images/1.jpeg"
    },
    {
        id: 16,
        songName:`On My Way <br>
                            <div class="subtitle">Alan Walker</div>`,
        poster: "images/1.jpeg"
    },
    {
        id: 17,
        songName:`On My Way <br>
                            <div class="subtitle">Alan Walker</div>`,
        poster: "images/1.jpeg"
    },
    {
        id: 18,
        songName:`On My Way <br>
                            <div class="subtitle">Alan Walker</div>`,
        poster: "images/1.jpeg"
    },
    {
        id: 19,
        songName:`On My Way <br>
                            <div class="subtitle">Alan Walker</div>`,
        poster: "images/1.jpeg"
    },
    {
        id: 20,
        songName:`On My Way <br>
                            <div class="subtitle">Alan Walker</div>`,
        poster: "images/1.jpeg"
    },
    {
        id: 21,
        songName:`On My Way <br>
                            <div class="subtitle">Alan Walker</div>`,
        poster: "images/1.jpeg"
    },
    {
        id: 22,
        songName:`On My Way <br>
                            <div class="subtitle">Alan Walker</div>`,
        poster: "images/1.jpeg"
    },
    {
        id: 23,
        songName:`On My Way <br>
                            <div class="subtitle">Alan Walker</div>`,
        poster: "images/1.jpeg"
    },
    {
        id: 24,
        songName:`On My Way <br>
                            <div class="subtitle">Alan Walker</div>`,
        poster: "images/1.jpeg"
    }
]



Array.from(document.getElementsByClassName("songItem")).forEach((e, i) => {
    //when we will change the images for each object in the array thena ll the html divs will get appropriate images
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;


    
})
let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementById("wave");

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
    }
    else {
        music.pause();
        wave.classList.remove('active1')

    }
})

