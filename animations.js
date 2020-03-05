

// Alterna para o modo Pato, com informações de por que meu apelido é pato e a foto do pato na lateral esquerda
function duckMode() {
    // revela a foto do pato, tornando transparente a minha foto.
    document.getElementsByClassName("top")[0].style.opacity = 0;

    document.getElementsByClassName("jumbo-bottom-right")[0].innerHTML = `
    <ul class="list">    
        <p>Por incrível que pareça, eu não lembrava de quando decidi esse apelido, por conta disso,
            resolvi fazer essa compilação.<p>
        <li>
            Buscando mais informações fui procurar evidências dentro do meu antigo hotmail, foi aqui que vi que minha foto de perfil.
            (da era do MSN) continha algo estranho: Um marreco com o simbolo do BOPE - Ai lembrei da versão beta do apelido - Marreco do BOPE.
        </li>
        <li><strike>Eu tinha uns 9 anos me perdoem.</strike></li>
        <li>Com 11 anos ja usava constantemente o nome Pato nos minecrafts <strike>piratas</strike> da vida.</li>
        <li>Com 13 anos, seguindo a onda dos empreendedores gourmet, coloquei meu "username" no LoLzin de DuckHT.</li>
        <li>O HT era proveniente do meu time <strike>prata</strike> ultra competitivo - preparem-se para o nome glorioso - <b>HardcoreTeam</b>.</li>
        <li>Desde então carrego este honroso nome, do bixo que voa, nada e anda, mas não faz nada direito. <strike>Tudo bem que sou meio desengonçado.</strike></li>
    </ul>`;
}

// alterna para o modo João com informações sobre a minha história.
function joaoMode() {
    // volta a opacidade da minha foto
    document.getElementsByClassName("top")[0].style.opacity = 1;

    document.getElementsByClassName("jumbo-bottom-right")[0].innerHTML =  `
   <ul class="list">
        <li>Nascido no Paraná, vivi minha vida inteira no interior de São Paulo (Vale do Ribeira).</li>
        <li>Desde criança, sempre tive um certo fascínio por empresas, era muito curioso para saber por quais motivos empresas chegavam a falência ou obtinham sucesso.</li>
        <li>Por conta disso, decidi cursar um curso na área de Business, acabei passando em Economia na FEA/USP e aos 17 anos fui morar sozinho em São Paulo.</li>
        <li>Tive grandes experiências dentro e fora do curso, chegando a estagiar na sede do maior banco brasileiro. Primeiramente na área de Análise de Dados e Planejamento Estratégico, depois na área de Trading.</li>
        <li>Lá obtive muita experiência profissional e ética de trabalho, porém acabei por compreender que as áreas tradicionais de um economista não eram para mim.</li>
        <li>Em Setembro de 2019 me desliguei do Bradesco para focar no que eu acredito ser realmente a minha paixão: Computação.</li>
        <li>Cá estou. Ainda gosto muito de Finanças e Estratégia Empresarial, mas acredito que serei mais realizado como Computeiro.</li>
    </ul>`;
    }

// brincadeirinha com os botões
function hacked(){
    alert("SEU IP FOI HACKEADO: 192.168.0.1");
}


// função que transforma o site de normal para doente
function naniCrazyDuck(){
    
    // vai para o início da pag
    scroll(0,0);

    // lidando com título e header do documento, tornando opaco o GIF do pato e trazendo o GIF da matrix.
    document.title = "Quacked";
    document.body.style.backgroundImage =  "url(Art/matrixg.gif)";    
    document.getElementsByClassName("crazy-duck")[0].style.opacity = 1;
    document.getElementsByTagName("h1")[0].textContent = "DESCULPAS A TODOS POR ESTA VERGONHA!";


    // adiciona uma novo cor de fonte para várias parte do documento se tornarem legíveis novamente.
    let style = document.createElement('style');
    document.head.appendChild(style);
    style.sheet.insertRule('.color-change {color: aliceblue}');



    // Criando novos elementos e as partes do DOM que precisam ser alteradas.
    feelings = ["PARANOIA", "VIOLÊNCIA", "DESHONRA"];
    images = ["url(Art/lanseabraba.jpg", "url(Art/patoArmado.png", "url(Art/duckwithknife.jpg"];    
    bullets = document.getElementsByClassName("bullet-content");
    bulletTitles = document.getElementsByClassName("bullet-title");
    buttons = document.getElementsByTagName("button");

    // coloquei tudo no mesmo loop por facilidade, já que sábia que esses elementos se repetiam apenas três vezes.
    for (let i = 0; i < buttons.length && i < bullets.length ; i++) {
        buttons[i].setAttribute( "onClick", "javascript: hacked();" );
        bullets[i].textContent = "";
        bullets[i].style.backgroundImage = images[i];
        bullets[i].style.backgroundSize = "100% 100%";
        bulletTitles[i].textContent = feelings[i];
    }
    
    // mais uma mudança de reader simples;
    document.getElementsByTagName("h2")[1].textContent = "USE RUST";


    // abaixo os textos meméticos em Inner HTML sendo adicionados para o site.
    document.getElementsByClassName("pointers")[0].innerHTML = `I'd just like to interject for a moment. What you're referring to as Linux, is in fact, GNU/Linux, or as I've recently taken to calling it, GNU plus Linux. Linux is not an operating system unto itself, but rather another free component of a fully functioning GNU system made useful by the GNU corelibs, shell utilities and vital system components comprising a full OS as defined by POSIX.
    Many computer users run a modified version of the GNU system every day, without realizing it. Through a peculiar turn of events, the version of GNU which is widely used today is often called "Linux", and many of its users are not aware that it is basically the GNU system, developed by the GNU Project.    
    There really is a Linux, and these people are using it, but it is just a part of the system they use. Linux is the kernel: the program in the system that allocates the machine's resources to the other programs that you run. The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system. Linux is normally used in combination with the GNU operating system: the whole system is basically GNU with Linux added, or GNU/Linux. All the so-called "Linux" distributions are really distributions of GNU/Linux.`

    document.getElementsByClassName("jumbo-bottom-right")[0].innerHTML = `<div class="centered"><br>🦆ÅŤÅQŮĘ ĐØ P4TØ ĽØĶØ🦆<br><br>
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
    🦆P4TØ ĽØĶØ🦆<br><br>
    ̿̿ ̿'̿'\\\̵͇̿̿\\з= 🦆 =ε/̵͇̿̿/’̿’̿ ̿ ̿̿<br>
    (   .  )  <br>
  __//   \\\\__  <br>
  VØÇË§ FØŘÅM ÅŤÅČÅĐØ§ PËĽØ P4TØ ĽØĶØ<br><br>
    </div>
    `;


        
}

