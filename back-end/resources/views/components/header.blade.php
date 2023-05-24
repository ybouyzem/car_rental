@props(['title','employee'])
<header>
    <h2>
        <label for="nav-toggle">
            <span class="las la-bars" style="cursor: pointer;"></span>
        </label>
        {{$title}}
    </h2>
    {{-- <div class="search-wrapper">
        <span class="las la-search"></span>
        <input type="search" placeholder="cherchez ici">
    </div> --}}
    <div class="user-wrapper">
        <img src="icons/user.png" width="40px" height="40px" alt="" style="background: seagreen">
        <div>
            {{-- <h4>{{$employee->nom}} {{$employee->prenom}}</h4>
            <small>{{$employee->libelle_post}}</small> --}}
        </div>
    </div>
</header>
