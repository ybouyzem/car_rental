<input type="checkbox" id="nav-toggle">
<div class="sidebar">
    <div class="sidebar-brand">
        <h2><img src="/logo.png" style="width:35px;height:35px;"><span>Car Rental</span></h2>
    </div>
    <div class="sidebar-menu">
        <ul>
            <li>
                <a href="{{ route('index') }}" class="list{{ request()->routeIs('index') ? ' active' : '' }}"><span class="las la-igloo"></span>
                <span>Dashboard</span></a>
            </li>
            <li>
                <a href="{{ route('orders') }}" class="list{{ request()->routeIs('orders') ? ' active' : '' }}" class="list"><span class="las la-clipboard-list"></span>
                <span>Orders</span></a>
            </li>
            <li>
                <a href="{{ route('clients') }}" class="list{{ request()->routeIs('clients') ? ' active' : '' }}"><span class="las la-users"></span>
                <span>Clients</span></a>
            </li>
            <li>
                <a href="{{ route('cars') }}" class="list{{ request()->routeIs('cars') ? ' active' : '' }}"><span class="la la-automobile"></span>
                <span>Cars</span></a>
            </li>
            <li>
                <a href="{{route('employers')}}"class="list{{ request()->routeIs('employers') ? ' active' : '' }}"><span class="las la-user-tie"></span>
                <span>Employers</span></a>
            </li>
            <li>
                <a href="{{route('admins')}}" class="list{{ request()->routeIs('admins') ? ' active' : '' }}"><span class="las la-user-shield"></span>
                <span>Admins</span></a>
            </li>
            <li>
                <a  href="{{route('authentification')}}" class="list{{ request()->routeIs('authentification') ? ' active' : '' }}"><span class="las la-sign-out-alt" ></span>
                <span>Log out</span></a>
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
