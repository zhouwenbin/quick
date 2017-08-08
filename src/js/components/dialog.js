! function(i, o) {
    var n = {
        init: function() { this.bindEvents() },
        bindEvents: function() {
            o("body").on("click", ".dialog-close", this.hideDialog.bind(this));
            o("body").on("click", ".dialog-footer a", this.hideDialog.bind(this));
            o("body").on("click", "#dialog-seat", this.showDialogSeat.bind(this));
            o("body").on("click", "#header-user-info", this.showDialogInfo.bind(this));
            o("body").on("click", "#header-user-password", this.showDialogPassword.bind(this));
            o("body").on("click", ".table-del", this.showDialogDelete.bind(this));
            o("body").on("click", ".dialog-delete .btn-primary", this.showDialogDeleteSuccess.bind(this));
        },
        hideDialog: function() {
            o(".dialog").addClass("hide")
        },
        showDialogSeat: function() {
            o(".dialog-seat").removeClass("hide")
        },
        showDialogInfo: function() {
            o(".dialog-info").removeClass("hide")
        },
        showDialogPassword: function() {
            o(".dialog-password").removeClass("hide")
        },
        showDialogDelete: function() {
            o(".dialog-delete").removeClass("hide")
        },
        showDialogDeleteSuccess: function() {
            o(".dialog-delete-success").removeClass("hide")
        }
    };
    n.init()
}(window, jQuery);