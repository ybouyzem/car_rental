@props(['voitures'])
<div class="voitures">
    <div class="card">
        <div class="card-header">
            <h3>Voitures actuellement louées</h3>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table width="100%">

                        @if (!empty($voitures))
                        <thead>
                            <tr>
                                <td>Image</td>
                                <td>id</td>
                                <td>Matricule</td>
                                <td>Modele</td>
                                <td>Marque</td>
                                <td>Status</td>
                                <td>Carburant</td>
                                <td>Boîte de vitesses</td>
                                <td>N.Places</td>
                                <td>Prix par jour</td>
                                <td>Date debut aassur</td>
                                <td>Date fin assur</td>
                                <td>Cout assur</td>
                                <td>description</td>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($voitures as $voiture)
                                <tr>
                                    <td><img src="{{$voiture->image}}" alt=""></td>
                                    <td>{{$voiture->id}}</td>
                                    <td>{{$voiture->matricule}}</td>
                                    <td>{{$voiture->modele}}</td>
                                    <td>{{$voiture->marque}}</td>
                                    <td>
                                        @if (strcmp($voiture->statut,"Available")==0)
                                            <span class="status green"></span> Available
                                        @elseif(strcmp($voiture->statut,"Malfunction")==0)
                                            <span class="status red"></span> Malfunction
                                            @elseif(strcmp($voiture->statut,"Rented")==0)
                                                <span class="status blue"> Rented
                                        @endif

                                    </td>
                                    {{-- <td>{{$voiture->statut}}</td> --}}
                                    <td>{{$voiture->carburant}}</td>
                                    <td>{{$voiture->boîte_vitesse}}</td>
                                    <td>{{$voiture->nombre_places}}</td>
                                    <td>{{$voiture->prix_jour}}</td>
                                    <td>{{$voiture->date_debut_assurance}}</td>
                                    <td>{{$voiture->date_fin_assurance}}</td>
                                    <td>{{$voiture->cout_assurance}}</td>
                                    <td>{{$voiture->description}}</td>
                                    <td class="edit-buttons" ><button><span class="las la-edit"></span></button><button><span class="las la-trash-alt"></span></button></td>


                                </tr>
                            @endforeach
                    </tbody>
                    @else
                    <thead>

                        <div style="width:100%;text-align: center;background-color:gainsboro;margin:10px 0px 10px 0px;padding:10px">Aucune voiture ici!</div>
                    </thead>
                    @endif
                </table>
            </div>
        </div>
    </div>
</div>
