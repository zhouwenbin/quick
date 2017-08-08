!function(){var t=document.getElementById("bar1"),e=echarts.init(t);option={title:{text:"总金额 :￥7800",subtext:"最大单航段金额￥800，最小单航段金额￥300",left:"center",textStyle:{fontSize:14,fontWeight:"normal"}},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}},backgroundColor:"#fff",textStyle:{color:"#333"},extraCssText:"box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.14);"},xAxis:[{name:"月份",type:"category",data:["1","2","3","4","5","6","7","8","9","10","11","12"],axisPointer:{type:"shadow"}}],yAxis:[{name:"金额",type:"value",min:0,max:5e3,interval:1e3,axisLabel:{formatter:"{value}"}}],series:[{name:"航段均价",type:"bar",data:[3700,3200,2800,3300,3600,2900,3600,3700,3200,2800,3300,3600],barWidth:36,itemStyle:{normal:{color:"#f1a837"}},label:{normal:{show:!0,position:"top",formatter:"￥{c}",textStyle:{color:"#333"}}}}]},option&&"object"==typeof option&&e.setOption(option,!0)}(window,jQuery),!function(){var t=document.getElementById("bar2"),e=echarts.init(t);option={title:{text:"平均折扣 :5.5折",subtext:"最大折扣8.6折，最小折扣3折",left:"center",textStyle:{fontSize:14,fontWeight:"normal"}},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}},backgroundColor:"#fff",textStyle:{color:"#333"},extraCssText:"box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.14);"},xAxis:[{name:"月份",type:"category",data:["1","2","3","4","5","6","7","8","9","10","11","12"],axisPointer:{type:"shadow"}}],yAxis:[{name:"折扣",type:"value",min:0,max:10,interval:2,axisLabel:{formatter:"{value}"}}],series:[{name:"航段均价",type:"bar",data:[2,4,5,6,7,8,9,5,4,3,2,1],barWidth:36,itemStyle:{normal:{color:"#158fe4"}},label:{normal:{show:!0,position:"top",formatter:"{c}折",textStyle:{color:"#333"}}}}]},option&&"object"==typeof option&&e.setOption(option,!0)}(window,jQuery),!function(){var t=document.getElementById("bar3"),e=echarts.init(t);option={title:{text:"乘机次数",left:"center",textStyle:{fontSize:14,fontWeight:"normal"}},tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}},backgroundColor:"#fff",textStyle:{color:"#333"},extraCssText:"box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.14);"},xAxis:[{name:"月份",type:"category",data:["1","2","3","4","5","6","7","8","9","10","11","12"],axisPointer:{type:"shadow"}}],yAxis:[{name:"次数",type:"value",min:0,max:3,interval:1,axisLabel:{formatter:"{value}"}}],series:[{name:"航段均价",type:"bar",data:[1,2,0,0,2,1,2,0,2,2,1,0],barWidth:36,itemStyle:{normal:{color:"#5fc654"}},label:{normal:{show:!0,position:"top",formatter:"{c}",textStyle:{color:"#333"}}}}]},option&&"object"==typeof option&&e.setOption(option,!0)}(window,jQuery);