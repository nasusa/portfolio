<template>
  <div class="block-container" :class="{'page-opened': hasOpen}">
    <div class="welcome-block">
      <div class="welcome-block-container">
        <h1>Hi, I'm </h1>
        <h1 class="name">Susanna Lepola</h1>
        <div class="text"></div>
          <nav class="level is-mobile social-icons">
          <div class="level-left">
            <a class="level-item">
              <span class="icon is-small"><i class="fa fa-facebook"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fa fa-instagram"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fa fa-linkedin"></i></span>
            </a>
            <a class="level-item">
              <span class="icon is-small"><i class="fa fa-github"></i></span>
            </a>
          </div>
        </nav>
      </div>
    </div>
    <div class="about-block menu-block" @click="open(1)">
      <div class="about-block-container">
        <h1 class="is-uppercase">About me</h1>
      </div>
    </div>
    <div class="portfolio-block menu-block" @click="open(2)">
      <div class="portfolio-block-container">
        <h1 class="is-uppercase">My experience</h1>
      </div>
    </div>
    <div class="resume-block menu-block">
      <div class="resume-block-container">
        <h1 class="is-uppercase">My portfolio</h1>
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
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    &-container {
      -ms-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }
  .menu-block {
    display: none;
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
    padding-left: 190px;
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
  width: 400px;
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
    padding: 0 0 0 50px;
    -ms-transform: rotate(34deg);
    -webkit-transform: rotate(34deg);
    transform: rotate(34deg);
  }
}

.portfolio-block {
  width: 400px;
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
    padding: 55px 0 0px 70px;
    -ms-transform: rotate(34deg);
    -webkit-transform: rotate(34deg);
    transform: rotate(34deg);
  }
}

.resume-block {
  width: 400px;
  height: 600px;
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
  position: absolute;
  -ms-transform: rotate(-34deg);
  -webkit-transform: rotate(-34deg);
  transform: rotate(-34deg);
  left: 122px;
  top: 90px;
  }
  .about-block {
  position: absolute;
  -ms-transform: rotate(-34deg);
  -webkit-transform: rotate(-34deg);
  transform: rotate(-34deg);
  left: 812px;
  top: 57px;
  }
  .portfolio-block {
  position: absolute;
  -ms-transform: rotate(-34deg);
  -webkit-transform: rotate(-34deg);
  transform: rotate(-34deg);
  left: 1007px;
  top: 396px;
  }
  .resume-block {
  position: absolute;
  -ms-transform: rotate(-34deg);
  -webkit-transform: rotate(-34deg);
  transform: rotate(-34deg);
  left: 1422px;
  top: 148px;
  }
}

@media (min-width:1280px) and (max-width:1919px) {
  .welcome-block {
  -ms-transform: rotate(-34deg);
  -webkit-transform: rotate(-34deg);
  transform: rotate(-34deg);
  left: -100px;
  top: 50px;
  width: 500px;
  height: 500px;
  }
  .about-block {
  -ms-transform: rotate(-34deg);
  -webkit-transform: rotate(-34deg);
  transform: rotate(-34deg);
  left: 368px;
  top: -50px;
  width: 350px;
  height: 350px;
  }
  .portfolio-block {
  -ms-transform: rotate(-34deg);
  -webkit-transform: rotate(-34deg);
  transform: rotate(-34deg);
  left: 214px;
  top: 454px;

  }
  .resume-block {
  -ms-transform: rotate(-34deg);
  -webkit-transform: rotate(-34deg);
  transform: rotate(-34deg);
  left: 628px;
  top: 204px;
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
  left: -45px;
  top: 132px;
  width: 400px;
  height: 400px;
    &-container {
      padding-left: 100px;
    }
  }
  .about-block {
  -ms-transform: rotate(-34deg);
  -webkit-transform: rotate(-34deg);
  transform: rotate(-34deg);
  left: 305px;
  top: -31px;
  width: 350px;
  height: 350px;
  }
  .portfolio-block {
  -ms-transform: rotate(-34deg);
  -webkit-transform: rotate(-34deg);
  transform: rotate(-34deg);
  left: 183px;
  top: 462px;
  width: 350px;
  height: 250px;
  }
  .resume-block {
  -ms-transform: rotate(-34deg);
  -webkit-transform: rotate(-34deg);
  transform: rotate(-34deg);
  left: 556px;
  top: 242px;
  width: 350px;
  height: 550px;
  }
  .page-opened {
    .welcome-block {
      left: 90px;
      top: 95px;
      &-container {
        padding-left: 90px;
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
  left: -100px;
  top: 100px;
  width: 600px;
  height: 500px;
  }
  .about-block {
  -ms-transform: rotate(-34deg);
  -webkit-transform: rotate(-34deg);
  transform: rotate(-34deg);
  left: 442px;
  top: -88px;
    &-container {
    padding: 85px 0 0 82px
    }
  }
  .portfolio-block {
  -ms-transform: rotate(-34deg);
  -webkit-transform: rotate(-34deg);
  transform: rotate(-34deg);
  left: 637px;
  top: 251px;
  }
  .resume-block {
  -ms-transform: rotate(-34deg);
  -webkit-transform: rotate(-34deg);
  transform: rotate(-34deg);
  left: 301px;
  top: 477px;
  height: 280px;
  }
}

@media (min-width:768px) and (max-width:980px) {
  .welcome-block {
  -ms-transform: rotate(-34deg);
  -webkit-transform: rotate(-34deg);
  transform: rotate(-34deg);
  left: -100px;
  top: 10px;
  }
  .about-block {
  -ms-transform: rotate(-34deg);
  -webkit-transform: rotate(-34deg);
  transform: rotate(-34deg);
  left: 590px;
  top: -23px;
  }
  .portfolio-block {
  -ms-transform: rotate(-34deg);
  -webkit-transform: rotate(-34deg);
  transform: rotate(-34deg);
  left: 535px;
  top: 484px;
  }
  .resume-block {
  -ms-transform: rotate(-34deg);
  -webkit-transform: rotate(-34deg);
  transform: rotate(-34deg);
  left: 288px;
  top: 683px;
  }
}

@media (max-width: 800px) {
  .hero {
    .block-content {
      width: 100vw!important;
    }
    .welcome-block, .about-block, .portfolio-block, .resume-block {
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
      .welcome-block-container, .about-block-container, .portfolio-block-container, .resume-block-container {
        -ms-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        padding: 0 0 0 0;
      }
    }
  }
}
</style>