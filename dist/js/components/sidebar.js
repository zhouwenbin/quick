!function(i,t){var n={init:function(){this.bindEvents()},bindEvents:function(){t("body").on("click",".sidebar-parent",this.toggleSidebar.bind(this))},toggleSidebar:function(i){i.stopPropagation(),t(i.target).closest(".sidebar-parent").toggleClass("active")}};n.init()}(window,jQuery);