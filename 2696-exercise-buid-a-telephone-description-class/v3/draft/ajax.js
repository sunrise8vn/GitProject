// function ajax_get(url, callback) {
//     var xmlhttp = new XMLHttpRequest();
//     xmlhttp.onreadystatechange = function() {
//         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//             myObj = xmlhttp.responseText;
//             // console.log(xmlhttp.responseText);
//             // console.log('responseText:' + xmlhttp.responseText);
//             try {
//                 var data = JSON.parse(xmlhttp.responseText);
//             } catch(err) {
//                 // console.log(err.message + " in " + xmlhttp.responseText);
//                 return;
//             }
//             callback(data);
//         }
//     };
 
//     xmlhttp.open("GET", url, true);
    // xmlhttp.send();
// }

// var myObj;
// // var data = JSON.parse(myObj);

// ajax_get('Mess3.json', function(data) {
//     // html = "<h2>" + myObj.content[0][0] + "</h2>";
//     console.log(myObj);
// });

// $.gerJSON('Mess.json', function(data) {
//     console.log(data);
// });

// $.ajax({
//     url: 'Mess.json',
//     datatype: 'json',
//     type: 'get',
//     cache: false,
//     success: function(data) {
//         console.log(data);
//     }
// });

// var obj = {"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}
// obj =  ajax_get('Mess.json', function() {
//     console.log(this);
// });

// var s = JSON.parse(myObj);

// console.log(s);