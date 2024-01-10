<?php   
    require 'koneksi.php';
        $username = $_POST["username"];
        $nim = $_POST["nim"];
        $password = $_POST["password"];

        $query_sql = "SELECT * FROM register
                    WHERE username = '$username' AND nim = '$nim' AND password = '$password'";

    $result = mysqli_query($conn, $query_sql);
    
    if(mysqli_num_rows($result) > 0){
        header("Location: halamanutama.html");
        exit();
    }else{
        echo "<center><h1>Username atau Password Anda Salah. Silakan Coba Login Kembali.</h1>
                <button><strong><a href='index.html'>Login</a></strong></button></center>";
    }