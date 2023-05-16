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
    @include('components.sidebar')
    <div class="main-content">
        <x-header :title='"Dashboard"'/>
        <main>
            <x-number-cards :cars='$carsNumber' :clients='$clientsNumber' :reservations='$reservationsNumber' :employers='$employersNumber' :income='$income'/>
            <!-- for the map -->
            <x-map/>


            <div class="recent-grid">
                <x-rented-cars :voitures='$rentedCars'/>
                <!-- clients -->
                <x-clients-rent :voitures='$rentedCars'/>
            </div>
        </main>
    </div>
</body>
</html>
