<template>
  <div id="app">
      <transition name="fade">
    <div class="section">
      <navbar></navbar>
        <router-view class="view"></router-view>
      <site-footer></site-footer>
    </div>
      </transition>
    
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
<!-- <style src='../assets/vendor/bs/bootstrap.min.css'></style> -->
<style src='../assets/css/modern-business.css'></style>
<style>

.section {
  background-image: radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #02BF86 100%);
}

a {
    color: #18bc9c;
    text-decoration: none;
}
</style>
