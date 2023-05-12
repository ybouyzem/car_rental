<input type="checkbox" id="nav-toggle">
    <div class="sidebar">
        <div class="sidebar-brand">
            <h2><span class="lab la-schlix"></span><span>Schlix</span></h2>
        </div>
        <div class="sidebar-menu">
            <ul>
                <li>
                    <a href="{{ route('index') }}" class="active"><span class="las la-igloo"></span>
                    <span>Tableau de bord</span></a>
                </li>
                <li>
                    <a href=""><span class="las la-clipboard-list"></span>
                    <span>Ordres</span></a>
                </li>
                <li>
                    <a href=""><span class="las la-users"></span>
                    <span>Clients</span></a>
                </li>
                <li>
                    <a href="{{ route('voitures') }}"><span class="la la-automobile"></span>
                    <span>Voitures</span></a>
                </li>
                <li>
                    <a href=""><span class="las la-user-tie"></span>
                    <span>Employés</span></a>
                </li>
            </ul>
        </div>
</div>
