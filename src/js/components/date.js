! function(i, n) {
    var t = {
        init: function() {
            n(".input-date .input").flatpickr({
                minDate: "today",
                disableMobile: "true",
                onOpen: function(selectedDates, dateStr, instance) {
                    $(instance.element).closest('li').find('.form-label').addClass('hide');
                }
            })
        }
    };
    t.init()
}(window, jQuery);