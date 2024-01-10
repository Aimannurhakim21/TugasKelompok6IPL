<?php   
    require 'koneksi.php';

    $nim = $_POST["nim"];
    $name = $_POST["name"];
    $username = $_POST["username"];
    $password = $_POST["password"];

    $query_sql = "INSERT INTO register (nim, name, username, password)
                    VALUES ('$nim', '$name', '$username', '$password')";

    if(mysqli_query($conn, $query_sql)){
        header("Location: index.html");
        exit();
    } else {
        echo "Pendaftaran Gagal : ". mysqli_error($conn);
    }
?>
