! function(i, n) {
    var t = { init: function() { n(".input-date .input").flatpickr({ enableTime: !0, minDate: "today" }) } };
    t.init()
}(window, jQuery);