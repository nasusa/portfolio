<template>
  <div> 
    <!--HEADER ALKAA-->     
    <div class="headerContent has-text-centered">
      <section class="section">  
        <div class="container">
          <ul>
            <li><span class="headerFont">I am Susanna</span></li>
            <li><span class="headerSloganFont"> DESIGNER <i class="fa fa-angle-double-right" aria-hidden="true"></i> ICT TECHNICIAN <i class="fa fa-angle-double-right" aria-hidden="true"></i> DREAMER </span></li>
            <li><span class="headerFont">Welcome to my Portfolio</span></li>
          </ul>
        </div>
      </section>
    </div>
    <!--HEADER PÄÄTTYY-->
   
    <section class="section">
      <div class="container columnsHero">
        <div class="columns has-text-centered">
          <div class="column is-one-third">

          <a class="readmore" @click="open"><img class="modal-button" data-target="modal" src="~/static/design.jpg" alt="Placeholder image"></a>
            <div class="modal" :class="{'is-active': popup}">
              <div class="modal-background"></div>
              <div class="modal-card">
                <header class="modal-card-head has-text-centered">
                  <p class="modal-card-title">Kauneushoitola Dreamskin - nettisivut</p>
                  <button class="delete" aria-label="close" @click="close"></button>
                </header>
                <section class="modal-card-body has-text-centered">
                  <p>Nettisivut kauneushoitolalle.</p>
                  <img src="~/static/kauneushoitola2.png">
                  <p>
                    Ensimmäiset oikealle asiakkaalle tuotetut sivut, joita myös tällähetkellä päivittelen tarvittaessa.
                  </p>
                  <p>Marraskuu 2016 - </p>
                  <p>Kauneushoitola Dreamskin</p>
                  <p>Laravel PHP Framework, Bootstrap</p>
                  <a href="https://hoitoladreamskin.fi/" target="_blank" class="button is-primary is-rounded">www-sivuille</a>
                </section>
              </div>
            </div>

          </div>
         <!-- <div class="column">

          <a class="readmore" @click="open"><img class="modal-button" data-target="modal" src="~/static/design.jpg" alt="Placeholder image"></a>
            <div class="modal" :class="{'is-active': popup}">
              <div class="modal-background"></div>
              <div class="modal-card">
                <header class="modal-card-head has-text-centered">
                  <p class="modal-card-title">Projektin nimi</p>
                  <button class="delete" aria-label="close" @click="close"></button>
                </header>
                <section class="modal-card-body has-text-centered">
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <img src="~/static/design.jpg">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi 
                    sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!
                  </p>
                  <p>January 2017 - January 2017</p>
                  <p>Asiakas</p>
                </section>
              </div>
            </div>

          </div>
          <div class="column">

          <a class="readmore" @click="open"><img class="modal-button" data-target="modal" src="~/static/design.jpg" alt="Placeholder image"></a>
            <div class="modal" :class="{'is-active': popup}">
              <div class="modal-background"></div>
              <div class="modal-card">
                <header class="modal-card-head has-text-centered">
                  <p class="modal-card-title">Projektin nimi</p>
                  <button class="delete" aria-label="close" @click="close"></button>
                </header>
                <section class="modal-card-body has-text-centered">
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <img src="~/static/design.jpg">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi 
                    sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!
                  </p>
                  <p>January 2017 - January 2017</p>
                  <p>Asiakas</p>
                </section>
              </div>
            </div>

          </div>
        </div>
        <div class="columns">
          <div class="column is-one-third">

          <a class="readmore" @click="open"><img class="modal-button" data-target="modal" src="~/static/design.jpg" alt="Placeholder image"></a>
            <div class="modal" :class="{'is-active': popup}">
              <div class="modal-background"></div>
              <div class="modal-card">
                <header class="modal-card-head has-text-centered">
                  <p class="modal-card-title">Projektin nimi</p>
                  <button class="delete" aria-label="close" @click="close"></button>
                </header>
                <section class="modal-card-body has-text-centered">
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <img src="~/static/design.jpg">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi 
                    sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!
                  </p>
                  <p>January 2017 - January 2017</p>
                  <p>Asiakas</p>
                </section>
              </div>
            </div>

          </div>
          <div class="column">

          <a class="readmore" @click="open"><img class="modal-button" data-target="modal" src="~/static/design.jpg" alt="Placeholder image"></a>
            <div class="modal" :class="{'is-active': popup}">
              <div class="modal-background"></div>
              <div class="modal-card">
                <header class="modal-card-head has-text-centered">
                  <p class="modal-card-title">Projektin nimi</p>
                  <button class="delete" aria-label="close" @click="close"></button>
                </header>
                <section class="modal-card-body has-text-centered">
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <img src="~/static/design.jpg">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi 
                    sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!
                  </p>
                  <p>January 2017 - January 2017</p>
                  <p>Asiakas</p>
                </section>
              </div>
            </div>

          </div>
          <div class="column">

          <a class="readmore" @click="open"><img class="modal-button" data-target="modal" src="~/static/design.jpg" alt="Placeholder image"></a>
            <div class="modal" :class="{'is-active': popup}">
              <div class="modal-background"></div>
              <div class="modal-card">
                <header class="modal-card-head has-text-centered">
                  <p class="modal-card-title">Projektin nimi</p>
                  <button class="delete" aria-label="close" @click="close"></button>
                </header>
                <section class="modal-card-body has-text-centered">
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <img src="~/static/design.jpg">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi 
                    sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!
                  </p>
                  <p>January 2017 - January 2017</p>
                  <p>Asiakas</p>
                </section>
              </div>
            </div>

          </div>-->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {

    data () {
      return {
        popup: false
      }
    },
    methods: {
      close () {
        this.popup = false
      },
      open () {
        this.popup = true
      }
    }
  }
</script>

<style lang="scss">
.headerContent {
  height: 600px;
  font-size: 3em;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
  background-image: url("~/static/susa.jpg");
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 20%;
  z-index: -1;
}
.headerFont {
    font-size: 1em;
    color: rgba(48,48,48,1);
    text-shadow: 1px 1px #FFFAF0;
    opacity: 0.6;
    font-family: 'Sacramento', cursive;
  }
.headerSloganFont {
    font-size: 0.5em;
    color:  #cccccc;
    letter-spacing: 3px;
    font-weight: bold;
    font-family: 'Abel', sans-serif;
  }
.columnsHero {
  margin: -5em auto -5em auto;
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  max-width: 1000px;
  box-shadow: 0 5px 9px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @include desktop {
    padding: 40px;
  }
}
.modal-background {
  background-color:rgba(10, 10, 10, 0.66);
}
.portfolioParagraph {
  padding: 15px 0 15px 0;
}
.portfolioBox {
  box-shadow: none;
}
</style>
