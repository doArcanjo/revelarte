<template>
  <div class="page">
     <section class="cd-hero">
         <Carousel></Carousel>
    </section>
    <br>
    <br>
     <CallToAction></CallToAction>
     <Presentation></Presentation>
  </div>
</template>

<script>
import Carousel from '../components/Carousel'
import CallToAction from '../components/CallToAction'
import Presentation from '../components/Presentation'

export default {
  components: {
    Carousel,
    CallToAction,
    Presentation
    
  }
}
</script>
