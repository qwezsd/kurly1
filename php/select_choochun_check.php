<?
    include_once('./header.php');

    // 조회 서비스
    $ID = $_POST['id'];

    $SQL = "SELECT * FROM kurly10_table1 WHERE id='$ID'";
    $RS = mysqli_query($CONN, $SQL);

    if(mysqli_num_rows($RS)>=1){
        echo 1;
    }
    else {
        echo 0;
    }
?>