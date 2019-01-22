<template>
  <section class="hero is-fullheight is-dark">
    <blocks ref="blocks" @openPage="$refs[`page-${$event}`].open()"/>
    <block-content-about ref="page-1" @close="$refs.blocks.close()"/>
    <block-content-experience ref="page-2" @close="$refs.blocks.close()"/>
  </section>
</template>

<script>
import Blocks from '~/components/site_contents/Blocks.vue'
import BlockContentAbout from '~/components/site_contents/Block-content-about.vue'
import BlockContentExperience from '~/components/site_contents/Block-content-experience.vue'

export default {
  components: {
    Blocks,
    BlockContentAbout,
    BlockContentExperience
  },
  layout: 'blank'
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins:500|Roboto+Mono');

.hero {
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  &:before {
  background: 
  linear-gradient(
  rgba(0, 0, 0, 0.73), 
  rgba(0, 0, 0, 0.1)
  ),
  url("~/static/susa.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  content: "";
  filter: blur(3px);
  height: 100%;
  position: absolute;
  width: 100%;
  }
  h1 {
  font-size: 2em;
  font-family: 'Poppins', sans-serif;
  }
}
</style>