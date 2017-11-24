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
                color: #717171;
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
            margin-top: 15px;
        }
        .confirm {
            margin-top: 40px;
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
</style>

<template>
    <div class="bt">
        <div class="title">
            <div class="w800">
                修改绑定手机号
            </div>
        </div>
        <div class="w500">
            <div class="telType">
                <div class="a a1">
                    <p>旧手机号</p>
                    <input @blur="validateOld" type="text" v-model="oldIpt"/>
                </div>
            </div>
            <div class="telType">
                <div class="a a1">
                    <p>新手机号</p>
                    <input @input="showExtra=false" type="text" v-model="telType"/>
                    <i class="glyphicon glyphicon-triangle-bottom" @click="toggleExtra"></i>
                    <div class="extra" v-if="showExtra">
                        <div class="exist">
                            <ul>
                                <li @click="chooseAddress('中国(+86)')">
                                    中国(+86)
                                </li>
                                <li @click="chooseAddress('中国(+86)')">
                                    中国(+86)
                                </li>
                                <li @click="chooseAddress('日本(+88)')">
                                    日本(+88)
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tel">
                <input @blur="validateTel" type="text" v-model="telIpt" placeholder="请输入手机号">
            </div>
            <div class="yzm">
                <input v-model="yzmIpt" @input="hardValidateYzm" @blur="validateYzm" placeholder="请输入验证码" type="text">
                <a v-show="!canSendYzm">重新发送 {{left_time}}</a>
                <a @click="sendYmz" href="javascript:;" class="active" v-show="canSendYzm">发送验证码</a>
            </div>
            <div class="tips" v-show="oldTip.length!==0||yzmTip.length!==0||telTip.length!==0">
                {{oldTip + yzmTip + telTip}}
            </div>
            <div class="confirm active" v-if="canSub">
                <a @click="sub" href="javascript:;">确定</a>
            </div>
            <div class="confirm" v-if="!canSub">
                <a>确定</a>
            </div>
        </div>
    </div>
</template>

<script>
    //    import t from '../assets/js/tools';

    export default {
        name: 'app',
        data() {
            return {
                telType: '中国(+86)',
                showExtra: false,
                left_time: 60,
                canSendYzm: 1,
                yzm: 5215,
                canSub: false,
                yzmFlag: 0,
                yzmIpt: '',
                yzmTip: '',
                telFlag: 0,
                telIpt: '',
                telTip: '',
                oldIpt: '+86 ',
                oldFlag: 0,
                oldTip: ''
            }
        },
        methods: {
            // 显示或者隐藏额外地址
            toggleExtra: function () {
                if (this.showExtra) {
                    this.showExtra = false;
                } else {
                    this.showExtra = true;
                }
            },
            chooseAddress: function (telType) {
                this.telType = telType;
                this.showExtra = false;
            },
            // 发送验证码
            sendYmz: function () {
                if (this.telFlag) {
                    this.canSendYzm = false;
                    let timer = setInterval(() => {
                        this.left_time--;
                        if (this.left_time === 0) {
                            this.canSendYzm = true;
                            this.left_time = 60;
                            clearInterval(timer)
                        }
                    }, 1000)
                } else {
                    this.validateTel();
                }

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
            hardValidateYzm: function () {
                this.yzmTip = '';
                this.yzmFlag = 1;
            },
            validateTel: function () {
                let tel = this.telIpt;
                // 至少包含字母、符号或数字中的两项
                // 长度超过16位
                this.telTip = '';
                if (/^\d{10,}$/.test(tel)) {
                    this.telTip = '';
                    this.telFlag = 1;
                } else {
                    this.telTip = '请输入正确的手机号码。';
                    this.telFlag = 0;
                }
            },
            validateOld: function () {
                this.oldTip = '';
                if (this.oldIpt === '+86 123456789') {
                    this.oldTip = '';
                    this.oldFlag = 1;
                } else {
                    this.oldTip = '旧手机号输入有误。';
                    this.oldFlag = 0;
                }
            },
            sub: function () {

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
                if (this.oldFlag && this.yzmFlag && this.telFlag) {
                    this.canSub = true;
                } else {
                    this.canSub = false;
                }
            },
            pwFlag: function (e) {
                if (this.oldFlag && this.yzmFlag && this.telFlag) {
                    this.canSub = true;
                } else {
                    this.canSub = false;
                }
            },
            oldFlag: function (e) {
                if (this.oldFlag && this.yzmFlag && this.telFlag) {
                    this.canSub = true;
                } else {
                    this.canSub = false;
                }
            }
        }
    }
</script>