<template>
  <div class="hello">
          <router-link to="/">ABOUT</router-link>
          <img src="../assets/logo.png">
    <h1>{{ mmg }}</h1>
    <h2>Essential Links</h2>
    <ul>

      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {

      mmg: 'Welcome '+this.$route.params.name
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
