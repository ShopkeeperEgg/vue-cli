<style scoped="scoped" lang="less">

    .fpw {
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

    .w500 {
        background-color: #f9fbff;
        padding-bottom: 250px;
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
                top: 48px;
                right: 17px;
                &.active {
                    border: 1px solid #3D96FF;
                    color: #3D96FF;

                }
            }
        }
        .tips {
            text-align: center;
            color: #FF3636;
            font-size: 12px;
            transform: translateY(-70%);
        }
        .confirm {
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

    .tip_pre {
        transform: translateY(-10px);
        color: #F3433C;
        height: 20px;
        font-size: 12px;
        margin-left: 8px;
    }

    .pre-msg {
        text-align: center;
        margin-top: 20px;
        font-size: 12px;
        color: #999999;
    }
</style>

<template>
    <div class="fpw">
        <!--Do it!-->
        <div class="title">
            <div class="w800">
                忘记密码
            </div>
        </div>
        <div class="w500">
            <div class="step1" v-if="step===1">
                <div class="yzm">
                    <!--<p>-->
                    <!--您绑定的手机号 <span>+86 130*****123</span> 会收到一条含有验证码的信息-->
                    <!--</p>-->
                    <input v-model="gameId_ipt" @input="val_game_id" placeholder="请输入您的Game ID" type="text">
                </div>
                <div class="tip_pre">
                    {{tip_pre}}
                </div>
                <div class="confirm active" v-if="canSub_pre">
                    <a @click="sub_pre" href="javascript:;">确定</a>
                </div>
                <div class="confirm" v-if="!canSub_pre">
                    <a>确定</a>
                </div>
                <div class="pre-msg">
                    <img src="../../assets/img/gth.png" alt="" width="14">
                    {{public_tip}}
                </div>
            </div>
            <div class="step2" v-if="step===2">
                <div class="yzm">
                    <p>
                        您绑定的手机号 <span>+86 130*****123</span> 会收到一条含有验证码的信息
                    </p>
                    <input v-model="yzmIpt" @blur="validateYzm" placeholder="请输入验证码" type="text">
                    <a v-show="!canSendYzm">重新发送 {{left_time}}</a>
                    <a @click="sendYmz" href="javascript:;" class="active" v-show="canSendYzm">发送验证码</a>
                </div>
                <div class="yzm">
                    <p>
                        新密码
                    </p>
                    <input @blur="validatePw" v-model="pwIpt" placeholder="密码要求至少包含字母、符号或数字中的两项，且长度超过16位" type="text">
                </div>
                <div class="tips" v-show="yzmTip.length!==0||pwTip.length!==0">
                    {{yzmTip + pwTip}}
                </div>
                <div class="confirm active" v-if="canSub">
                    <a @click="sub" href="javascript:;">确定</a>
                </div>
                <div class="confirm" v-if="!canSub">
                    <a>确定</a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import t from '../../assets/js/tools';

    export default {
        // 没啥大用处
        name: 'app',
        data() {
            return {
                canSub_pre: false,
                gameId_ipt: '',
                tip_pre: '',
                step: 1,
                left_time: 60,
                canSendYzm: 1,
                yzm: 5215,
                canSub: false,
                yzmFlag: 0,
                yzmIpt: '',
                yzmTip: '',
                pwFlag: 0,
                pwIpt: '',
                pwTip: '',
                public_tip: '如有问题，请联系客服 010-86578868'
            }
        },
        methods: {
            // 校验gameId
            val_game_id: function () {
                this.tip_pre = '';
                if (this.gameId_ipt !== '') {
                    this.canSub_pre = true;
                } else {
                    this.canSub_pre = false;
                }
            },
            // 发送验证码
            sendYmz: function () {
                this.canSendYzm = false;
                let timer = setInterval(() => {
                    this.left_time--;
                    if (this.left_time === 0) {
                        this.canSendYzm = true;
                        this.left_time = 60;
                        clearInterval(timer)
                    }
                }, 1000)
            },
            // 校验验证码
            validateYzm: function () {
                this.yzmTip = '';
                if (+this.yzmIpt !== +this.yzm) {
                    this.yzmTip = '验证码输入有误。';
                    this.yzmFlag = 0;
                } else {
                    this.yzmTip = '';
                    this.yzmFlag = 1;
                }
            },
            validatePw: function () {
                let pw = this.pwIpt;
                this.pwTip = '';
                // 至少包含字母、符号或数字中的两项
                // 长度超过16位
                if (/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{16,}$/.test(pw)) {
                    this.pwTip = '';
                    this.pwFlag = 1;
                } else {
                    this.pwTip = '密码要求至少包含字母、符号或数字中的两项，且长度超过16位'
                    this.pwFlag = 0;
                }
            },
            sub: function () {
                alert(1)
            },
            sub_pre: function () {
                var _this = this;
                console.log(1);
                t.get('user', {username: this.gameId_ipt}, function (data) {
                    console.log(data);
                    if (data.body.error_code) {
                        if (data.body.error_code === 10614) {
                            _this.tip_pre = '用户不存在'
                        } else {
                            _this.tip_pre = '服务器繁忙'
                        }
                    } else {
                        _this.step = 2;
                    }
                    if (!data.body.data.mobile) {
                        _this.tip_pre = '该Game ID未绑定手机号，暂不可重设密码'
                    }
                })
            }
        },
        mounted: function () {
            this.$nextTick(function () {


            })
        },
        created() {

        },
        components: {},
        watch: {
            yzmFlag: function (e) {
                if (this.yzmFlag && this.pwFlag) {
                    this.canSub = true;
                } else {
                    this.canSub = false;
                }
            },
            pwFlag: function (e) {
                if (this.yzmFlag && this.pwFlag) {
                    this.canSub = true;
                } else {
                    this.canSub = false;
                }
            }
        }
    }
</script>