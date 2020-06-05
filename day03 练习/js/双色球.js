var run = document.querySelectorAll("#run")[0];
    var allball = document.querySelectorAll(".box>li");
    var ritems = [];
    var bitems = [];
   
    for(var i=0;i<34;i++){
        ritems.push(i);
        if(i>17){
            continue;
        }
        bitems.push(i);
    }
    
   run.onclick=function(){
       var items = [];
       items = ritems;
       var n = 0;
       var index = 0;
      var sid = setInterval(function(){
        var randindex =  Math.round(Math.random()*(items.length-1));
        allball[index].innerHTML=items[randindex];
        if(n++ >= 10){
            index++;
            items.splice(randindex,1);
            if(index == allball.length-1){
                items = bitems;
            }
            if(index == allball.length){
                clearInterval(sid);
            }
            n=0;
            console.log(items[randindex]);
        }
       
       },10);
}