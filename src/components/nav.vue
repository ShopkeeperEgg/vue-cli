<style scope lang="less">
    .nav-content {
        width: 100%;
        height: 93px;
        background-color: #fff;
        box-shadow: rgba(0, 0, 0, 0.7) 0 0 10px 0;
        position: fixed;
        top: 0;
        text-align: center;
        z-index: 999;
        .nav {
            a {
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
            }
            .logo {
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
    }

    .modal-dialog {
        width: 100%;
        height: 100%;
        .modal-content {
            width: 540px;
            min-height: 467px;
            border-radius: 16px;
            border: none;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            background-color: #F9FBFF;
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
        }
    }
</style>

<template>
    <div>
        <div class="nav-content">
            <div v-bind:class="['nav','w930','st'+index]">
                <a href="#/home" @click="navCl(1)" v-bind:class="{active:index==1}">Home</a>
                <a href="#" @click="navCl(2)" v-bind:class="{active:index==2}">Market</a>
                <a href="#" @click="navCl(3)" v-bind:class="{active:index==3}">Exchange</a>
                <a href="#" @click="navCl(4)" v-bind:class="{active:index==4}">Q&A</a>
                <a href="#" class=" logo"><img src="../assets/img/logo.png"></a>
                <a href="#" @click="navCl(5)" v-bind:class="{active:index==5}">App</a>
                <a href="#" @click="navCl(6)" v-bind:class="{active:index==6}">About us</a>
                <a href="#" data-toggle="modal" data-target="#myModal">Log in</a>
                <a href="#">中文</a>
            </div>
        </div>

        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                    <div class="logo">
                        <img src="../assets/img/logo3.png" alt="">
                    </div>
                    <form @submit="submitFm">
                        <label>
                            <input autocomplete="off" class="t" type="text" placeholder="请输入用户名">
                        </label>
                        <label>
                            <input autocomplete="off" class="t" v-bind:type="showPw?'text':'password'" placeholder="请输入密码">
                            <i v-bind:class="['glyphicon','glyphicon-eye-open',{'open':showPw}]" @click="showPwd"></i>
                        </label>
                        <input class="hide" type="submit">
                    </form>
                    <div class="ask">
                        <span v-show="type===1">还没有账号？ <span class="d" @click="changeSt">立即注册</span></span>
                        <span v-show="type===0">已经有账号了？ <span class="d" @click="changeSt">去登陆</span></span>
                    </div>
                    <div class="third">
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
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    //    import t from '../assets/js/tools';

    export default {
        // 没啥大用处
        name: 'app',
        data() {
            return {
                index: 1,
                showPw: false,
                type: 1,    // 1-登录页面  2-注册页面
            }
        },
        methods: {
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
                    alert('登录')
                } else {
                    alert('注册')
                }
                return false;
            }

        },
        mounted: function () {
            this.$nextTick(function () {
                // 可以在此为所欲为
                //对DOM的操作放这
                //console.log(this);

            })
        },
        created() {

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
        }
    }
</script>