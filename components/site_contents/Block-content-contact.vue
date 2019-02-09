<template>
  <div class="block-content" :class="{'is-active': isOpen}">
  <button class="delete is-pulled-right" aria-label="close" @click="close"></button>
    <div class="content contact-content">
      <h1 class="is-uppercase">Let's get in touch!</h1>
      <hr>
      <form action="https://formspree.io/lepolsussu@gmail.com" method="POST" >
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" name="name" type="text" placeholder="Name">
          </div>
        </div>

        <div class="field">
          <label class="label">Email Address</label>
          <div class="control">
            <input class="input" name="name" type="email" placeholder="email@gmail.com">
          </div>
        </div>

        <div class="field">
          <label class="label">Phone number</label>
          <div class="control">
            <input class="input" name="text" type="text" placeholder="+35840 000 0000">
          </div>
        </div>

        <div class="field">
          <label class="label">Message</label>
          <div class="control">
            <textarea class="textarea" name="name" placeholder="Say Hello!"></textarea>
          </div>
        </div>

        <div class="field submit-button is-centered">
          <div class="control">
            <button class="button is-dark is-uppercase">Send</button>
          </div>
        </div>
      </form>
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
.contact-content {
  .input:focus, .input.is-focused, .input:active, .input.is-active, .textarea:focus, .textarea.is-focused, .textarea:active, .textarea.is-active  {
    border-color: #444444;
    box-shadow: 0 0 0 0.125em rgba(0, 0, 0, 0.25);
  }
  .submit-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .button:hover {
    background-color: #d3d3d3;
    color: #444444;
  }
}
</style>
