<template>
  <nav class="navbar-menu has-text-centered">
    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start is-uppercase">
        <a class="navbar-item" href="/">
          Kuka olen
        </a>
        <a class="navbar-item" href="/">
          Työkokemukseni
        </a>
        <a class="navbar-item" href="/">
          Projektit
        </a>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
nav {
  height: 90px;
  line-height: 70px;
  background-color: hsla(0, 0%, 0%, 0.6);
  position: absolute;
  width: 100%;
  z-index: 1;
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