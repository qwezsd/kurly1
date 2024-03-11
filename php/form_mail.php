<?
$db_server          = 'localhost';
$db_user_name       = 'qwedf';
$db_user_pw         = 'pollution97!';
$db_name            = 'qwefg';

$conn = mysqli_connect($db_server, $db_user_name, $db_user_pw,
$db_name);
$mysqli_set_charset($conn, "utf8");

$name = $_POST['name'];
$email = $_POST['email'];
$guests = $_POST['guests'];
$event = $_POST['event'];


$sql = "INSERT INTO Kurly10_table10(이름, 이메일, 게스트, 이벤트)
        VALUES ('$name', '$email', '$guests','$event')";
mysqli_query($conn, $sql)

?>