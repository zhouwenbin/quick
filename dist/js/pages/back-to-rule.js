!function(i,n){var t={init:function(){this.bindEvent()},bindEvent:function(){n("body").on("click",".table-percent-show",this.show.bind(this)),n("body").on("click",".table-percent-hide",this.hide.bind(this))},show:function(){n(".table-percent").show()},hide:function(){n(".table-percent").hide()}};t.init()}(window,jQuery);