/**
 * Created by ufei on 2016/8/2.
 */
/*
* 2. 判题系统的输入输出
 2.1 对于<剑指Offer>这种有函数定义的题目，你只要完成函数，返回相关的值就可以，不需要处理任何输入输出，不要在函数里输出任何东西。
 2.2 对于传统ACM的OJ模式题目，你的程序需要stdin（标准输入）读取输入，然后stdout（标准输出）来打印结果，举个例子，你可以使用c语言的scanf或者c++的cin来读取输入，然后使用c语言的printf或者c++的cout来输出结果。代码禁止读取和写入任何文件，否则判题系统将会返回运行错误。OJ一次处理多个case，所以代码需要循环处理，一般通过while循环来出来多个case。以下是A+B题目的样例代码，http://www.nowcoder.com/questionTerminal/dae9959d6df7466d9a1f6d70d6a11417
 C 64位输出请用printf("%lld")

 ---------------------
 JAVA，注意类名必须为Main, 不要有任何package xxx信息
 import java.util.Scanner;
 public class Main {
 public static void main(String[] args) {
 Scanner in = new Scanner(System.in);
 while (in.hasNextInt()) {//注意while处理多个case
 int a = in.nextInt();
 int b = in.nextInt();
 System.out.println(a + b);
 }
 }
 }

 -------------------------
 JavaScript
 var readline = require('readline');
 const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
 });
 rl.on('line', function(line){
 var tokens = line.split(' ');
 console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
 });


 计算a+b的和

 每行包行两个整数a和b
 对于每行输入对应输出一行a和b的和
 输入
 1 5
 输出
 6
* */
