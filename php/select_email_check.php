<?
    include_once('./header.php');

    // 조회 서비스
    $EMAIL = $_POST['email'];

    $SQL = "SELECT * FROM Kurly10_table10 WHERE email='$EMAIL'";
    $RS = mysqli_query($CONN, $SQL);

    if(mysqli_num_rows($RS)>=1){
        echo 1;
    }
    else {
        echo 0;
    }
?>