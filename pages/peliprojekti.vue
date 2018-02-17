<template>
<section>
    <section class="mainHero hero is-success is-fullheight">
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
                        <img class="levelImage" src="~/static/1.jpg">
                    </div>
                    <div class="column">
                        <h1 class="is-uppercase is-size-4">Fusce feugiat malesuada</h1>
                        <h2 class="imageContent">ulrulla dugi malea iog</h2>
                        <img class="levelImage" src="~/static/2.jpg">
                    </div>
                    <div class="column">
                        <h1 class="is-uppercase is-size-4">Consectetuer adipiscing</h1>
                        <h2 class="imageContent">sems ultrice pharet</h2>
                        <img class="levelImage" src="~/static/3.jpg">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="hero is-primary">
        <div class="hero-body">
            <div class="container">
                <div class="columns infoColumns">
                    <div class="column is-half infoColumn">
                        <h1 class="title is-uppercase is-size-3">Tervetuloa</h1>
                        <h2 class="is-uppercase is-size-5">Ultriceharetra gnec accuan mal suada</h2>
                        <p>Sugimale ada odi dio gravida atcur ecuus a lorem. Maeenas tristique orc ac semuis ultriceharetra gnec accuan male suadaorcnec sit amet 
                            eroorem ipsum dol. or sit amt consc tetuer aiing elit. Mauris fermentum tumagna.
                        </p>
                        <figure class="image is-16by9">
                            <img class="videoImage" src="~/static/trailer.png">
                        </figure>    
                    </div>
                    <div class="column">
                        <h1 class="title is-uppercase is-size-3">Ketä olemme?</h1>
                        <div class="columns">
                            <div class="column is-one-fifth">
                                <img class="profile" src="~/static/portrate1.jpeg">
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
                                <img class="profile" src="~static/portrate2.jpeg">
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
                                <img class="profile" src="~static/portrate3.jpeg">
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
</section>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.mainHero {
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("~/static/gamebg.jpg");
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
    padding: 0px 50px;
}
.infoColumn {
    padding-right: 8em;
}
.videoImage {
    padding: 30px 30px 10px 0px;
}
.imageContent {
    padding-bottom: 20px;
}
</style>