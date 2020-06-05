var end = new Date("2020-06-05 17:00:00");
var lis = document.querySelectorAll("#djs>li");
setInterval(function(){
    var now = new Date();
// console.log(end-now)
var interval = end -now;
var second = Math.ceil(interval/1000)%60;
var minituim = Math.floor(interval/1000/60)%60;
var hour = Math.floor(interval/1000/60/60);
lis[0].innerHTML=hour.toString().padStart(2,"0");
lis[2].innerHTML=minituim.toString().padStart(2,"0");
lis[4].innerHTML=second.toString().padStart(2,"0");
},1000);
