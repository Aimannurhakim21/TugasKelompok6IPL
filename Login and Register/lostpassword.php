<?php

require 'koneksi.php';
    $nim = $_POST["nim"];

    $query = "SELECT * FROM register WHERE nim = '$nim'";
    $result = mysqli_query($conn, $query);

    if ($result) {
        if (mysqli_num_rows($result) > 0) {

            echo "Password reset instructions have been sent to your email.";
            header("Refresh: 3; URL=index.html");
            exit();
        } else {
            echo "NIM not found. Please enter a valid NIM.";
        }
    } else {
        echo "Error: " . mysqli_error($conn);
    }
?>
