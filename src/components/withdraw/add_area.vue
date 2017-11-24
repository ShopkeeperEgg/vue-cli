<style scoped="scoped" lang="less">
    .btnA {
        margin-top: 30px;
        margin-bottom: 30px;
        text-align: center;
        a {
            width: 150px;
            height: 40px;
            border: 1px solid #4A90E2;
            display: inline-block;
            margin: 0 10px;
            border-radius: 4px;
            color: #4A90E2;
            line-height: 40px;
            font-size: 16px;
            font-weight: 500;
            &.active {
                color: white;
                background-color: #4A90E2;
            }

        }
    }

    .address {
        margin-bottom: 20px;
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
            &::placeholder {
                font-size: 12px;
                color: #9B9B9B;
            }
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
            top: 50%;
            transform: translateY(-50%);
            padding: 10px;
        }
    }

    .d {
        color: #717171;
        font-size: 12px;
        margin-bottom: 8px;
        .d1 {
            float: left;
        }
        .d2 {
            float: right;
            text-align: right;
        }
    }

    .withdrawBtn {
        width: 500px;
        height: 40px;
        border-radius: 2px;
        color: white;
        background-color: #3D96FF;
        display: block;
        text-align: center;
        line-height: 40px;
        font-size: 14px;
        margin-top: 40px;
        &.dis {
            background-color: #9B9B9B;
            cursor: default;
        }
    }
</style>

<template>
    <div>
        <div class="w500">
            <div class="btnA">
                <a href="javascript:;" @click="index_w=0" v-bind:class="{'active':index_w===0}">
                    BTC
                </a>
                <a href="javascript:;" @click="index_w=1" v-bind:class="{'active':index_w===1}">
                    ETH
                </a>
            </div>
            <div class="address">
                <p>备注名称</p>
                <div class="a a1">
                    <input type="text" v-model="remark"/>
                    <i class="hide glyphicon glyphicon-triangle-bottom"></i>
                </div>
            </div>
            <div class="address">
                <p>地址</p>
                <div class="a a2">
                    <input type="text" v-model="address"/>
                </div>
            </div>
            <a v-if="!(remark&&address)" class="withdrawBtn dis">
                确认添加
            </a>
            <a v-if="remark&&address" @click="add" href="javascript:;" class="withdrawBtn">
                确认添加
            </a>
        </div>
        <tips :model_info="tips_info_0"></tips>
        <tips :model_info="tips_info_1"></tips>
        <tips :model_info="tips_info_x"></tips>
    </div>
</template>

<script>
    import t from '../../assets/js/tools';
    import tips from '../tips'

    export default {
        name: 'app',
        data() {
            return {
                status_s: '',
                index_w: 0, // 0-提现BTC 1-提现ETH
                canAdd: false,
                remark: '',
                address: '',
                tips_info_1: {
                    id: 'addrMod_1',
                    tips: '地址无效',
                    man: 2
                },
                tips_info_0: {
                    id: 'addrMod_0',
                    tips: '地址添加成功',
                    man: 1
                },
                tips_info_x: {
                    id: 'addrMod_x',
                    tips: '错误',
                    man: 2
                }
            }
        },
        methods: {
            modSh: function (id, status) {
                $('#' + id).modal('show');
                setTimeout(function () {
                    $('#' + id).modal('hide');
                }, 2000)
                if (status) {
                    setTimeout(function () {
                        history.go(-1)
                    }, 2800)
                }
            },
            add: function () {
                var addr = this.address;
                var remark = this.remark;
                var coin_type = this.index_w;
                var _this = this;
                t._post('users/coin/withdraw/addr', {addr, remark, coin_type}, function (data) {
                    if (data.body.error_code) {
                        if (data.body.error_code === 10624) {
                            _this.modSh('addrMod_1');
                        } else {
                            _this.modSh('addrMod_x');
                        }
                    } else {
                        _this.modSh('addrMod_0', 1);
                    }
                })
            }
        },
        mounted: function () {
            this.$nextTick(function () {
            })
        },
        created() {
            this.status_s = this.status;
        },
        components: {tips},
        watch: {
            // a: function (val, oldVal) {
            // },
            // obj: {
            //    handler: function (val, oldVal) { /* ... */ },
            //    deep: true
            // }
        },
        props: ['status']
    }
</script>