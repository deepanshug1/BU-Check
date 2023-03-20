<?php
    $name= $_POST['name'];
    $con= $_POST['con'];
    $mail= $_POST['mail'];


    $conn = new mysqli('localhost','root','','bennett');
    if($conn->connect_error){
        die('Connection failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into register(name, con, mail) values(?,?,?)");
        $stmt->bind_param("sis",$name,$con,$mail);
        $stmt->execute();
        echo "registeration successful";
        $stmt->close();
        $conn->close();
    }
?>