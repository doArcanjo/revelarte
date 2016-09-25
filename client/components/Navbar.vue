<template>
<div>
    <header class="cd-auto-hide-header">
    <div class="navbar-brand"><a href="/"><h3>RevelAr-Te</h3></a></div>

    <nav class="cd-primary-nav">
        <a href="#cd-navigation" class="nav-trigger">
            <span>
                <em aria-hidden="true"></em>
                Menu
            </span>
        </a> <!-- .nav-trigger -->

        <ul id="cd-navigation">
            <!-- <li><a href="#0" class="TheTeam" v-on:click="makeActive('TheTeam')">The team</a></li> -->
            <li><a href="#0" >The team</a></li>
            <!-- <li>    <a v-link="{ path: '/' }">Go to Home</a></li> -->
            <li><router-link to="/Faq">Perguntas Frequentes</router-link></li>
            <li><router-link to="/Local">Localização</router-link></li>
            <li><router-link to="Contact">Contactos</router-link></li>
            <li><router-link to="/AboutUs">Sobre Nós</router-link></li>
            
        </ul>
    </nav> <!-- .cd-primary-nav -->
    <p>You chose <b>{{active}}</b></p>
</header> <!-- .cd-auto-hide-header -->

 <!-- .cd-hero -->
<!-- .cd-secondary-nav - ->
<nav class="cd-secondary-nav">
    <ul>
        <li><a class="active" href="#0">Intro</a></li>
        <li><a href="#0">Features</a></li>
        <li><a href="#0">Photos</a></li>
        <li><a href="#0">Videos</a></li>
        <li><a href="#0">Specs</a></li>
        <li><a href="#0">Support</a></li>
        <li><a href="#0">Compare</a></li>
        <li><a href="#0">Buy</a></li>
    </ul>
</nav> 
<!-- .cd-secondary-nav -->
</div>
</template>
<script>
  import Autohidenav from '../assets/vendor/auto-hiding-navigation/js/auto-hiding-nav.js'
  import Carousel from './Carousel.vue'
  export default  {
    created(){
        console.log(this.$route.path)
    },
    data(){
        return {
            active: 'AboutUs'
        }
    },
    components:{
        Carousel
    },

    // Functions we will be using.
    methods: {
        makeActive: function(item){
            // When a model is changed, the view will be automatically updated.
            this.active = item;
        },
        routepath:function(){
            console.log('$route.path',$route.path)
        }
    }
}
</script>
<!-- <style src='../assets/vendor/auto-hiding-navigation/css/reset.css'></style> -->
<style src='../assets/vendor/auto-hiding-navigation/css/style.css'></style>

<style >
    .cd-auto-hide-header{
        background-color: #18bc9c;
        border-color: #128f76;
        color: #fff;
    }    
    .cd-primary-nav > ul a {
         color: #fff;
    }
    a>h3{
      color:#fff;
    }

</style>