window.onload = function(){

    //返回顶部
    var backTop = document.getElementById("backTop");
    backTop.onclick = function(){
        // 点击按钮，回到顶部 获取当前位置距离顶部的距离scollTop
        // 设置scrollTop值，自减 往上滚动 setInterval
        // 距离顶部为 0 清除计时器
    
        // 可见高度
        // var clientHeight = document.documentElement.clientHeight;
        var timer = null;
        var dtop = document.documentElement.scrollTop; 

        // window.onscroll = function(){
        //     // 滚动条滚动的距离
        //     dtop = document.documentElement.scrollTop; 
        // }
        timer = setInterval(() => {
            document.documentElement.scrollTop = dtop - 20;
            dtop = dtop - 20;
            // console.log(dtop);
            if(dtop <= 0){
                clearInterval(timer);
            }
        }, 15);
    };

    //滚动监听，是否显示返回顶部按钮
    window.onscroll = function(){
        var leng = document.documentElement.scrollTop;
        // console.log(leng)
        if(leng > 300){
            backTop.style.display = 'block';
        };
        if(leng < 300){
            backTop.style.display = 'none';
        };
        
    }

    // 分类博客的js
    var config = {
        vx: 4,
        vy:  4,
        height: 2,
        width: 2,
        count: 100,
        color: "121, 162, 185",
        stroke: "100,200,180",
        dist: 6000,
        e_dist: 20000,
        max_conn: 10
    }
    // 改变属性控制盒子的显示与隐藏
  
    function changeDisplay(value,obj){
        for(var i=0;i<obj.length;i++){
            obj[i].style.display = 'none';
            allA[i].style.color = ''
        }
        obj[value].style.display = 'block';
        allA[value].style.color = 'turquoise'
    }

}