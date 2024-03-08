<?

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-header: *");

    $DB_SERVER ="localhost";
    $DB_USER_NAME ="qwefg";
    $DB_USER_PW ="pollution97!";
    $DB_NAME ="qwefg";
    $CONN = mysqli_connect($DB_SERVER, $DB_USER_NAME, $DB_USER_PW, $DB_NAME);

    mysqli_set_charset($CONN, "utf8");


?>