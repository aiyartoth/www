//参考资料 http://www.cnblogs.com/swing07/p/5715824.html
var cookie_method = {
    get: function (cname) {
        //todo 获取cookie
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
        }
        return "";
    },
    getAll: function () {
        var all_cookie = document.cookie.split(";"),
            result={};
        for (var i = 0; i < all_cookie.length; i++) {
            var item = all_cookie[i].split("=");
            console.log(item);
            if (item && item.length === 2) {
                result[item[0]] =item[1];
            }
        }
        return result;
    },
    set: function (cname, cvalue, exdays) {
        //todo 设置cookie
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    },
    clear: function (cname) {
        this.setCookie(name, "", -1);
    }
};
