
function duckMode() {
    document.getElementsByClassName("top")[0].style.opacity = 0;
    toggled = true;
}

function joaoMode() {
    document.getElementsByClassName("top")[0].style.opacity = 1;
    toggled = true;
}

function hacked(){
    alert("SEU IP: 192.168.0.1")
}

function naniCrazyDuck(){
    
    scroll(0,0);

    document.body.style.backgroundImage =  "url(Art/matrixg.gif)";    
    document.getElementsByClassName("crazy-duck")[0].style.opacity = 1;
    document.getElementsByTagName("h1")[0].textContent = "DESCULPAS A TODOS POR ESTA VERGONHA!";

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
    
    document.getElementsByTagName("h2")[1].textContent = "USE RUST"

    document.getElementsByClassName("pointers")[0].innerHTML = `I'd just like to interject for a moment. What you're referring to as Linux, is in fact, GNU/Linux, or as I've recently taken to calling it, GNU plus Linux. Linux is not an operating system unto itself, but rather another free component of a fully functioning GNU system made useful by the GNU corelibs, shell utilities and vital system components comprising a full OS as defined by POSIX.
    Many computer users run a modified version of the GNU system every day, without realizing it. Through a peculiar turn of events, the version of GNU which is widely used today is often called "Linux", and many of its users are not aware that it is basically the GNU system, developed by the GNU Project.    
    There really is a Linux, and these people are using it, but it is just a part of the system they use. Linux is the kernel: the program in the system that allocates the machine's resources to the other programs that you run. The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system. Linux is normally used in combination with the GNU operating system: the whole system is basically GNU with Linux added, or GNU/Linux. All the so-called "Linux" distributions are really distributions of GNU/Linux.`



    document.getElementsByClassName("jumbo-bottom-right")[0].innerHTML = `🦆ÅŤÅQŮĘ ĐØ P4TØ ĽØĶØ🦆<br><br>
    🦆SAIA DO SITE🦆    🦆COMEÇOU O ATAQUE🦆 ❗❗<br>
    HÁ! HÁ! HÁ! HÁ! HÁ❗❗❗❗<br>
    🦆 ❗ 🦆 ❗ 🦆 ❗<br> <br>
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


        
}

