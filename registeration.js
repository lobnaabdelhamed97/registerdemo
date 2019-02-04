var map={}
$(document).ready(function() {
    $("#register").click(function() {
    var name = $("#name").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var cpassword = $("#cpassword").val();
    if (name == '' || email == '' || password == '' || cpassword == '') {
    alert("Please fill all fields");
    } else if ((password.length) < 8) {
    alert("Password should atleast 8 character in length");
    } else if (!(password).match(cpassword)) {
    alert("Your passwords don't match. Try again?");
    } 
    else if ((email.indexOf("@", 0) < 0) || (email.indexOf(".", 0) < 0) )
    {
        alert ("please enter a valid email");
    }
        else {


            
console.log("successful registeration");

map[name] = password;
    for (var i in map)
    {
    if (map.hasOwnProperty(i)) {
        console.log('name: ' + i + ' password: ' + map[i]);
    }
}
//var fs = require('fs');  //undefined require!!!! how to solve this problem????
//fs.appendFile('registered.txt', name+'\t'+password+'\n', function (err) {
  //  if (err) throw err;
  //  console.log('The "data is appended in the filesuccesfully!');
 // });
 // fs.readFile('registered.txt', function (err, data) {
 //   if (err) throw err;
 //   console.log(data);
 // });
 
$("form")[0].reset();  }
    });
    });