<template>
  <div class="page">
       <div class="container">

        <div class="row">

            <div class="col-lg-12">
                <h1 class="page-header">Perguntas Frequentes
                    <small></small>
                </h1>
                <ol class="breadcrumb">
                    <li><a href="/">Inicio</a>
                    </li>
                    <li class="active">FAQ</li>
                </ol>
            </div>

        </div>

        <div class="row">

            <div class="col-lg-12">

                <div class="panel-group" id="accordion">

                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
                    Quanto custa o Bilhete de Cinema?
                  </a>
                            </h4>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse">
                            <div class="panel-body">
                                R.: 0 €.
                            </div>
                        </div>
                    </div>

                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                    Onde é?
                  </a>
                            </h4>
                        </div>
                        <div id="collapseTwo" class="panel-collapse collapse">
                            <div class="panel-body">
                                R.: No fórum Romeu Correia em Almada. (Perto da Praça São João Baptista e do McDonald’s)
                            </div>
                        </div>
                    </div>

                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                    Onde estacionar?
                  </a>
                            </h4>
                        </div>
                        <div id="collapseThree" class="panel-collapse collapse">
                            <div class="panel-body">
                                R.: Existe parque de estacionamento ao lado do local do evento. (Repare na entrada para o parque de estacionamento no lado esquerdo veja <a href="local.html">aqui</a>)
                            </div>
                        </div>
                    </div>

                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseFour">
                    Onde se Levantam os Bilhetes?
                  </a>
                            </h4>
                        </div>
                        <div id="collapseFour" class="panel-collapse collapse">
                            <div class="panel-body">
                                R.: No fórum Romeu Correia antes de cada espectáculo.
                            </div>
                        </div>
                    </div>

                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseFive">
                    Pode-se fazer Reservas?
                  </a>
                            </h4>
                        </div>
                        <div id="collapseFive" class="panel-collapse collapse">
                            <div class="panel-body">
                                R.: Não haverá reserva de bilhetes.
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
        <!-- /.container -->

        <div class="container">
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
