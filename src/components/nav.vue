<style scoped="scoped" lang="less">
    .nav-root {
        .nav-content {
            width: 100%;
            height: 93px;
            background-color: #fff;
            box-shadow: rgba(0, 0, 0, 0.2) 0 0 10px 0;
            position: fixed;
            top: 0;
            text-align: center;
            z-index: 999;
            .nav {
                > a {
                    display: inline-block;
                    font-size: 12px;
                    line-height: 93px;
                    width: 80px;
                    color: #717171;
                    position: relative;
                    &:hover {
                        color: #3D96FF;
                        text-decoration: none;
                    }
                    &:focus {
                        text-decoration: none;
                    }
                    &.active {
                        color: #3D96FF;
                        &:after {
                            content: '';
                            width: 24px;
                            height: 3px;
                            background-color: #3D96FF;
                            border-radius: 1.5px;
                            position: absolute;
                            bottom: 0;
                            left: 50%;
                            transform: translateX(-50%);
                        }
                    }
                    &.user {
                        color: #3D96FF;
                        &:hover {
                            color: #3D96FF !important;
                        }
                    }
                }
                .logo {
                    transform: translateX(7px);
                    img {
                        width: 78px;
                    }
                }
                &.st1 {
                    a {
                        &:hover {
                            color: #3D96FF;
                        }
                        &.active {
                            &:after {
                                background-color: #3D96FF;
                            }
                        }
                    }
                }
                &.st2 {
                    a {
                        &:hover {
                            color: #FF65A2;
                        }
                        &.active {
                            color: #FF65A2;
                            &:after {
                                background-color: #FF65A2;
                            }
                        }
                    }

                }
                &.st3 {
                    a {
                        &:hover {
                            color: #FF883D;
                        }
                        &.active {
                            color: #FF883D;
                            &:after {
                                background-color: #FF883D;
                            }
                        }
                    }

                }
                &.st4 {
                    a {
                        &:hover {
                            color: #B950E3;
                        }
                        &.active {
                            color: #B950E3;
                            &:after {
                                background-color: #B950E3;
                            }
                        }
                    }

                }
                &.st5 {
                    a {
                        &:hover {
                            color: #7ED321;
                        }
                        &.active {
                            color: #7ED321;
                            &:after {
                                background-color: #7ED321;
                            }
                        }
                    }

                }
                &.st6 {
                    a {
                        &:hover {
                            color: #3D96FF;
                        }
                        &.active {
                            color: #3D96FF;
                            &:after {
                                background-color: #3D96FF;
                            }
                        }
                    }

                }

            }
            .w930 {
                position: relative;
                .userMod {
                    padding: 9px 14px;
                    width: 180px;
                    box-shadow: rgba(0, 0, 0, .2) 0 2px 6px;
                    position: absolute;
                    z-index: 1;
                    background-color: #fff;
                    border-radius: 8px;
                    top: 113px;
                    right: 117px;
                    display: none;
                    transition: all 1s linear;
                    opacity: 0;
                    a {
                        display: block;
                        font-size: 12px;
                        color: #717171;
                        padding: 9px 6px;
                        width: 100%;
                        border-bottom: 0.5px solid #D9E2FF;
                        line-height: 17px !important;
                        &:hover {
                            color: #3D96FF;
                        }
                        &:last-child {
                            border-bottom: none;
                            font-weight: 500;
                        }

                    }
                    &:after {
                        width: 10px;
                        height: 10px;
                        content: "";
                        display: block;
                        position: absolute;
                        top: -1px;
                        transform: rotate(45deg) translateX(-50%);
                        z-index: -1;
                        background-color: #fff;
                        left: 48%;
                        box-shadow: rgba(0, 0, 0, .2) 0 2px 6px;
                    }
                    &:before {
                        width: 30px;
                        height: 8px;
                        content: "";
                        display: block;
                        position: absolute;
                        top: 0px;
                        z-index: 3;
                        background-color: #fff;
                        left: 43%;
                    }
                    &.show {
                        display: block;
                        opacity: 1;
                    }
                }

            }

        }
        .modal-dialog-l {
            width: 100%;
            height: 100%;
            .modal-content {
                width: 540px;
                min-height: 380px;
                border-radius: 16px;
                border: none;
                position: absolute;
                top: 40%;
                left: 50%;
                transform: translateX(-50%) translateY(-50%);
                background-color: #F9FBFF;
                padding-bottom: 10px;
                .logo {
                    text-align: center;
                    margin-top: 30px;
                    margin-bottom: 30px;
                    img {
                        width: 172px;
                    }
                }
                label {
                    display: block;
                    width: 100%;
                    text-align: center;
                    position: relative;
                    .t {
                        width: 440px;
                        height: 50px;
                        border-radius: 25px;
                        outline: none;
                        border: none;
                        padding-left: 16px;
                        box-shadow: rgba(0, 0, 0, 0.8) 0 0 6px -3px;
                        margin-bottom: 20px;
                        &::placeholder {
                            color: #999999;
                            font-size: 14px;
                        }
                    }
                    .glyphicon {
                        font-size: 18px;
                        position: absolute;
                        top: 15px;
                        right: 70px;
                        cursor: pointer;
                        color: #CCCCCC;
                        &.open {
                            color: rgb(53, 53, 53);
                        }
                    }
                }
                .ask {
                    text-align: center;
                    color: #808080;
                    font-size: 14px;
                    .d {
                        color: #3D96FF;
                        cursor: pointer;
                    }
                }
                .third {
                    padding-left: 60px;
                    padding-right: 60px;
                    border-top: 1px dashed rgba(64, 147, 255, 0.42);
                    padding-top: 17px;
                    margin-top: 18px;
                    .t-info {
                        font-size: 12px;
                        font-weight: 300;
                        color: #3D96FF;
                    }
                    .ct {
                        display: flex;
                        margin-top: 20px;
                        a {
                            flex: 1;
                            font-size: 12px;
                            color: #333333;
                            font-weight: 300;
                            img {
                                height: 15px;
                            }
                        }
                    }
                }
                .sub {
                    margin: 24px auto;
                    width: 440px;
                    height: 67px;
                    background-image: url(../assets/img/subBtn.png);
                    -webkit-background-size: cover;
                    background-size: cover;
                    cursor: pointer;
                    font-size: 18px;
                    color: #fff;
                    line-height: 73px;
                    text-align: center;
                }
                .close {
                    position: absolute;
                    top: 10px;
                    right: 25px;
                    font-size: 30px;
                }
                .forget-pw {
                    width: 100%;
                    text-align: center;
                    position: absolute;
                    bottom: -40px;
                    color: #fff;
                    font-size: 16px;
                    font-weight: 300;
                    a {
                        text-decoration: underline;
                    }
                }
                .tip-mod {
                    width: 240px;
                    padding-top: 14px;
                    padding-bottom: 26px;
                    padding-left: 15px;
                    padding-right: 15px;
                    border: 1px solid #000;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translateX(-50%) translateY(-50%);
                    text-align: center;
                    border-radius: 8px;
                    background-color: rgba(0, 0, 0, .7);
                    display: none;
                    img {
                        width: 90px;
                        margin-bottom: 10px;
                        margin-top: 14px;
                    }
                    p {
                        font-size: 14px;
                        color: white;
                    }

                }
            }

        }
    }
</style>

<template>
    <div class="nav-root">
        <div class="nav-content">
            <div v-bind:class="['nav','w930','st'+index]">
                <a href="#/en/home" @click="navCl(1)" v-bind:class="{active:index==1}">主页</a>
                <a href="#" @click="navCl(2)" v-bind:class="{active:index==2}">兑换中心</a>
                <a href="#/en/exchange" @click="navCl(3)" v-bind:class="{active:index==3}">交易市场</a>
                <a href="#" @click="navCl(4)" v-bind:class="{active:index==4}">常见问题</a>
                <a href="#" class=" logo"><img src="../assets/img/logo.png"></a>
                <a href="#/en/app " @click="navCl(5)" v-bind:class="{active:index==5}">App</a>
                <a href="#" @click="navCl(6)" v-bind:class="{active:index==6}">关于我们</a>
                <a href="#" v-show="!isLogin" data-toggle="modal" data-target="#myModal">登录/注册</a>
                <a href="javascript:;" @click="showUM" v-show="isLogin" v-bind:class="['user','user-ct']">{{userName_show}}</a>
                <a href="javascript:;">EN</a>

                <div v-bind:class="['userMod','user-ct',{'show':isShowUserMod}]">
                    <a @click="showUM" href="#/en/wallet">我的钱包</a>
                    <a @click="showUM" href="#/en/record">交易记录</a>
                    <a @click="showUM" href="#/en/my_project">我的项目</a>
                    <a @click="showUM" href="#/en/custom/home">客服中心</a>
                    <a @click="showUM" href="#/en/settings/edit">个人设置</a>
                    <a @click="showUM();logout();" href="javascript:;">登出</a>
                </div>
            </div>
        </div>
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog modal-dialog-l" role="document">
                <div class="modal-content">
                    <button style="display: block;" type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                    <div class="logo">
                        <img src="../assets/img/logo3.png" alt="">
                    </div>
                    <form @submit="submitFm">
                        <label>
                            <input v-model="username" autocomplete="off" class="t" type="text" placeholder="请输入用户名">
                        </label>
                        <label>
                            <input v-model="password" autocomplete="off" class="t"
                                   v-bind:type="showPw?'text':'password'"
                                   placeholder="请输入密码">
                            <i v-bind:class="['glyphicon','glyphicon-eye-open',{'open':showPw}]" @click="showPwd"></i>
                        </label>
                        <!--<input class="hide" type="submit">-->
                    </form>
                    <div class="ask">
                        <span v-show="type===1">还没有账号？ <span class="d" @click="changeSt">立即注册</span></span>
                        <span v-show="type===0">已经有账号了？ <span class="d" @click="changeSt">去登录</span></span>
                    </div>
                    <div class="third hide">
                        <div class="t-info">
                            第三方登录
                        </div>
                        <div class="ct">
                            <a href="#">
                                <img src="../assets/img/login-button-wechat-nor.png" alt=""> Wechat login
                            </a>
                            <a href="#">
                                <img src="../assets/img/login-button-wechat-nor.png" alt=""> Wechat login
                            </a>
                            <a href="#">
                                <img src="../assets/img/login-button-facebook-nor.png" alt=""> Facebook login
                            </a>
                        </div>
                    </div>
                    <div class="sub" @click="submitFm">
                        <span v-show="type===1">登 录</span><span v-show="type===0">注 册</span>
                    </div>
                    <div class="forget-pw" v-show="type===1">忘记密码？<a @click="forgetPw" href="javascript:;">点这里</a></div>
                    <div class="tip-mod">
                        <img v-if="tips.man===1" src="../assets/img/tman1.png" alt="">
                        <img v-if="tips.man===2" src="../assets/img/tman2.png" alt="">
                        <p>{{tips.text}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import t from '../assets/js/tools';

    export default {
        // 没啥大用处
        name: 'app',
        data() {
            return {
                index: 1,
                showPw: false,
                type: 1,    // 1-登录页面  2-注册页面
                isLogin: false,
                isShowUserMod: false,
                username: '',
                password: '',
                userName_show: '',
                tips: {
                    man: 1,
                    text: '123'
                },
                timer: {}
            }
        },
        methods: {
            shTip: function (tips, man) {
                this.tips.text = tips;
                this.tips.man = man;
                $('.tip-mod').fadeIn(300);
                this.timer = setTimeout(function () {
                    $('.tip-mod').fadeOut(300);
                    clearInterval(this.timer);
                }, 2000)
            },
            // 绑定事件的方法
            navCl: function (i) {
                this.index = i;
            },
            showPwd: function () {
                if (this.showPw === true) {
                    this.showPw = false;
                } else {
                    this.showPw = true;
                }
            },
            changeSt: function () {
                if (this.type === 1) {
                    this.type = 0;
                } else {
                    this.type = 1;
                }
            },
            submitFm: function () {
                if (this.type === 1) {
                    this.login();
                } else {
                    this.signin();
                }
                return false;
            },
            showUM: function () {
                if (this.isShowUserMod) {
                    this.isShowUserMod = false;
                } else {
                    this.isShowUserMod = true;
                }
            },
            // 忘记密码操作
            forgetPw: function () {
                $('#myModal').modal('hide');
                location.href = '/#/en/settings/password/forget'
            },
            // 登录
            login: function () {
                var _this = this;
                t.post('signin', {username: this.username, password: this.password}, function (data) {
                    if (!data.body.error_code) {
                        console.log(data.body.data);
                        t.clearCookie('secret', data.body.data.secret);
                        t.clearCookie('token', data.body.data.token);
                        t.clearCookie('uid', data.body.data.uid);
                        t.clearCookie('username', data.body.data.username);
                        t.setCookie('secret', data.body.data.secret);
                        t.setCookie('token', data.body.data.token);
                        t.setCookie('uid', data.body.data.uid);
                        t.setCookie('username', data.body.data.username);
                        _this.refreshStatus();
                        $('#myModal').modal('hide')
                    } else {
                        var code = data.body.error_code;
                        if (code === 10616 || code === 10609) {
                            _this.shTip('账号或密码错误', 2);
                        } else {
                            _this.shTip('服务器繁忙', 2);
                        }
                    }
                    setTimeout(function () {
                        _this.refreshLoginStatus();
                    }, 500)
                });
                return false;
            },
            // 注册
            signin: function () {
                var _this = this;
                var un = this.username;
                var pw = this.password;
                if (!/^[A-Za-z_][A-Za-z0-9_]{4,15}$/.test(un)) {
                    _this.shTip('用户名5-16个非数字开头的字符且只允许字母数字下划线', 2);
                } else if (!/^[A-Za-z0-9_]{6,18}$/.test(pw)) {
                    _this.shTip('密码5-16个字符且只允许字母数字下划线', 2);
                } else {
                    t.post('signup', {username: un, password: pw}, function (data) {
                        if (data.body.error_code) {
                            if (data.body.error_code === 10600) {
                                _this.shTip('用户名已被注册', 2);
                            } else {
                                _this.shTip('服务器繁忙，请稍后再试', 2);
                            }
                        } else {
                            _this.login();
                        }
                    });
                }
                return false;
            },
            // 更新登录状态
            refreshLoginStatus: function () {
                var _this = this;
                if (t.getCookie("secret")) {
                    t.get('user', {uid: t.getCookie("uid")}, function (data) {
                        _this.userName_show = data.body.data.username;
                        _this.isLogin = true;
                        _this.refreshStatus();
                    })
                } else {
                    _this.isLogin = false;
                    _this.refreshStatus();
                }
                return false;
            },
            // 登出
            logout: function () {
                var _this = this;
                t._post('signout', {}, function (data) {
                    if (data.data.result = 'ok') {
                        t.clearCookie('secret');
                        t.clearCookie('token');
                        t.clearCookie('uid');
                        t.clearCookie('username');
                        _this.isLogin = false;
                        _this.refreshStatus();
                    }
                });
                return false;
            },
            // 自动登录操作
            autoLogin: function () {
                let _this = this;
                if (t.getCookie('token')) {
                    // 一级验证，判断浏览器中的cookie是否存在token字段
                    // 如果存在
                    t._post('verify/loginsign', {}, function (data) {
                        if (data.body.data.right === 1) {
                            _this.refreshLoginStatus();
                        }
                    });
                }
            },
            // 更新其他组件的信息
            refreshStatus: function () {
                this.$emit('getStatus', this.isLogin);
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                // 可以在此为所欲为
                //对DOM的操作放这
                //console.log(this);
                this.index = this.pushIndex;
                this.autoLogin();
            })
        },
        created() {
            var _this = this;
            $('body').click(function (e) {
                if (!$(e.target).hasClass('user-ct')) {
                    _this.isShowUserMod = false;
                }
            })
        },
        components: {
            // 引入的组件写在这里

        },
        watch: {
            // 监听数据变化
            // a: function (val, oldVal) {
            //     console.log('new: %s, old: %s', val, oldVal)
            // },
            // // 方法名
            // b: 'someMethod',
            // // 深度 watcher
            // c: {
            //    handler: function (val, oldVal) { /* ... */ },
            //    deep: true
            // }
        },
        props: ['pushIndex']
    }
</script>