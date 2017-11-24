<style scoped="scoped" lang="less">
    .bt {
        background-color: #f9fbff;
    }

    .title {
        width: 100%;
        background-color: #FAFAFA;
        height: 60px;
        box-shadow: rgba(0, 0, 0, .5) 0 -1px 10px;
        margin-bottom: 26px;
        .w800 {
            line-height: 60px;
            font-size: 20px;
            font-weight: 500;
            color: #4D4D4D;
        }
    }

    input {
        &::placeholder {
            font-size: 12px;
            color: #9B9B9B;
        }
    }

    .w500 {
        padding-bottom: 200px;
        .telType {
            margin-bottom: 12px;
            p {
                font-size: 12px;
                color: #999999;
                letter-spacing: 0.86px;
                margin-bottom: 8px;
            }
            input {
                width: 100%;
                height: 46px;
                border: none;
                padding-left: 20px;
                padding-right: 52px;
            }
            .a {
                position: relative;
            }
            i {
                color: #3D96FF;
                cursor: pointer;
                font-size: 12px;
                letter-spacing: 0.86px;
                position: absolute;
                z-index: 1;
                right: 20px;
                top: 68%;
                transform: translateY(-50%);
                padding: 10px;
            }
            .a1 {
                position: relative;
                .extra {
                    position: absolute;
                    width: 100%;
                    z-index: 2;
                    background-color: #fff;
                    .none {
                        height: 108px;
                        text-align: center;
                        line-height: 108px;
                        color: #999999;
                        font-weight: 300;
                        font-size: 14px;
                    }
                    .exist {
                        width: 100%;
                        ul {
                            width: 100%;
                            li {
                                color: #9B9B9B;
                                font-size: 12px;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                width: 100%;
                                padding-left: 20px;
                                padding-right: 20px;
                                line-height: 36px;
                                cursor: pointer;
                                span {
                                    color: #333333;
                                }
                                &:hover {
                                    background-color: #f9f9f9;
                                }
                            }
                        }
                    }
                    .use-new {
                        display: block;
                        width: 100%;
                        text-align: center;
                        font-size: 12px;
                        color: #3D96FF;
                        height: 40px;
                        line-height: 40px;
                        border-top: 1px solid #FAFAFA;
                        img {
                            width: 22px;
                            margin-right: 6px;
                        }
                    }
                }
            }
        }
        .tel {
            margin-bottom: 12px;
            input {
                width: 100%;
                height: 46px;
                border: none;
                padding-left: 20px;
                padding-right: 52px;
                &::placeholder {
                    font-size: 14px;
                    font-weight: 300;
                    color: #999999;
                }
            }
        }
        .yzm {
            margin-bottom: 20px;
            position: relative;
            p {
                margin-bottom: 20px;
                color: #999999;
                font-size: 14px;
                span {
                    color: #4D4D4D;
                }
            }
            input {
                width: 100%;
                border: none;
                height: 46px;
                padding: 0 20px;
                &::placeholder {
                    font-size: 14px;
                    font-weight: 300;
                    color: #999999;
                }
            }
            a {
                display: inline-block;
                padding: 7px 12px;
                border: 1px solid #9B9B9B;
                color: #9B9B9B;
                font-size: 12px;
                border-radius: 15px;
                position: absolute;
                right: 17px;
                top: 50%;
                transform: translateY(-50%);
                &.active {
                    border: 1px solid #3D96FF;
                    color: #3D96FF;

                }
            }
        }
        .webInfo {
            margin-top: 14px;
            text-align: center;
            font-size: 12px;
            color: #999999;
            vertical-align: middle;
            img {
                vertical-align: middle;
            }
        }
        .tips {
            text-align: center;
            color: #FF3636;
            font-size: 12px;
        }
        .confirm {
            margin-top: 30px;
            a {
                display: block;
                width: 100%;
                text-align: center;
                height: 40px;
                line-height: 40px;
                color: #fff;
                font-family: 'PingFang HK', '微软雅黑';
                font-size: 14px;
                background-color: #9B9B9B;
                border-radius: 2px;
            }
            &.active {
                a {
                    background-color: #3D96FF;
                }
            }
        }

    }

    .modal-dialog-l {
        width: 100%;
        height: 100%;
        .modal-content {
            width: 240px;
            min-height: 160px;
            border-radius: 16px;
            border: none;
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            background-color: #F9FBFF;
            padding-bottom: 26px;

            .tip-man {
                width: 86px;
                margin-left: auto;
                margin-right: auto;
                margin-top: 30px;
                img {
                    width: 100%;
                    /*height: 100%;*/
                }
            }
            .tips {
                color: #808080;
                font-size: 14px;
                margin-top: 25px;
                text-align: center;
            }
            .close {
                display: none;
                position: absolute;
                top: 10px;
                right: 25px;
                font-size: 20px;
            }
        }
    }

    .webInfo {
        margin-top: 14px;
        text-align: center;
        font-size: 12px;
        color: #999999;
        vertical-align: middle;
        img {
            vertical-align: middle;
        }
    }

</style>

<template>
    <div class="bt">
        <div class="title">
            <div class="w800">
                修改绑定手机号
            </div>
        </div>
        <div v-if="step===1" class="w500">
            <div class="telType">
                <div class="a a1">
                    <p>为保障账户安全，请验证手机号再进行下一步操作， {{hidMobile}}</p>
                    <div class="yzm">
                        <input v-model="yzmIpt" placeholder="请输入验证码" type="text" @input="iptYzm">
                        <a v-show="!canSendYzm">重新发送 {{left_time}}</a>
                        <a @click="sendYzm" href="javascript:;" class="active" v-show="canSendYzm">发送验证码</a>
                    </div>
                </div>
            </div>
            <div class="tips">
                {{tip}}
            </div>
            <div class="confirm active" v-if="canSub1">
                <a @click="sub" href="javascript:;">确定</a>
            </div>
            <div class="confirm" v-if="!canSub1">
                <a>确定</a>
            </div>
            <div class="webInfo">
                <img src="../../assets/img/gth.png" alt="" width="14">
                如有问题，请联系客服 010-86578868
            </div>
        </div>
        <bind-tel v-if="step===2" :change="true"></bind-tel>
        <div class="modal fade" v-bind:id="tips.id" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog modal-dialog-l" role="document">
                <div class="modal-content">
                    <div class="tip-man" v-if="tips.man===1">
                        <img src="../../assets/img/success_man.png" alt="">
                    </div>
                    <div class="tip-man" v-if="tips.man===2">
                        <img src="../../assets/img/error_man.png" alt="">
                    </div>
                    <div class="tips">
                        {{tips.info}}
                    </div>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import t from '../../assets/js/tools';
    import bindTel from './bind_tel.vue';

    export default {
        name: 'app',
        data() {
            return {
                step: 1,

                canSub1: false,
                yzmIpt: '',
                left_time: 60,
                canSendYzm: 1,
                telFlag: 1,

                code: '',
                country: '',
                mobile: '',
                hidMobile: '',

                tip: '',
                tips: {
                    id: 'edit_tip',
                    info: '',
                    man: 1
                }
            }
        },
        methods: {
            shMod: function (tips, man) {
                let _this = this;
                _this.tips.info = tips;
                _this.tips.man = man;
                $('#edit_tip').modal('show');
                setTimeout(function () {
                    $('#edit_tip').modal('hide');
                }, 1500);
            },
            getMobile: function () {
                let _this = this;
                t._get('users/update/mobile', {}, function (data) {
                    _this.code = data.body.data.code;
                    _this.country = data.body.data.country;
                    _this.hidMobile = data.body.data.hidMobile;
                    _this.mobile = data.body.data.mobile;
                });
            },
            sendYzm: function () {
                let _this = this;
                if (this.telFlag) {
                    t._get('users/update/mobile/confirm', {
                        code: _this.code,
                        country: _this.country,
                        mobile: _this.mobile,
                    }, function (data) {
                        if (data.body.error_code) {
                            _this.shMod('服务器繁忙，请稍后再试', 2);
                        } else {
                            _this.canSendYzm = false;
                            let timer = setInterval(() => {
                                _this.left_time--;
                                if (_this.left_time === 0) {
                                    _this.canSendYzm = true;
                                    _this.left_time = 60;
                                    clearInterval(timer)
                                }
                            }, 1000)
                        }
                    })

                } else {
                }
            },
            iptYzm: function () {
                this.tip = '';
                if (this.yzmIpt !== '') {
                    this.canSub1 = true;
                } else {
                    this.canSub1 = false;
                }
            },
            sub: function () {
                var _this = this;
                t._post('users/update/mobile/confirm', {
                    mobile: _this.mobile,
                    verify_code: _this.yzmIpt
                }, function (data) {
                    if (data.body.error_code) {
                        if (data.body.error_code === 10619) {
                            _this.tip = '验证码不正确';
                        } else {
                            _this.shMod('服务器繁忙，请稍后再试', 2);
                        }
                    } else {
                        _this.step = 2;
                    }
                });
            }
        },
        mounted: function () {
            this.$nextTick(function () {

            })
        },
        created() {
            this.getMobile();
        },
        components: {bindTel},
        watch: {}
    }
</script>