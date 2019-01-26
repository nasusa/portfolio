<template>
  <div class="block-content" :class="{'is-active': isOpen}">
      <button class="delete is-pulled-right" aria-label="close" @click="close"></button>
      <div class="portfolio-columns">
        <div class="columns">
          <div class="column is-half">
            <img src="~/static/proakatemiasynttarit.jpg" alt="Italian Trulli">
          </div>
          <div class="column">
            <img src="~/static/hoitoladreamskin.jpg" alt="Italian Trulli">
          </div>
        </div>
        <div class="columns">
          <div class="column is-half">
            <img src="~/static/komon.jpg" alt="Italian Trulli">
          </div>
          <div class="column">
            <img src="~/static/siemenpuu.jpg" alt="Italian Trulli">
          </div>
        </div>
        <div class="columns">
          <div class="column is-half">
            <img src="~/static/tredulan.jpg" alt="Italian Trulli">
          </div>
          <div class="column">
            <img src="~/static/arduinoicon.jpg" alt="Italian Trulli">
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
  }
}
</style>