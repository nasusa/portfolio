<template>
  <nav class="navbar-menu has-text-centered">
    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start is-uppercase">
        <a class="navbar-item" href="">
          frontbage
        </a>
        <a class="navbar-item" href="">
          portfolio/blog
        </a>
        <a class="navbar-item" href="">
          about me
        </a>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
nav {
  height: 90px;
  line-height: 70px;
  margin-bottom: -90px;
  background-color: hsla(0, 0%, 0%, 0.6);
  .navbar-start {
    justify-content: center;
    flex-grow: 1;  
    a.navbar-item {
    color: #DCDCDC;
    font-size: 1.5em;
    font-family: 'Open Sans Condensed', sans-serif;
      &:hover {
        background-color: transparent;
      }
    }
  }
}
</style>