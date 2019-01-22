<template>
  <div class="aboutMe">
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
.aboutMe {
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