@props(['employers'])

{{-- modify employer --}}


<div class="modify-container" id="modifyDiv">
    <div class="absolute-container" style="width: 80%">
        <div  class="add-form">
            <form method="POST" action=""  id="modifyEmployer">
                @csrf
                <div>
                    <label>First Name</label>
                    <input type="text" name="nom" required="" placeholder="first name">

                  </div>
                  <div>
                    <label>Last Name</label>

                    <input type="text" name="prenom" required="" placeholder="last name">
                  </div>
                  <div>
                    <label>CIN</label>
                    <input type="text" name="cin" required="" placeholder="cin">

                  </div>
                  <div>
                    <label>Post Number</label>
                    <input type="text" name="numero_post" required="" placeholder="Post number">
                  </div>
                  <div>
                    <label>Post Name</label>
                    <input type="text" name="libelle_post" required="" placeholder="Post Name ">
                  </div>
                  <div class="submit-buttons">
                    <input type="submit" name="" id="modify" value="Modify">
                    <button type="button"  id="closeBtn" >Cancel</button>
                  </div>
            </form>

        </div>
    </div>

</div>


{{-- add an employer --}}
<div class="add-container">
    <div  class="add-form">
        <form method="POST" action="{{ route('addEmployer') }}">
            @csrf
            <div>
                <label>First Name</label>
                <input type="text" name="nom" required="" placeholder="first name">

              </div>
              <div>
                <label>Last Name</label>

                <input type="text" name="prenom" required="" placeholder="last name">
              </div>
              <div>
                <label>CIN</label>
                <input type="text" name="cin" required="" placeholder="cin">

              </div>
              <div>
                <label>Post Number</label>
                <input type="text" name="numero_post" required="" placeholder="Post number">
              </div>
              <div>
                <label>Post Name</label>
                <input type="text" name="libelle_post" required="" placeholder="Post Name ">
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
            <h3>Our Employers</h3>
        </div>
        <div class="card-body">
            <div class="table-responsive" >
                <table width="100%" >

                        @if (!empty($employers))
                        <thead>
                            <tr>
                                <td>ID Employer</td>
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>CIN</td>
                                <td>Post Number</td>
                                <td>Post Name</td>
                                <td style="color: green;">Updating</td>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($employers as $employer)
                                <tr>
                                    <td>{{$employer->id}}</td>
                                    <td>{{$employer->nom}}</td>
                                    <td>{{$employer->prenom}}</td>
                                    <td>{{$employer->cin}}</td>
                                    <td>{{$employer->numero_post}}</td>
                                    <td>{{$employer->libelle_post}}</td>
                                    <td class="edit-buttons">
                                        <button id="modifyBtn"  data-employer-id="{{ $employer->id }}" ><span class="las la-edit"></span></button>
                                        <button id="deleteBtn" data-employer-id="{{ $employer->id }}"><span class="las la-trash-alt"></span></button>
                                    </td>


                                </tr>
                            @endforeach
                    </tbody>
                    @else
                    <thead>

                        <div style="width:100%;text-align: center;background-color:gainsboro;margin:10px 0px 10px 0px;padding:10px">no employer here!</div>
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
            <div class="desc">are you sure you want to delete this client?</div>
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
            you have successfully deleted<strong class="font__weight-semibold" style="margin: 0px 5px 0px 5px"> employer </strong>
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
      var employer_id = $(this).data('employer-id');
      console.log(employer_id);
      $('#deleteDialog').show();

      $('#deleteNo').click(function() {
        $('#deleteDialog').hide();
      });

      $('#closeBtn').click(function() {
        $('#deleteDialog').hide();
      });

      $('#deleteYes').click(function() {
          $('#deleteYes').attr('href', 'deleteEmployer/' + employer_id);
          $('#deleteDialog').hide();
          $('#alert_container').show();
          setTimeout(function() {
              $('#alert_container').hide();
          }, 4000);


      });
    });
    //************************

     //modify my order when i click on modify button
     $(document).on('click', '#modifyBtn', function() {

$('#modifyDiv').show();
var employer_id= $(this).data('employer-id');
console.log(employer_id);
$(document).on('click', '#modify', function() {
     $('#modifyEmployer').attr('action', '/employers/modify/' + employer_id);

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
