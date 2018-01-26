<template>
  <section>      
    <section>  
      <div class="headerContent has-text-centered">
        <ul>
          <li><span class="headerFont">I am Susanna</span></li>
          <li><span class="headerSloganFont"> DESIGNER <i class="fa fa-angle-double-right" aria-hidden="true"></i> ICT TECHNICIAN <i class="fa fa-angle-double-right" aria-hidden="true"></i> DREAMER </span></li>
          <li><span class="headerFont">Welcome to my Portfolio</span> </li>
        </ul>
      </div>
      </section>

      <section class="section">
        <div class="container">
          <columns class="columns columnsHero">
            <column class="column columnDesign has-text-centered">
            yks
            </column>
            <column class="column columnProject has-text-centered">
            kaks
            </column>
            <column class="column columnCamera has-text-centered">
            kolme
            </column>
          </columns>
        </div>
      </section>

      <section class="section">
        <div class="container has-text-centered">
            <h1>Experience</h1>
            <p>Here are my skills</p>
        </div>
      </section>

      <section class="section">
        <div class="container has-text-centered">
          <h1>Skills</h1>
          <p>Here are my skills</p>
        </div>
    </section>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
.headerContent {
  height: 450px;
  font-size: 3em;
  display: -webkit-flex;
  align-items: center;
  -webkit-justify-content: center;
  background-image: url("~/static/susa.jpg");
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 40%;
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
  margin-top: -5em;
  background-color: white;
  padding: 40px;
  border-radius: 15px;
}
.columnDesign {
  height: 150px;
  width: 150px;
  background-image: url("~/static/design.jpg");
  position: relative;
  background-size: cover;
}
.columnProject {
  height: 150px;
  width: 150px;
  background-image: url("~/static/project.jpg");
  position: relative;
  background-size: cover;
}
.columnCamera {
  height: 150px;
  width: 150px;
  background-image: url("~/static/camera.jpg");
  position: relative;
  background-size: cover;
}
.indexParagraph {
  padding: 10px 0 10px 0;
}
</style>
