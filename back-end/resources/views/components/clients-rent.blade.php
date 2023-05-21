@props(['voitures'])
<div class="clients">
    <div class="card">
        <div class="card-header">
            <h3>customers who rent</h3>
            <a href="{{ route('clients') }}"><button>see all <span class="las la la-arrow-right"></span> </button></a>
        </div>
        <div class="card-body">
            @if (!empty($voitures))
            @foreach ($voitures as $voiture)
            <div class="client">

                    <div class="info">
                        <img src="/icons/customer.png" width="35px" height="35px" alt="">
                        <div>
                            <h6>{{$voiture->client_id}}</h6>
                            <h4>{{$voiture->nom}} {{$voiture->prenom}}</h4>
                            <h5>{{$voiture->numero_telephone}}</h5>
                            <small>{{$voiture->email}}</small>
                        </div>
                    </div>
                    <div class="contact">
                        <span class="las la-user-circle"></span>
                         <span class="las la-comment"></span>
                         <span class="las la-phone"></span>
                    </div>
            </div>
            @endforeach
            @else
                <div class="client"><div class="info" style="width:100%;text-align: center;background-color:gainsboro;margin:10px 0px 10px 0px;padding:10px">aucun client ne loue actuellement</div></div>
            @endif
        </div>
    </div>
</div>
