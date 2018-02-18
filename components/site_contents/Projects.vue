<template>
  <div> 
    <section class="section projectSection has-text-centered">
      <h1 class="aboutmeTitle is-uppercase">Projektini</h1>
      <hr class="titleHr">
      <div class="container columnsHero">
        <div class="columns has-text-centered">
          <div class="column">
            
            <div class="projectLayer">
              <img class="modal-button" data-target="modal" src="~/static/game.jpg" alt="Placeholder image">
              <div class="overlay is-uppercase">
                <h3 class="referenceTitle">Peliprojekti</h3>
                <a class="readmore" @click="open(1)"><p>Lue lisää...</p></a>
              </div>
            </div>
          
            <div class="modal" :class="{'is-active': popup === 1}">
              <div class="modal-background"></div>
              <div class="modal-card">
                <header class="modal-card-head has-text-centered">
                  <h1 class="skillsHeading modal-card-title is-uppercase">Peliprojekti - tamk</h1>
                  <button class="delete" aria-label="close" @click="close"></button>
                </header>
                <section class="modal-card-body has-text-centered">
                  <h1 class="headerAbel paragraphPadding">Tampereen ammattikorkeakoulun ensimmäisen vuoden peliprojekti.</h1>
                  <p class="paragraphPadding">
                    Peliprojekti starttasi 2018 tammikuussa. Itse toimin projektin Scrum masterina, sekä kahden muun tiimiläisen kanssa graafikkona.
                    Sain myös tehtäväkseni tehdä www-sivut peliportaalille. 
                  </p>
                  <p>Peliprojekti huipentuu, kun toukokuussa jokainen tiimi pääsee esittelemään
                    tuotoksensa Tampere-taloon pelimessuille!
                  </p>
                  <p class="paragraphPadding">Tammikuu 2018 - </p>
                  <p class="paragraphPadding">Asiakkaana <a href="http://exerium.com/" target="_blank">Exerium</a></p>
                  <a href="http://tiko.blogs.tamk.fi/" target="_blank" class="projectButton button is-primary is-rounded">tiko-blogi</a>
                  <a href="https://www.facebook.com/pelimessut/" target="_blank" class="projectButton button is-primary is-rounded">Pelimessu-tapahtuma</a>
                </section>
              </div>
            </div>

          </div>
         <div class="column">

            <div class="projectLayer">
              <img class="modal-button" data-target="modal" src="~/static/design.jpg" alt="Placeholder image">
              <div class="overlay is-uppercase">
                <h3 class="referenceTitle">Www-sivut</h3>
                <a class="readmore" @click="open(2)"><p>Lue lisää...</p></a>
              </div>
            </div>

            <div class="modal" :class="{'is-active': popup === 2}">
              <div class="modal-background"></div>
              <div class="modal-card">
                <header class="modal-card-head has-text-centered">
                  <p class="skillsHeading modal-card-title is-uppercase">Kauneushoitola Dreamskin - nettisivut</p>
                  <button class="delete" aria-label="close" @click="close"></button>
                </header>
                <section class="modal-card-body has-text-centered">
                  <h1 class="headerAbel paragraphPadding">Nettisivut kauneushoitolalle.</h1>
                  <img class="projectImage" src="~/static/kauneushoitola2.png">
                  <p class="paragraphPadding">
                    Ensimmäiset oikealle asiakkaalle tuotetut sivut, joita myös tällähetkellä päivittelen tarvittaessa.
                  </p>
                  <p class="paragraphPadding">Marraskuu 2016 - </p>
                  <p class="paragraphPadding">Kauneushoitola Dreamskin</p>
                  <p class="paragraphPadding">Laravel PHP Framework, Bootstrap</p>
                  <a href="https://hoitoladreamskin.fi/" target="_blank" class="projectButton button is-primary is-rounded">www-sivuille</a>
                </section>
              </div>
            </div>

          </div>
          <div class="column">

            <div class="projectLayer">
              <img class="modal-button" data-target="modal" src="~/static/Arduino.jpg" alt="Placeholder image">
              <div class="overlay is-uppercase">
                <h3 class="referenceTitle">Arduino projekti</h3>
                <a class="readmore" @click="open(3)"><p>Lue lisää...</p></a>
              </div>
            </div>

            <div class="modal" :class="{'is-active': popup === 3}">
              <div class="modal-background"></div>
              <div class="modal-card">
                <header class="modal-card-head has-text-centered">
                  <p class="skillsHeading modal-card-title is-uppercase">RGB LED-valonohjausjärjestelmä</p>
                  <button class="delete" aria-label="close" @click="close"></button>
                </header>
                <section class="modal-card-body has-text-centered">
                  <h1 class="headerAbel paragraphPadding">Ammattikoulun lopputyönä tein Arduinolla RGB LED-valonohjausjärjestelmän Arduinolla autooni.</h1>
                  <img class="projectImage" src="~/static/AR3.png">
                  <p class="paragraphPadding">
                    Työssäni oli tarkoituksena rakentaa järjestelmä, jonka avulla voidaan ohjata RGB LED-nauhoja Android-sovelluksella.
                    Android-sovelluksessa oli profiilit, joista pystyi määrittämään onko LEDit vain tietyn värisiä still-valoja vai välkkyvätkö
                    ne musiikin tahtiin.
                  </p>
                  <p class="paragraphPadding">
                    Tutkittuani Arduinoa tarkemmin päädyin tekemään Arduino-standalonen, eli työ toteutettiin pelkästään
                    Arduino Unon pääsirua käyttäen; näin saatiin turhat komponentit pois ja piirilevystä mahdollisimman pienikokoinen mikä helpotti
                    sen autoon asennusta huomattavasti.
                  </p>
                  <p class="paragraphPadding">
                    Opinnäytetyön kirjallisessa osuudessa kävin lävitse järjestelmän toiminnan sekä asentamisen, osat joista järjestelmä koostui,
                    ohjelmat joita työssä tarvittiin sekä järjestelmää ohjaavien ohjelmien koodin perusteet.
                  </p>
                  <img class="projectImage" src="~/static/AR1.png">
                  <img class="projectImage" src="~/static/AR2.png">
                  <p class="paragraphPadding">
                    Valitsin työn opinnäytetyöni aiheeksi, sillä olin ollut kiinnostunut LED-valojen toiminnasta sekä Arduino-alustan käytöstä jo pitkään.
                    Aiempaa kokemusta Java-ohjelmoinnista oli ollut vain hieman netissä käytävien kurssien kautta joten sekin tuli itselleni uutena asiana.
                  </p>
                  <p class="paragraphPadding">
                    Valitsin työn opinnäytetyöni aiheeksi, sillä olin ollut kiinnostunut LED-valojen toiminnasta sekä Arduino-alustan käytöstä jo pitkään.
                    Aiempaa kokemusta Java-ohjelmoinnista oli ollut vain hieman netissä käytävien kurssien kautta joten sekin tuli itselleni uutena asiana.
                  </p>
                  <p class="paragraphPadding">Syyskuu 2016 - Joulukuu 2016</p>
                  <a href="https://github.com/nasusa/RGB-Color-Organ" target="_blank" class="projectButton button is-primary is-rounded">Github</a>
                </section>
              </div>
            </div>

          </div>
        </div>
        <div class="columns">
          <div class="column">

            <div class="projectLayer">
              <img class="modal-button" data-target="modal" src="~/static/tredulan.jpeg" alt="Placeholder image">
              <div class="overlay is-uppercase">
                <h3 class="referenceTitle">Www-sivut</h3>
                <a class="readmore" @click="open(4)"><p>Lue lisää...</p></a>
              </div>
            </div>

          <div class="modal" :class="{'is-active': popup === 4}">
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head has-text-centered">
                <p class="skillsHeading modal-card-title is-uppercase">Tredulan - nettisivut</p>
                <button class="delete" aria-label="close" @click="close"></button>
              </header>
              <section class="modal-card-body has-text-centered">
                  <h1 class="headerAbel paragraphPadding">Ammattikoulun valmistuvien oppilaiden järjestämät lanit.</h1>
                <img class="projectImage" src="~/static/tredulan1.png">
                <p class="paragraphPadding">
                  Olin laneissa pääjärjestäjänä. Tein myös nettisivut LAN-tapahtumalle.
                </p>
                <p>Marraskuu 2016 - Helmikuu 2017</p>
                <a href="https://github.com/nasusa/tredulan" target="_blank" class="projectButton button is-primary is-rounded">Github</a>
              </section>
            </div>
          </div>

          </div>
          <div class="column">

            <div class="projectLayer">
              <img class="modal-button" data-target="modal" src="~/static/portfolio.jpeg" alt="Placeholder image">
              <div class="overlay is-uppercase">
                <h3 class="referenceTitle">Portfolio sivut</h3>
                <a class="readmore" @click="open(5)"><p>Lue lisää...</p></a>
              </div>
            </div>

          <div class="modal" :class="{'is-active': popup === 5}">
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head has-text-centered">
                <p class="skillsHeading modal-card-title is-uppercase">Portfolio - nettisivut</p>
                <button class="delete" aria-label="close" @click="close"></button>
              </header>
              <section class="modal-card-body has-text-centered">
                <p class="headerAbel paragraphPadding">Ensimmäiset tekemäni portfolio-nettisivut.</p>
                <img class="projectImage" src="~/static/portfolioEtusivu.jpg">
                <hr>
                <img class="projectImage" src="~/static/portfolioEtusivu3.jpg">
                <hr>
                <img class="projectImage" src="~/static/portfolioEtusivu2.jpg">
                <p class="paragraphPadding">Tein sivut Laravel Frameworkilla.</p>
                <p class="paragraphPadding">January 2017 - January 2017</p>
                <a href="https://github.com/nasusa/portfolio-old" target="_blank" class="projectButton button is-primary is-rounded">Github</a>
              </section>
            </div>
          </div>

          </div>
          <div class="column">

            <div class="projectLayer">
              <img class="modal-button" data-target="modal" src="~/static/blog.jpg" alt="Placeholder image">
              <div class="overlay is-uppercase">
                <h3 class="referenceTitle">Blogi</h3>
                <a class="readmore" @click="open(6)"><p>Lue lisää...</p></a>
              </div>
            </div>

          <div class="modal" :class="{'is-active': popup === 6}">
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head has-text-centered">
                <p class="skillsHeading modal-card-title is-uppercase">Ammattikoulun blogi</p>
                <button class="delete" aria-label="close" @click="close"></button>
              </header>
              <section class="modal-card-body has-text-centered">
                <p class="headerAbel paragraphPadding">Ammattikoulussa tehtävänämme oli kirjoittaa blogia työssäoppien aikana sekä tehdä raportteja koululla tehdyistä töistä.</p>
                <div class="columns">
                  <div class="column is-third">
                    <img class="projectImage" src="~/static/blogi.jpg/">
                  </div>
                  <div class="column">
                    <img class="projectImage" src="~/static/blogi2.jpg">
                  </div>
                  <div class="column">
                    <img class="projectImage" src="~/static/blogi3.jpg">
                  </div>
                </div>
                <p class="paragraphPadding">
                  Blogista löytyy tarkemmin millaisia töitä ja projekteja ammattikoulussa tietoliikenneasentajana pääsin tekemään. 
                </p>
                <p class="paragraphPadding">Lokakuu 2015 - toukokuu 2017</p>
                <a href="http://14ttic02blepola.blogspot.fi/" target="_blank" class="projectButton button is-primary is-rounded">Blogi</a>
              </section>
            </div>
          </div>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      popup: null
    };
  },
  methods: {
    close() {
      this.popup = null;
    },
    open(number) {
      this.popup = number;
    }
  }
};
</script>

<style lang="scss">
.section {
  @include mobile {
  padding: 0!important;
  }
}
.projectLayer {
  position: relative;
    .overlay {
    position: absolute;
    margin-bottom: 6px;
    bottom: 0;
    left: 0;
    color: white;
    right: 0;
    background-color: rgba(44, 44, 44, 0.829);
    overflow: hidden;
    width: 100%;
    height: 0px;
    transition: .5s ease;
    @include mobile {
      height: 97%;
      background-color: rgba(44, 44, 44, 0.712);
    }
    .referenceTitle {
      padding-top: 20%;
      @include desktop {
      padding-top: 25%;
      font-family: 'Abel', sans-serif;
      font-size: 2em;
      }
    }
  }
}

.projectLayer:hover .overlay {
  height: 98%;
  padding-bottom: 20px;
}
.modal-card-head {
  @include mobile {
  display: inline-block;
  }
  button {
    @include mobile {
      margin-top: 20px;
    }
  }
}
.columnsHero {
  margin: auto;
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  max-width: 1000px;
  @include desktop {
    padding: 40px;
  }
}
.modal-background {
  background-color: rgba(10, 10, 10, 0.76);
}
.modal-card {
  @include desktop {
    min-width: 1000px;
  }
}
.portfolioParagraph {
  padding: 15px 0 15px 0;
}
.portfolioBox {
  box-shadow: none;
}
.projectImage {
  padding: 10px;
  @include desktop {
    padding: 30px;
    max-height: 600px;
  }
}
.projectButton {
  margin: 10px;
}
</style>
