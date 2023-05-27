@props(['voitures'])


<div class="modify-container" id="modifyDiv">
    <div class="absolute-container" style="width: 80%">
        <div  class="add-form">
            <form method="POST" action="" id="modifyCar">
                @csrf
                <div>
                    <label>Image</label>
                    <input type="file" name="image">
                  </div>
                  <div>
                    <label>Car Number</label>
                    <input type="text" name="matricule" required="" placeholder="car number">
                  </div>
                  <div>
                    <label>Model</label>
                    <input type="text" name="model" required="" placeholder="model">
                  </div>
                  <div>
                    <label>Brand</label>

                    <input type="text" name="marque" required="" placeholder="brand">
                  </div>
                  <div>
                    <label>Fuel</label>

                    <input type="text" name="carburant" required="" placeholder="fuel">
                  </div>
                  <div>
                    <label>Gearbox</label>
                    <input type="text" name="gearbox" required="" placeholder="gearbox">
                  </div>
                  <div>
                    <label>Seats Number</label>
                    <input type="number" name="seatsNumber" placeholder="seats number">
                  </div>
                  <div>
                    <label>Price Per Day</label>
                    <input type="number" name="prix"  placeholder="price per day">
                  </div>
                  <div>
                    <label for="">Status</label>
                            <select name="status" id="cars-selector" required="">
                                <option value="Available">Available</option>
                                <option value="Rented">Rented</option>
                                <option value="Malfunction">Malfunction</option>
                            </select>
                  </div>
                  <div>
                    <label>Insurance Start Date</label>
                    <input type="date" name="insurranceSD"  placeholder="Insurance strat date">
                  </div>
                  <div>
                    <label>Insurance End Date</label>
                    <input type="date" name="insurranceED"  placeholder="insurrance end date">
                  </div>
                  <div>
                    <label for="">Insurrance Cost</label>
                    <input type="number" name="insurranceCost" placeholder="insurrance cost">
                  </div>
                  <div>
                    <label for="">Description</label>
                    <input type="text" name="description" placeholder="description">
                  </div>
                  <div class="submit-buttons">
                    <input type="submit"  id="modify" value="Modify">
                    <button type="button"  id="closeBtn" >Cancel</button>
                  </div>
            </form>
        </div>
    </div>

</div>
{{-- this form to add a car --}}

<div class="add-container">
<div  class="add-form">
    <form method="POST" action="{{ route('addCar') }}">
        @csrf
        <div>
            <label>Image</label>
            <input type="file" name="image">
          </div>
          <div>
            <label>Car Number</label>
            <input type="number" name="matricule" required="" placeholder="car number">
          </div>
          <div>
            <label>Model</label>
            <input type="text" name="model" required="" placeholder="model">
          </div>
          <div>
            <label>Brand</label>

            <input type="text" name="marque" required="" placeholder="brand">
          </div>
          <div>
            <label>Fuel</label>

            <input type="text" name="carburant" required="" placeholder="fuel">
          </div>
          <div>
            <label>Gearbox</label>
            <input type="text" name="gearbox" required="" placeholder="gearbox">
          </div>
          <div>
            <label>Seats Number</label>
            <input type="number" name="seatsNumber" placeholder="seats number">
          </div>
          <div>
            <label>Price Per Day</label>
            <input type="number" name="prix"  placeholder="price per day">
          </div>
          <div>
            <label>Insurance Start Date</label>
            <input type="date" name="insurranceSD"  placeholder="Insurance strat date">
          </div>
          <div>
            <label>Insurance End Date</label>
            <input type="date" name="insurranceED"  placeholder="insurrance end date">
          </div>
          <div>
            <label for="">Insurrance Cost</label>
            <input type="number" name="insurranceCost" placeholder="insurrance cost">
          </div>
          <div>
            <label for="">Description</label>
            <input type="text" name="description" placeholder="description">
          </div>
          <div class="submit-buttons">
            <input type="submit" id="" value="Add">
            <button type="button"  id="closeBtn" >Cancel</button>
          </div>
    </form>

</div>
</div>

<div class="voitures">
    <div class="card">
        <div class="card-header">
            <h3>Our Cars</h3>
        </div>
        <div class="card-body">
            <div class="table-responsive" >
                <table width="100%" >

                        @if (!empty($voitures))
                        <thead>
                            <tr>
                                <td>Image</td>
                                <td>Car Id</td>
                                <td>№</td>
                                <td>Model</td>
                                <td>Brand</td>
                                <td>Status</td>
                                <td>Fuel</td>
                                <td>Gearbox</td>
                                <td>Seats №</td>
                                <td>Price per day</td>
                                <td>Insurance start date</td>
                                <td>Insurance end date</td>
                                <td>Insurance cost</td>
                                <td>Description</td>
                                <td style="color: green;">Updating</td>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($voitures as $voiture)
                                <tr>
                                    <td><img src="/cars_pics/{{$voiture->image}}" alt="car image" style="width: 80px;height:60px"></td>
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
                                    <td class="edit-buttons">
                                        <button id="modifyBtn"  data-car-id="{{ $voiture->id }}" ><span class="las la-edit"></span></button>
                                        <button id="deleteBtn" data-car-id="{{ $voiture->id }}"><span class="las la-trash-alt"></span></button>
                                    </td>


                                </tr>
                            @endforeach
                    </tbody>
                    @else
                    <thead>

                        <div style="width:100%;text-align: center;background-color:gainsboro;margin:10px 0px 10px 0px;padding:10px">No car here!</div>
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
            <div class="desc">are you sure you want to delete this car?</div>
            <div class="actions">
                <div>

                    <a href="" class="yes" id="deleteYes">Yes</a>
                </div>
                <div>
                    <a href="#" class="no" id="deleteNo">No</a>
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
            you have successfully deleted your <strong class="font__weight-semibold" style="margin: 0px 5px 0px 5px"> car </strong>
          </div>
        </div>

    </div>
  </div>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
      $('#deleteDialog').hide();
      $('#alert_container').hide();
      $('#modifyDiv').hide();

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
      $('#alert_container').show();
        setTimeout(function() {
            $('#alert_container').hide();
        }, 70000);

    });
  });


    //modify my order when i click on modify button
    $(document).on('click', '#modifyBtn', function() {
        $('#modifyDiv').show();
        var car_id= $(this).data('car-id');
        console.log(car_id);
        $(document).on('click', '#modify', function() {
            $('#modifyCar').attr('action', '/cars/modify/' + car_id);
        });

    });
    //******************

    //hide the modify container when i click on Cancel Button
    $(document).on('click', '#closeBtn', function() {
        $('#modifyDiv').hide();
    });
    //***********************

});


</script>

