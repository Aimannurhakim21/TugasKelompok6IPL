<?php
    session_start();
    
    unset($_SESSION['username']);
    unset($_SESSION['nim']);
    unset($_SESSION['password']);
    header('location:index.html');
?>