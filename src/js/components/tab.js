! function(i, t) {
    var n = { init: function() { this.bindEvents() }, bindEvents: function() { t("body").on("click", ".tab li", this.switch.bind(this)) }, "switch": function(i) { t(i.target).closest("li").addClass("active").siblings().removeClass("active") } };
    n.init()
}(window, jQuery);