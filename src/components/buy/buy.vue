<style scoped="scoped" lang="less">

    .buy {
        > .title {
            width: 100%;
            background-color: #FAFAFA;
            height: 60px;
            box-shadow: rgba(0, 0, 0, .5) 0 -1px 10px;
            margin-bottom: 26px;
            text-align: left;
            .w800 {
                line-height: 60px;
                font-size: 20px;
                font-weight: 500;
                color: #4D4D4D;
                span {
                    display: inline-block;
                    margin-left: 14px;
                    margin-right: 14px;
                    font-size: 18px;
                    color: #4D4D4D;
                    font-weight: 400;
                }
                i {
                    font-size: 18px;
                    color: #4D4D4D;
                    font-weight: 400;
                }
            }
        }
        .w500 {
            padding-top: 30px;
            padding-bottom: 60px;
            .goods-info {
                width: 100%;
                padding-top: 20px;
                padding-left: 30px;
                background-color: #F9FBFF;
                margin-bottom: 20px;
                .avd {
                    width: 45px;
                    display: inline-block;
                    vertical-align: top;
                    margin-right: 8px;
                    img {
                        width: 100%;
                    }
                }
                .info {
                    display: inline-block;
                    vertical-align: top;
                    > div {
                        font-size: 14px;
                        color: #666666;
                        font-family: 'PingFang HK', '微软雅黑';
                        margin-bottom: 8px;
                    }
                    .title {
                        font-size: 16px;
                        color: #4A4A4A;
                        font-family: 'Multiple', 'PingFang SC', '微软雅黑';
                    }
                }
            }
            .ipt-area {
                margin-bottom: 20px;
                background-color: #fff;
                h3 {
                    color: #717171;
                    font-weight: 400;
                    font-size: 12px;
                    margin: 0;
                    margin-bottom: 8px;
                }
                .input {
                    width: 100%;
                    padding: 11px 20px 13px;
                    background-color: #F9FBFF;
                    input {
                        width: 100%;
                        border: none;
                        background-color: #F9FBFF;
                        text-align: right;
                        display: block;
                    }
                }
                &.ipt-amount {
                    color: #4D4D4D;
                    .tips1 {
                        color: #666666;
                        font-size: 12px;
                        text-align: right;
                        span {
                            color: #3D96FF;
                            cursor: pointer;
                        }
                    }
                    .tips2 {
                        color: #FF3636;
                        font-size: 12px;
                        text-align: right;
                        span {
                            color: #3D96FF;
                            cursor: pointer;
                        }
                    }
                    &::placeholder {
                        font-size: 14px;
                        color: #999999;
                    }
                }
                &.ipt-current {
                    input {
                        font-size: 16px;
                        color: #FF8000;
                    }
                }
            }
            .total {
                margin-top: 30px;
                .fl {
                    float: left;
                    color: #707070;
                    font-size: 12px;
                }
                .fr {
                    float: right;
                    color: #FF8000;
                    font-size: 24px;
                    font-weight: 500;
                }

            }
            .sub {
                margin-top: 40px;
                display: block;
                width: 100%;
                height: 40px;
                line-height: 40px;
                text-align: center;
                background-color: #3D96FF;
                color: #FFFFFF;
                font-size: 14px;
                font-weight: 500;
                font-family: "PingFang HK", "微软雅黑";
                &.dis {
                    background-color: #A6A9B0;
                    cursor: default;
                }
            }
            .tip {
                text-align: center;
                font-size: 12px;
                color: #999999;
                margin-top: 20px;
            }
        }
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
    }

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
    <div class="buy">
        <!--Do it!-->
        <div class="title">
            <div class="w800">
                <span>{{cnm.title}}</span>
            </div>
        </div>
        <div class="w500">
            <div class="goods-info">
                <div class="avd">
                    <img :src="cnm.avatar" alt="">
                </div>
                <div class="info">
                    <div class="title">
                        {{cnm.coin_name}}：{{cnm.name}}
                    </div>
                    <div class="info1">
                        {{cnm.title}}时间: {{cnm.time_desc}}
                    </div>
                    <div class="info2">
                        {{cnm.title}}数量: {{cnm.sell_count}} {{cnm.coin_name}}
                    </div>
                    <div class="info3">
                        已有 {{cnm.people_count}} 人已购买
                    </div>
                </div>
            </div>
            <div class="ipt-area ipt-current">
                <h3>当前价格</h3>
                <div class="input">
                    <input type="text" readonly
                           v-bind:value="cnm.in_price/100000000+(cnm.coin_type == 0 ? ' BTC' : ' ETH')">
                </div>
            </div>
            <div class="ipt-area ipt-amount">
                <h3>购买数量</h3>
                <div class="input">
                    <input min="1" v-model="buy_count" type="number"
                           v-bind:placeholder="'当前最多能购买 '+limit2.count+cnm.coin_name">
                    <div class="tips tips1" v-show="limit1.flag">
                        当前余额最多可购买 <span @click="ts(limit1.count)">{{limit1.count}}</span> {{cnm.coin_name}}
                    </div>
                    <div class="tips tips2" v-show="limit2.flag">
                        已超过最大发售数量 <span @click="ts(limit2.count)">{{limit2.count}}</span> {{cnm.coin_name}}
                    </div>
                </div>
            </div>
            <div class="total clearfix">
                <div class="fl">合计</div>
                <div class="fr">{{(cnm.in_price * buy_count) / 100000000}} {{cnm.coin_type == 0 ? 'BTC' : 'ETH'}}</div>
            </div>
            <a v-if="canBuy" class="sub" @click="sub" href="javasript:;">提交订单</a>
            <a v-if="!canBuy" class="dis sub" href="javasript:;">提交订单</a>
            <div class="tip">
                <img src="../../assets/img/gth.png" alt="" width="14">
                {{cnm.type_notice}}
            </div>
        </div>
        <div class="modal fade" id="buyConfirmModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog modal-dialog-buy" role="document">
                <div class="modal-content">
                    <div class="confirm">
                        确认购买
                    </div>
                    <div class="d clearfix">
                        <div class="d1">当前余额：</div>
                        <div class="d2">{{cnm.coin_type == 0 ? (wlData.btc_avail + ' BTC') : (wlData.eth_avail + ' ETH')}}</div>
                    </div>
                    <div class="d clearfix">
                        <div class="d1">需付款：</div>
                        <div class="d2 d22">
                            {{(orderData.total_amount / 100000000).toFixed(8) + (cnm.coin_type == 0 ? ' BTC' : ' ETH')}}
                        </div>
                        <br>
                        <div class="d3">
                            (交易手续费 ：{{(orderData.fee / 100000000).toFixed(8) + (cnm.coin_type == 0 ? ' BTC' : ' ETH')}})
                        </div>
                    </div>
                    <div class="m-tip" v-if="isYEBZ===false">
                        15分钟内未付款订单将被取消
                    </div>
                    <div class="m-tip" v-if="isYEBZ===true">
                        <img src="../../assets/img/gth.png" alt="" width="14">
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
                currentPrice: 0.024,
                itemId: 0,
                cnm: {},
                status: 1, // 1-预售 2-抢购
                canBuy: false, // 是否可以进行购买
                buy_count: '',
                // 当前余额最多可购买
                limit1: {
                    count: 10000,
                    flag: false
                },
                // 超过最大发售量
                limit2: {
                    count: 50000,
                    flag: false
                },

                isYEBZ: true,
                tips: {
                    id: 'trade_tip',
                    info: '',
                    man: 1
                },
                orderData: {},
                wlData: {},
                orderId: 0,
                isYs: false
            }
        },
        methods: {
            shMod: function (tips, man) {
                let _this = this;
                _this.tips.info = tips;
                _this.tips.man = man;
                $('#trade_tip').modal('show');
                setTimeout(function () {
                    $('#trade_tip').modal('hide');
                }, 1500);
            },
            // 绑定事件的方法
            sub: function () {
                var _this = this;
                console.log(_this.status);
                if (_this.status == 2) {
                    // 预售
                    t._post('game/product/presell/order', {
                        product_id: _this.itemId,
                        quantity: _this.buy_count
                    }, function (data) {
                        console.log(data);
                        if (data.body.error_code) {
                            _this.shMod('提交失败', 2)
                        } else {
                            _this.orderData = data.body.data;
                            _this.wlData = data.body.common;
                            _this.orderId = data.body.data.id;
                            $('#buyConfirmModal').modal('show');
                        }
                    });
                }
                if (_this.status == 4) {
                    // 购买
                    t._post('game/product/buy/order', {
                        product_id: _this.itemId,
                        quantity: _this.buy_count
                    }, function (data) {
                        console.log(data);
                        if (data.body.error_code) {
                            _this.shMod('提交失败', 2)
                        } else {
                            _this.orderData = data.body.data;
                            _this.wlData = data.body.common;
                            _this.orderId = data.body.data.id;
                            $('#buyConfirmModal').modal('show');
                        }
                    });
                }

            },
            // 点击数量自动填充
            ts: function (amount) {
                this.buy_count = amount;
            },
            confirmBuy: function () {
                var _this = this;

                $('#buyConfirmModal').modal('hide');
                if (_this.isYs === true) {
                    // 预售进行支付
                    t._post('game/product/presell', {order_id: _this.orderId}, function (data) {
                        if (data.body.error_code) {
                            _this.shMod('支付失败', 2);
                        } else {
                            location.href = "#/en/pay/" + _this.orderId;
                        }
                    });
                } else {
                    // 购买进行支付
                    t._post('game/product/buy', {order_id: _this.orderId}, function (data) {
                        if (data.body.error_code) {
                            _this.shMod('支付失败', 2);
                        } else {
                            location.href = "#/en/pay/" + _this.orderId;
                        }
                    });
                }
//                setTimeout(function () {
//                    location.href = "/#/en/pay/" + _this.orderId;
//                }, 500)
            },
            // 绑定事件的方法
            // 去充值
            goCz: function () {
                $('#buyConfirmModal').modal('hide');
                setTimeout(function () {
                    location.href = "#/en/recharge";
                }, 500)
            },
            // 点击叉叉后，前往等待付款页面
            goPageWait: function () {
                var _this = this;
                if (this.msg === 'pay') {
                    location.reload(true);
                } else {
                    $('#buyConfirmModal').modal('hide');
                    setTimeout(function () {
                        location.href = "#/en/pay/" + _this.orderId;
                    }, 500)
                }
            }
        },
        mounted: function () {
            this.$nextTick(function () {

            });
        },
        beforeDestroy() {
        },
        created() {
            var _this = this;
            this.itemId = this.$route.params.itemId;
            t._get('game/product/order/info', {product_id: _this.itemId}, function (data) {
                _this.cnm = data.body.data;
                console.log(_this.cnm);
                _this.limit2.count = _this.cnm.sell_count;
                _this.limit1.count = _this.cnm.max_bywallet;
                _this.status = _this.cnm.type;
                if (+_this.cnm.tyoe === 2) {
                    _this.isYs = true;
                } else {
                    _this.isYs = false;
                }


            })
        },
        components: {},
        watch: {
            buy_count: function (val) {
                let price = (this.cnm.in_price * this.buy_count) / 100000000;
                let count = this.buy_count;
                let standard_l = this.limit1.count;
                let standard_h = this.limit2.count;
                if (standard_l >= standard_h) {
                    // 土豪
                    if (count > standard_h) {
                        this.limit1.flag = false;
                        this.limit2.flag = true;
                        this.canBuy = false;
                        this.isYEBZ = false;
                    } else {
                        this.limit1.flag = false;
                        this.limit2.flag = false;
                        this.canBuy = true;
                        this.isYEBZ = false;
                    }
                } else {
                    // 穷逼
                    if (count > standard_h) {
                        this.limit1.flag = false;
                        this.limit2.flag = true;
                        this.canBuy = false;
                        this.isYEBZ = true;
                    } else if (count <= standard_h && count > standard_l) {
                        this.limit1.flag = true;
                        this.limit2.flag = false;
                        this.canBuy = true;
                        this.isYEBZ = true;

                    } else {
                        this.limit1.flag = false;
                        this.limit2.flag = false;
                        this.canBuy = true;
                        this.isYEBZ = false;
                    }
                }
                if (+count === 0) {
                    this.canBuy = false;
                }
                this.buy_count = Math.floor(this.buy_count)
            }
        },
    }
</script>