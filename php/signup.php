<?
    include_once('./header.php');
    
    $id            = $_POST['id'];
    $pw            = $_POST['pw'];
    $name          = $_POST['name'];
    $email         = $_POST['email'];
    $hp            = $_POST['hp'];
    $addr          = $_POST['addr'];
    $gender        = $_POST['gender'];
    $birth         = $_POST['birth'];
    $chooga_input  = $_POST['chooga_input'];
    $service       = $_POST['service'];

    
    $SQL = "INSERT INTO Kurly10_table10(id, pw, name, email, hp, addr, gender, birth, chooga_input, service) 
            VALUES('$id', '$pw', '$name', '$email', '$hp', '$addr', '$gender', '$birth', '$chooga_input','$service')";
    $RS = mysqli_query($CONN, $SQL);            

    if($RS==true){
        echo 1;
    }
    else {
        echo 0;
    }


?>