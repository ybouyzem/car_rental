<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1">
    <title>Tableau de bords</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
    integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
    crossorigin=""/>
    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css">
    <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css">
    <link rel="stylesheet" href="style.css">
    <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
    integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
    crossorigin=""></script>
</head>
<body>
    <x-sidebar/>
    <div class="main-content">
        <x-header/>
        <main>
            <x-number-cards :cars='$carsNumber' :clients='$clientsNumber' :reservations='$reservationsNumber' :employers='$employersNumber' :icome='$income'/>
            <!-- for the map -->
            <x-map/>


            <div class="recent-grid">
                <x-rented-cars :voitures='$rentedCars'/>
                <!-- clients -->
                <div class="clients">
                    <div class="card">
                        <div class="card-header">
                            <h3>clients qui louent</h3>
                            <button>see all <span class="las la la-arrow-right"></span> </button>
                        </div>
                        <div class="card-body">
                            <div class="client">
                                <div class="info">
                                    <img src="img/younes_pic.jpg" width="40px" height="40px" alt="">
                                    <div>
                                        <h4>Yousef alahyane</h4>
                                        <small>CTO Excerpt</small>
                                    </div>
                                </div>
                                <div class="contact">
                                    <span class="las la-user-circle"></span>
                                    <!-- <span class="las la-comment"></span> -->
                                    <span class="las la-phone"></span>
                                </div>
                            </div>


                            <div class="client">
                                <div class="info">
                                    <img src="img/younes_pic.jpg" width="40px" height="40px" alt="">
                                    <div>
                                        <h4>Younes Bouyzem</h4>
                                        <small>CEO</small>
                                    </div>
                                </div>
                                <div class="contact">
                                    <span class="las la-user-circle"></span>
                                    <!-- <span class="las la-comment"></span> -->
                                    <span class="las la-phone"></span>
                                </div>
                            </div>

                            <div class="client">
                                <div class="info">
                                    <img src="img/younes_pic.jpg" width="40px" height="40px" alt="">
                                    <div>
                                        <h4>Younes Bouyzem</h4>
                                        <small>CEO</small>
                                    </div>
                                </div>
                                <div class="contact">
                                    <span class="las la-user-circle"></span>
                                    <!-- <span class="las la-comment"></span> -->
                                    <span class="las la-phone"></span>
                                </div>
                            </div>

                            <div class="client">
                                <div class="info">
                                    <img src="img/younes_pic.jpg" width="40px" height="40px" alt="">
                                    <div>
                                        <h4>Younes Bouyzem</h4>
                                        <small>CEO</small>
                                    </div>
                                </div>
                                <div class="contact">
                                    <span class="las la-user-circle"></span>
                                    <!-- <span class="las la-comment"></span> -->
                                    <span class="las la-phone"></span>
                                </div>
                            </div>

                            <div class="client">
                                <div class="info">
                                    <img src="img/younes_pic.jpg" width="40px" height="40px" alt="">
                                    <div>
                                        <h4>Younes Bouyzem</h4>
                                        <small>CEO</small>
                                    </div>
                                </div>
                                <div class="contact">
                                    <span class="las la-user-circle"></span>
                                    <!-- <span class="las la-comment"></span> -->
                                    <span class="las la-phone"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</body>
</html>
