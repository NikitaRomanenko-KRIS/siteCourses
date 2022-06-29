<?php
header('Content-Type: text/html; charset=utf-8');
//записываем данные с формы в переменные
$name=$_POST["name"];
$phone=$_POST["tel"];
$email=$_POST["email"];
$message=$_POST["message"];
//декодируем спец символы
$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$email = htmlspecialchars($email);
$message = htmlspecialchars($message);
//декодируем url
$name = urldecode($name);
$phone = urldecode($phone);
$email = urldecode($email);
$message = urldecode($message);
//убираем лишние пробелы
$name = trim($name);
$phone = trim($phone);
$email = trim($email);
$message = trim($message);

$mes = "Имя: $name \nТелефон: $phone \nE-mail: $email \nТема:Обратная связь \nТекст: $message";

$send = mail("rttspawn@gmail.com", "Обратная связь", $mes, "Content-type:text/plain; charset = UTF-8\r\nFrom:$email");
//функция отправки на почту
// mail("rttspawn@gmail.com", "Сообщение с сайта", "Имя:".$name ,"Телефон".$phone ,"E-mail: ".$email ,"Сообщение:".$message ,"From: mr.kekro@mail.ru \r\n");
if ($send == 'true')
 {
    echo "<script>alert('Сообщение успешно отправленно!')</script>";
} else {
    echo "<script>alert('Ошибка! Сообщение не отправленно.')</script>";
}
?>