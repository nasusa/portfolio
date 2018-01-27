<template>
  <div>
    <navbar/>
    <!--<sidenav/>-->
    <nuxt/>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '~/components/Footer'
import Navbar from '~/components/Navbar'
//import Sidenav from '~/components/Sidenav'

export default {
  components: {
    Navbar,
    //Sidenav,
    MyFooter
  }
}
</script>