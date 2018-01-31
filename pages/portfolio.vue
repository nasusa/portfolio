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
        <div class="container"> <!--columnsHero-->
          <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
              <div class="tile">
                <div class="tile is-parent is-vertical">
                  <article class="tile is-child box">
                    <h1 class="is-uppercase">Peliprojekti</h1>
                    <p>Tamkin ensimmäisen vuoden peliprojekti, joka toteutetaan joka vuosi eri asiakkaalle. Toimin oman tiimini Scrum masterina ja projektipäällikkönä.</p>
                  </article>
                  <article class="tile is-child box">
                    <h1 class="is-uppercase">Kauneushoitola www-sivut</h1>
                    <p>Tein ensimmäiselle asiakkaalleni nettisivut. Sivut löytää osoitteesta <a href="www.hoitoladreamskin.fi/">www.hoitoladreamskin.fi</a></p>
                    <figure class="image">
                        <img src="~static/dreamskin.png/" alt="Placeholder image">
                    </figure>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <h1 class="is-uppercase">Tredu lanit www-sivut</h1>
                    <p>Opiskellessani Tampereen seudun ammattiopistossa tieto- ja tietoliikennealalla, viimeisenä vuonna oli tarkoitus järjestää lanit koululla 
                      opiskelijoille. Tein nettisivut, mutta ne eivät ole enää ylhäällä.
                    </p>
                    <figure class="image">
                      <img src="~static/tredulan2.png/" alt="Placeholder image">
                    </figure>
                    <figure class="image">
                      <img src="~static/tredulan1.png/" alt="Placeholder image">
                    </figure>
                  </article>
                </div>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <h1 class="is-uppercase">Portfolio www-sivut</h1>
                  <p>Ensimmäisen portfolio-sivun tein v.2016.</p>
                  <div class="columns">
                    <div class="column">
                    <figure class="image">
                        <img src="~static/portfolio.jpg/" alt="Placeholder image">
                    </figure>
                    </div>
                    <div class="column">
                    <figure class="image">
                        <img src="~static/portfolio2.jpg/" alt="Placeholder image">
                    </figure>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child box">
                  <h1 class="is-uppercase">Auton RGB-LED projekti</h1>
                  <p>Tieto- ja tietoliikennealalla tein opinnäytetyönä LED-valonohjaus järjestelmän autoon Arduino Standalonella. Tein myös Android-sovelluksen, 
                    jolla valoja pystyi ohjaamaan.
                  </p>
              </article>
            </div>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style lang="scss">
.headerContent {
  height: 600px;
  font-size: 3em;
  display: -webkit-flex;
  align-items: center;
  -webkit-justify-content: center;
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

/*TIMELINE*/
.timeline {
  position: relative;
  padding: 2em 0;
  margin: 2em 0;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 18px;
    height: 100%;
    width: 4px;
    background: #d7d7d7;
    @include desktop {
      left: 50%;
      margin-left: -2px;
    }
  }
  &__block {
    position: relative;
    margin: 2em 0;
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
    &__image {
      background: #75ce66;
      height: 40px;
      left: 0;
      position: absolute;
      top: 0;
      width: 40px;
      border-radius: 50%;
      box-shadow: 0 0 0 4px white,
                  inset 0 2px 0 rgba(0,0,0,0.08),
                  0 3px 0 4px rgba(0,0,0,0.05);
      @include desktop {
        width: 60px;
        height: 60px;
        left: 50%;
        margin-left: -30px;
      }
      i {
        font-size: 28px;
        line-height: 40px;
        color: white;
        @include desktop {
          line-height: 60px;
          font-size: 47px;
        }
      }
    }
    &__body {
      position: relative;
      margin-left: 60px;
      background: white;
      border-radius: .25em;
      padding: 1em;
      box-shadow: 0 3px 0 #d7e4ed;
      @include desktop {
        margin-left: 0;
        padding: 1.6em;
        width: 45%;
      }
      &::before {
        content: '';
        position: absolute;
        top: 16px;
        right: 100%;
        height: 0;
        width: 0;
        border: 7px solid transparent;
        border-right: 7px solid white;
        @include desktop {
          top: 24px;
          left: 100%;
          border-color: transparent;
          border-left-color: white;
        }
      }
      &__date {
        float: left;
        padding: .8em 0;
        opacity: .7;
        @include tablet {
          font-size: .875rem;
        }
        @include desktop {
          position: absolute;
          width: 100%;
          left: 122%;
          top: 6px;
          font-size: 1em;
        }
      }
    }
    &:nth-child(even) {
      .timeline__block {
        @include desktop {
          &__body {
            float: right;
            &::before {
              top: 24px;
              left: auto;
              right: 100%;
              border-color: transparent;
              border-right-color: white;
            }
            &__date {
              left: auto;
              right: 122%;
              text-align: right;
            }
          }
        }
      }
    }
  }
}
</style>
