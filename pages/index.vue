<template>
  <section class="container">
    <div class="columns has-text-centered">
      <div class="column columnFirst">
        <h1>I am Susanna</h1>
      </div>
      <div class="columns columnSlogan is-mobile has-text-centered">
        <div class="column is-one-third">
          <hr>
          <hr>
        </div>
        <div class="column is-one-third is-uppercase">
          <p>Designer</p>
          <p>Ict-technician<p>
          <p>Dreamer</p>
        </div>
        <div class="column is-one-third">
          <hr>
          <hr>
        </div>
      </div>
      <div class="column columnSecond">
        <h1>Welcome To My Portfolio</h1>
      </div>
      <div class="column">
        <h1>second</h1>
      </div>
      <div class="column">
        <h1>third</h1>
      </div>
    </div>
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
.columnFirst {
  padding-top: 80px;
}
.columnSecond {
  padding-bottom: 80px;
}
.columnThird {
  background-color:bisque;
}
.columnSlogan {
  padding: 50px 0 50px 0;
  margin: 0;
}
</style>
