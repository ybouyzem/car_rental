<div class="map-container">
    <div>
        <div class="map-title">Voitures actuellement louées</div>
        <div id="map"></div>
    </div>
<script lang="javascript">


    const map = L.map('map').setView([29.0, -15.0], 5);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

coords =[[32.3350,-6.3532],[33.5698, -7.6135],[31.9619,-6.5696]];
let l=coords.length;
for ( i=0;i<l;i++){
    var marker=L.marker(coords[i]).addTo(map);
}
</script>
