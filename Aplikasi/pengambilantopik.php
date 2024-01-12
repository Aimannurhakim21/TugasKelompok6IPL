<?php   
    require 'koneksi.php';
    $name = $_POST["name"];
    $nim = $_POST["nim"];
    $email = $_POST["email"];
    $judul = $_POST["judul"];
    $deskripsi = $_POST["deskripsi"];

    $query_sql = "INSERT INTO judul (name, nim, email, judul, deskripsi)
                    VALUES ('$name', '$nim', '$email', '$judul', '$deskripsi')";

    if(mysqli_query($conn, $query_sql)){
        header("Location: Pengambilantopik.html");
        exit();
    } else {
        echo "Pendaftaran Gagal : ". mysqli_error($conn);
    }
?>
