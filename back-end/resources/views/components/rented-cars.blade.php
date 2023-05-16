@props(['voitures','clientsRent'])

<div class="voitures">
    <div class="card">
        <div class="card-header">
            <h3>Cars currently rented</h3>
            <a href="{{route('cars')}}"><button>see all <span class="las la la-arrow-right"></span> </button></a>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table width="100%">
                    <thead>
                        <tr>
                            <td>Car id</td>
                            <td>№</td>
                            <td>Model</td>
                            <td>Brand</td>
                            <td>Price per day</td>
                            <td>Client Id</td>
                            <td>Client Name</td>
                        </tr>
                    </thead>
                    <tbody>
                        @if (!empty($voitures))
                            @foreach ($voitures as $voiture)
                                <tr>
                                    <td>{{$voiture->car_id}}</td>
                                    <td>{{$voiture->matricule}}</td>
                                    <td>{{$voiture->modele}}</td>
                                    <td>{{$voiture->marque}}</td>
                                    <td>{{$voiture->prix_jour}}</td>
                                    <td>{{$voiture->client_id}}</td>
                                    <td>{{$voiture->nom}} {{$voiture->prenom}}</td>
                                </tr>
                            @endforeach


                            @else
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td style="width:100%;text-align: center;background-color:gainsboro;margin:10px 0px 10px 0px;padding:10px">aucun client ne loue actuellement</td>
                                </tr>
                        @endif
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
