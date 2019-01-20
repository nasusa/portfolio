<template>
  <div class="block-content" :class="{'is-active': isOpen}">
    <button class="delete is-pulled-right" aria-label="close" @click="close"></button>
    <div class="content">
      <h1 class="is-uppercase">Experience</h1>
      <hr>
      <section id ="experience" class="aboutmeTimeline">
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
                  <a v-show="timelineShowReadMore" class="button is-rounded" @click="timeline.readmore = !timeline.readmore">
                    {{timeline.readmore ? 'Näytä vähemmän..' : 'Lue lisää..'}}
                  </a>
                  <span class="timeline__block__body__date">{{ timeline.date }}</span>
                </div>
              </div>
            </div>
          </section>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'
  import lory from '~/plugins/lory'

  export default {
    data() {
      return {
        isOpen: false,
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
            icon: 'fa fa-laptop',
            title: 'Lantrek Ry',
            content: [
              'Lantrek on Tampereella vuosittain järjestettävä verkkopelitapahtuma, jonka takana häärää 100-120 ihmistä. Osa meistä on opiskelijoita, osa työskentelee tietokoneiden ja ohjelmistojen parissa ja osaa meistä yhdistää vain into organisoida ja järjestää tapahtumia.',
              'Löysin itseni mahtavasta Lantrek-joukosta ensimmäisen kerran vuonna 2016, ja loppua ei näy. Tällähetkellä toimin Lantrekin rakennusvastaavana joka tuo mukanaan lisää vastuuta ja pidempiä päiviä Lantrekien parissa; mistä olen enemmän kuin innoissani! Lantrek toimii vapaaehtoistyövoimin, ja sen takana on mahtava joukko erilaisia mutta samanmielisiä ihmisiä.'
            ],
            date: 'Maaliskuu 2016 - 2018, 1vko',
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
          // Luodaan scroll event, joka tuo sisällön näkyviin
          // window.addEventListener('scroll', _.throttle(this.handleScroll, 1000, { leading: false }))
          window.addEventListener('scroll', this.handleScroll)

          this.timelineShowReadMore = this.getScreenWidth() <= 425
        })
      }
    },
    methods: {
      open () {
        this.isOpen = true
      },
      close () {
        this.isOpen = false
        this.$emit('close')
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
.block-content {
  width: 50vw;
  position: absolute;
  height: 100vh;
  background-color: white;
  top: 0;
  right: 0;
  z-index: 1000;
  display: none;
  overflow-y: auto;
  &.is-active {
    display: block;
  }
  button {
    margin: 20px;
  }
  .content {
    padding: 3em;
    p {
      color: #9f9f9f;
      padding-top: 1em;
      font-size: 1.2em;
    }
  }
}
</style>