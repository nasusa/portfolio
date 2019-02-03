<template>
  <div class="block-content" :class="{'is-active': isOpen}">
    <button class="delete is-pulled-right" aria-label="close" @click="close"></button>
    <div class="content">
      <h1 class="is-uppercase">About me</h1>
      <hr>
      <div class="columns">
        <div class="column is-half">
          <h2 class="aboutmeText">I’m a coffee addicted pixel and code pusher from Finland. Beside my passion for computers and coding, I’m also a big music freak and a real foodie who loves all of the good things in life.</h2>
          <p>I love learning new things, I love projects. My passion is inventing new; whatever the project has been, I embrace it. Target to a fluent, smooth, initiative and innovative direction. Head full of ideas, they may be small or large.</p>
        </div>
        <div class="column">
          <img src="~/static/susanna.jpg" style="max-height: 350px;" alt="Susannan kuva">
        </div>
      </div>
      <About-me/>
    </div>
  </div>
</template>

<script>
import AboutMe from '~/components/site_contents/About-me.vue'

export default {
  components: {
    AboutMe
  },
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
  .aboutmeText {
    font-size: 1.7em;
  }
  button {
    margin: 20px;
  }
  .content {
    padding: 3em;
    p {
      color: #9f9f9f;
      padding-top: 1em;
      font-size: 1.2em;
    }
  }
}
</style>