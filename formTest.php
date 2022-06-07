<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="description" content="Form Output">
    <meta name="author" content="Raul Bercea">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Submitted Data</h1>
    <table border="1">
    <?php

        // Getting the data from the post global variable and printing in as a table
        foreach($_POST as $key => $data){
            echo '<tr><td>'.$key .'</td> <td>'. $data . '</td></tr>';
        }
    ?>
    </table>

</body>
</html>
