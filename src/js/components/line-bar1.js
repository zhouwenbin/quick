! function() {
    var t = document.getElementById("line-bar1"),
        e = echarts.init(t);
    option = { title: { text: "航段均价", left: "center", top: 20, textStyle: { fontSize: 14, fontWeight: "normal" } }, tooltip: { trigger: "axis", axisPointer: { type: "cross", crossStyle: { color: "#999" } }, backgroundColor: "#fff", textStyle: { color: "#333" }, extraCssText: "box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.14);" }, legend: { data: ["航段均价", "同比"], right: 0, top: 20 }, xAxis: [{ type: "category", data: ["04-08", "04-09", "04-10", "04-11", "04-12", "04-13", "04-14"], axisPointer: { type: "shadow" } }], yAxis: [{ type: "value", min: 0, max: 5e3, interval: 1e3, axisLabel: { formatter: "{value}" } }, { type: "value", min: 0, max: 1, interval: .2, axisLabel: { formatter: "{value} %" } }], series: [{ name: "航段均价", type: "bar", data: [3700, 3200, 2800, 3300, 3600, 2900, 3600], barWidth: 36, itemStyle: { normal: { color: "#f1a837" } } }, { name: "同比", type: "line", yAxisIndex: 1, data: [.81, .76, .62, .8, .84, .68, .82], itemStyle: { normal: { color: "#ffd800" } } }] }, option && "object" == typeof option && e.setOption(option, !0)
}(window, jQuery);