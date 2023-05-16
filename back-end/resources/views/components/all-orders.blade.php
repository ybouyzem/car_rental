
@props(['orders'])

<div></div>
<div class="voitures">
    <div class="card">
        <div class="card-header">
            <h3>Nos Ordres</h3>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table width="100%">

                        @if (!empty($orders))
                        <thead>


                            <tr>
                                <td>Id Client</td>
                                <td>Id utilisateur</td>
                                <td>Nom</td>
                                <td>Prenom</td>
                                <td>Numero de telephone</td>
                                <td>Numero de permis</td>
                                <td>Email</td>
                                <td>Ville</td>
                                <td>Numero de passport</td>
                                <td>Matricule Voiture</td>
                                <td>Updating</td>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($orders as $order)
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>
                                    <button id="acceptBtn"><span class="las la-check">Accepter</span></button>
                                    <button id="declineBtn" data-order-id="{{ $order->id }}"><span class="las la-ban">Déclin</span></button>
                                </td>
                            </tr>
                            @endforeach
                    </tbody>
                    @else
                    <thead>
                        <div style="width:100%;text-align: center;background-color:gainsboro;margin:10px 0px 10px 0px;padding:10px">Aucun Ordre ici!</div>
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
            <div class="desc">êtes-vous sûr de vouloir supprimer ce client ?</div>
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
<div class="alert-section" id="alert_container">
    <div class="container mt-5">
        <div class="col-sm-12">
          <div class="alert fade alert-simple alert-success alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show">
            <i class="start-icon far fa-check-circle faa-tada animated"></i>
            <strong class="font__weight-semibold">vous avez supprimez votre client avec succès !</strong>
          </div>
        </div>

    </div>
  </div>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
      $('#deleteDialog').hide();
      $('#alert_container').hide();

$(document).ready(function() {
  // Hide the delete dialog on page load
  $('#deleteDialog').hide();

  $(document).on('click', '#declineBtn', function() {
    var client_id = $(this).data('order-id');
    console.log('Order ID:', order_id);
    $('#deleteDialog').show();

    $('#deleteNo').click(function() {
      $('#deleteDialog').hide();
    });

    $('#closeBtn').click(function() {
      $('#deleteDialog').hide();
    });

    $('#deleteYes').click(function() {
        $('#deleteYes').attr('href', 'deleteUserClient/' + order_id);
        $('#deleteDialog').hide();
        $('#alert_container').show();
        setTimeout(function() {
            $('#alert_container').hide();
        }, 2000);


    });
  });
});


</script>
