<template>
  <div class="experience">
    <section class="section">  
      <div class="columns">
        <div class="column is-half">
          <h1 class="aboutmeTitle is-uppercase">Education</h1>
          <hr>
        </div>
        <div class="column">
        </div>
      </div>
      <div class="columns">
        <div class="column is-one-third">
          <h1 class="aboutmeSchool">Tampere Vocational College, TREDU</h1>
          <h2 class="dateProgram">Restaurant and Catering</h2>
          <h2 class="dateProgram">2013-2014</h2>
          <p>After elementary school, I decided to go to study Vocational Qualification in the Restaurant and Catering. I've been working in multiple cafes and restaurants,
            also I had 3 months internship. However, after wanting new challenges I decided to make a sfull turn and focus on information technology.
          </p>
        </div>
        <div class="column">
          <h1 class="aboutmeSchool">Tampereen seudun ammattiopisto, TREDU</h1>
          <h2 class="dateProgram">Tietoliikenneasentaja</h2>
          <h2 class="dateProgram">Information and Communication Technology</h2>
          <p>I started studying in the middle of the semester, as I moved from the Restaurant and Catering degree. I found my great passion from
             information technology side, not that it was a surprise because from child I've enjoyed working with electronics. <br>
             You can access the Information and Communication Technology curriculum <a href="http://inter16.tampere.fi/tredu/material/koulutukset/opintosuunnitelmat/43xEhfiOl/Tieto-_ja_tietoliikennetekniikan_pt_ict-asentaja_2016.pdf" target="blank">HERE</a>.
          </p>
        </div>
        <div class="column">
          <h1 class="aboutmeSchool">Tampere University of Applied Siences, TAMK</h1>
          <h2 class="dateProgram">Degree Programme in Business Information Systems</h2>
          <h2 class="dateProgram">2017-2020</h2>
          <p>A great passion to achieve and learn new was pushing me forward even after a vocational school. After I graduated from vocational school, I
            ended up to continue my dream in TAMK; in the middle of good networks, great teachers and a variety of opportunities.<br>
            You can access the Business Information Systems curriculum <a href="http://opinto-opas-ops.tamk.fi/index.php/fi/167/fi/46/13TIKO/year/2013" target="blank">HERE</a>.
          </p>
        </div>
      </div>
    </section>
    <section class="section">  
      <div class="columns">
        <div class="column aboutmeThirdSlide">
            <h1 class="aboutmeTitle is-uppercase">Courses and licenses</h1>
            <hr>
          <div class="columns is-mobile is-multiline thirdSlideSocial has-text-centered">
            <div class="column is-6-mobile is-4-desktop">
              <i class="fa fa-id-card-o fa-2x"></i>
              <h1 class="socialHeading is-uppercase">Safety at electrical work license</h1>
            </div>
            <div class="column is-6-mobile is-4-desktop">
              <i class="fa fa-exclamation-triangle fa-2x"></i>
              <h1 class="socialHeading is-uppercase">occupational-<br>Safety license</h1>
            </div>
            <div class="column is-6-mobile is-4-desktop">
              <i class="fa fa-fire fa-2x"></i>
              <h1 class="socialHeading is-uppercase">Hot Work license</h1>
            </div>
            <div class="column is-6-mobile is-4-desktop">
              <i class="fa fa-truck fa-2x"></i>
              <h1 class="socialHeading is-uppercase">Road work safety license</h1>
            </div>
            <div class="column is-6-mobile is-4-desktop">
              <i class="fa fa-medkit fa-2x"></i>
              <h1 class="socialHeading is-uppercase">First aid course 1 & 2 license</h1>  
            </div>
            <div class="column is-6-mobile is-4-desktop"> 
              <i class="fa fa-cutlery fa-2x"></i>
              <h1 class="socialHeading is-uppercase">hygiene proficiency certificate</h1>
            </div>             
          </div>
        </div>
      </div>
    </section>    
    <section class="section">  
      <div class="columns">
        <div class="column aboutmeThirdSlide">
          <h1 class="aboutmeTitle is-uppercase">Skills</h1>
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