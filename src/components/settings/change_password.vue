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
            .clearfix {
                p {
                    float: left;
                    margin-bottom: 8px;
                    color: #999999;
                    font-size: 14px;
                    span {
                        color: #4D4D4D;
                    }
                }
                .tip {
                    float: right;
                    color: #F3433C;
                    font-size: 12px;
                }
            }
            .tipImg {
                width: 20px;
                height: 20px;
                position: absolute;
                top: 38px;
                right: -30px;
                img {
                    width: 100%;
                    height: 100%;
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

</style>

<template>
    <div class="fpw">
        <!--Do it!-->
        <div class="title">
            <div class="w800">
                修改密码
            </div>
        </div>
        <div class="w500">
            <div class="yzm">
                <div class="clearfix">
                    <p>
                        旧密码
                    </p>
                    <div class="tip">
                        {{oldTip}}
                    </div>
                </div>
                <input v-model="oldIpt" @blur="validateVal(1)" type="password">
                <div class="tipImg">
                    <img v-show="oldIconFlag===1" src="../../assets/img/l_dei.png" alt="">
                    <img v-show="oldIconFlag===2" src="../../assets/img/l_cuo.png" alt="">
                </div>
            </div>
            <div class="yzm">
                <div class="clearfix">
                    <p>
                        新密码
                    </p>
                    <div class="tip">
                        {{newTip}}
                    </div>
                </div>
                <input v-model="newIpt" @blur="validateVal(2)" placeholder="密码长度在6-18位"
                       type="password">
                <div class="tipImg">
                    <img v-show="newIconFlag===1" src="../../assets/img/l_dei.png" alt="">
                    <img v-show="newIconFlag===2" src="../../assets/img/l_cuo.png" alt="">
                </div>
            </div>
            <div class="yzm">
                <div class="clearfix">
                    <p>
                        确认密码
                    </p>
                    <div class="tip">
                        {{cfTip}}
                    </div>
                </div>
                <input v-model="cfIpt" @blur="validateVal(3)" type="password">
                <div class="tipImg">
                    <img v-show="cfIconFlag===1" src="../../assets/img/l_dei.png" alt="">
                    <img v-show="cfIconFlag===2" src="../../assets/img/l_cuo.png" alt="">
                </div>
            </div>
            <div class="confirm active">
                <a @click="sub" href="javascript:;">确定</a>
            </div>

        </div>
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

    export default {
        // 没啥大用处
        name: 'app',
        data() {
            return {
                canSub: false,

                oldFlag: 0,
                oldTip: '',
                oldIpt: '',
                oldIconFlag: 0,  // 0-初始不显示 1-正确 2-错误

                newFlag: 0,
                newTip: '',
                newIpt: '',
                newIconFlag: 0,

                cfFlag: 0,
                cfTip: '',
                cfIpt: '',
                cfIconFlag: 0,

                tips: {
                    id: 'edit_tip',
                    info: '',
                    man: 1
                }
            }
        },
        methods: {
            shMod: function (tips, man, cb) {
                let _this = this;
                _this.tips.info = tips;
                _this.tips.man = man;
                $('#edit_tip').modal('show');
                setTimeout(function () {
                    $('#edit_tip').modal('hide');
                }, 1500);
                setTimeout(function () {
                    cb && cb();
                }, 2300);
            },
            validateVal: function (a) {
                if (a === 1) {
                    // 验证旧密码
                    var _this = this;
                    console.log(this.oldIpt);
                    t.post('/signin', {username: t.getCookie('username'), password: this.oldIpt}, function (data) {
                        if (data.body.error_code) {
                            _this.oldTip = '原始密码输入错误';
                            _this.oldFlag = 0;
                            _this.oldIconFlag = 2;
                        } else {
                            _this.oldTip = '';
                            _this.oldFlag = 1;
                            _this.oldIconFlag = 1;
                        }
                    });
                }
                if (a === 2) {
                    // 验证新密码
//                    if (/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{16,}$/.test(this.newIpt)) {
                    if (/^[A-Za-z0-9_]{6,18}$/.test(this.newIpt)) {
                        this.newTip = '';
                        this.newFlag = 1;
                        this.newIconFlag = 1;
                    } else {
                        this.newTip = '密码格式有误';
                        this.newFlag = 0;
                        this.newIconFlag = 2;
                    }
                }
                if (a === 3) {
                    // 确认
                    if (this.newIpt === this.cfIpt && this.newIpt !== '') {
                        this.cfTip = '';
                        this.cfFlag = 1;
                        this.cfIconFlag = 1;
                    } else {
                        this.cfTip = '两次密码输入不一致';
                        this.cfFlag = 0;
                        this.cfIconFlag = 2;
                    }
                }
            },
            sub: function () {
                this.validateVal(1);
                this.validateVal(2);
                this.validateVal(3);

                var _this = this;
                if (this.oldFlag && this.newFlag && this.cfFlag) {
                    t._post('users/password', {old_password: this.oldIpt, password: this.newIpt}, function (data) {
                        if (data.body.error_code) {
                            _this.shMod('修改失败，请稍后再试', 2);
                        } else {
                            _this.shMod('修改成功', 1, function () {
                                history.go(-1)
                            });
                        }
                    })
                }
            }
        },
        mounted: function () {
            this.$nextTick(function () {

            })
        },
        created() {

        },
        components: {},
        watch: {}
    }
</script>