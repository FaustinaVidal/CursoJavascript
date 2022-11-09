const headerMusica = document.querySelector("header#headerMusica")//header

function armandoHeaderMusica() {
    return `<a href="../index.html">
                <img class="logo" src="../img/Bejo.jpg" alt="logo">
            </a>
            <nav class="" id="menu">
                <ul class="navmenu__lista">
                    <li class="">
                        <a class="navmenu__item" href="../index.html">Inicio</a>
                    </li>
                    <li class="">
                        <a class="navmenu__itemSeleccionado" href="./musica.html">Musica</a>
                    </li>
                    <li class="">
                        <a class="navmenu__item" href="./tienda.html">Tienda</a>
                    </li>
                </ul>
            </nav>`
}

function colocandoHeaderMusica() {
    headerMusica.innerHTML = armandoHeaderMusica()
}

colocandoHeaderMusica()
