@props(['cars','clients','reservations','employers','income'])
<div class="cards">
    <div class="card-single">
        <div>
            <h2>{{$employers}}</h2>
            <span>Employés</span>
        </div>
        <div>
            <span class="las la-user-tie"></span>
        </div>
    </div>
    <div class="card-single">
        <div>
            <h2>{{$reservations}}</h2>
            <span>Ordres</span>
        </div>
        <div>
            <span class="las la-clipboard-list"></span>
        </div>
    </div>
    <div class="card-single">
        <div>
            <h2>{{$clients}}</h2>
            <span>Clients</span>
        </div>
        <div>
            <span class="las la-users"></span>
        </div>
    </div>
    <div class="card-single">
        <div>
            <h2>{{$cars}}</h2>
            <span>Voitures</span>
        </div>
        <div>
            <span class="la la-automobile"></span>
        </div>
    </div>
    <div class="card-single">
        <div>
            <h2>{{$icome}} </h2>
            <span>Revenu</span>
        </div>
        <div>
            <span class="la la-google-wallet"></span>
        </div>
    </div>
</div>
