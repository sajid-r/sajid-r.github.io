var apiURL = "http://labsdev.knolskape.com:8081";
var httpURL = "https://sajid-r.github.io";
//var httpURL = "http://localhost:8081";
// Toggle Function
//$('.toggle').click(function(){
//  // Switches the Icon
//  $(this).children('i').toggleClass('fa-pencil');
//  // Switches the forms  
//  $('.form').animate({
//    height: "toggle",
//    'padding-top': 'toggle',
//    'padding-bottom': 'toggle',
//    opacity: "toggle"
//  }, "slow");
//});

function checkLogin(){
    var username = $("#username").val();
    var pwd = $("#pwd").val();
    var settings = {
    "async": true,
    "crossDomain": true,
    "url": apiURL +  "/admin/username/"+username,
    "method": "GET",
    "headers": {
    "cache-control": "no-cache",
    "postman-token": "7db05a42-996e-d4ce-22a5-1f780fe6e89e"
  }
}

$.ajax(settings).done(function (response) {
  //console.log(response);
    if(response.length == 0){
          alert("Invalid Credentials");
      }
        else{
           if(pwd === response[0].password){
               //alert("Correct credentials");
            window.localStorage.setItem( 'UserName', response[0].username );
            window.location.href = httpURL + "/course.html";
           } 
            else
                {
                    alert("Invalid Credentials");
                }
        }
});
};


 