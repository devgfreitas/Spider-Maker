let startMenuStats = false;
let startmenu = false;


document.addEventListener('keydown', function(event) {

    let main = document.querySelector('.container');

    if(event.key === 'Enter' && !startMenuStats) {

        main.innerHTML = `
            <video class="video" autoplay>
                <source src="assets/vid/startone.mp4" type="video/mp4">
            </video>
        `;

        setTimeout(() => {
            main.innerHTML = `
                <video class="video" autoplay playsinline loop>
                    <source src="assets/vid/starttwo.mp4" type="video/mp4">
                </video>
            `;
        }, 23000);

        startMenuStats = true;
    }

    if(event.key.toLowerCase() === 'x' && startMenuStats && startmenu == false) {

        main.innerHTML = `
            <video class="video" autoplay playsinline loop>
                <source src="assets/vid/starttwo.mp4" type="video/mp4">
            </video>

            <div class="startmenu">
                <h1>MAIN MENU</h1>
                <div class="linhah"></div>

                <div class='startmbtns'>
                    <div class="linhav"></div>

                    <ul class='startmenulist'>
                        <li><button>
                            Load Game
                            <span class="tl"></span>
                            <span class="tr"></span>
                            <span class="bl"></span>
                            <span class="br"></span>
                        </button></li>
                        <li><button>
                            Settings
                            <span class="tl"></span>
                            <span class="tr"></span>
                            <span class="bl"></span>
                            <span class="br"></span>
                        </button></li>
                        <li><button>
                            GitHub
                            <span class="tl"></span>
                            <span class="tr"></span>
                            <span class="bl"></span>
                            <span class="br"></span>
                        </button></li>
                        <li><button>
                            Credits
                            <span class="tl"></span>
                            <span class="tr"></span>
                            <span class="bl"></span>
                            <span class="br"></span>
                        </button></li>
                        <li class='quitgamebtn'><button>
                            Quit Game
                            <span class="tl"></span>
                            <span class="tr"></span>
                            <span class="bl"></span>
                            <span class="br"></span>
                        </button></li>
                    </ul>
                </div>
            </div>
            <div class='messagemenu'>
                <p>Mensagem irá aparecer aqui.</p>

                <div class='linhacsimb'>
                    <div class="linhah"></div>
                    <div class="simbaranha"><img src='assets/img/aranha.png'></div>
                    <div class="linhah"></div>
                </div>
            </div>
            <div>
                <div>
                    <div><img src='assets/img/blackcat.jpg'></div>
                    <div>
                        <div class='linhav'></div>
                        <div>
                            <h2>The Heist</h2>
                            <div class='linhah'></div>
                            <p>Additional content avaliable. Play<br>The Heist by acessing the DLC<br>menu in the game.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        startmenu = true;
    }
});