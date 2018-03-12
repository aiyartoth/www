(function () {
    var jQuery = window.jQuery = window.$ = function () {
        return jQuery.fn.init();
    };
    jQuery.fn = jQuery.prototype = {
        init: function () {
            return this;
        },
        version: "1.0.0",
        length: 0,
        size: function () {
            return this.length;
        }

    }
}());