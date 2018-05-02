<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <div class="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navMenu" class="navbar-menu has-text-centered">
        <div class="navbar-start is-uppercase">
          <a class="navbar-item smoothScroll" href="#aboutme">
            Kuka olen
          </a>
          <a class="navbar-item smoothScroll" href="#experience">
            Työkokemukseni
          </a>
          <a class="navbar-item smoothScroll" href="#projects">
            Projektit
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  mounted () {
    // Get every navbar-item
    var navItems = document.getElementsByClassName('navbar-item');

    // Loop every navbar item and add click element
    for (var i = 0; i < navItems.length; i++) {
      var href = navItems[i].getAttribute('href');
      // Do element have "href" and does it start with "#"
      if (href && href.startsWith('#')) {
        // Put an click event to element
        navItems[i].addEventListener('click', function (event) {
          // Get "href" from clicked event
          var selector = event.target.getAttribute('href');
          // Prevent normal scroll
          event.preventDefault();
          document.querySelector(selector).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'start'
          });
        });
      }
    }
    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {
  
          // Get the target from the "data-target" attribute
          var target = $el.dataset.target;
          var $target = document.getElementById(target);
  
          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  }
}
</script>

<style lang="scss">
.navbar {
  position: fixed!important;
  height: 50px;
  line-height: 70px;
  background-color: hsla(0, 0%, 0%, 0.6);
  position: absolute;
  width: 100%;
  z-index: 1;
  .navbar-burger {
    color: white;
  }
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
@media screen and (max-width: 1023px) {
  .navbar-menu {
    background-color: hsla(0, 0%, 0%, 0.9);
    text-decoration: underline;
  }
}
</style>