<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <site-footer></site-footer>
  </div>
</template>
<script>
import Navbar from '../components/Navbar'
import SiteFooter from '../components/SiteFooter'

export default {
  components: {
    Navbar,
    SiteFooter
  }
}
</script>

<style>
body {
  margin: 0;
  font-size: 2rem;
  font-family: -apple-system, BlinkMacSystemFont,
               'avenir next', avenir,
               helvetica, 'helvetica neue',
               Ubuntu,
               'segoe ui', arial,
               sans-serif;
}
.page {
  text-align: center;
}
code {
  background-color: #f0f0f0;
  padding: 3px 5px;
  border-radius: 2px;
}
</style>
