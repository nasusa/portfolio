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
            <figure class="image is-4by3">
              <img src="~/static/arduino.jpg" alt="Placeholder image">
            </figure>
          </div>
          <div class="column">
            <figure class="image is-4by3">
              <img src="~/static/arduino.jpg" alt="Placeholder image">
            </figure>
          </div>
          <div class="column">
            <figure class="image is-4by3">
              <img src="~/static/game.jpg" alt="Placeholder image">
            </figure>
          </div>
          </div>
        <div class="columns">
          <div class="column is-one-third">
            <figure class="image is-4by3">
              <img src="~/static/kauneushoitola.jpeg" alt="Placeholder image">
            </figure>
          </div>
          <div class="column">
            <figure class="image is-4by3">
              <img src="~/static/portfolio.jpeg" alt="Placeholder image">
            </figure>
          </div>
          <div class="column">
            <figure class="image is-4by3">
              <img src="~/static/tredulan.jpeg" alt="Placeholder image">
            </figure>
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
.portfolioParagraph {
  padding: 15px 0 15px 0;
}
.portfolioBox {
  box-shadow: none;
}
</style>
