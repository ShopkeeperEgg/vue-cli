import Vue from 'vue'

let dev = 1;
let apiServer;
let resServer;
if (dev) {
    apiServer = {
        "HTTP": "http://",
        "SERVER_PATH": "api.jisuapi.com",
        // "PORT": "8080",
        "VERSION": "1.0.1"
    };
    resServer = {
        "HTTP": "http://",
        "SERVER_PATH": "182.254.146.100",
        "PORT": "8080",
        "VERSION": "1.0.1"
    };
} else {
    apiServer = {
        "HTTP": "http://",
        "SERVER_PATH": "182.254.146.100",
        "PORT": "8080",
        "VERSION": "1.0.1"
    };
    resServer = {
        "HTTP": "http://",
        "SERVER_PATH": "182.254.146.100",
        "PORT": "8080",
        "VERSION": "1.0.1"
    };
}


export default {
    // cookie相关
    getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
        }
        return "";
    },
    setCookie(cname, cvalue, exdays) {
        let d = new Date();
        exdays = exdays || 7;
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    },
    clearCookie(name) {
        this.setCookie(name, "", -1);
    },

    // localStorage
    getLs() {
        return JSON.parse(window.localStorage.getItem(STORE_KEY) || '[]');
    },
    setLs(item) {
        window.localStorage.setItem(STORE_KEY, JSON.stringify(item));
    },

    // 获取地址
    url() {
        let reg;
        if (resServer.PORT) {
            reg = resServer.HTTP + resServer.SERVER_PATH + ':' + resServer.PORT;
        } else {
            reg = resServer.HTTP + resServer.SERVER_PATH;
        }
        return reg;
    },

    apiUrl() {
        let reg;
        if (apiServer.PORT) {
            reg = apiServer.HTTP + apiServer.SERVER_PATH + ':' + apiServer.PORT;
        } else {
            reg = apiServer.HTTP + apiServer.SERVER_PATH;
        }
        return reg;
    },

    // ajax请求
    get(url, data, successCb, errorCb, bfCb) {
        Vue.http({
            url: '/api' + url,
            params: data,
            method: 'GET',
            credientials: true,
            before: function () {
                bfCb && bfCb();
            }
        }).then(function (data) {
            successCb && successCb(data);
        }, function (data) {
            errorCb && errorCb(data);
        });
        // $.ajax({
        //     url: this.apiUrl() + url,
        //     type: 'get',
        //     data: data,
        //     dataType: 'json',
        //     success(data) {
        //         successCb && successCb(data);
        //     },
        //     error(data) {
        //         errorCb && errorCb(data)
        //     },
        //     beforeSend() {
        //         bfCb && bfCb()
        //     }
        // })
    },
    post(url, data, successCb, errorCb, bfCb) {
        Vue.http({
            url: "/api" + url,
            params: data,
            method: 'POST',
            credientials: true,
            before: function () {
                bfCb && bfCb();
            }
        }).then(function (data) {
            successCb(data);
        }, function (data) {
            errorCb && errorCb(data);
        });
        // $.ajax({
        //     url: this.apiUrl() + url,
        //     type: 'post',
        //     data: data,
        //     dataType: 'json',
        //     success(data) {
        //         successCb && successCb(data);
        //     },
        //     error(data) {
        //         errorCb && errorCb(data)
        //     },
        //     beforeSend() {
        //         bfCb && bfCb()
        //     }
        // })
    },
    jsonp(url, data, successCb, errorCb, bfCb) {
        Vue.http({
            url: "/api" + url,
            params: data,
            method: 'JSONP',
            credientials: true,
            before: function () {
                bfCb && bfCb();
            }
        }).then(function (data) {
            successCb(data);
        }, function (data) {
            errorCb && errorCb(data);
        });
        // $.ajax({
        //     url: this.apiUrl() + url,
        //     type: 'get',
        //     data: data,
        //     dataType: 'jsonp',
        //     success(data) {
        //         successCb && successCb(data);
        //     },
        //     error(data) {
        //         errorCb && errorCb(data)
        //     },
        //     beforeSend() {
        //         bfCb && bfCb()
        //     }
        // })
    },
    ajax(url, type, data, successCb, errorCb, bfCb) {
        $.ajax({
            url,
            type,
            data: data,
            dataType: 'json',
            success(data) {
                successCb && successCb(data);
            },
            error(data) {
                errorCb && errorCb(data);
            },
            beforeSend() {
                bfCb && bfCb();
            }
        })
    },
    ajsonp(url, type, data, successCb, errorCb, bfCb) {
        $.ajax({
            url,
            type,
            data: data,
            dataType: 'jsonp',
            success(data) {
                successCb && successCb(data);
            },
            error(data) {
                errorCb && errorCb(data);
            },
            beforeSend() {
                bfCb && bfCb();
            }
        })
    },

    // 获取信息
    hash() {
        let arr = (location.hash || "").replace(/^\#/, '').split("&");
        let params = {};
        for (let i = 0; i < arr.length; i++) {
            let data = arr[i].split("=");
            if (data.length == 2) {
                params[data[0]] = data[1];
            }
        }
        return params;
    },
    search() {
        let arr = (location.search || "").replace(/^\?/, '').split("&");
        let params = {};
        for (let i = 0; i < arr.length; i++) {
            let data = arr[i].split("=");
            if (data.length == 2) {
                params[data[0]] = data[1];
            }
        }
        return params;
    },

    /**
     * 自己写的tab切换
     * @param tabItem 切换组的选择器
     * @param showItem 需要显示的元素选择器
     * @param during 渐变时间
     * @param fb 父盒子的选择器
     */
    // tab(tabItem, showItem, during, fb) {
    //     let dur = during || 0;
    //     let fa = $(tabItem).parent(fb);
    //     fa.animate({opacity: 0}, dur, function () {
    //         $(tabItem).addClass('hide');
    //         $(showItem).removeClass('hide');
    //         fa.animate({opacity: 1}, dur);
    //     });
    // }

}