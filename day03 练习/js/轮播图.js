class Round{
    constructor(Selector){
        // 出发事件的部分
        this.imgs = document.querySelectorAll(`#image>li`);
        // 事件源
        this.points = document.querySelectorAll(`#point>li`);
        let _this = this;
        this.showid = 0;
        this.sid=0;
        this.init();
        document.querySelector(Selector).onmouseover = function(){
            clearInterval(_this.sid);
            // console.log(1);
        }
        document.querySelector(Selector).onmouseout = function(){
            // console.log(_this.sid);
            if(_this.sid){
                _this.autoplay();
            }
        }
    }
    init(){
        let _this = this;
        
        for(let i=0;i<this.points.length;i++){
            _this.points[i].onclick=function(){
                // let k = i;
                // console.log(i);
              for (let index = 0; index < _this.imgs.length; index++) {
                _this.imgs[index].style.display="none";
              }
              _this.showid = i;
              _this.imgs[i].style.display="block";
            
              
            //    console.log(_this);
            }
        }
      
    }
    autoplay(step=1000){
        let n = this.showid;
        let _this = this;
        this.sid = setInterval(function(){
        _this.points[n++%_this.points.length].click();
        // console.log(_this.points)
        
        },step);
    }
}
// new Round("#lbt").init();
new Round("#lbt").autoplay(1000);


