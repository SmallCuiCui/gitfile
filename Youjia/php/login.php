<?php
/**
 * Created by PhpStorm.
 * User: ul.summer
 * Date: 2019/4/20
 * Time: 18:59
 */
$con = mysqli_connect("localhost:3306","root","123456");
mysqli_set_charset($con,'utf8');
if (!mysqli_select_db($con,'youjia')) {
    echo 'error('.mysqli_errno($con).'):'.mysqli_error($con);
    mysqli_close($con);
    die;
}
if(!$con){
    exit('error('.mysqli_connect_errno().'):'.mysqli_connect_error());
}
if(!isset($_GET['submit'])){
    exit('非法访问');
}
$username = $_GET['username'];
$userpwd = $_GET['password'];

//    进行用户名和密码判断
$che = "select * from user where userphone = '$username' limit 1";
$result = $con->query($che);
if ($result->num_rows>0){
//        登录成功
    $pwd = "select userpwd from user where userpwd = '$userpwd' limit 1";
    $result1 = $con->query($pwd);
    if($result1->num_rows>0){
        echo "登录成功";
    }
    else{
        echo "登录失败";
    }
}
else{
    echo "登录失败";
}
