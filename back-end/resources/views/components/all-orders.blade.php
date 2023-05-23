
@props(['orders','cars'])

<div class="modify-container" id="modifyDiv">
    <div class="absolute-container" style="width: 80%">
        <div  class="add-form">
            <form method="POST" action="" id="modifyOrder">
                @csrf
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstName" required="" placeholder="first name">

                  </div>
                  <div>
                    <label>Last Name</label>

                    <input type="text" name="lastName" required="" placeholder="last name">
                  </div>
                  <div>
                    <label>Phone Number</label>

                    <input type="number" name="phoneNumber" required="" placeholder="phone number">
                  </div>
                  <div>
                    <label>Drive License</label>

                    <input type="number" name="driveLicense" required="" placeholder="drive license">
                  </div>
                  <div>
                    <label>Email</label>

                    <input type="email" name="email" required="" placeholder="email">
                  </div>
                  <div>
                    <label>city</label>
                    <input type="text" name="city" required="" placeholder="city">
                  </div>
                  <div>
                    <label>nationality</label>
                    <input type="text" name="nationality" placeholder="nationality">
                  </div>
                  <div>
                    <label>Passport Number</label>
                    <input type="number" name="passportNumber"  placeholder="passport number">
                  </div>
                  <div>
                    <label>Rental Date</label>
                    <input type="date" name="rentalDate"  placeholder="Rental date">
                  </div>
                  <div>
                    <label>Return Date</label>
                    <input type="date" name="returnDate"  placeholder="Return date">
                  </div>
                  <div>
                    <label for="">Car</label>
                    <select name="car_id" id="cars-selector" required="">
                        @foreach ($cars as $car)
                            <option value="{{$car->id}}">{{$car->id}} | {{$car->marque}} | {{$car->modele}}</option>
                        @endforeach
                    </select>
                  </div>
                  <div class="submit-buttons">
                    <input type="submit" name="" id="modify" value="Modify">
                    <button type="button"  id="closeBtn" >Cancel</button>
                  </div>
            </form>

        </div>
    </div>

</div>

{{-- for adding an order --}}
<div class="add-container">
    <div  class="add-form">
        <form method="POST" action="{{ route('addOrder') }}">
            @csrf
            <div>
                <label>First Name</label>
                <input type="text" name="firstName" required="" placeholder="first name">

              </div>
              <div>
                <label>Last Name</label>

                <input type="text" name="lastName" required="" placeholder="last name">
              </div>
              <div>
                <label>Phone Number</label>

                <input type="number" name="phoneNumber" required="" placeholder="phone number">
              </div>
              <div>
                <label>Drive License</label>

                <input type="number" name="driveLicense" required="" placeholder="drive license">
              </div>
              <div>
                <label>Email</label>

                <input type="email" name="email" required="" placeholder="email">
              </div>
              <div>
                <label>city</label>
                <input type="text" name="city" required="" placeholder="city">
              </div>
              <div>
                <label>nationality</label>
                <input type="text" name="nationality" placeholder="nationality">
              </div>
              <div>
                <label>Passport Number</label>
                <input type="number" name="passportNumber"  placeholder="passport number">
              </div>
              <div>
                <label>Rental Date</label>
                <input type="date" name="rentalDate"  placeholder="Rental date">
              </div>
              <div>
                <label>Return Date</label>
                <input type="date" name="returnDate"  placeholder="Return date">
              </div>
              <div>
                <label for="">Car</label>
                <select name="car_id" id="cars-selector" required="">
                    @foreach ($cars as $car)
                        <option value="{{$car->id}}">{{$car->id}} | {{$car->marque}} | {{$car->modele}}</option>
                    @endforeach
                </select>
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
            <h3>Our Orders</h3>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table width="100%" id="myTable">

                        @if (!empty($orders))
                        <thead>


                            <tr>
                                <td>Client Id</td>
                                <td>User Id</td>
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>Phone №</td>
                                <td>Drive License №</td>
                                <td>Email</td>
                                <td>City</td>
                                <td>passport №</td>
                                <td>Cars Id</td>
                                <td>Car №</td>
                                <td style="color:darkgreen" colspan="2">Updating</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style="visibility: hidden" >
                                <td class="order_buttons" id="updatingBefore0">

                                </td>
                            </tr>
                            @php
                                $i=0 ;
                            @endphp
                            @foreach ($orders as $order)
                            @php
                            $i ++ ;
                            @endphp
                            <tr>
                                <td>{{$order->client_id}}</td>
                                <td>{{$order->id_utilisateur}}</td>
                                <td>{{$order->nom}}</td>
                                <td>{{$order->prenom}}</td>
                                <td>{{$order->numero_telephone}}</td>
                                <td>{{$order->numero_permis}}</td>
                                <td>{{$order->email}}</td>
                                <td>{{$order->ville}}</td>
                                <td>{{$order->numero_passport}}</td>
                                <td>{{$order->id_voiture}}</td>
                                <td>{{$order->matricule}}</td>
                                <td>
                                    <button id="modifyBtn" data-order-id="{{ $order->order_id }}"  class="modifyBtnOrder"><span class="las la-edit"></span></button>
                                </td>
                                @if(isset($order->reservation_verifie_le))
                                        <td id="updatingAfter"><span class="lar la-check-circle"></span><button id="declineBtn"  data-order-id="{{ $order->order_id }}"><span class="las la-trash-alt"></span></button></td>
                                        @else
                                <td class="order_buttons">
                                    <button id="acceptBtn" data-order-id="{{ $order->order_id }}" ><span class="las la-check"></span><span>Accept</span></button>
                                    <button id="declineBtn"  @isset($order) data-order-id="{{ $order->order_id }}" @endisset><span class="las la-ban"></span><span>Decline</span></button>

                                </td>
                                @endif
                            </tr>
                            @endforeach
                    </tbody>
                    @else
                    <thead>
                        <div style="width:100%;text-align: center;background-color:gainsboro;margin:10px 0px 10px 0px;padding:10px">No Ordre here!</div>
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
            <div class="desc">are you sure you want to delete this order?</div>
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
            you have successfully deleted<strong class="font__weight-semibold" style="margin: 0px 5px 0px 5px"> Order </strong>
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
        //modify my order when i click on modify button
        $(document).on('click', '#modifyBtn', function() {

            $('#modifyDiv').show();
            var order_id= $(this).data('order-id');
            console.log(order_id);
            $(document).on('click', '#modify', function() {
                $('#modifyOrder').attr('action', '/orders/modify/' + order_id);

            });

        });
        //******************

        //hide the modify container when i click on Cancel Button
        $(document).on('click', '#closeBtn', function() {
            $('#modifyDiv').hide();
        });
        //***********************



        //when i click on accept button, to accept my order
        $(document).on('click', '#acceptBtn', function(){
            var order_id= $(this).data('order-id');
            console.log(order_id);
            window.location.href="/orders/accept/" + order_id;
        });

        //************

    });








    //this when i click on decline button to remove my order
        $(document).on('click', '#declineBtn', function() {
            var order_id = $(this).data('order-id');
            var checked_id= $(this).data('check-id');

            console.log('Order ID:', order_id);
            $('#deleteDialog').show();

            $('#deleteNo').click(function() {
                $('#deleteDialog').hide();
            });

            $('#closeBtn').click(function() {
                $('#deleteDialog').hide();
            });

            $('#deleteYes').click(function() {
                $('#deleteYes').attr('href', 'orders/' + order_id);
                $('#deleteDialog').hide();


            //   .each(storedArray, function( index,value){
            //         if(value==checked_id){
            //             array.splice(index, 1);
            //         }
            //     });
            //     console.log("yes"+array);
                $('#alert_container').show();
                setTimeout(function() {
                    $('#alert_container').hide();
                }, 70000);
            });
        });


</script>
