<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <hr>
    <nav class="nav-header">
      university school <span style="color: orange">C</span><span style="color:green">G</span>
      <span style="color: pink">P</span><span style="color: blue">A</span> CAlCULATOR™</nav>
    <hr>
    <router-view/>
    <!-- <Gp/> -->

  </div>
</template>

<script>
import Gp from './components/Gp'
import './assets/css/gp_styles.css'

export default {
  name: 'App',
  components:{
    Gp
  }
}
</script>
<style>
