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
      <div class="column columnThird">
        <h1>About me</h1>
        <p class="indexParagraph">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        <p class="indexParagraph">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        <p class="indexParagraph">I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
      </div>
      <div class="column">
        <h1>Experience</h1>
        <p>Here are my skills</p>
      </div>
      <div class="column">
        <h1>Skills</h1>
        <p>Here are my skills</p>
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
  padding: 50px;
}
.columnSlogan {
  padding: 50px 0 50px 0;
  margin: 0;
}
.indexParagraph {
  padding: 10px 0 10px 0;
}
</style>
