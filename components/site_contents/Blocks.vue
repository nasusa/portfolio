<template>
  <div class="block-container" :class="{'page-opened': hasOpen}">
    <div class="welcome-block">
      <div class="welcome-block-container">
        <h1>Hi, I'm </h1>
        <h1 class="name">Susanna Lepola</h1>
        <div class="text"></div>
          <nav class="level is-mobile social-icons">
          <div class="level-left">
            <a href="https://twitter.com/susannalepola" target="_blank" class="level-item">
              <span class="icon is-small"><i class="fa fa-twitter"></i></span>
            </a>
            <a href="https://www.instagram.com/susannalepola/" target="_blank"  class="level-item">
              <span class="icon is-small"><i class="fa fa-instagram"></i></span>
            </a>
            <a href="https://linkedin.com/in/susannalepola/" target="_blank"  class="level-item">
              <span class="icon is-small"><i class="fa fa-linkedin"></i></span>
            </a>
            <a href="http://github.com/nasusa" target="_blank"  class="level-item">
              <span class="icon is-small"><i class="fa fa-github"></i></span>
            </a>
          </div>
        </nav>
      </div>
    </div>
    <div class="about-block menu-block" @click="open(1)">
      <div class="about-block-container">
        <h1 class="menu-title is-uppercase">About me</h1>
      </div>
    </div>
    <div class="portfolio-block menu-block" @click="open(2)">
      <div class="portfolio-block-container">
        <h1 class="menu-title is-uppercase">My experience</h1>
      </div>
    </div>
    <div class="resume-block menu-block" @click="open(3)">
      <div class="resume-block-container">
        <h1 class="menu-title is-uppercase">My portfolio</h1>
      </div>
    </div>
    <div class="contact-block menu-block" @click="open(4)">
      <div class="contact-block-container">
        <h1 class="menu-title is-uppercase">Contact me</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hasOpen: false
    }
  },
  methods: {
    close() {
      this.hasOpen = false;
    },
    open(number) {
      this.hasOpen = true
      this.$emit('openPage', number)
    }
  },
  mounted () {
    class TextScramble {
    constructor(el) {
      this.el = el
      this.chars = '!<>-_\\/[]{}—=+*^?#________'
      this.update = this.update.bind(this)
    }
    setText(newText) {
      const oldText = this.el.innerText
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise((resolve) => this.resolve = resolve)
      this.queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 40)
        this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
      return promise
    }
    update() {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        if (this.frame >= end) {
          complete++
          output += to
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
          }
          output += `<span class="dud">${char}</span>`
        } else {
          output += from
        }
      }
      this.el.innerHTML = output
      if (complete === this.queue.length) {
        this.resolve()
      } else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
  }

  const phrases = [
    'Dog mom',
    'Coder',
    'Student',
    'Entrepreneur'
  ]

  const el = document.querySelector('.text')
  const fx = new TextScramble(el)

  let counter = 0
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 800)
    })
    counter = (counter + 1) % phrases.length
  }

  next()
  }
}
</script>

<style lang="scss">
.page-opened {
  .welcome-block {
    border: 0px;
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    &-container {
      -ms-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      padding-left: 100px;
    }
  }
  .menu-block {
    display: none;
  }
}

h1.menu-title {
  position: relative;
  color: #FFF;
  margin: 50px;
  font-size: 28px;
  transition: all 1s ease-out;
  &:after {
    position: absolute;
    content: '';
    top: -10px;
    left: -20px;
    width: 70px;
    height: 1px;
    background: #FFF;
    transition: all 0.5s ease;
  }
}

.menu-block {
  cursor: pointer;
}

.welcome-block {
  width: 700px;
  height: 700px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  display: table;
  position: absolute;
  transition: all 0.5s;
  z-index: 1;
  &-container {
    display: table-cell;
    vertical-align: middle;
    padding-left: 240px;
    -ms-transform: rotate(34deg);
    -webkit-transform: rotate(34deg);
    transform: rotate(34deg)
  }
  .name {
    font-size: 3em;
    padding-left: 20px;
  }
  .text {
    font-family: 'Roboto Mono', monospace;
    font-size: 2em;
    padding-left: 20px;
  }
  .social-icons {
    padding-top: 30px;
    font-size: 2em;
    a, i {
      &:hover {
        text-decoration: none;
        color: #dedede;
      }
    }
    .level-item {
      padding-right: 10px;
    }
  }
}

.about-block {
  width: 430px;
  height: 300px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  display: table;
  position: absolute;
  transition: all 0.5s;
  z-index: 1;
  &:hover {
    border: 15px solid rgba(255, 255, 255, 0.1);
  }
  &-container {
    display: table-cell;
    vertical-align: middle;
    padding: 150px 0 0 70px;
    -ms-transform: rotate(34deg);
    -webkit-transform: rotate(34deg);
    transform: rotate(34deg)
  }
}

.portfolio-block {
  width: 430px;
  height: 400px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  display: table;
  position: absolute;
  transition: all 0.5s;
  z-index: 1;
  &:hover {
    border: 15px solid rgba(255, 255, 255, 0.1);
  }
  &-container {
    display: table-cell;
    vertical-align: middle;
    padding: 55px 0 0px 70px;
    -ms-transform: rotate(34deg);
    -webkit-transform: rotate(34deg);
    transform: rotate(34deg);
  }
}

.resume-block {
  width: 430px;
  height: 300px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  display: table;
  position: absolute;
  transition: all 0.5s;
  z-index: 1;
  &:hover {
    border: 15px solid rgba(255, 255, 255, 0.1);
  }
  &-container {
    display: table-cell;
    vertical-align: middle;
    padding: 0 0 0 55px;
    -ms-transform: rotate(34deg);
    -webkit-transform: rotate(34deg);
    transform: rotate(34deg);
  }
}

.contact-block {
  width: 430px;
  height: 400px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  display: table;
  position: absolute;
  transition: all 0.5s;
  z-index: 1;
  &:hover {
    border: 15px solid rgba(255, 255, 255, 0.1);
  }
  &-container {
    display: table-cell;
    vertical-align: middle;
    padding: 0 0 0 55px;
    -ms-transform: rotate(34deg);
    -webkit-transform: rotate(34deg);
    transform: rotate(34deg);
  }
}

@media (min-width: 1920px) {
  .welcome-block {
    -ms-transform: rotate(-34deg);
    -webkit-transform: rotate(-34deg);
    transform: rotate(-34deg);
    left: 122px;
    top: 90px;
  }
  .about-block {
    -ms-transform: rotate(-34deg);
    -webkit-transform: rotate(-34deg);
    transform: rotate(-34deg);
    left: 702px;
    top: -60px;
  }
  .portfolio-block {
    -ms-transform: rotate(-34deg);
    -webkit-transform: rotate(-34deg);
    transform: rotate(-34deg);
    left: 897px;
    top: 179px;
  }
  .resume-block {
    -ms-transform: rotate(-34deg);
    -webkit-transform: rotate(-34deg);
    transform: rotate(-34deg);
    left: 1092px;
    top: 518px;
  }
  .contact-block {
    -ms-transform: rotate(-34deg);
    -webkit-transform: rotate(-34deg);
    transform: rotate(-34deg);
    left: 1386px;
    top: 138px;
  }
}

@media (min-width:1280px) and (max-width:1919px) {
  .welcome-block {
    -ms-transform: rotate(-34deg);
    -webkit-transform: rotate(-34deg);
    transform: rotate(-34deg);
    left: -190px;
    top: 10px;
  }
  .about-block {
    -ms-transform: rotate(-34deg);
    -webkit-transform: rotate(-34deg);
    transform: rotate(-34deg);
    left: 382px;
    top: -151px;
  }
  .portfolio-block {
    -ms-transform: rotate(-34deg);
    -webkit-transform: rotate(-34deg);
    transform: rotate(-34deg);
    left: 577px;
    top: 89px;
  }
  .resume-block {
    -ms-transform: rotate(-34deg);
    -webkit-transform: rotate(-34deg);
    transform: rotate(-34deg);
    left: 772px;
    top: 428px;
  }
  .contact-block {
    -ms-transform: rotate(-34deg);
    -webkit-transform: rotate(-34deg);
    transform: rotate(-34deg);
    left: 1067px;
    top: 48px;
  }
  .page-opened .welcome-block {
    left: 60px;
  }
}

@media (min-width:1025px) and (max-width:1280px) {
  .welcome-block {
    -ms-transform: rotate(-34deg);
    -webkit-transform: rotate(-34deg);
    transform: rotate(-34deg);
    left: -200px;
    top: -80px;
  }
  .about-block {
    -ms-transform: rotate(-34deg);
    -webkit-transform: rotate(-34deg);
    transform: rotate(-34deg);
    left: 419px;
    top: -160px;
    width: 350px;
    height: 300px;
  }
  .portfolio-block {
    -ms-transform: rotate(-34deg);
    -webkit-transform: rotate(-34deg);
    transform: rotate(-34deg);
    left: 586px;
    top: 88px;
    width: 350px;
    height: 300px;
  }
  .resume-block {
    -ms-transform: rotate(-34deg);
    -webkit-transform: rotate(-34deg);
    transform: rotate(-34deg);
    left: 753px;
    top: 335px;
    width: 350px;
    height: 300px;
  }
  .contact-block {
    -ms-transform: rotate(-34deg);
    -webkit-transform: rotate(-34deg);
    transform: rotate(-34deg);
    left: 900px;
    top: -70px;
    width: 350px;
    height: 300px;
  }
  .page-opened {
    .welcome-block {
      top: 95px;
      &-container {
        padding-left: 25px;
      }
    }
  }
}

@media (max-width:1000px) {
  .block-content {
    width: 100vw;
  }
}

@media (min-width:981px) and (max-width:1024px) {
  .welcome-block {
    -ms-transform: rotate(-34deg);
    -webkit-transform: rotate(-34deg);
    transform: rotate(-34deg);
    left: -190px;
    top: 10px;
  }
  .about-block {
    -ms-transform: rotate(-34deg);
    -webkit-transform: rotate(-34deg);
    transform: rotate(-34deg);
    left: 382px;
    top: -150px;
  }
  .portfolio-block {
    -ms-transform: rotate(-34deg);
    -webkit-transform: rotate(-34deg);
    transform: rotate(-34deg);
    left: 577px;
    top: 89px;
  }
  .resume-block {
    -ms-transform: rotate(-34deg);
    -webkit-transform: rotate(-34deg);
    transform: rotate(-34deg);
    left: 772px;
    top: 428px;
  }
  .contact-block {
    -ms-transform: rotate(-34deg);
    -webkit-transform: rotate(-34deg);
    transform: rotate(-34deg);
    left: 365px;
    top: 538px;
  }
}

@media (min-width:768px) and (max-width:980px) {
  .welcome-block {
    -ms-transform: rotate(-34deg);
    -webkit-transform: rotate(-34deg);
    transform: rotate(-34deg);
    left: -190px;
    top: 10px;
  }
  .about-block {
    -ms-transform: rotate(-34deg);
    -webkit-transform: rotate(-34deg);
    transform: rotate(-34deg);
    left: 382px;
    top: -150px;
  }
  .portfolio-block {
    -ms-transform: rotate(-34deg);
    -webkit-transform: rotate(-34deg);
    transform: rotate(-34deg);
    left: 577px;
    top: 89px;
  }
  .resume-block {
    -ms-transform: rotate(-34deg);
    -webkit-transform: rotate(-34deg);
    transform: rotate(-34deg);
    left: 336px;
    top: 548px;
  }
  .contact-block {
    -ms-transform: rotate(-34deg);
    -webkit-transform: rotate(-34deg);
    transform: rotate(-34deg);
    left: 9px;
    top: 780px;
  }
}

@media (max-width: 800px) {
  .hero {
    padding: 2em 0em 4em 0em;
    .block-content {
      width: 100vw!important;
    }
    .welcome-block, .about-block, .portfolio-block, .resume-block, .contact-block {
      position: relative;
      -ms-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      height: auto;
      width: auto;
      text-align: center;
      border: none;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      display: grid;
      left: 0;
      top: 0;
      h1 {
        padding-left: 0px;
        &.menu-title {
          margin: 3px;
          &:after{
            display:none;
          }
        }
      }
      .text {
        padding-left: 0px;
      }
      .social-icons {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 30px;
      }
      .welcome-block-container, .about-block-container, .portfolio-block-container, .resume-block-container, .contact-block-container {
        -ms-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        padding: 0 0 0 0;
      }
    }
  }
}
</style>