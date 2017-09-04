var apiURL = "http://labsdev.knolskape.com:8081";
var httpURL = "https://sajid-r.github.io";

// Toggle Function
$('.toggle').click(function(){
  // Switches the Icon
  $(this).children('i').toggleClass('fa-pencil');
  // Switches the forms  
  $('.form').animate({
    height: "toggle",
    'padding-top': 'toggle',
    'padding-bottom': 'toggle',
    opacity: "toggle"
  }, "slow");
});

$('.input-submit').click(function(){
    var username = $('#username').val();
    var pwd = $('#pwd').val();
    
    var settings = {
      "async": false,
      "crossDomain": true,
      "url": "http://labsdev.knolskape.com:8081/admin/username/"+username,
      "method": "GET",
      "headers": 
      {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
            "postman-token": "dba914fe-ecf8-6ffa-47ba-0675b8aef786"
      }
}
    //alert(settings.url);
    //alert("Username = " + username + "   Password = " + pwd);
    
    $.ajax(settings).done(function (response) {
      if(response.length == 0){
          alert("Invalid Credentials");
      }
        else{
           if(pwd === response[0].password){
               alert("Correct credentials");
            window.localStorage.setItem( 'UserName', response[0].username );
            window.location.href = httpURL+ "/course.html";
           } 
            else
                {
                    alert("Invalid Credentials");
                }
        }
    });
    
    
});

