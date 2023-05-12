<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1">
    <title>Ordres</title>
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
    <input type="checkbox" id="nav-toggle">
    <div class="sidebar">
        <div class="sidebar-brand">
            <h2><span class="lab la-schlix"></span><span>Schlix</span></h2>
        </div>
        <div class="sidebar-menu">
            <ul>
                <li>
                    <a href="index.html" class="active"><span class="las la-igloo"></span>
                    <span>Tableau de bord</span></a>
                </li>
                <li>
                    <a href=""><span class="las la-clipboard-list"></span>
                    <span>Ordres</span></a>
                </li>
                <li>
                    <a href=""><span class="las la-users"></span>
                    <span>Clients</span></a>
                </li>
                <li>
                    <a href=""><span class="la la-automobile"></span>
                    <span>Voitures</span></a>
                </li>
                <li>
                    <a href=""><span class="las la-user-tie"></span>
                    <span>Employés</span></a>
                </li>
            </ul>
        </div>
    </div>
    <div class="main-content">
        <header>
            <h2>
                <label for="nav-toggle">
                    <span class="las la-bars" style="cursor: pointer;"></span>
                </label>
                Ordres
            </h2>
            <div class="search-wrapper">
                <span class="las la-search"></span>
                <input type="search" placeholder="cherchez ici">
            </div>
            <div class="user-wrapper">
                <img src="img/younes_pic.jpg" width="40px" height="40px" alt="">
                <div>
                    <h4>Younes Bouyzem</h4>
                    <small>Super admin</small>
                </div>
            </div>
        </header>
        <main>
            <div class="orders">
                <div class="">
                    <div class="card">
                        <div class="card-header">
                            <h3>Commandes d'aujourd'hui</h3>
                            <button>see all orders <span class="las la la-arrow-right"></span> </button>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table width="100%">
                                    <thead>
                                        <tr>
                                            <td>id</td>
                                            <td>Nom client</td>
                                            <td>Matricule</td>
                                            <td>Marque</td>
                                            <td>Date de la commande</td>
                                            <td>Nombre du jours</td>
                                            <td>Date fin du reservation</td>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>UI/UX design</td>
                                            <td>UI team</td>
                                            <td></td>
                                            <td>
                                                <span class="status green"></span>review
                                            </td>
                                            <td></td>
                                            <td></td>

                                        </tr>
                                        <tr>
                                            <td>UI/UX design</td>
                                            <td>UI team</td>
                                            <td></td>
                                            <td>
                                                <span class="status green"></span>
                                                review
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>UI/UX design</td>
                                            <td>UI team</td>
                                            <td></td>
                                            <td>
                                                <span class="status green"></span>
                                                review
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>UI/UX design</td>
                                            <td>UI team</td>
                                            <td></td>
                                            <td>
                                                <span class="status green"></span>
                                                review
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>UI/UX design</td>
                                            <td>UI team</td>
                                            <td></td>
                                            <td>
                                                <span class="status green"></span>
                                                review
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>UI/UX design</td>
                                            <td>UI team</td>
                                            <td></td>
                                            <td>
                                                <span class="status green"></span>
                                                review
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>UI/UX design</td>
                                            <td>UI team</td>
                                            <td></td>
                                            <td>
                                                <span class="status green"></span>
                                                review
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>UI/UX design</td>
                                            <td>UI team</td>
                                            <td></td>
                                            <td>
                                                <span class="status green"></span>
                                                review
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>UI/UX design</td>
                                            <td>UI team</td>
                                            <td></td>
                                            <td>
                                                <span class="status green"></span>
                                                review
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Web developement</td>
                                            <td>Frontend</td>
                                            <td></td>
                                            <td>
                                                <span class="status red"></span>
                                                in progress
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Ushop app</td>
                                            <td>Mobile team</td>
                                            <td></td>
                                            <td>
                                                <span class="status orange"></span>
                                                pending
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- tous les reserrvation -->
            <div class="orders">
                <div class="">
                    <div class="card">
                        <div class="card-header">
                            <h3>Tous les commandes</h3>
                            <button>see all orders <span class="las la la-arrow-right"></span> </button>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table width="100%">
                                    <thead>
                                        <tr>
                                            <td>id</td>
                                            <td>Nom client</td>
                                            <td>Matricule</td>
                                            <td>Marque</td>
                                            <td>Date de la commande</td>
                                            <td>Nombre du jours</td>
                                            <td>Date fin du reservation</td>


                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>UI/UX design</td>
                                            <td>UI team</td>
                                            <td></td>
                                            <td>
                                                <span class="status green"></span>review
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td class="edit-buttons"><button><span class="las la-edit"></span></button><button><span class="las la-trash-alt"></span></button></td>
                                        </tr>
                                        <tr>
                                            <td>UI/UX design</td>
                                            <td>UI team</td>
                                            <td></td>
                                            <td>
                                                <span class="status green"></span>
                                                review
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>UI/UX design</td>
                                            <td>UI team</td>
                                            <td></td>
                                            <td>
                                                <span class="status green"></span>
                                                review
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>UI/UX design</td>
                                            <td>UI team</td>
                                            <td></td>
                                            <td>
                                                <span class="status green"></span>
                                                review
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>UI/UX design</td>
                                            <td>UI team</td>
                                            <td></td>
                                            <td>
                                                <span class="status green"></span>
                                                review
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>UI/UX design</td>
                                            <td>UI team</td>
                                            <td></td>
                                            <td>
                                                <span class="status green"></span>
                                                review
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>UI/UX design</td>
                                            <td>UI team</td>
                                            <td></td>
                                            <td>
                                                <span class="status green"></span>
                                                review
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>UI/UX design</td>
                                            <td>UI team</td>
                                            <td></td>
                                            <td>
                                                <span class="status green"></span>
                                                review
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>UI/UX design</td>
                                            <td>UI team</td>
                                            <td></td>
                                            <td>
                                                <span class="status green"></span>
                                                review
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Web developement</td>
                                            <td>Frontend</td>
                                            <td></td>
                                            <td>
                                                <span class="status red"></span>
                                                in progress
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Ushop app</td>
                                            <td>Mobile team</td>
                                            <td></td>
                                            <td>
                                                <span class="status orange"></span>
                                                pending
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

        </main>
    </div>
</body>
</html>
