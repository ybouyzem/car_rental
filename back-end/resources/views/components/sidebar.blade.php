<input type="checkbox" id="nav-toggle">
<div class="sidebar">
    <div class="sidebar-brand">
        <h2><img src="/logo.png" style="width:35px;height:35px;"><span>Car Rental</span></h2>
    </div>
    <div class="sidebar-menu">
        <ul>
            <li>
                <a href="{{ route('index') }}" class="list{{ request()->routeIs('index') ? ' active' : '' }}"><span class="las la-igloo"></span>
                <span>Tableau de bord</span></a>
            </li>
            <li>
                <a href="{{ route('ordres') }}" class="list{{ request()->routeIs('ordres') ? ' active' : '' }}" class="list"><span class="las la-clipboard-list"></span>
                <span>Ordres</span></a>
            </li>
            <li>
                <a href="{{ route('clients') }}" class="list{{ request()->routeIs('clients') ? ' active' : '' }}"><span class="las la-users"></span>
                <span>Clients</span></a>
            </li>
            <li>
                <a href="{{ route('voitures') }}" class="list{{ request()->routeIs('voitures') ? ' active' : '' }}"><span class="la la-automobile"></span>
                <span>Voitures</span></a>
            </li>
            <li>
                <a href="" class="list"><span class="las la-user-tie"></span>
                <span>Employés</span></a>
            </li>
        </ul>
    </div>
</div>

<script>
    let lists = document.querySelectorAll('.list');
    for (let i = 0; i < lists.length; i++) {
        lists[i].addEventListener('click', function() {
            let current = document.querySelector('.active');
            if (current) {
                current.classList.remove('active');
            }
            this.classList.add('active');
        });
        lists[i].addEventListener('mouseover', function() {
            let current = document.querySelector('.hover');
            if (current) {
                current.classList.remove('hover');
            }
            this.classList.add('hover');
        });
        lists[i].addEventListener('mouseout', function() {
            this.classList.remove('hover');
        });
    }
</script>
