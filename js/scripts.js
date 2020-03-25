var userName = $("input#userName").val();
var address1 = $("input#address1").val();
var aptNum = $("input#aptNum").val();
var address2 = $("input#address2").val();
 


$(document).ready(function(){
  $("#formOne").submit(function(event){
    $(".userName").text(userName);
    $(".address1").text(address1);
    $(".aptNum").text(aptNum);
    $(".address2").text(address2);
   
    event.preventDefault();
  });
}); 