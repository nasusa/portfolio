<template>
  <footer class="footer">
    <section class="footerFirst">
      <ul>
        <li><a href="https://www.facebook.com/susannalepolan" target="_blank"><i class="fa fa-facebook fa-fw" aria-hidden="true"></i></a></li>
        <li><a href="https://www.instagram.com/susannalepola/" target="_blank"><i class="fa fa-instagram fa-fw" aria-hidden="true"></i></a></li>
        <li><a href="https://fi.linkedin.com/in/susannalepola" target="_blank"><i class="fa fa-linkedin fa-fw" aria-hidden="true"></i></a></li>
        <li><a href="https://github.com/nasusa" target="_blank"><i class="fa fa-github fa-fw" aria-hidden="true"></i></a></li>
        <li><a href="http://codepen.io/nasusa/" target="_blank"><i class="fa fa-codepen fa-fw" aria-hidden="true"></i></a></li>
        <li><a href="http://steamcommunity.com/id/sussunanna/" target="_blank"><i class="fa fa-steam fa-fw" aria-hidden="true"></i></a></li>
      </ul>
    </section>
    <section class="footerSecond has-text-centered">
      <div class="diamond_icon">
        <span>
          <i class="fa fa-diamond" aria-hidden="true"></i>
        </span>
      </div>
      <span>
        Copyright @2018 Susanna Lepola, All Rights Reserved.
      </span>
    </section>
  </footer>
</template>

<style lang="scss">
footer {
  padding: 0rem!important;
  .footerFirst {
    background-color: hsla(135, 30%, 32%, 0.644);
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ul {
      display: inline-flex;
      margin-bottom: 2em;
      li {
        border: 1px solid white;
        border-radius: 10px;
        font-size: 1.5em;
        margin:3em 0.15em 1em 0.15em;
        transition: .5s;
        @include desktop {
          padding: 10px;
        }  
        i {
          color: white;
        }
        &:hover {
          background-color: white;
        }
      }
    }
  }
  .footerSecond {
    background-color: #282828;
    color: white;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'Sacramento', cursive;
    font-size: 1.5em;
    padding-bottom: 20px;
    @include desktop {
      font-size: 2em;
      max-height: 160px;
    }    
    .diamond_icon {
      font-size: 2em;
      margin-top: -0.5em;
      padding-bottom: 10px;
      text-shadow: 1px 1px #000000, 
                    2px 2px #000000, 
                    3px 3px #000000;
      @include desktop {
        margin-top: -0.5em;
        padding: 0;
      }
    }
  }
}

</style>