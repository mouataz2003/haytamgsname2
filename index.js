const Eris = require("eris");
var x5bzteam = new Eris("MjkwODM4MTc3Nzk3ODk4MjUx.DcYeIw.69tj6I1tY2GVvDC_8hh7q7OTNNg");
x5bzteam.on("ready", () => {
    console.log("Yo! Changer [ON]");
    onstart();
});
x5bz = "439915137068040202";
nick = "[Σσ]HAYTAMGS";
function onstart(){
    var v1 = nick.split('');
    var counter;
    var i=0;
var x5bz2 = ' ';
  var x5bz3 =   setInterval(function(){

     if (i == v1.length){
     clearInterval(x5bz3);
     onstart()
      return;
     }
     var v2 = v1[i];
    x5bz2 += v2;
    x5bzteam.editNickname(x5bz, x5bz2);
 
        i++;

     },1);
}
x5bzteam.connect();
