<?php
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
if(!isset($_POST['submit'])) {
    exit("非法访问");
}
$password = $_POST['new-pas'];
$phone = $_POST['number'];
$pwd = $_POST['che-pas'];
//注册信息判断
//if(!preg_match('/^[\w\x80-\xff]{3,15}$/',$username)){
//    exit('错误：用户名不符合规则。<a href="javascript:history.back(-1);">返回</a>');
//}
//if(!preg_match('/^(\\+\\d{2}-)?(\\d{2,3}-)?([1][3,4,5,7,8][0-9]\\d{8})$/',$phone)){
//    exit('错误：手机号码不符合规则。<a href="javascript:history.back(-1);">返回</a>');
//}
//if(strlen($password)<6 && strlen($password)>12){
//    exit('错误：密码长度不符合规则。<a href="javascript:history.back(-1);">返回</a>');
//}
//    检查两个密码是否相同
if($password == $pwd){
//        判断用户名是否存在
    $che = "select phone from user where userphone = '$phone' limit 1";
    $result1 = $con->query($che);
    if($result1->num_rows > 0){
        echo '错误用户名',$phone,'已经存在。<a href="javascript:history.back(-1);">返回</a>';
        exit;
    }
//    $password = md5($password);
//    $pwd = md5($pwd);
    $sql = "INSERT INTO user(userphone,userpwd) VALUES('$phone','$password')";
    $result=mysqli_query($con,$sql);
    if($result){
        exit('恭喜你注册成功！点击跳转<a href="../example/login_in.html">返回</a>');
        mysqli_close($con);
    }else{
        echo '对不起，注册失败';
        echo '<a href="../example/login_register.html">重试</a>';
    }
}
else{
    echo '密码不一致，重新输入 <a href="javascript:history.back(-1);">返回</a>';
}
?>

?>