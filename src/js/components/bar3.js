! function() {
    var t = document.getElementById("bar3"),
        e = echarts.init(t);
    option = {
        title: {
            text: "乘机次数",
            left: "center",
            textStyle: {
                fontSize: 14,
                fontWeight: "normal"
            }
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "cross",
                crossStyle: {
                    color: "#999"
                }
            },
            backgroundColor: "#fff",
            textStyle: {
                color: "#333"
            },
            extraCssText: "box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.14);"
        },
        xAxis: [{
            name: "月份",
            type: "category",
            data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            axisPointer: { type: "shadow" }
        }],
        yAxis: [{ name: "次数", type: "value", min: 0, max: 3, interval: 1, axisLabel: { formatter: "{value}" } }],
        series: [{
            name: "航段均价",
            type: "bar",
            data: [1, 2, 0, 0, 2, 1, 2, 0, 2, 2, 1, 0],
            barWidth: 36,
            itemStyle: { normal: { color: "#5fc654" } },
            label: {
                normal: {
                    show: !0,
                    position: "top",
                    formatter: "{c}",
                    textStyle: { color: "#333" }
                }
            }
        }]
    }, option && "object" == typeof option && e.setOption(option, !0)
}(window, jQuery);