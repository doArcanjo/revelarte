<template>
<nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <!-- You'll want to use a responsive image option so this logo looks good on devices - I recommend using something like retina.js (do a quick Google search for it and you'll find it) -->
                <a class="navbar-brand" href="index.html">Revelar-te</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <!-- <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"> Edição 2013 <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="diarioparoco.html">Diário de um Pároco de Aldeia</a>
                            </li>
                            <li><a href="iconfess.html">Confesso</a>
                            </li>
                            <li><a href="lesmiserables.html">Os Miseráveis</a>
                            </li>
                            <li><a href="quemdesejaseramado.html">Quem deseja ser amado?</a>
                            </li>
                            <li><a href="cartaz2013.html">Cartaz</a>
                            </li>
                        </ul>
                    </li> -->
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"> Edição 2015 <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="um_homem_para_a_eternidade.html">Um Homem para a Eternidade</a>
                            </li>
                            <li><a href="os_olhos_da_asia.html">Os Olhos da Ásia</a>
                            </li>
                            <li><a href="tangerina.html">Tangerinas</a>
                            </li>
                            <li><a href="o_misterio_dos_santos_inocentes.html">Apresentação <i>"O Mistério dos Santos Inocentes"</i></a>
                            </li>
                            <li><a href="timbuktu.html">Timbuktu</a>
                            </li>
                            <li><a href="andrei_rublev.html">Andrei Rublev</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                    <router-link to="/" exact>Inicio
                      <img class="logo" src="../assets/img/logo.png" alt="logo">
                    </router-link>
                    </li>
                    <li><a href="faq.html">Perguntas Frequentes</a>
                    </li>
                    <li><a href="local.html">Localização</a>
                    </li>
                    <li><a href="contact.html">Contactos</a>
                    </li>
                    <li><a href="about.html">Sobre Nós</a>
                    </li>
                    <!--
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Other Pages <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="full-width.html">Full Width Page</a>
                            </li>
                            <li><a href="sidebar.html">Sidebar Page</a>
                            </li>
                            <li><a href="faq.html">FAQ</a>
                            </li>
                            <li><a href="404.html">404</a>
                            </li>
                            <li><a href="pricing.html">Pricing Table</a>
                            </li>
                        </ul>
                    </li> -->
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>
</template>
