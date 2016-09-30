<template>
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
                    <h1 style="text-align:center"><a href="about.html">Edição 2016</a>
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
</template>

<script>
</script>
