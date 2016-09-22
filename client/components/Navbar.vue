<template>
<div>
    <header class="cd-auto-hide-header">
    <div class="logo"><a href="#0"><h3>RevelAr-Te</h3></a></div>

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
            <li><a href="#0">Perguntas Frequentes</a></li>
            <li><a href="#0">Localização</a></li>
            <li><a href="#0">Contactos</a></li>
            <li><router-link  class="active" to="/AboutUs"><a>Sobre Nós</a></router-link></li>
            
        </ul>
    </nav> <!-- .cd-primary-nav -->
    <p>You chose <b>{{active}}</b></p>
</header> <!-- .cd-auto-hide-header -->

<section class="cd-hero">
     <div id="myCarousel" class="carousel slide">
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner">
            <div class="item active">
                <div class="fill" style="background-image:url('http://placehold.it/1900x1080&text=Ciclo Cinema de Almada'); background-position:'right bottom';">
                    <img src="../assets/img/LOGO_300_290.png" width='18%'>
                </div>

                <div class="carousel-caption">
                    <h1 style="text-align:center"><a href="about.html">Edição 2015</a>
                    </h1>
                </div>
            </div>
            <div class="item">
                <div class="fill" style="background-image:url('http://placehold.it/1900x1080&text=de 9 a 13 de Dezembro...');">
                    <img src="../assets/img/LOGO_300_290.png" width='18%'>
                </div>
                <div class="carousel-caption">
                    <h1 style="text-align:center">
                        <a href="index.html">Programa</a>
                    </h1>
                </div>
            </div>
            <div class="item">
                <div class="fill" style="background-image:url('http://placehold.it/1900x1080&text=Forum Romeu Correia');">
                    <img src="../assets/img/LOGO_300_290.png" width="18%" allign="bottom">
                </div>
                <div class="carousel-caption">
                    <h1> <a href="local.html">Almada</a>
                    </h1>
                </div>
            </div>
        </div>

        <!-- Controls -->
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="icon-prev"></span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="icon-next"></span>
        </a>
    </div>
</section> <!-- .cd-hero -->
<!--
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
</nav>  .cd-secondary-nav -->
<br>
</div>
</template>
<script>
  import Autohidenav from '../assets/vendor/auto-hiding-navigation/js/auto-hiding-nav.js'
  export default  {
    created(){
        console.log(this.$route.path)
    },
    data(){
        return {
            active: 'AboutUs'
        }
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

<style>
    .cd-auto-hide-header{
        background-color: #18bc9c;
        border-color: #128f76;
        color: #fff;
    }    
    .cd-primary-nav > ul a {
         color: #fff;
    }

</style>