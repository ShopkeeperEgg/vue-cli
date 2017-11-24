<style scoped="scoped" lang="less">
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

    .record {
        width: 100%;
        background-color: #fff;
        min-height: 500px;
        padding-bottom: 100px;
        margin-bottom: 140px;
        .title1 {
            width: 100%;
            height: 46px;
            font-size: 16px;
            color: #4D4D4D;
            line-height: 46px;
            a {
                height: 100%;
                display: inline-block;
                text-align: center;
                line-height: 46px;
                position: relative;
                margin-left: 20px;
                margin-right: 200px;
                &.active {
                    color: #3D96FF;
                    &:after {
                        width: 40px;
                        height: 3px;
                        border-radius: 1.5px;
                        content: "";
                        position: absolute;
                        left: 50%;
                        transform: translateX(-50%);
                        background-color: #3D96FF;
                        bottom: 0;
                    }
                }
                &:last-child {
                    margin-left: 0;
                    margin-right: 0;
                }
            }
        }
        .content {
            min-height: 500px;
            background-color: #F9FBFF;
            position: relative;
            .p-info {
                .l {
                    width: 95px;
                    display: inline-block;
                    text-align: right;
                    color: #666666;
                    letter-spacing: 0.86px;
                    font-size: 12px;
                    height: 100%;
                }
                .r {
                    display: inline-block;
                    padding-left: 30px;
                    font-size: 14px;
                    color: #4D4D4D;
                    font-weight: 500;
                    input {
                        width: 300px;
                        height: 46px;
                        border: none;
                    }
                    span {
                        display: inline-block;
                        width: 247px;
                    }
                    a {
                        display: inline-block;
                        width: 120px;
                        height: 36px;
                        text-align: center;
                        line-height: 36px;
                        background-color: #3D96FF;
                        color: white;
                        font-size: 16px;
                        border-radius: 4px;
                        border: 1px solid #3D96FF;
                        &.cancel {
                            background-color: transparent;
                            border: 1px solid #3D96FF;
                            color: #3D96FF;
                        }
                    }

                }
                .item {
                    margin-bottom: 28px;
                }
                .avd {
                    padding-top: 30px;
                    .l {
                        vertical-align: top;
                        padding-top: 3px;
                    }
                    .avd_img {
                        width: 80px;
                        height: 80px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
                .dot {
                    font-weight: 700;
                    font-size: 30px;
                    vertical-align: bottom;
                }
                .pwd {
                    line-height: 36px;
                }
                .tips {
                    font-size: 12px;
                    color: #999999;
                    margin-top: -15px;
                    padding-left: 125px;
                    margin-bottom: 15px;
                }
            }
            .p-address {
                .tr1 {
                    width: 140px;
                    padding: 15px 20px;
                    float: left;
                }
                .tr11 {
                    padding: 15px 20px;
                    float: left;
                    width: 100px;
                }
                .tr2 {
                    word-break: break-all;
                    padding: 15px 20px;
                    width: 470px;
                    float: left;
                }
                .tr3 {
                    word-break: break-all;
                    float: left;
                }
                .thead {
                    background-color: #F9FBFF;
                    color: #999999;
                    .tr3 {
                        padding: 11px 0 0;
                        a {
                            width: 80px;
                            height: 28px;
                            display: inline-block;
                            background-color: #3D96FF;
                            border-radius: 4px;
                            font-size: 12px;
                            color: #FFFFFF;
                            text-align: center;
                            line-height: 28px;
                        }
                    }
                }
                .card {
                    margin-bottom: 8px;
                    background-color: #fff;
                    .tr11 {
                        color: #999999;
                    }
                    .tr2 {
                        font-size: 14px;
                        color: #999999;
                    }
                    .tr3 {
                        padding-top: 14px;
                        color: #3D96FF;
                        text-align: right;
                        width: 70px;
                        span {
                            vertical-align: middle;
                        }
                    }
                }
                .editInfo {
                    .tr1 {
                        padding-right: 17px;
                        textarea {
                            background-color: #F5F5F5;
                            border: none;
                            display: inline-block;
                            width: 103px;
                            word-wrap: break-word;
                            padding-left: 8px;
                            padding-top: 4px;
                        }
                    }
                    .tr2 {
                        textarea {
                            background-color: #F5F5F5;
                            border: none;
                            width: 520px;
                            word-wrap: break-word;
                            padding-left: 8px;
                            padding-top: 4px;

                        }
                    }
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
    <div>
        <div class="title">
            <div class="w800">
                账号设置
            </div>
        </div>
        <div class="w800">
            <div class="record">
                <div class="title1">
                    <a @click="editIndex=1" v-bind:class="{'active':editIndex === 1}"
                       href="javascript:;">个人信息</a>
                    <a @click="editIndex=2" v-bind:class="{'active':editIndex === 2}"
                       href="javascript:;">提现地址</a>
                </div>
                <div class="content">
                    <div class="p-info" v-show="editIndex===1">
                        <div class="item avd">
                            <div class="l">头像</div>
                            <div class="r">
                                <div class="avd_img">
                                    <img v-bind:src="user_avd" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="l">
                                Game ID
                            </div>
                            <div class="r">
                                <div class="" v-show="isEditingId===false">
                                    <span>{{user_Id}}</span>
                                    <!--<a href="javascript:;" @click="isEditingId=true">修改</a>-->
                                </div>
                                <div class="edit" v-show="isEditingId">
                                    <input v-model="user_Id_temp" type="text">
                                    <a href="javascript:;" @click="cancelEdit" class="cancel">取消</a>
                                    <a href="javascript:;" @click="confirmEdit">确认</a>
                                </div>
                            </div>
                        </div>
                        <div class="tips" v-show="isEditingId">
                            <img src="../../assets/img/gth.png" alt="" width="14">
                            Game ID 只能修改一次，全球独有
                        </div>
                        <div class="item">
                            <div class="l">
                                绑定手机号
                            </div>
                            <div class="r" v-if="mobile">
                                <span>{{mobile}}</span>
                                <a href="/#/en/settings/change">修改</a>
                            </div>
                            <div class="r" v-if="!mobile">
                                <span>未绑定</span>
                                <a href="/#/en/settings/bind">绑定</a>
                            </div>
                        </div>
                        <div class="item pwd">
                            <div class="l">
                                登录密码
                            </div>
                            <div class="r">
                                <span class="dot">·············</span>
                                <a href="/#/en/settings/password/change">修改</a>
                            </div>
                        </div>
                    </div>
                    <div class="p-address" v-show="editIndex===2">
                        <div class="thead clearfix">
                            <div class="tr1">备注</div>
                            <div class="tr11">类别</div>
                            <div class="tr2">地址</div>
                            <div class="tr3">
                                <a href="/#/en/settings/add">添加地址</a>
                            </div>
                        </div>
                        <div v-show="!!(btcArr.length||ethArr.length)" class="card clearfix"
                             v-for="item in btcArr">
                            <div class="showInfo">
                                <div class="tr1">{{item.remark}}</div>
                                <div class="tr11">BTC</div>
                                <div class="tr2">
                                    {{item.address}}
                                </div>
                                <div class="tr3">
                                    <a href="javascript:;" @click="deleteAddress(0,item.address)"><img
                                            src="../../assets/img/del.png" alt="" height="16">
                                        <span>删除</span></a>
                                </div>
                            </div>
                        </div>
                        <div v-show="!!(btcArr.length||ethArr.length)" class="card clearfix"
                             v-for="item in ethArr">
                            <div class="showInfo">
                                <div class="tr1">{{item.remark}}</div>
                                <div class="tr11">ETH</div>
                                <div class="tr2">
                                    {{item.address}}
                                </div>
                                <div class="tr3">
                                    <a href="javascript:;" @click="deleteAddress(1,item.address)"><img
                                            src="../../assets/img/del.png" alt="" height="16">
                                        <span>删除</span></a>
                                </div>
                            </div>
                        </div>
                        <none v-show="!(btcArr.length||ethArr.length)"></none>
                    </div>

                </div>

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
    import none from '../none';

    export default {
        name: 'app',
        data() {
            return {
                editIndex: 1,
                user_Id: '',
                user_Id_temp: '',
                user_avd: '',
                mobile: '',
                isEditingId: false,
                btcArr: [],
                ethArr: [],
                tips: {
                    id: 'edit_tip',
                    info: '',
                    man: 1
                }
            }
        },
        methods: {
            // 确认编辑gameId
            confirmEdit: function () {
                this.isEditingId = false;
                this.user_Id = this.user_Id_temp;
                this.editInfo();
            },
            cancelEdit: function () {
                this.isEditingId = false;
                this.user_Id_temp = this.user_Id;
            },
            // 显示删除模态框
            shMod: function (tips, man) {
                let _this = this;
                _this.tips.info = tips;
                _this.tips.man = man;
                $('#edit_tip').modal('show');
                setTimeout(function () {
                    $('#edit_tip').modal('hide');
                }, 1500);
            },
            // 删除地址
            deleteAddress: function (coin_type, addr) {
                let _this = this;
                t._post('users/coin/withdraw/addr/del', {coin_type, addr}, function (data) {
                    let error_code = data.body.error_code;
                    if (error_code) {
                        if (error_code === 10628) {
                            _this.shMod('提现地址不存在', 2);
                        } else {
                            _this.shMod('发生错误，请稍后再试', 2);
                        }
                        _this.refreshAddress();
                    } else {
                        _this.shMod('删除成功', 1);
                        _this.refreshAddress();
                    }
                })
            },
            // 更新地址
            refreshAddress: function () {
                var _this = this;
                t._get('users/coin/withdraw/info', {coin_type: 0}, function (data) {
                    _this.btcArr = data.body.data.address;
                });
                t._get('users/coin/withdraw/info', {coin_type: 1}, function (data) {
                    _this.ethArr = data.body.data.address;
                });
            },
            // 更新个人信息
            refreshPersonalInfo: function () {
                var _this = this;
                t._get('user', {uid: t.getCookie('uid')}, function (data) {
                    console.log(data);
                    _this.user_avd = data.body.data.avatar;
                    _this.user_Id = data.body.data.username;
                    _this.user_Id_temp = data.body.data.username;
                    if (data.body.data.mobile) {
                        let mobileArr = data.body.data.mobile.split(',');
                        let mobileStr = mobileArr[2];
                        let xing = '';
                        for (var i = 0; i < mobileStr.length - 7; i++) {
                            xing += "*";
                        }
                        mobileStr = mobileStr.substr(0, 3) + xing + mobileStr.substr(-4);
                        _this.mobile = mobileArr[0] + ' ' + mobileStr;
                    }
                });
            },
            // 用户编辑个人资料
            editInfo: function () {
                let _this = this;
                t._post('users/profile', {username: _this.user_Id_temp}, function (data) {
                    console.log(data);
                })
            }
        },
        mounted: function () {
            this.$nextTick(function () {

            })
        },
        created() {
            this.refreshPersonalInfo();
            this.refreshAddress();
        },
        components: {none},
        watch: {
            // a: function (val, oldVal) {
            // },
            // obj: {
            //    handler: function (val, oldVal) { /* ... */ },
            //    deep: true
            // }
        }
    }
</script>