/* Classes */
class Projeto {
    constructor(nome, classe) {
        this.nome = nome;
        this.classe = classe;
    }
}
class Curso {
    constructor(nome, img) {
        this.nome = nome;
        this.img = img;
    }
}
class Frase {
    constructor(frase, autor) {
        this.frase = frase;
        this.autor = autor;
    }
}
/* Funções */
function geraHeaderAndFooter() {
    let header = document.getElementById("page-header");
    let footer = document.getElementById("page-footer");

    header.innerHTML = (`
        <a href="" id="logo">BRUNOCHELES</a>
        <button id="menu-mobile" onclick="activeMenuMobile();">
            <span id="hamburger"></span>
        </button>
        <nav id="nav-menu">
            <ul id="menu" class="flex">
                <li><a class="menu-item" href="../index.html">Início</a></li>
                <li><a class="menu-item" href="./about.html">Sobre</a></li>
                <li><a class="menu-item" href="./projects.html">Projetos</a></li>
                <li><a class="menu-item" href="./contact.html">Contato</a></li>
            </ul>
        </nav>
    `);
    footer.innerHTML = (`
        <div class="foot-marca">
            <h4>brunocheles</h4>
            <p>bruno.cheles@outlook.com</p>
            <p><span>brunocheles&copy;</span> 2023 - criado por Bruno Cheles</p>
        </div>

        <nav class="social-media">
            <h4>Redes Sociais</h4>
            <ul class="flex">
                <li>
                    <a target="_blank" href="https://www.linkedin.com/in/brunocheles/"><img src="../img/icon-linkedin-white.svg" alt="LinkedIn"></a>
                </li>
                <li>
                    <a target="_blank" href="https://github.com/brunocheles/"><img src="../img/icon-github-white.svg" alt="GitHub"></a>
                </li>
            </ul>
        </nav>   
    `);
}
function geraProjetos() {
    let bloco_projetos = document.getElementById("blocos-projetos");
    let projetos = [
        new Projeto("MyContab","my-contab"),
        new Projeto("Bootcamp Santander","bootcamp-santander"),
        new Projeto("Ribeirão enCena","ribeirao-encena")
    ];
    projetos.forEach((projeto) => {
        bloco_projetos.innerHTML += (`
            <div class="bloco `+projeto.classe+`" onmouseover="showTextProj(this.children)" onmouseout="hideTextProj(this.children)">
                <div class="text-img-proj hidden">
                    <p>`+projeto.nome+`</p>
                </div>
            </div>
        `);
    });
    document.getElementById("proj-btn").innerHTML += (`
        <a href="./pages/projects.html">Todos os Projetos</a>
    `);
}
function geraCursos() {
    let bloco_cursos = document.getElementById("blocos-cursos");
    let cursos = [
        new Curso("PHP","https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"),
        new Curso("HTML","https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"),
        new Curso("CSS","https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"),
        new Curso("Javascript","https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"),
        new Curso("Angular","https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"),
        new Curso("Flutter","https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"),
        new Curso("CSharp","https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"),
        new Curso("Java","https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"),
        new Curso("Github","https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"),
        new Curso("C","https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"),
        new Curso("Figma","https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"),
        new Curso("SQL Server","https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg"),
        new Curso("MySQL","https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"),
        new Curso("SQLite","https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg")
    ];
    cursos.forEach((curso) => {
        bloco_cursos.innerHTML += (`
        <div class="curso">
            <img src="`+curso.img+`" alt="`+curso.nome+`" title="`+curso.nome+`">
        </div>
        `);
    });
}
function geraFrases() {
    let bloco = document.getElementById("frases-motivacionais");
    let frases = [
        new Frase("Algumas frases motivacionais.","Ronaldo")
    ]

    setInterval(() => frases.forEach((frase) => {
        bloco.innerHTML = (`
            <div class="blocos-frases-motivacionais grid-col2">
                <p>`+frase.frase+`</p>
                <p>`+frase.autor+`</p>
            </div>
        `);
    }),100);
    
}
/* Eventos */
window.addEventListener('load', () => {
    let url_atual = window.location.href;
    let url_div = url_atual.split("/");
    let page = url_div.pop();
    switch (page){
        case "about.html":
            geraHeaderAndFooter();
            geraCursos();
            break;
        case "contact.html":
            geraHeaderAndFooter();
            break;
        case "projects.html":
            geraHeaderAndFooter();
            break;
        default:
            //geraFrases();
            geraProjetos();
            break;
    }
});