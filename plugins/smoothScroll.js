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
        block: 'center',
        inline: 'center'
      });
    });
  }
}