<?php   
    require 'koneksi.php';
        $username = $_POST["username"];
        $password = $_POST["password"];

        $query_sql = "SELECT * FORM register
                    WHERE username = '$username' AND password = '$password'";

    $result = mysqli_query($conn, $query_sql);
    
    if(mysqli_num_rows($result) > 0){
        header("Location: halamanutama.html");
    }else{
        echo "<center><h1>Email atau Password Anda Salah. Silakan Coba Login Kembali.</h1>
                <button><strong><a href='index.html'>Login</a></strong></button></center>";
    }