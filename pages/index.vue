<template>
  <div> 
      <!--HEADER ALKAA-->     
      <div class="indexHeader has-text-centered">
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
      <!--<section>
        <start/>
      </section>-->
      <!--INDEX PÄÄTTYY-->
      <section class="pageSections">
        <about/>
      </section>
      <section class="pageSections">
        <projects/>
      </section>
  </div>
</template>

<script>
import Start from '~/components/site_contents/Start.vue'
import About from '~/components/site_contents/About.vue'
import Projects from '~/components/site_contents/Projects.vue'

export default {
  components: {
    Start,
    About,
    Projects
  }
}
</script>

<style lang="scss">
/*FONT CSS*/
  .aboutmeTitle {
      font-family: 'Abel', sans-serif;
      font-size: 2em;
      @include desktop {
      font-size: 2em;
    }
  }
  .socialHeading {
    font-family: 'Abel', sans-serif;
    padding-top: 10px;
  }
  .skillsHeading {
    font-family: 'Abel', sans-serif;
  }
  .headerFont {
    font-size: 1em;
    color: white;
    text-shadow: 1px 1px black;
    opacity: 0.6;
    font-family: 'Sacramento', cursive;
    @include desktop {
      font-size: 1.5em;
    }
  }
  .headerAbel {
    color: black;
    font-family: 'Abel', sans-serif;
    padding-top: 20px;
    @include desktop {
      font-size: 1.5em;
    }
  }
  .headerSacramento {
    font-size: 2em;
    color: #282828;
    font-family: 'Sacramento', cursive;
    padding-top: 20px;
  }
  .headerSloganFont {
    font-size: 0.4em;
    color: white;
    text-shadow: 1px 1px 1px black;
    opacity: 0.8;
    letter-spacing: 0.5px;
    font-weight: bold;
    font-family: 'Abel', sans-serif;
    @include desktop {
      font-size: 0.8em;
      letter-spacing: 3px;
    }
  }
  /*MUU*/
  .indexHeader {
    height: 550px;
    font-size: 3em;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center 30%;
      @include desktop {
       background-position: center 70%; 
       height: 600px;
      }
    &:before {
      background-image: url("~/static/banneri.jpg");
      background-position: center 30%;
      background-repeat: no-repeat;
      background-size: cover;
      content: "";
      filter: blur(2px);
      height: 100%;
      position: absolute;
      width: 100%;
      @include desktop {
       background-position: center 70%; 
      }
    }
  }
  .indexHeader::before {
    color: black;
  }
  .titleHr {
    width: 200px;
    height: 2px;
    margin: auto;
  }
</style>
