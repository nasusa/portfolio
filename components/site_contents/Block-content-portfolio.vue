<template>
  <div class="block-content" :class="{'is-active': isOpen}">
      <button class="delete is-pulled-right" aria-label="close" @click="close"></button>
      <div class="portfolio-columns">
        <h1 class="is-uppercase">Portfolio</h1>
        <hr>
        <div class="columns">
          <div class="column image-container is-half">
            <img src="~/static/next.jpg" alt="Siemenpuu projekti">
            <div class="overlay">
              <div class="text">Let's get in touch!</div>
            </div>
          </div>
          <div class="column image-container">
            <img src="~/static/muutosvaihtoehdot.jpg" alt="Muutosvaihtoehdot, Siemenpuun projekti">
            <div class="overlay">
              <div class="text">Website project with WordPress for Siemenpuu Foundation.<br><a href="https://muutosvaihtoehdot.fi/">https://muutosvaihtoehdot.fi/</a></div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column image-container is-half">
            <img src="~/static/komon.jpg" alt="Komon Oy logo">
            <div class="overlay">
              <div class="text">Logo and marketing material for Komon Oy</div>
            </div>
          </div>
          <div class="column image-container">
            <img src="~/static/proakatemiasynttarit.jpg" alt="Proakatemian 20-v syntymäpäivien nettisivut">
              <div class="overlay">
                <div class="text">Website project with Vue.js<br><a href="www.proakatemia20v.fi">www.proakatemia20v.fi</a></div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column image-container is-half">
            <img src="~/static/tredulan.jpg" alt="Tredulanien nettisivut">
            <div class="overlay">
              <div class="text">Website project with Laravel Framework</div>
            </div>
          </div>
          <div class="column image-container">
            <img src="~/static/arduinoicon.jpg" alt="Arduino projekti">
            <div class="overlay">
              <div class="text">RGB color organ with Arduino</div>
            </div>
          </div>
        </div>
         <div class="columns">
          <div class="column image-container is-half">
            <img src="~/static/tiltball.jpg" alt="TiltBall peliprojekti">
            <div class="overlay">
              <div class="text">Android game project</div>
            </div>
          </div>
          <div class="column image-container">
            <img src="~/static/hoitoladreamskin.jpg" alt="Kauneushoitola Dreamskinin nettisivut">
            <div class="overlay">
              <div class="text">Website project with Laravel Framework</div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    open () {
      this.isOpen = true
    },
    close () {
      this.isOpen = false
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
.block-content {
  width: 50vw;
  position: absolute;
  height: 100vh;
  background-color: white;
  top: 0;
  right: 0;
  z-index: 1000;
  display: none;
  overflow-y: auto;
  &.is-active {
    display: block;
  }
  .portfolio-columns {
    padding: 5em 4em; 
    img {
      border-radius: 15px;
    }
    .image-container {
      position: relative;
    }

    .image {
      display: block;
      width: 100%;
      height: auto;
    }

    .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      transition: .5s ease;
      border-radius: 15px;
      background-color: #333333;
    }

    .image-container:hover .overlay {
      opacity: 1;
    }

    .text {
      color: white;
      font-size: 15px;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      text-align: center;
    }
  }
  h1 {
    color: #363636;
    font-weight: 400;
  }
}
</style>