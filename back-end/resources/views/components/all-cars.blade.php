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
                                    <td><img src="/cars_pics/{{$voiture->image}}" alt="" style="widows: 80px;height:60px"></td>
                                    <td>{{$voiture->id}}</td>
                                    <td>{{$voiture->matricule}}</td>
                                    <td>{{$voiture->modele}}</td>
                                    <td>{{$voiture->marque}}</td>
                                    <td>
                                        @if (strcmp($voiture->statut,"Available")==0)
                                            <span class="status green"></span>Available
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
                                    <td>{{$voiture->prix_jour.' DH'}} </td>
                                    <td>{{$voiture->date_debut_assurance}}</td>
                                    <td>{{$voiture->date_fin_assurance}}</td>
                                    <td>{{$voiture->cout_assurance.' DH'}}</td>
                                    <td>{{$voiture->description}}</td>
                                    <td class="edit-buttons" >
                                        <button id="modifyBtn"><span class="las la-edit"></span></button>
                                        <button id="deleteBtn" data-car-id="{{ $voiture->id }}"><span class="las la-trash-alt"></span></button>
                                    </td>


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
<div id="deleteDialog" class="dialog">
    <div  class="card">
        <div class="icon">
            <img src="/icons/warning.png" alt="">
        </div>
        <div class="content">
            <span class="title">warning!</span>
            <div class="desc">êtes-vous sûr de vouloir supprimer ce voiture ?</div>
            <div class="actions">
                <div>

                    <a href="" class="yes" id="deleteYes">Oui</a>
                </div>
                <div>
                    <a href="#" class="no" id="deleteNo">Non</a>
                </div>
            </div>
        </div>
        <button type="button" class="close" id="closeBtn">
            <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
    </div>
</div>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
      $('#deleteDialog').hide();

$(document).ready(function() {
  // Hide the delete dialog on page load
  $('#deleteDialog').hide();

  $(document).on('click', '#deleteBtn', function() {
    var car_id = $(this).data('car-id');
    console.log('Car ID:', car_id);
    $('#deleteDialog').show();

    $('#deleteNo').click(function() {
      $('#deleteDialog').hide();
    });

    $('#closeBtn').click(function() {
      $('#deleteDialog').hide();
    });

    $('#deleteYes').click(function() {
        $('#deleteYes').attr('href', 'deleteCar/' + car_id);

      $('#deleteDialog').hide();

    });
  });
});


</script>

