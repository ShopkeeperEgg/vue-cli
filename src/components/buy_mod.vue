<style scoped="scoped" lang="less">
    .modal-dialog-buy {
        width: 100%;
        height: 100%;
        .modal-content {
            width: 360px;
            padding: 20px 30px 24px;
            border-radius: 16px;
            border: none;
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            background-color: #F9FBFF;
        }
        .confirm {
            font-size: 16px;
            color: #4D4D4D;
            text-align: center;
            font-weight: 500;
            margin-bottom: 20px;
        }
        .d {
            margin-bottom: 8px;
            color: #4A4A4A;
            font-size: 14px;
            .d1 {
                float: left;
            }
            .d2 {
                float: right;
                text-align: right;
            }
            .d22 {
                font-weight: 500;
            }
            .d3 {
                float: right;
                text-align: right;
                color: #4D4D4D;
                margin-top: 8px;
            }
        }
        .m-tip {
            margin-top: 30px;
            text-align: center;
            font-size: 12px;
            color: #999999;
            margin-bottom: 10px;
            a {
                color: #3D96FF;
            }
        }
        .dd {
            margin-bottom: 30px;
            .address {
                word-break: break-all;
                span {
                    display: inline-block;
                    margin-right: 8px;
                    font-weight: 500;
                }
            }
        }
        .cf-btn {
            a {
                width: 100%;
                display: block;
                height: 40px;
                font-size: 16px;
                text-align: center;
                border-radius: 4px;
                line-height: 40px;
                font-weight: 500;
                background-color: #3D96FF;
                color: white;
            }
            &.yebz {
                a {
                    background-color: #A6A9B0;
                    cursor: default;
                }
            }
        }
        .close {
            position: absolute;
            top: 10px;
            right: 25px;
            font-size: 30px;
        }
    }
</style>

<template>
    <div>
        <div class="modal fade" id="buyConfirmModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog modal-dialog-buy" role="document">
                <div class="modal-content">
                    <div class="confirm">
                        确认购买
                    </div>
                    <div class="d clearfix">
                        <div class="d1">当前余额：</div>
                        <div class="d2">20.12 BTC</div>
                    </div>
                    <div class="d clearfix">
                        <div class="d1">需付款：</div>
                        <div class="d2 d22">3.00 BTC</div>
                        <br>
                        <div class="d3">(交易手续费 ：0.00 BTC)</div>
                    </div>
                    <div class="m-tip" v-if="isYEBZ===false">
                        15分钟内未付款订单将被取消
                    </div>
                    <div class="m-tip" v-if="isYEBZ===true">
                        <img src="../assets/img/gth.png" alt="" width="14">
                        当前余额不足，<a href="javascript:;" @click="goCz">立即充值</a>
                    </div>
                    <div class="cf-btn" v-if="isYEBZ===false">
                        <a href="javascript:;" @click="confirmBuy">确认付款</a>
                    </div>

                    <div class="cf-btn yebz" v-if="isYEBZ===true">
                        <a href="javascript:;">确认付款</a>
                    </div>


                    <button @click="goPageWait" type="button" class="close" data-dismiss="modal"
                            aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    //    import t from '../assets/js/tools';

    export default {
        // 没啥大用处
        name: 'buyConfirmModal',
        data() {
            return {
                title: '我是一个小毛驴',
                isYEBZ: true,
                id: 0
            }
        },
        methods: {
            // 绑定事件的方法
            // 去充值
            goCz: function () {
                $('#buyConfirmModal').modal('hide');
                setTimeout(function () {
                    location.href = "/#/en/recharge";
                }, 500)
            },
            // 点击叉叉后，前往等待付款页面
            goPageWait: function (cb) {

            }
        },
        mounted: function () {
            this.$nextTick(function () {
                // 可以在此为所欲为
                //对DOM的操作放这
            })
        },
        created() {
            this.id = this.orderId;
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
        props: ['orderId', 'msg']
    }
</script>