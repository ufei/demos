var exec = require('child_process').exec;
/*cmd = './main';*/

cmd='./test_deploytool_no_main/test_add/for_testing/test_add 1 16';

exec(cmd,function callback(error,stdout,stderr){

	var data = stdout;

	console.log("ok");
	console.log(data);
});