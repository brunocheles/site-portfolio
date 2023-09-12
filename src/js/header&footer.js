function generateHeaderAndFooter() {
    let header = document.getElementById("header");
    header.innerHTML = (`
        <div class="grid nav-header grid-col-131">
            <h1 class="titulo">
                <a href="../index.html">BrunoCheles</a>
            </h1>
            <nav class="menu">
                <div class="menu-mobile">
                    <input type="checkbox" name="toggle" id="toggle">
                    <label for="toggle" id="menu-icons" onclick="hideMenuMobile()"></label>
                </div>

                <ul class="flex menu-base">
                    <li><a class="menu-btn" href="../index.html">Início</a></li>
                    <li><a class="menu-btn" href="./about.html">Sobre</a></li>
                    <li><a class="menu-btn" href="./projects.html">Projetos</a></li>
                    <li><a class="menu-btn" href="./contact.html">Contato</a></li>
                </ul>
            </nav>
        </div>
    `);
    let footer = document.getElementById("footer");
    footer.innerHTML = (`
        <div class="grid grid-col-131">
            <div class="foot flex">
                <div class="foot-marca">
                    <h4>brunocheles</h4>
                    <p>bruno.cheles@outlook.com</p>
                    <p><span>brunocheles&copy;</span> 2023 - criado por Bruno Cheles</p>
                </div>

                <nav class="social-media">
                    <h4>Redes Sociais</h4>
                    <ul class="flex">
                        <li><a target="_blank" href="https://www.linkedin.com/in/brunocheles/"><img src="../img/icon-linkedin-white.svg" alt="LinkedIn"></a></li>
                        <li><a target="_blank" href="https://github.com/brunocheles/"><img src="../img/icon-github-white.svg" alt="GitHub"></a></li>
                    </ul>
                </nav>
            </div>
        </div>    
    `);
}