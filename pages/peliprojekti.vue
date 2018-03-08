<template>
    <section>
        <nav class="navbar is-transparent">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
                </a>
                <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                <span></span>
                <span></span>
                <span></span>
                </div>
            </div>

            <div id="navbarExampleTransparentExample" class="navbar-menu">
                <div class="navbar-start is-uppercase">
                    <a class="navbar-item" href="#">
                        Yhteistyössä
                    </a>
                    <a class="navbar-item" href="#">
                        Peli
                    </a>
                    <a class="navbar-item" href="#">
                        Kehitystiimi
                    </a>
                    <a class="navbar-item" href="#">
                        Peliportaali
                    </a>
                    <a class="navbar-item" href="#">
                        In English
                    </a>
                </div>
            </div>
        </nav>

        <section class="mainHero hero is-fullheight">
            <div class="hero-body">
                <div class="container">
                <h1 class="title">
                    Lorem ipsum Game
                </h1>
                <h2 class="subtitle">
                    dolor sit amet, Fusce feugiat malesuada
                </h2>
                </div>
            </div>
        </section>

        <section class="hero is-medium">
            <div class="hero-body">
                <div class="container">
                    <div class="levelColumns columns has-text-centered">
                        <div class="column is-one-third">
                            <h1 class="is-uppercase is-size-4">Lorem ipsum dolor sit</h1>
                                <h2 class="imageContent">um ciis natoque tib</h2>
                            <img class="levelImage" src="~/static/1.png">
                        </div>
                        <div class="column">
                            <h1 class="is-uppercase is-size-4">Fusce feugiat malesuada</h1>
                            <h2 class="imageContent">ulrulla dugi malea iog</h2>
                            <img class="levelImage" src="~/static/1.png">
                        </div>
                        <div class="column">
                            <h1 class="is-uppercase is-size-4">Consectetuer adipiscing</h1>
                            <h2 class="imageContent">sems ultrice pharet</h2>
                            <img class="levelImage" src="~/static/1.png">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="hero infoHero">
            <div class="hero-body">
                <div class="container">
                    <div class="columns infoColumns">
                        <div class="column is-half is-desktop infoColumn">
                            <h1 class="title is-half-desktop is-uppercase is-size-3">Tervetuloa</h1>
                            <h2 class="is-uppercase is-size-5">Ultriceharetra gnec accuan mal suada</h2>
                            <p>Sugimale ada odi dio gravida atcur ecuus a lorem. Maeenas tristique orc ac semuis ultriceharetra gnec accuan male suadaorcnec sit amet 
                                eroorem ipsum dol. or sit amt consc tetuer aiing elit. Mauris fermentum tumagna.
                            </p>
                            <img class="videoImage" src="~/static/video.jpg">
                        </div>
                        <div class="column">
                            <h1 class="title is-uppercase is-size-3">Kehitystiimi</h1>
                            <div class="columns">
                                <div class="column is-one-fifth">
                                    <img class="profile" src="~/static/people.png">
                                </div>
                                <div class="column">
                                    <h1 class="is-uppercase">Scrum master</h1>
                                    <p>Sugimale ada odi dio gravida atcur ecuus a lorem. Maeenas tristique orc ac semuis ultriceharetra gnec accuan male suada.
                                    </p>
                                    <p>aabbcc@cs.tamk.fi</p>
                                </div>
                            </div> 
                            <div class="columns">
                                <div class="column is-one-fifth">
                                    <img class="profile" src="~static/people.png">
                                </div>
                                <div class="column">
                                    <h1 class="is-uppercase">Koodari</h1>
                                    <p>Maeenas tristique orc ac semuis ultriceharetra gnec accum male suada orcnec sit amet eroorem ipsum dolor sit amt consc tet.
                                    </p>
                                    <p>aabbcc@cs.tamk.fi</p>
                                </div>
                            </div>
                            <div class="columns">
                                <div class="column is-one-fifth">
                                    <img class="profile" src="~static/people.png">
                                </div>
                                <div class="column">
                                    <h1 class="is-uppercase">Koodari</h1>
                                    <p>Ut te dolor dapibus eget elentu vel cursus eleifend enean auctor wrn liqua volutpat. Duis ac turpisteger rutrum ante eu lacu.
                                    </p>
                                    <p>aabbcc@cs.tamk.fi</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="hero">
            <div class="hero-body heroSponsor">
                <div class="container has-text-centered">
                    <h1><i class="fa-fa-arrow-right"></i> Lisää pelejä löydät 17TIKO yhteisestä peliportaalista.</h1>
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
.mainHero {
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("~/static/header.jpg");
}
.levelColumns{
    .levelImage {
        border-radius: 50%;
        height: 300px;
    }
}
.title {
    padding-bottom: 1.5em;
}
.profile {
    border-radius: 50%;
}
.infoColumns {
    @include desktop {
        padding: 0px 50px;
    }
}
.infoColumn {
    @include desktop {
        padding-right: 8em;
    }
}
.videoImage {
    padding: 30px 30px 10px 0px;
}
.imageContent {
    padding-bottom: 20px;
}
.infoHero {
    background-color: white;
}
.heroSponsor {
    background-color: #DCDCDC; 
}
.sponsor {
    width: 300px;
    padding: 0px 30px;
}
</style>