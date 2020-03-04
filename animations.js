
function duckMode() {
    document.getElementsByClassName("top")[0].style.opacity = 0;
    toggled = true;
}

function joaoMode() {
    document.getElementsByClassName("top")[0].style.opacity = 1;
    toggled = true;
}

function hacked(){
    alert("ATAK DO PATO LOKO")
}

function naniCrazyDuck(){

    document.body.style.backgroundImage =  "url(Art/matrixg.gif)";    
    document.getElementsByClassName("crazyduck")[0].style.opacity = 1;
    document.getElementsByTagName("h1")[0].textContent = "ATAK DO PATO LOKO";

    let style = document.createElement('style');
    document.head.appendChild(style);
    style.sheet.insertRule('.color-change {color: aliceblue}');


    feelings = ["PARANOIA", "VIOLÊNCIA", "DESHONRA"];
    images = ["url(Art/lanseabraba.jpg", "url(Art/patoArmado.png", "url(Art/duckwithknife.jpg"];    
    bullets = document.getElementsByClassName("bullet-content");
    bulletTitles = document.getElementsByClassName("bullet-title");
    buttons = document.getElementsByTagName("button");

    for (let i = 0; i < buttons.length && i < bullets.length ; i++) {
        buttons[i].setAttribute( "onClick", "javascript: hacked();" );
        bullets[i].textContent = "";
        bullets[i].style.backgroundImage = images[i];
        bullets[i].style.backgroundSize = "100% 100%";
        bulletTitles[i].textContent = feelings[i];
    }
    


    document.getElementsByClassName("jumbobottomright")[0].innerHTML = `🦆ÅŤÅQŮĘ ĐØ P4TØ ĽØĶØ🦆<br><br>
    🦆SAIA DO SITE🦆    🦆COMEÇOU O ATAQUE🦆 ❗❗<br>
    HÁ! HÁ! HÁ! HÁ! HÁ❗❗❗❗<br>
    🦆 ❗ 🦆 ❗ 🦆 ❗<br><br>
    ̿̿ ̿'̿'\\\̵͇̿̿\\з= 🦆 =ε/̵͇̿̿/’̿’̿ ̿ ̿̿<br>
            (   .  )  <br>
          __//   \\\\__  <br>
    Ta-_Em_-CHoK kk❓ ⚡⚡⚡⚡  🦆 ❗  <br><br>
    VØÇË§ FØŘÅM ÅŤÅČÅĐØ§ PËĽØ P4TØ ĽØĶØ<br><br>
    ▕▇▇▇◤▔▔▔▔▔▔▔◥▇▇▇  <br>
    ▕▇▇▇▏◥▇◣┊◢▇◤▕▇▇▇  <br>
    ▕▇▇▇▏▃▆▅▎▅▆▃▕▇▇▇  <br>
    ▕▇▇▇▏╱▔▕▎▔▔╲▕▇▇▇  <br>
    ▕▇▇▇◣◣▃▅▎▅▃◢◢▇▇▇  <br>
    ▕▇▇▇▇◣◥▅▅▅◤◢▇▇▇▇  <br>
    ▕▇▇▇▇▇◣╲▇╱◢▇▇▇▇▇  <br>
    ▕▇▇▇▇▇▇◣▇◢▇▇▇▇▇▇  <br><br>
    🦆P4TØ ĽØĶØ🦆<br><br>`;


    scroll(0,0);
        
}

