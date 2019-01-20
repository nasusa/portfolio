<template>
  <div class="experience">
    <section class="section">  
      <div class="columns">
        <div class="column is-half">
          <h1 class="aboutmeTitle is-uppercase">Koulutukseni</h1>
          <hr>
        </div>
        <div class="column">
        </div>
      </div>
      <div class="columns">
        <div class="column is-one-third">
          <h1 class="aboutmeSchool">Tampereen seudun ammattiopisto, TREDU</h1>
          <h2 class="dateProgram">Hotelli-, ravintola- ja cateringala</h2>
          <h2 class="dateProgram">2013-2014</h2>
          <p>Peruskoulun jälkeen päätin suunnata hotelli-, ravintola- ja cateringalalle. Olen tehnyt useammassa alan työpaikassa
            kesätöitä sekä suorittanut harjoitteluita. Kuitenkin janotessani uusia haasteita, päätin vuoden jälkeen tehdä täyskäännöksen
            ja suunnata tietotekniikan pariin.
          </p>
        </div>
        <div class="column">
          <h1 class="aboutmeSchool">Tampereen seudun ammattiopisto, TREDU</h1>
          <h2 class="dateProgram">Tietoliikenneasentaja</h2>
          <h2 class="dateProgram">2014-2017</h2>
          <p>Aloitin opiskelut kesken lukuvuoden vaihtaessani alaa hotelli-, ravintola- ja cateringalalta. Löysin suuren intohimoni
            tietotekniikan puolelta, se ei tosin ollut yllätys sillä pienestä asti olen viihtynyt elektroniikan parissa.<br>
            ICT-asentajan opetussuunnitelmaan pääset <a href="http://inter16.tampere.fi/tredu/material/koulutukset/opintosuunnitelmat/43xEhfiOl/Tieto-_ja_tietoliikennetekniikan_pt_ict-asentaja_2016.pdf" target="blank">TÄSTÄ</a>.
          </p>
        </div>
        <div class="column">
          <h1 class="aboutmeSchool">Tampereen ammattikorkeakoulu, TAMK</h1>
          <h2 class="dateProgram">Tietojenkäsittelijä</h2>
          <h2 class="dateProgram">2017-2020</h2>
          <p>Suuri intohimo saavuttaa ja oppia uutta puski eteenpäin ammattikoulun jälkeenkin. Päädyin ammattikoulusta valmistumisen jälkeen 
            jatkamaan unelmaani TAMK:issa; hyvien verkostojen, mahtavien opettajien ja monenlaisten mahdollisuuksien keskelle.<br>
            Tietojenkäsittelijän koulutusohjelmaan pääset <a href="http://opinto-opas-ops.tamk.fi/index.php/fi/167/fi/46/13TIKO/year/2013" target="blank">TÄSTÄ</a>.
          </p>
        </div>
      </div>
    </section>
    <section class="section">  
      <div class="columns">
        <div class="column aboutmeThirdSlide">
            <h1 class="aboutmeTitle is-uppercase">Kurssit ja koulutukset</h1>
            <hr>
          <div class="columns is-mobile is-multiline thirdSlideSocial has-text-centered">
            <div class="column is-6-mobile is-4-desktop">
              <i class="fa fa-id-card-o fa-2x"></i>
              <h1 class="socialHeading is-uppercase">B-kortti</h1>
            </div>
            <div class="column is-6-mobile is-4-desktop">
              <i class="fa fa-exclamation-triangle fa-2x"></i>
              <h1 class="socialHeading is-uppercase">Työturvallisuus-<br>kortti</h1>
            </div>
            <div class="column is-6-mobile is-4-desktop">
              <i class="fa fa-fire fa-2x"></i>
              <h1 class="socialHeading is-uppercase">Tulityökortti</h1>
            </div>
            <div class="column is-6-mobile is-4-desktop">
              <i class="fa fa-truck fa-2x"></i>
              <h1 class="socialHeading is-uppercase">Tietyökortti</h1>
            </div>
            <div class="column is-6-mobile is-4-desktop">
              <i class="fa fa-medkit fa-2x"></i>
              <h1 class="socialHeading is-uppercase">Ensiapu 1 & 2</h1>  
            </div>
            <div class="column is-6-mobile is-4-desktop"> 
              <i class="fa fa-cutlery fa-2x"></i>
              <h1 class="socialHeading is-uppercase">Hygieniapassi</h1>
            </div>             
          </div>
        </div>
      </div>
    </section>    
    <section class="section">  
      <div class="columns">
        <div class="column aboutmeThirdSlide">
          <h1 class="aboutmeTitle is-uppercase">Osaaminen</h1>
          <hr>
          <div class="columns">
            <div class="column">
              <h1 class="skillsHeading is-uppercase">Adobe Photoshop</h1>
              <progress class="progress" value="90" max="100">90%</progress>
              <h1 class="skillsHeading is-uppercase">HTML & CSS</h1>
              <progress class="progress" value="90" max="100">90%</progress>
              <h1 class="skillsHeading is-uppercase">Java & JavaScript</h1>
              <progress class="progress" value="60" max="100">60%</progress>
              </div>
              <div class="column">
              <h1 class="skillsHeading is-uppercase">PHP</h1>
              <progress class="progress" value="60" max="100">60%</progress>
              <h1 class="skillsHeading is-uppercase">WordPress</h1>
              <progress class="progress" value="75" max="100">75%</progress>
              <h1 class="skillsHeading is-uppercase">MySQL</h1>
              <progress class="progress" value="55" max="100">55%</progress>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

</script>

<style lang="scss">
.experience {
  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1em;
  }
  p {
    font-size: 1em!important;
  }
  .aboutmeInfo {
    padding-top: 0;
    .aboutmeIcons {
      display: flex;
      margin-left: 0;
      padding-right: 4em;
      font-size: 2em;
      @include desktop {
        padding-right: 20px;
      }
    }
    .aboutmeColumn {
      flex-grow:0;
    }
    .aboutmeSchool {
      font-family: 'Abel', sans-serif;
      font-size: 1.5em;    
    }
    .dateProgram {
      color: grey;
    }
  }
  .paragraphPadding {
    padding-bottom: 7px;
  }
  .columnsHero {
    margin: -12em auto -5em auto;
    background-color: white;
    padding: 20px;
    border-radius: 15px;
    max-width: 1000px;
  }
  .socialFlagIcon {
    width: 50px;
  }
  .thirdSlideSocial {
    padding-top: 30px;
    .socialHeading {
      font-size: 1em;
      i {
        padding-right: 20px;
        color: #d5d5d5;
      }
    }
  }
  .aboutmeThirdSlide {
    padding-top: 3em;
    @include desktop {
    padding-right: 5em;
    }
    .skillsHeading {
      font-size: 1em;
    }
    .progress {
      border-radius: 0px;
      height: 0.5em;
    }
  }
}
</style>