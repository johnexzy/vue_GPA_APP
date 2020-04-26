<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <nav>
    <router-link to="/">HOME</router-link>
    </nav>
    
    <router-view/>
    <!-- <HelloWorld/> -->
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components:{
    HelloWorld
  }
}
</script>
<style>

body{
  background: #9c9797;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center
}
body html{
  width:100%;
  height: 100%;
}
#app{
  width: 50%;
  font-family: monospace
}
nav{
  padding: 20px 20px 20px 0px
}
nav a{
  padding: 10px;
  text-decoration: none;
  background: #fff;
  border-radius: 3px;
  color: rgb(0, 110, 255);
  font-weight: bold;
  margin-right: 15px
}
@media screen and (max-width:800px){
    
    #app{
      width: 90%;
    }
}
</style>
