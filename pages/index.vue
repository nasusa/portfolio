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

      <!--BOXIT ALKAA-->
      <!--YLÄBOXIT-->    
      <section class="section indexColumns">
        <div class="container columnsHero">
          <div class="columns">
            <div class="column has-text-centered">
              <div class="contentBox">
                <img class="contentImage" src="~/static/project.jpg" alt="Placeholder image">
                <div class="content">
                  <h1 class="is-uppercase headerAbel">
                    <a href="">
                      great projects
                    </a>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </h1>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                </div>
              </div>
            </div>
            <div class="column has-text-centered">
              <div class="contentBox">
                <img class="contentImage" src="~/static/design.jpg" alt="Placeholder image">
                <div class="content">
                  <h1 class="is-uppercase headerAbel">
                    <a href="">
                      unique design
                    </a>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </h1>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                </div>
              </div>
            </div>
            <div class="column has-text-centered">
              <div class="contentBox">
                <img class="contentImage" src="~/static/hobby.jpg" alt="Placeholder image">
                <div class="content">
                  <h1 class="headerAbel">
                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                  </h1>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                </div>
              </div>
            </div>
          </div>
          <!--ALABOXIT-->
          <div class="columns">
            <div class="column has-text-centered">
              <div class="contentBox">
                <img class="contentImage" src="~/static/aboutme.jpg" alt="Placeholder image">
                <div class="content">
                  <h1 class="headerSacramento">
                    <a href="">
                      About me
                    </a>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </h1>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                </div>
              </div>
            </div>
            <div class="column has-text-centered">
              <div class="contentBox">
                <img class="contentImage" src="~/static/coffee.jpg" alt="Placeholder image">
                <div class="content">
                  <h1 class="headerSacramento">
                    <a href="">
                      Let's meet...
                    </a>
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </h1>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--BOXIT PÄÄTTYY-->
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
.indexHeader {
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
}
.indexColumns {
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
  .contentBox {
    padding: 20px;
  }
  .headerAbel {
    color: black;
    font-family: 'Abel', sans-serif;
    padding-top: 20px;
  }
  .headerSacramento {
    font-size: 2em;
    color: black;
    font-family: 'Sacramento', cursive;
    padding-top: 20px;
  }
  a {
    color:black;
  }
  .contentImage {
    border-radius: 15px;
    box-shadow: 0 5px 9px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .indexParagraph {
    padding: 10px 0 10px 0;
  }
}
</style>
