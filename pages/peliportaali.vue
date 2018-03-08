<template>
    <section>
        <section class="hero is-info is-fullheight">
            <div class="hero-head">
                <nav class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                            <a class="navbar-item">
                                <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo">
                            </a>
                            <span class="navbar-burger burger" data-target="navbarMenuHeroB">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navbarMenuHeroB" class="navbar-menu">
                            <div class="navbar-end">
                                <a class="navbar-item is-active">
                                Peliportaali
                                </a>
                                <a class="navbar-item">
                                In English
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

            <div class="hero-body">
                <div class="container has-text-centered">
                <p class="title">
                    Title
                </p>
                <p class="subtitle">
                    Subtitle
                </p>
                </div>
            </div>

            <div class="hero-foot">
                <nav class="tabs is-boxed is-fullwidth">
                <div class="container">
                    <ul>
                        <li class="is-active">
                            <a>Fyysisen kuntoutuksen pelit</a>
                        </li>
                        <li>
                            <a>Kognitiivisen kuntoutuksen pelit</a>
                        </li>
                        <li>
                            <a>Opetuspelit</a>
                        </li>
                    </ul>
                </div>
                </nav>
            </div>
        </section>
        
        <section class="hero">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-desktop has-text-centered is-uppercase">
                        <div class="column">
                            <img class="game" src="~/static/1.png">
                            <h1>Lorem ipsum</h1>
                        </div>
                        <div class="column">
                            <img class="game" src="~/static/1.png">
                            <h1>Lorem ipsum</h1>
                        </div>
                        <div class="column">
                            <img class="game" src="~/static/1.png">
                            <h1>Lorem ipsum</h1>
                        </div>
                        <div class="column">
                            <img class="game" src="~/static/1.png">
                            <h1>Lorem ipsum</h1>
                        </div>
                    </div>
                    <div class="columns is-desktop has-text-centered is-uppercase">
                        <div class="column">
                            <img class="game" src="~/static/1.png">
                            <h1>Lorem ipsum</h1>
                        </div>
                        <div class="column">
                            <img class="game" src="~/static/1.png">
                            <h1>Lorem ipsum</h1>
                        </div>
                        <div class="column">
                            <img class="game" src="~/static/1.png">
                            <h1>Lorem ipsum</h1>
                        </div>
                        <div class="column">
                            <img class="game" src="~/static/1.png">
                            <h1>Lorem ipsum</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="hero">
            <div class="hero-body heroSponsor">
                <div class="container has-text-centered">
                    <img class="sponsor" src="~/static/exerium_logo_low_pixel.png">
                    <img class="sponsor" src="~/static/tiko_logo_musta_fin.png">
                    <img class="sponsor" src="~/static/tamk_RGB.png">
                </div>
            </div>
        </section>
        
        <footer class="footer">
            <div class="container">
                <div class="content has-text-centered">
                    <p>
                        <strong>@Potku Productions.</strong> Kaikki oikeudet pidätetään.
                    </p>
                </div>
            </div>
        </footer>
    </section>
</template>

<script>
  export default {
    layout: 'blank'
    }
</script>

<style lang="scss">
    .game {
        height: 80%;
    }
    .heroSponsor {
        background-color: #DCDCDC; 
    }
    .sponsor {
        width: 300px;
        padding: 0px 30px;
    }
</style>