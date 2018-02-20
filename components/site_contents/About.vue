  <template>
    <div> 

      <!--PROFIILIKUVA ALKAA-->
      <section class="section aboutmeImg">  
        <div class="container">
          <div class="card-image">
            <figure class="">
              <img class="profile" src="~/static/profile.jpg/" alt="Placeholder image">
            </figure>
          </div>
        </div>
      </section>
      <!--PROFIILIKUVA PÄÄTTYY-->
    
      <section class="section aboutmeInfo">
        <div class="container columnsHero">
          <!-- Slider valikko -->
          <div class="tabs is-centered is-boxed is-medium">
            <ul>
              <li :class="{ 'is-active': slider.currentSlide === 0 }" @click="changeSlide(0)">
                <a>
                  <span class="is-uppercase">Minä</span>
                </a>
              </li>
              <li :class="{ 'is-active': slider.currentSlide === 1 }" @click="changeSlide(1)">
                <a>
                  <span class="is-uppercase">Koulutukseni</span>
                </a>
              </li>
              <li :class="{ 'is-active': slider.currentSlide === 2 }" @click="changeSlide(2)">
                <a>
                  <span class="is-uppercase">Kurssit ja kielitaito</span>
                </a>
              </li>
              <li :class="{ 'is-active': slider.currentSlide === 3 }" @click="changeSlide(3)">
                <a>
                  <span class="is-uppercase">Osaaminen</span>
                </a>
              </li>
            </ul>
          </div>
          <!-- Slider alkaa -->
          <div class="slider js_slider" ref="slider">
            <div class="frame js_frame">
              <ul class="slides js_slides">
                <li class="js_slide">
                  <section class="section slide">  
                    <div class="columns">
                      <div class="column is-half">
                        <h1 class="aboutmeTitle is-uppercase">Kuka minä olen?</h1>
                      </div>
                      <div class="column aboutmeColumn">
                        <ul class="aboutmeIcons">
                          <li><a href="https://www.facebook.com/susannalepolan" target="_blank"><i class="fa fa-facebook-square fa-fw" aria-hidden="true"></i></a></li>
                          <li><a href="https://www.linkedin.com/in/susannalepola/" target="_blank"><i class="fa fa-linkedin-square fa-fw" aria-hidden="true"></i></a></li>
                          <li><a href="https://github.com/nasusa" target="_blank"><i class="fa fa-github-square fa-fw" aria-hidden="true"></i></a></li>
                        </ul>
                      </div>
                    </div>
                    <div class="columns">
                      <div class="column is-half">
                        <p class="paragraphPadding">Olen 20-vuotias kahviaddikti ja "älytön koodin työntäjä" Tampereelta.</p>
                        <p class="">Intohimoni koneiden ja koodaamisen rinnalla, olen myös suuri musiikkifriikki ja todellinen 
                          herkkusuu joka rakastaa kaikkea hyvää elämässä. Olen myös hullu koiranainen, entinen heppatyttö. Arvomaailmassani korkeimmalta löytyy perhe ja ystävät.
                        </p>
                      </div>
                      <div class="column">
                        <p class="paragraphPadding">Minulla on luonnollinen tarve luoda, kuvitella ja suunnitella; joka on tullut esiin graffit-maalaamisessa sekä valokuvaamisessa. Näitä taitoja olen 
                          hyödyntänyt myös www-sivuja työstäessäni.
                        </p>
                        <p class="">Rakastan löytää uusia asioita, oppia uusia asioita, käydä uusissa paikoissa
                          ja tavata uusia ihmisiä. Kiva kun eksyit sivuilleni, toivottavasti viihdyt!
                        </p>
                      </div>
                    </div>
                  </section>
                </li>
                <li class="js_slide">
                  <section class="section slide">  
                    <div class="columns">
                      <div class="column is-half">
                        <h1 class="aboutmeTitle is-uppercase">Koulutukseni</h1>
                      </div>
                      <div class="column">
                      </div>
                    </div>
                    <div class="columns">
                      <div class="column is-one-third">
                        <h1 class="aboutmeSchool">Tampereen seudun ammattiopisto, TREDU</h1>
                        <h2 class="dateProgram">Hotelli-, ravintola- ja cateringala</h2>
                        <h2 class="dateProgram">2013-2014</h2>
                        <p>Peruskoulun jälkeen päätin suunnata hotelli-, ravintola- ja cateringalalle. Olen tehnyt useammassa alan työpaikassa
                          kesätöitä sekä suorittanut harjoitteluita. Kuitenkin janotessani uusia haasteita, päätin vuoden jälkeen tehdä täyskäännöksen
                          ja suunnata tietotekniikan pariin.
                        </p>
                      </div>
                      <div class="column">
                        <h1 class="aboutmeSchool">Tampereen seudun ammattiopisto, TREDU</h1>
                        <h2 class="dateProgram">Tietoliikenneasentaja</h2>
                        <h2 class="dateProgram">2014-2017</h2>
                        <p>Aloitin opiskelut kesken lukuvuoden vaihtaessani alaa hotelli-, ravintola- ja cateringalalta. Löysin suuren intohimoni
                          tietotekniikan puolelta, se ei tosin ollut yllätys sillä pienestä asti olen viihtynyt elektroniikan parissa.<br>
                          ICT-asentajan opetussuunnitelmaan pääset <a href="http://inter16.tampere.fi/tredu/material/koulutukset/opintosuunnitelmat/43xEhfiOl/Tieto-_ja_tietoliikennetekniikan_pt_ict-asentaja_2016.pdf" target="blank">TÄSTÄ</a>.
                        </p>
                      </div>
                      <div class="column">
                        <h1 class="aboutmeSchool">Tampereen ammattikorkeakoulu, TAMK</h1>
                        <h2 class="dateProgram">Tietojenkäsittelijä</h2>
                        <h2 class="dateProgram">2017-2020</h2>
                        <p>Suuri intohimo saavuttaa ja oppia uutta puski eteenpäin ammattikoulun jälkeenkin. Päädyin ammattikoulusta valmistumisen jälkeen 
                          jatkamaan unelmaani TAMK:issa; hyvien verkostojen, mahtavien opettajien ja monenlaisten mahdollisuuksien keskelle.<br>
                          Tietojenkäsittelijän koulutusohjelmaan pääset <a href="http://opinto-opas-ops.tamk.fi/index.php/fi/167/fi/46/13TIKO/year/2013" target="blank">TÄSTÄ</a>.
                        </p>
                      </div>
                    </div>
                  </section>
                </li>
                <li class="js_slide">
                  <section class="section slide">  
                    <div class="columns">
                      <div class="column aboutmeThirdSlide has-text-centered">
                          <h1 class="aboutmeTitle is-uppercase">Kurssit ja koulutukset</h1>
                        <div class="columns is-mobile is-multiline thirdSlideSocial">
                          <div class="column is-6-mobile is-4-desktop">
                            <i class="fa fa-id-card-o fa-2x"></i>
                            <h1 class="socialHeading is-uppercase">B-kortti</h1>
                          </div>
                          <div class="column is-6-mobile is-4-desktop">
                            <i class="fa fa-exclamation-triangle fa-2x"></i>
                            <h1 class="socialHeading is-uppercase">Työturvallisuus-<br>kortti</h1>
                          </div>
                          <div class="column is-6-mobile is-4-desktop">
                            <i class="fa fa-fire fa-2x"></i>
                            <h1 class="socialHeading is-uppercase">Tulityökortti</h1>
                          </div>
                          <div class="column is-6-mobile is-4-desktop">
                            <i class="fa fa-truck fa-2x"></i>
                            <h1 class="socialHeading is-uppercase">Tietyökortti</h1>
                          </div>
                          <div class="column is-6-mobile is-4-desktop">
                            <i class="fa fa-medkit fa-2x"></i>
                            <h1 class="socialHeading is-uppercase">Ensiapu 1 & 2</h1>  
                          </div>
                          <div class="column is-6-mobile is-4-desktop"> 
                            <i class="fa fa-cutlery fa-2x"></i>
                            <h1 class="socialHeading is-uppercase">Hygieniapassi</h1>
                          </div>             
                        </div>
                      </div>
                      <div class="column has-text-centered">
                        <h1 class="aboutmeTitle is-uppercase">Kielitaito</h1>
                        <div class="columns is-mobile is-multiline thirdSlideSocial">
                          <div class="column">
                            <img class="socialFlagIcon" src="~/static/finnish.png" alt="Placeholder image">
                            <h1 class="socialHeading is-uppercase">suomi</h1>
                          </div>
                          <div class="column">  
                            <img class="socialFlagIcon" src="~/static/english.png" alt="Placeholder image">
                            <h1 class="socialHeading is-uppercase">englanti</h1>
                          </div>
                          <div class="column ">
                            <img class="socialFlagIcon" src="~/static/sweden.png" alt="Placeholder image">
                            <h1 class="socialHeading is-uppercase">ruotsi</h1>
                          </div>
                          <div class="column ">
                            <img class="socialFlagIcon" src="~/static/germany.png" alt="Placeholder image">
                            <h1 class="socialHeading is-uppercase">saksa</h1>
                          </div>
                        </div>  
                        <p>Olin opiskelijavaihdossa Saksassa vuonna 2012 ja vaihto-oppilaana Ranskassa vuonna 2014. Olen myös majoittanut pidempiaikaisiakin vaihto-oppilaita useista eri maista.</p>
                      </div>
                    </div>
                  </section>
                </li>
                <li class="js_slide">
                  <section class="section slide">  
                    <div class="columns">
                      <div class="column aboutmeThirdSlide">
                        <h1 class="aboutmeTitle is-uppercase">Osaaminen</h1>
                        <div class="columns">
                          <div class="column">
                            <h1 class="skillsHeading is-uppercase">MsOffice</h1>
                            <progress class="progress is-large is-primary" value="80" max="100">80%</progress>
                            <h1 class="skillsHeading is-uppercase">Adobe Photoshop & XD</h1>
                            <progress class="progress is-large is-link" value="75" max="100">75%</progress>
                            <h1 class="skillsHeading is-uppercase">Sosiaalinen media</h1>
                            <progress class="progress is-large is-info" value="90" max="100">90%</progress>
                            </div>
                            <div class="column">
                            <h1 class="skillsHeading is-uppercase">Html5 & xhtml</h1>
                            <progress class="progress is-large is-primary" value="75" max="100">75%</progress>
                            <h1 class="skillsHeading is-uppercase">Css & scss</h1>
                            <progress class="progress is-large is-link" value="75" max="100">75%</progress>
                            <h1 class="skillsHeading is-uppercase">Java</h1>
                            <progress class="progress is-large is-info" value="50" max="100">50%</progress>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </li>
              </ul>
            </div>
            <span class="js_prev prev">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5"><g><path fill="#2E435A" d="M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z"/></g></svg>
            </span>
            <span class="js_next next">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 501.5 501.5"><g><path fill="#2E435A" d="M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z"/></g></svg>
            </span>
          </div>

        <!--EXPERIENCE ALKAA--> 
          <section class="aboutmeTimeline">
            <h1 class="aboutmeTitle is-uppercase has-text-centered">Työkokemukseni</h1>
            <hr class="titleHr">
            <div class="timeline is-clearfix" ref="timeline">
              <div class="timeline__block is-clearfix" v-for="(timeline, index) in timelines" :key="index">
                <div class="timeline__block__image" :class="{ 'is-notvisible': !timeline.rendered }">
                  <i class="fa-fw" :class="timeline.icon"></i>
                </div>
                <div class="timeline__block__body is-clearfix" v-show="timeline.rendered">
                  <h2 class="is-size-4">{{ timeline.title }}</h2>
                  <template v-for="(paragraph, paraIndex) in timeline.content">
                    <transition name="fadeInDown" :key="paraIndex">
                      <p v-show="!timelineShowReadMore || (timelineShowReadMore && (timeline.readmore || paraIndex === 0))">
                        {{ paragraph }}
                      </p>
                    </transition>
                  </template>
                  <a v-show="timelineShowReadMore" class="button is-link" @click="timeline.readmore = !timeline.readmore">
                    {{timeline.readmore ? 'Älä lue enään..' : 'Lue lisää..'}}
                  </a>
                  <span class="timeline__block__body__date">{{ timeline.date }}</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <!--EXPERIENCE PÄÄTTYY-->  

    </div>
</template>

<script>
  import _ from 'lodash'
  import lory from '~/plugins/lory'

  export default {
    data() {
      return {
        slider: {
          lory: null,
          currentSlide: 0
        },
        experienceVisible: null,
        timelineShowReadMore: true,
        timelines: [
          {
            icon: 'fa fa-coffee',
            title: 'Vesilahden Aittakahvila',
            content: [
              'Ensimmäinen kesätyöpaikkani löytyy yläaste ajoilta Vesilahden Aittakahvilasta. Työtehtäviin kuului tuotevalikoimasta huolehtiminen, asiakaspalvelu, tilausten tekeminen sekä kahvitusten järjestäminen.',
              'Aittakahvila kesätyön ajaksi oli mahdollista ottaa koulun kautta vaihto-oppilas Latviasta töihin mukaan, joten töihin opastus tapahtui englannin kielellä.'
            ],
            date: 'Kesäkuu 2011 ja 2012, 2vko',
            readmore: false,
            rendered: false
          },
          {
            icon: 'fa fa-briefcase',
            title: 'TET-harjoittelut ja kahvitukset',
            content: [
              'Yläaste aikana TET-paikkani oli Minimani Ideapark jossa harjoittelin tavaroiden esillepanoa, lastien purkua ja inventaariota.',
              'Toinen TET-paikka löytyi myös Ideaparkista; Beefking Steakhouse, jossa työtehtäviin kuului salin hoitaminen, pöytien täyttäminen, tarjoilu ja salin erilaiset siivoustyöt.',
              'Tein myös lukuisia kahvituksia koululla pienistä ryhmistä yli sadan hengen tilaisuuksiin.'
            ],
            date: '2011-2013',
            readmore: false,
            rendered: false
          },
          {
            icon: 'fa fa-cutlery',
            title: 'Opiskeluravintola Eetvartti',
            content: [
              'Ennen alanvaihtoa ehdin kuitenkin suorittaa yhden työharjoittelun Hotelli-, ravintola- ja cateringalalla.',
              'Työtehtäviin kuului kassanhoito, asiakaspalvelu, ruoanlaitto ja tilausten tekeminen. Meidän porukka järjesti myös upean Presidentin itsenäisyyspäivän brunssin!'
            ],
            date: 'Lokakuu 2013, 3kk',
            readmore: false,
            rendered: false
          },
          {
            icon: 'fa fa-cutlery ',
            title: 'Kahvilaravintola Wanha Narva',
            content: [
              'Sain kivan kesätyöpaikan ravintola-baarityöntekijänä.',
              'Työtehtäviini kuului salin hoitamista, ruoanlaittoa sekä apulaisen tehtävät keittiössä ja salin puolella.'
            ],
            date: 'Kesäkuu 2014, 1kk',
            readmore: false,
            rendered: false
          },
          {
            icon: 'fa fa-cutlery',
            title: 'Staffline Oy',
            content: [
              'Etsin töitä koulun ohelle ja ottaessani yhteyttä vanhaan TET-paikkaan Ideaparkin Beefkingiin, minut otettiin ilomielin uudelleen vastaan.',
              'Tein Stafflinen kanssa sopimuksen lyhyisiin keikkatyösuhteisiin.'
            ],
            date: 'Lokakuu 2014',
            readmore: false,
            rendered: false
          },
          {
            icon: 'fa fa-laptop',
            title: 'Yleisradio, Elävä arkisto',
            content: [
              'Minut valittiin suuresta hakijajoukosta Yleisradiolle kesätöihin!',
              'Pääsin korjaamaan Ylen medianhallinta- järjestelmään digitoitujen tv-ohjelmien metatietoja sekä arkiston kuvanauhalogistiikkaa.'
            ],
            date: 'Kesäkuu 2015, 1kk',
            readmore: false,
            rendered: false
          },
          {
            icon: 'fa fa-laptop',
            title: 'Protacon Oy',
            content: [
              'Ammattikoulun ensimmäisen työharjoittelun suoritin mielenkiintoisessa työpaikassa Protacon Oy:llä.',
              'Työtehtäviin kuului mm. asiakkaille menevien koneiden kunnon tarkistusta, asiakkaiden sopimustietojen täydentämistä ja syöttämistä järjestelmään, kiintolevyjen formatointia ja Image-asennuksia.'
            ],
            date: 'Lokakuu 2015, 3kk',
            readmore: false,
            rendered: false
          },
          {
            icon: 'fa fa-coffee',
            title: 'Ideapark Karkkiparkki Oy',
            content: [
              'Ollessani ammattikoulussa, tein töitä koulun ohella.',
              'Työtehtäviin kuului kioskin ylläpito ja siivoustehtävät itsenäisesti, asiakaspalvelu ja kassankäyttö sekä tuotteiden tilaaminen tarvittaessa.'
            ],
            date: 'Helmikuu 2016, 1 vuosi',
            readmore: false,
            rendered: false
          },
          {
            icon: 'fa fa-laptop',
            title: 'WizIT Oy',
            content: [
              'Ammattikoulun työharjoittelun suoritin mahtavassa porukassa, WizIT Oy:llä!',
              'Työtehtäviin kuului koneiden ja ohjelmien asennusta, sekä kaikenlaiset IT-tuen tehtävät.'
            ],
            date: 'Maaliskuu 2017, 3kk',
            readmore: false,
            rendered: false
          },
          {
            icon: 'fa fa-lightbulb-o',
            title: 'Olisiko seuraava työpaikkani teillä?',
            content: [
              'Ota yhteyttä!'
            ],
            date: '',
            readmore: false,
            rendered: false
          }
        ]
      }
    },
    mounted () {
      if (process.browser) {
        this.$nextTick(() => {
          // Ladataan slider
          const slider = this.$refs.slider
          this.slider.lory = lory.lory(slider, {
            rewind: true
          });
          this.$refs.slider.addEventListener('after.lory.slide',  this.handleSlideEvent)

          // Luodaan scroll event, joka tuo sisällön näkyviin
          // window.addEventListener('scroll', _.throttle(this.handleScroll, 1000, { leading: false }))
          window.addEventListener('scroll', this.handleScroll)

          this.timelineShowReadMore = this.getScreenWidth() <= 425
        })
      }
    },
    methods: {
      /**
       * This does that
       * @param {number} slide Number to slide to
       */
      changeSlide(slide) {
        this.slider.lory.slideTo(slide);
        this.slider.currentSlide = slide;
      },
      handleSlideEvent(event) {
        this.slider.currentSlide = event.detail.currentSlide
      },
      handleScroll(event) {
        const elements = this.$refs.timeline.children
        Array.prototype.forEach.call(elements, (element, index) => {
          const topOffset = element.getBoundingClientRect().top + window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
          if (!this.timelines[index].rendered && topOffset <= window.scrollY + window.innerHeight * 0.75) {
            const blocksToShow = element.querySelectorAll('.timeline__block__image, .timeline__block__body');
            blocksToShow.forEach((block, blockIndex) => {
              block.classList.remove('is-notvisible')
              if (blockIndex) {
                if (index % 2) {
                  block.classList.add('slideInRight-enter-active')
                } else {
                  block.classList.add('slideInLeft-enter-active')
                }
              } else {
                block.classList.add('bounce-enter-active')
              }
              // Define allready shown block
              this.timelines[index].rendered = true
              // Remove event handler when its not needed
              if (index === elements.length - 1) {
                window.removeEventListener('scroll', this.handleScroll);
              }
            });
          }
        })
      },
      getScreenWidth() {
        return window.innerWidth || documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth
      }
    }
  }
</script>

<style lang="scss">
  .aboutmeImg {
    padding-bottom: 0;
    .profile {
      display: block;
      margin: auto;
      width: 300px;
      border: 20px solid white;
      border-radius:50%;
      padding-bottom: 0;
      margin-top: 10px;
      @include desktop {
      margin-top: -150px;        
      }
    }
  }
  .aboutmeInfo {
    padding-top: 0;
    .aboutmeIcons {
      display: flex;
      margin-left: 0;
      padding-right: 4em;
      font-size: 2em;
      @include desktop {
        padding-right: 20px;
      }
    }
    .aboutmeColumn {
      flex-grow:0;
    }
    .aboutmeSchool {
      font-family: 'Abel', sans-serif;
      font-size: 1.5em;    
    }
    .dateProgram {
      color: grey;
    }
  }
  .paragraphPadding {
    padding-bottom: 7px;
  }
  .columnsHero {
    margin: -12em auto -5em auto;
    background-color: white;
    padding: 20px;
    border-radius: 15px;
    max-width: 1000px;
  }
  .socialFlagIcon {
    width: 50px;
  }
  .thirdSlideSocial {
    padding-top: 30px;
  }
  .aboutmeThirdSlide {
    @include desktop {
    padding-right: 5em;
    }
  }
    /*SLIDER*/
  .slider {
    position: relative;
    .slide {
      padding-top: 0!important;
      @include desktop {
      padding-bottom: 50px;
      }
    }
    .frame {
      position: relative;
      font-size: 0;
      line-height: 0;
      overflow: hidden;
      white-space: nowrap;
    }
    .slides {
      width: 100%;
      display: inline-block;
    }
    li {
      position: relative;
      display: inline-block;
      width: 100%;
      &.js_slide.active { 
        font-size: 1rem;
        line-height: 1.5;
        white-space: normal;
      }
    }
    .prev, .next {
      display: hidden;
      @include desktop {
      position: absolute;
      top: 11em;
      margin-top: -25px;
      display: block;
      cursor: pointer;
      }
    }
    .next {
      right: -25px;
    }
    .prev {
      left: -25px;
    }
    .next svg, .prev svg {
      width: 0px;
      @include desktop {
      width: 25px;
      }
    }
  }
  /*TIMELINE*/
  .aboutmeTimeline {
    padding-top: 3em;
    .timeline {
      position: relative;
      padding: 2em 0;
      margin: 2em 0;
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 18px;
        height: 100%;
        width: 4px;
        background: #d7d7d7;
        @include desktop {
          left: 50%;
          margin-left: -2px;
        }
      }
      &__block {
        position: relative;
        margin: 2em 0;
        &:first-child {
          margin-top: 0;
        }
        &:last-child {
          margin-bottom: 0;
        }
        &__image {
          background: white;
          height: 40px;
          left: 0;
          position: absolute;
          top: 0;
          width: 40px;
          border-radius: 50%;
          box-shadow: 0 0 0 4px white,
                      inset 0 2px 0 rgba(0,0,0,0.08),
                      0 3px 0 4px rgba(0,0,0,0.05);
          @include desktop {
            width: 60px;
            height: 60px;
            left: 50%;
            margin-left: -30px;
          }
          i {
            font-size: 28px;
            line-height: 46px;
            margin-left: 5%;
            color: hsla(135, 30%, 32%, 0.644);
            @include desktop {
              line-height: 65px;
              font-size: 37px;
              margin-left: 11%;
            }
          }
        }
        &__body {
          position: relative;
          margin-left: 60px;
          background: #f2f2f2;
          border-radius: .25em;
          padding: 0.5em;
          box-shadow: 0 3px 0 #d7e4ed;
          @include desktop {
            width: 45%;
            margin-left: 0px;
            padding: 1em;
          }
          .test:first-child {
              display: none;
          }
          h2 {
            font-family: 'Abel', sans-serif;
          }
          p {
            font-family: 'Abel', sans-serif;
            padding: 5px;
            @media screen and (max-width: 425px) {
              &.hidden {
                display: none;
              }
            }
            @include desktop {
              font-size: 1em;
            }
          }
          &::before {
            content: '';
            position: absolute;
            top: 16px;
            right: 100%;
            height: 0;
            width: 0;
            border: 7px solid transparent;
            border-right: 7px solid #f2f2f2;
            @include desktop {
              top: 24px;
              left: 100%;
              border-color: transparent;
              border-left-color: #f2f2f2;
            }
          }
          &__date {
            float: left;
            padding: .8em 0;
            opacity: .7;
            @include tablet {
              font-size: .875rem;
            }
            @include desktop {
              position: absolute;
              width: 100%;
              left: 122%;
              top: 6px;
              font-size: 1em;
            }
          }
        }
        &:nth-child(even) {
          .timeline__block {
            @include desktop {
              &__body {
                float: right;
                &::before {
                  top: 24px;
                  left: auto;
                  right: 100%;
                  border-color: transparent;
                  border-right-color: #f2f2f2;
                }
                &__date {
                  left: auto;
                  right: 122%;
                  text-align: right;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
