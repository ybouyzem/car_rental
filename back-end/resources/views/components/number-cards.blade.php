@props(['cars','clients','reservations','employers','income'])
<div class="cards">
    <div class="card-single">
        <div>
            <h2>{{$employers}}</h2>
            <span>Employers</span>
        </div>
        <div>
            <span class="las la-user-tie"></span>
        </div>
    </div>
    <div class="card-single">
        <div>
            <h2>{{$reservations}}</h2>
            <span>Orders</span>
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
            <span>Cars</span>
        </div>
        <div>
            <span class="la la-automobile"></span>
        </div>
    </div>
    <div class="card-single">
        <div>
            <h2>{{$income}} </h2>
            <span>Income</span>
        </div>
        <div>
            <span class="la la-google-wallet"></span>
        </div>
    </div>
</div>
