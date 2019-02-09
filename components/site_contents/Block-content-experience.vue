<template>
  <div class="block-content" :class="{'is-active': isOpen}">
    <button class="delete is-pulled-right" aria-label="close" @click="close"></button>
    <div class="content">
      <h1 class="is-uppercase">Experience</h1>
      <hr>
      <h2 class="is-uppercase">Work experience</h2>
      <hr>
      <ul class="timeline">
        <!-- Item 1 -->
        <li>
          <div class="direction-r">
            <div class="flag-wrapper">
              <span class="flag">Eventa Creative Osk</span>
              <span class="time-wrapper"><span class="time">2018 - present</span></span>
            </div>
            <div class="desc">Entrepreneur at Eventa Creative Osk.</div>
          </div>
        </li>
        
        <!-- Item 2 -->
        <li>
          <div class="direction-l">
            <div class="flag-wrapper">
              <span class="flag">Seravo Oy</span>
              <span class="time-wrapper"><span class="time">2018 - present</span></span>
            </div>
            <div class="desc">Network Services Specialist at Seravo Oy. I started as summer employee.</div>
          </div>
        </li>

        <!-- Item 3 -->
        <li>
          <div class="direction-r">
            <div class="flag-wrapper">
              <span class="flag">Lantrek Ry</span>
              <span class="time-wrapper"><span class="time">2016 - present</span></span>
            </div>
            <div class="desc">I've been organizer in several LanTrek events. Lantrek is one of the largest LAN parties in Finland.</div>
          </div>
        </li> 

                <!-- Item 2 -->
        <li>
          <div class="direction-l">
            <div class="flag-wrapper">
              <span class="flag">WizIT Oy</span>
              <span class="time-wrapper"><span class="time">2017 - 3 months</span></span>
            </div>
            <div class="desc">I was in an internship at WizIT Oy. I was working as IT-support.</div>
          </div>
        </li>

        <!-- Item 3 -->
        <li>
          <div class="direction-r">
            <div class="flag-wrapper">
              <span class="flag">Ideapark Karkkiparkki Oy</span>
              <span class="time-wrapper"><span class="time">2016 - 2017</span></span>
            </div>
            <div class="desc">I was working in a café besides school.</div>
          </div>
        </li> 
                        <!-- Item 2 -->
        <li>
          <div class="direction-l">
            <div class="flag-wrapper">
              <span class="flag">Protacon Oy</span>
              <span class="time-wrapper"><span class="time">2015 - 3 months</span></span>
            </div>
            <div class="desc">I was in an internship at Protacon Oy. </div>
          </div>
        </li>

        <!-- Item 3 -->
        <li>
          <div class="direction-r">
            <div class="flag-wrapper">
              <span class="flag">Yleisradio Oy</span>
              <span class="time-wrapper"><span class="time">2015 - 1 month</span></span>
            </div>
            <div class="desc">I was chosen from a large group of applicants to be an summer employee in Public service broadcasting company, Yle.</div>
          </div>
        </li> 
      </ul>
      <section class="section">  
        <h2 class="aboutmeTitle is-uppercase">Education</h2>
        <hr>
        <div class="columns">
          <div class="column is-one-third">
            <div class="description-content">
              <h1 class="aboutmeSchool">Tampere Vocational College,<br>TREDU</h1>
              <h2 class="program">Restaurant and Catering</h2>
              <h2 class="date">2013-2014</h2>
            </div>
            <p>After elementary school, I decided to go to study Vocational Qualification in the Restaurant and Catering. I've been working in multiple cafes and restaurants,
              also I had 3 months internship. However, after wanting new challenges I decided to make a full turn and focus on information technology.
            </p>
          </div>
          <div class="column">
            <div class="description-content">
              <h1 class="aboutmeSchool">Tampere Vocational College,<br>TREDU</h1>
              <h2 class="program">Information and Communication Technology</h2>
              <h2 class="date">2014-2017</h2>
            </div>
            <p>I started studying in the middle of the semester, as I moved from the Restaurant and Catering degree. I found my great passion from information technology side, not that it was a surprise because from child I've enjoyed working with electronics. <br><br>You can access the Information and Communication Technology curriculum <a href="http://inter16.tampere.fi/tredu/material/koulutukset/opintosuunnitelmat/43xEhfiOl/Tieto-_ja_tietoliikennetekniikan_pt_ict-asentaja_2016.pdf" target="blank" style="text-decoration: underline;">HERE</a>.
            </p>
          </div>
          <div class="column">
            <div class="description-content">
              <h1 class="aboutmeSchool">Tampere University of Applied Siences,<br>TAMK</h1>
              <h2 class="program">Degree Programme in Business Information Systems</h2>
              <h2 class="date">2017-2020</h2>
            </div>
            <p>A great passion to achieve and learn new was pushing me forward even after a vocational school. After I graduated from vocational school, I ended up to continue my dream in TAMK; in the middle of good networks, great teachers and a variety of opportunities.<br><br>You can access the Business Information Systems curriculum <a href="http://opinto-opas-ops.tamk.fi/index.php/fi/167/fi/46/13TIKO/year/2013" target="blank" style="text-decoration: underline;">HERE</a>.
            </p>
          </div>
        </div>
      </section>
      <section class="image">
        <div><img src="~/static/graduated.jpg" alt="Susannan kuva"></div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    open () {
      this.isOpen = true
    },
    close () {
      this.isOpen = false
      this.$emit('close')
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
  .description-content {
    min-height: 230px;
    .program, .date {
      font-size: 1.2em;
      bottom: 0px;
    }
    .program {
      min-height: 80px;
    }
    .aboutmeSchool {
      font-size: 1.4em;
    }
  }
  .timeline {
  position: relative;
  width: 660px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 1em 0;
  list-style-type: none;
}

.timeline:before {
  position: absolute;
  left: 50%;
  top: 0;
  content: ' ';
  display: block;
  width: 6px;
  height: 100%;
  margin-left: -3px;
  background: #EFEFED;
  z-index: 5;
}

.timeline li {
  padding: 1em 0;
}

.timeline li:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.direction-l {
  position: relative;
  width: 300px;
  float: left;
  text-align: right;
}

.direction-r {
  position: relative;
  width: 300px;
  float: right;
}

.flag-wrapper {
  position: relative;
  display: inline-block;
  
  text-align: center;
}

.flag {
  position: relative;
  display: inline;
  padding: 6px 10px;
  border-radius: 5px;
  color: #424242;
  text-align: left;
}

.direction-l .flag:before,
.direction-r .flag:before {
  position: absolute;
  top: 50%;
  right: -36px;
  content: ' ';
  display: block;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  background: #63594A;
  border-radius: 10px;
  border: 4px solid white;
  z-index: 10;
}

.direction-r .flag:before {
  left: -41px;
}

.direction-l .flag:after {
  content: "";
  position: absolute;
  left: 100%;
  top: 50%;
  width: 20px;
  border-top: 1px solid #63594A;
  pointer-events: none;
}

.direction-r .flag:after {
  content: "";
  position: absolute;
  right: 100%;
  top: 50%;
  width: 20px;
  border-top: 1px solid #63594A;
  pointer-events: none;
}

.time-wrapper {
  display: inline;
  line-height: 1em;
  font-size: 0.66666em;
  color: #424242;
  vertical-align: middle;
}

.direction-l .time-wrapper {
  float: left;
}

.direction-r .time-wrapper {
  float: right;
}

.time {
  display: inline-block;
  padding: 4px 6px;
}

.desc {
  margin: 1em 0.75em 0 0;
  font-size: 0.77777em;
  line-height: 1.5em;
  color: #424242;
}

.direction-r .desc {
  margin: 1em 0 0 0.75em;
}

/* ================ Timeline Media Queries ================ */

@media screen and (max-width: 660px) {
  .timeline {
    width: 100%;
    padding: 4em 0 1em 0;
  }
  .timeline li {
    padding: 2em 0;
  }
  .direction-l,
  .direction-r {
    float: none;
    width: 100%;
    text-align: center;
  }
  .flag-wrapper {
    text-align: center;
  }
  .flag {
    background: #EFEFED;
    z-index: 15;
  }
  .direction-l .flag:before,
  .direction-r .flag:before {
    position: absolute;
    top: -30px;
    left: 50%;
    content: ' ';
    display: block;
    width: 12px;
    height: 12px;
    margin-left: -9px;
    background: #fff;
    border-radius: 10px;
    border: 4px solid rgb(255,80,80);
    z-index: 10;
  }
  .direction-l .flag:after,
  .direction-r .flag:after {
    content: "";
    position: absolute;
    left: 50%;
    top: -8px;
    height: 0;
    width: 0;
    margin-left: -8px;
    border: solid transparent;
    border-bottom-color: rgb(255,255,255);
    border-width: 8px;
    pointer-events: none;
  }
  .time-wrapper {
    display: block;
    position: relative;
    margin: 4px 0 0 0;
    z-index: 14;
  }
  .direction-l .time-wrapper {
    float: none;
  }
  .direction-r .time-wrapper {
    float: none;
  }
  .desc {
    position: relative;
    margin: 1em 0 0 0;
    padding: 1em;
    background: rgb(245,245,245);
    -webkit-box-shadow: 0 0 1px rgba(0,0,0,0.20);
    -moz-box-shadow: 0 0 1px rgba(0,0,0,0.20);
    box-shadow: 0 0 1px rgba(0,0,0,0.20);
    z-index: 15;
  }
  .direction-l .desc,
  .direction-r .desc {
    position: relative;
    margin: 1em 1em 0 1em;
    padding: 1em;
    z-index: 15;
  }
}
}
</style>