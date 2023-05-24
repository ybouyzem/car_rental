<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login</title>
    <link rel="stylesheet" href="authentification.css">

</head>
<body id="word">
    <div class="login-box">
        <h2>Login</h2>
        <form method="POST" action="{{ route('login') }}">
            @csrf
          <div class="user-box">
            <input type="text" name="email" required="" >
            <label>Email</label>
          </div>
          <div class="user-box">
            <input type="password" name="password" required="" >
            <label>Password</label>
          </div>
          <div class="login-button">
            <input type="submit" value="Sign in">
          </div>
          {{-- <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>

          </a> --}}
        </form>
      </div>
</body>
</html>
