<template>
  <div>    
    <!--BOXIT ALKAA-->
    <!--YLÄBOXIT-->    
    <section class="section indexColumns">
      <div class="container columnsHero">
        <div class="columns">
          <div class="column has-text-centered">
            <div class="contentBox">
              <div class="content">
                <h1 class="is-uppercase headerAbel">
                  <a href="">
                    great projects
                  </a>
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
              </div>
            </div>
          </div>
          <div class="column has-text-centered">
            <div class="contentBox">
              <img class="contentImage" src="~/static/design.jpg" alt="Placeholder image">
              <div class="content">
                <h1 class="is-uppercase headerAbel">
                  <a href="">
                    unique design
                  </a>
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
              </div>
            </div>
          </div>
          <div class="column has-text-centered">
            <div class="contentBox">
              <img class="contentImage" src="~/static/hobby.jpg" alt="Placeholder image">
              <div class="content">
                <h1 class="headerAbel">
                  <i class="fa fa-heart-o" aria-hidden="true"></i>
                </h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--BOXIT PÄÄTTYY-->
  </div>
</template>

<style lang="scss">
.indexColumns {
  .columnsHero {
    //margin: -5em auto -5em auto;
    background-color: white;
    //padding: 20px;
    border-radius: 15px;
    max-width: 1000px;
    //box-shadow: 0 5px 9px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    @include desktop {
      //padding: 40px;
    }
  }
  .contentBox {
    padding: 20px;
  }
  a {
    color:#282828;
  }
  .contentImage {
    border-radius: 15px;
    box-shadow: 0 5px 9px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .indexParagraph {
    padding: 10px 0 10px 0;
  }
}
</style>