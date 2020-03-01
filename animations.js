
function duckMode() {
    document.getElementsByClassName("top")[0].style.opacity = 0;
    toggled = true;
}

function joaoMode() {
    document.getElementsByClassName("top")[0].style.opacity = 1;
    toggled = true;
}

function hacked(){
    alert("KKKKK JA ERA MANO, ATAK DO PATO LOKO")
}

function naniCrazyDuck(){
    document.getElementsByClassName("crazyduck")[0].style.opacity = 1;
    document.getElementsByTagName("h1")[0].textContent = "ATAK DO PATO HACKER";
    document.body.style.backgroundImage =  "url(Art/matrixg.gif)";
    document.getElementById("duckWithGun").style.backgroundImage = "url(Art/patoArmado.png)";
    document.getElementById("duckWithGun").style.backgroundSize = "100% 100%";
    document.getElementById("duckWithGun").textContent = ""
    buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute( "onClick", "javascript: hacked();" );
    }
    document.getElementsByClassName("jumbobottomright")[0].innerHTML = `🦆ÅŤÅQŮĘ ĐØ P4TØ ĽØĶØ🦆<br><br>
    🦆SAIA DO SITE🦆    🦆COMEÇOU O ATAQUE🦆 ❗❗<br>
    HÁ! HÁ! HÁ! HÁ! HÁ❗❗❗❗<br>
    🦆 ❗ 🦆 ❗ 🦆 ❗<br><br>
    ̿̿ ̿'̿'\̵͇̿̿\з= 🦆 =ε/̵͇̿̿/’̿’̿ ̿ ̿̿<br>
            (   .  )  <br>
          __//    \\__  <br>
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


