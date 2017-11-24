<style scoped="scoped" lang="less">
    body {
        background-color: #fff;
    }

    .wal-record {
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
                min-height: 480px;
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
        .record {
            width: 100%;
            background-color: #fff;
            min-height: 500px;
            margin-bottom: 140px;
            .title {
                width: 100%;
                height: 46px;
                font-size: 14px;
                color: #848484;
                line-height: 46px;
                background-color: #fff;
                a {
                    height: 100%;
                    display: inline-block;
                    text-align: center;
                    line-height: 46px;
                    position: relative;
                    margin-right: 211px;

                    &:first-child {
                        margin-left: 20px;
                    }
                    &:last-child {
                        margin-right: 0;
                    }
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
                }
            }
            .money {
                background-color: #F9FBFF;
                min-height: 500px;
                font-family: 'PingFang HK', '微软雅黑';
                .th {
                    padding: 0 20px;
                    color: #999999;
                    font-size: 14px;
                    font-family: 'PingFang HK', '微软雅黑';
                    .i {
                        line-height: 50px;
                        display: inline-block;
                    }
                }
                .item {
                    .card {
                        padding: 0 20px;
                        margin-bottom: 8px;
                        background-color: #fff;
                        .goods-info {
                            font-size: 14px;
                            color: #1A1A1A;
                            line-height: 44px;
                            border-bottom: 1px dashed #EBF2FF;
                            > div {
                                display: inline-block;
                            }
                            .name {
                                img {
                                    width: 24px;
                                    height: 24px;
                                }
                            }
                            .status {
                                .st1 {
                                    color: #38CEAE;
                                }
                                .st2 {
                                    color: #3D96FF;
                                }
                                .st3 {
                                    color: #4D4D4D;
                                }
                                .st4 {
                                    display: inline-block;
                                    background-color: #3D96FF;
                                    padding: 2px 7px;
                                    color: white;
                                    line-height: 20px;
                                    border-radius: 2px;
                                }
                            }
                            .ir {
                                font-size: 18px;
                                color: #333333;
                                font-weight: 500;
                                font-family: 'PingFang SC', '微软雅黑';

                            }
                        }
                        .goods-status {
                            padding-top: 10px;
                            padding-bottom: 10px;
                            color: #999999;
                            font-size: 12px;
                            .i180 {
                                display: inline-block;
                            }
                            .buy-time {
                                display: inline-block;
                                vertical-align: top;
                            }
                        }
                    }
                    .block {
                        width: 800px;
                        height: 500px;
                        text-align: center;
                        img {
                            width: 180px;
                            margin-top: 130px;
                            margin-bottom: 14px;
                        }
                        p {
                            font-size: 14px;
                            color: #999999;
                        }
                    }
                }
                .i150 {
                    width: 150px;
                }
                .i160 {
                    width: 160px;
                }
                .i170 {
                    width: 170px;
                }
                .i100 {
                    width: 100px;
                }
                .i160 {
                    width: 160px;
                }
                .i180 {
                    width: 180px;
                }
                .ir {
                    text-align: right;
                }
            }
            .zr {
                .zr-filter {
                    width: 800px;
                    height: 60px;
                    a {
                        line-height: 60px;
                        padding: 20px;
                        margin-left: 20px;
                        color: #848484;
                        position: relative;
                        &:last-child {
                            margin-left: 70px;
                        }
                        &.active {
                            font-weight: 500;
                            color: #38CEAE;
                            &:after {
                                content: '';
                                width: 40px;
                                height: 3px;
                                border-radius: 1.5px;
                                background-color: #38CEAE;
                                position: absolute;
                                left: 50%;
                                transform: translateX(-50%);
                                bottom: 0;
                            }
                        }
                    }
                    .time-sel {
                        height: 40px;
                        box-sizing: border-box;
                        display: inline-block;
                        margin-left: 153px;
                        letter-spacing: -3px;
                        > div {
                            letter-spacing: 0;
                            background-color: #fff;
                            line-height: 40px;
                            text-align: center;
                            width: 176px;
                            display: inline-block;
                            p {
                                color: #999999;
                                font-size: 12px;
                                display: inline-block;
                                margin: 0;
                                padding: 0;
                            }
                            span {
                                color: #4D4D4D;
                                font-size: 12px;
                            }
                        }
                        .fl {
                            display: inline-block;
                        }
                        .line {
                            display: inline-block;
                            margin-left: 10px;
                            margin-right: 10px;
                            width: 1px;
                            height: 24px;
                            background-color: #CCCCCC;
                            vertical-align: middle;
                        }
                        .fr {
                            display: inline-block;
                        }
                    }
                }
                .space {
                    width: 800px;
                    height: 10px;
                    background-color: white;
                }
                .zr-tab-cur {
                    .card {
                        .goods-info {
                            .ir {
                                font-size: 14px;
                                color: #333;
                                font-weight: 400;
                            }
                        }
                        .goods-status {
                            .buy-time {
                                vertical-align: middle;
                            }
                            a {
                                width: 56px;
                                height: 24px;
                                border: 1px solid #3D96FF;
                                font-size: 12px;
                                font-family: 'PingFang HK', '微软雅黑';
                                line-height: 24px;
                                color: #3D96FF;
                                display: inline-block;
                                text-align: center;
                                border-radius: 2px;
                                margin-left: 595px;
                            }
                        }
                    }
                }
                .zr-tab-his {
                    .card {
                        .goods-info {
                            .ir {
                                font-size: 14px;
                                color: #333;
                                font-weight: 400;
                            }
                        }
                        .goods-status {
                            .buy-time {
                                vertical-align: middle;
                                padding-right: 50px;
                            }
                            .status {
                                font-family: 'PingFang HK', '微软雅黑';
                                font-size: 12px;
                                font-weight: 500;
                                margin-left: 524px;
                                &.status1 {
                                    color: #3D96FF;
                                }
                                &.status2 {
                                    color: #38CEAE;
                                }
                            }
                        }
                    }
                }
            }
        }

    }
</style>

<template>
    <div class="wal-record">
        <!--Do it!-->
        <div class="title">
            <div class="w800">
                交易记录
            </div>
        </div>
        <div class="w800">
            <div class="record">
                <div class="title">
                    <a @click="recordIndex=1" v-bind:class="{'active':recordIndex === 1}"
                       href="javascript:;">预售</a>
                    <a @click="recordIndex=2" v-bind:class="{'active':recordIndex === 2}"
                       href="javascript:;">购买</a>
                    <a @click="recordIndex=3" v-bind:class="{'active':recordIndex === 3}"
                       href="javascript:;">兑换</a>
                    <a @click="recordIndex=4" v-bind:class="{'active':recordIndex === 4}"
                       href="javascript:;">转让</a>
                </div>
                <div class="money">
                    <div class="ys item" v-show="recordIndex===1">
                        <div class="unblock">
                            <div class="th">
                                <div class="i i150">项目</div>
                                <div class="i i160">价格</div>
                                <div class="i i170">购买数量</div>
                                <div class="i i100">状态</div>
                                <div class="i i160 ir">总价</div>

                            </div>
                            <div class="card" v-for="item in ysArr" v-if="ysArr.length">
                                <div class="goods-info">
                                    <div class="name i150">
                                        <img :src='item.product.avatar' alt=" ">&nbsp;
                                        {{item.product.coin_name}}
                                    </div>
                                    <div class="price i160">
                                        {{(item.price / 100000000).toFixed(8)}} {{item.product.coin_type === 0 ? 'BTC' : 'ETH'}}
                                    </div>
                                    <div class="amount  i170">
                                        {{item.quantity}}/{{item.presell_quantity}}
                                    </div>
                                    <div class="status i100">
                                        <span v-if="item.product.type===0" class="st4">待支付</span>
                                        <span v-if="item.product.type===1" class="st1">成功</span>
                                        <span v-if="item.product.type===2" class="st3">交易失败</span>
                                        <span v-if="item.product.type===3" class="st2">冻结</span>
                                        <span v-if="item.product.type===4" class="st3">交易关闭</span>
                                        <span v-if="item.product.type===5" class="st3">已取消</span>
                                    </div>
                                    <div class="total i160 ir">
                                        {{(item.total_amount / 100000000).toFixed(8)}} {{item.product.coin_type === 0 ? 'BTC' : 'ETH'}}
                                    </div>
                                </div>
                                <div class="goods-status">
                                    <div class="i180">
                                        <div class="info1">
                                            订单编号：{{item.id}}
                                        </div>
                                        <div class="info2">
                                            预售退回：{{(item.refund_amount / 100000000).toFixed(8)}} {{item.product.coin_type === 0 ? 'BTC' : 'ETH'}}
                                        </div>
                                    </div>
                                    <div class="buy-time">
                                        购买时间：{{item.created_at | moment_project}}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="!ysArr.length" class="block">
                            <img src="../../assets/img/noting.png" alt="">
                            <p>这里什么也没有～</p>
                        </div>
                    </div>
                    <div class="gm item" v-show="recordIndex===2">
                        <div class="unblock">
                            <div class="th">
                                <div class="i i150">项目</div>
                                <div class="i i160">价格</div>
                                <div class="i i170">购买数量</div>
                                <div class="i i100">状态</div>
                                <div class="i i160 ir">总价</div>

                            </div>
                            <div v-for="item in gmArr" v-if="gmArr.length" class="card">
                                <div class="goods-info">
                                    <div class="name i150">
                                        <img :src='item.avatar' alt=" ">&nbsp;
                                        {{item.coin_name}}
                                    </div>
                                    <div class="price i160">
                                        {{(item.price / 100000000).toFixed(8)}} {{item.coin_type === 0 ? 'BTC' : 'ETH'}}
                                    </div>
                                    <div class="amount  i170">
                                        {{item.deal_count}}/{{item.entrust_count}}
                                    </div>
                                    <div class="status i100">
                                        <span v-if="item.status===0" class="st4">待支付</span>
                                        <span v-if="item.status===1" class="st1">成功</span>
                                        <span v-if="item.status===2" class="st3">交易失败</span>
                                        <span v-if="item.status===3" class="st2">冻结</span>
                                        <span v-if="item.status===4" class="st3">交易关闭</span>
                                        <span v-if="item.status===5" class="st3">已取消</span>
                                    </div>
                                    <div class="total i160 ir">
                                        {{(item.deal_amount / 100000000).toFixed(8)}} {{item.coin_type === 0 ? 'BTC' : 'ETH'}}
                                    </div>
                                </div>
                                <div class="goods-status">
                                    <div class="i180">
                                        <div class="info1">
                                            订单编号：{{item.trade_id}}
                                        </div>
                                    </div>
                                    <div class="buy-time">
                                        购买时间：{{item.deal_at | moment_project}}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="!gmArr.length" class="block">
                            <img src="../../assets/img/noting.png" alt="">
                            <p>这里什么也没有～</p>
                        </div>
                    </div>
                    <div class="dh item" v-show="recordIndex===3">
                        <div class="unblock hide">
                            <div class="th">
                                <div class="i i150">项目</div>
                                <div class="i i160">价格</div>
                                <div class="i i170">购买数量</div>
                                <div class="i i100">状态</div>
                                <div class="i i160 ir">总价</div>

                            </div>
                            <div class="card">
                                <div class="goods-info">
                                    <div class="name i150">
                                        <img src="../../assets/img/temp/gameLogo.jpg" alt=" ">&nbsp;
                                        CHTC
                                    </div>
                                    <div class="price i160">
                                        0.0001 BTC
                                    </div>
                                    <div class="amount  i170">
                                        3000/100000
                                    </div>
                                    <div class="status i100">
                                        <span class="st1">成功</span>
                                        <span class="st2 hide">冻结</span>
                                        <span class="st3 hide">已取消</span>
                                        <span class="st4 hide">待支付</span>
                                    </div>
                                    <div class="total i160 ir">
                                        3.00 BTC
                                    </div>
                                </div>
                                <div class="goods-status">
                                    <div class="i180">
                                        <div class="info1">
                                            订单编号：100010001
                                        </div>
                                        <div class="info2">
                                            预售退回：70.00BTC
                                        </div>
                                    </div>
                                    <div class="buy-time">
                                        购买时间：2017.2.14 19:34:24
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="goods-info">
                                    <div class="name i150">
                                        <img src="../../assets/img/temp/gameLogo.jpg" alt=" ">&nbsp;
                                        CHTC
                                    </div>
                                    <div class="price i160">
                                        0.0001 BTC
                                    </div>
                                    <div class="amount  i170">
                                        3000/100000
                                    </div>
                                    <div class="status i100">
                                        <span class="st1">成功</span>
                                        <span class="st2 hide">冻结</span>
                                        <span class="st3 hide">已取消</span>
                                        <span class="st4 hide">待支付</span>
                                    </div>
                                    <div class="total i160 ir">
                                        3.00 BTC
                                    </div>
                                </div>
                                <div class="goods-status">
                                    <div class="i180">
                                        <div class="info1">
                                            订单编号：100010001
                                        </div>
                                        <div class="info2">
                                            预售退回：70.00BTC
                                        </div>
                                    </div>
                                    <div class="buy-time">
                                        购买时间：2017.2.14 19:34:24
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="goods-info">
                                    <div class="name i150">
                                        <img src="../../assets/img/temp/gameLogo.jpg" alt=" ">&nbsp;
                                        CHTC
                                    </div>
                                    <div class="price i160">
                                        0.0001 BTC
                                    </div>
                                    <div class="amount  i170">
                                        3000/100000
                                    </div>
                                    <div class="status i100">
                                        <span class="st1 hide">成功</span>
                                        <span class="st2">冻结</span>
                                        <span class="st3 hide">已取消</span>
                                        <span class="st4 hide">待支付</span>
                                    </div>
                                    <div class="total i160 ir">
                                        3.00 BTC
                                    </div>
                                </div>
                                <div class="goods-status">
                                    <div class="i180">
                                        <div class="info1">
                                            订单编号：100010001
                                        </div>
                                        <div class="info2">
                                            预售退回：70.00BTC
                                        </div>
                                    </div>
                                    <div class="buy-time">
                                        购买时间：2017.2.14 19:34:24
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="goods-info">
                                    <div class="name i150">
                                        <img src="../../assets/img/temp/gameLogo.jpg" alt=" ">&nbsp;
                                        CHTC
                                    </div>
                                    <div class="price i160">
                                        0.0001 BTC
                                    </div>
                                    <div class="amount  i170">
                                        3000/100000
                                    </div>
                                    <div class="status i100">
                                        <span class="st1 hide">成功</span>
                                        <span class="st2 hide">冻结</span>
                                        <span class="st3">已取消</span>
                                        <span class="st4 hide">待支付</span>
                                    </div>
                                    <div class="total i160 ir">
                                        3.00 BTC
                                    </div>
                                </div>
                                <div class="goods-status">
                                    <div class="i180">
                                        <div class="info1">
                                            订单编号：100010001
                                        </div>
                                        <div class="info2">
                                            预售退回：70.00BTC
                                        </div>
                                    </div>
                                    <div class="buy-time">
                                        购买时间：2017.2.14 19:34:24
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="goods-info">
                                    <div class="name i150">
                                        <img src="../../assets/img/temp/gameLogo.jpg" alt=" ">&nbsp;
                                        CHTC
                                    </div>
                                    <div class="price i160">
                                        0.0001 BTC
                                    </div>
                                    <div class="amount  i170">
                                        3000/100000
                                    </div>
                                    <div class="status i100">
                                        <span class="st1 hide">成功</span>
                                        <span class="st2 hide">冻结</span>
                                        <span class="st3 hide">已取消</span>
                                        <span class="st4">待支付</span>
                                    </div>
                                    <div class="total i160 ir">
                                        3.00 BTC
                                    </div>
                                </div>
                                <div class="goods-status">
                                    <div class="i180">
                                        <div class="info1">
                                            订单编号：100010001
                                        </div>
                                        <div class="info2">
                                            预售退回：70.00BTC
                                        </div>
                                    </div>
                                    <div class="buy-time">
                                        购买时间：2017.2.14 19:34:24
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="block">
                            <img src="../../assets/img/noting.png" alt="">
                            <p>这里什么也没有～</p>
                        </div>
                    </div>
                    <div class="zr item" v-show="recordIndex===4">
                        <div class="zr-filter">
                            <a href="javascript:;" @click="zrIndex=1" v-bind:class="{'active':zrIndex===1}">当前委托</a>
                            <a href="javascript:;" @click="zrIndex=2" v-bind:class="{'active':zrIndex===2}">历史成交</a>
                            <div id="daterange_zr_btn" class="time-sel clearfix">
                                <div class="fl">
                                    <p>起始日期</p>
                                    <span>{{timeRange.from | _moment}}</span>
                                </div>
                                <span class="line"></span>
                                <div class="fr">
                                    <p>结束日期</p>
                                    <span>{{timeRange.to | _moment}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="space"></div>
                        <!--当前委托-->
                        <div class="zr-tab-cur" v-show="zrIndex===1">
                            <div v-if="zrArr_cur.length" class="unblock">
                                <div class="th">
                                    <div class="i i150">项目</div>
                                    <div class="i i160">价格</div>
                                    <div class="i i170">购买数量</div>
                                    <div class="i i100"></div>
                                    <div class="i i160 ir">成交率</div>

                                </div>
                                <div class="card" v-for="item in zrArr_cur">
                                    <div class="goods-info">
                                        <div class="name i150">
                                            <img :src='item.avatar' alt=" ">&nbsp;
                                            {{item.coin_name}}
                                        </div>
                                        <div class="price i160">
                                            {{(item.price / 100000000).toFixed(8)}} {{item.coin_type === 0 ? 'BTC' : 'ETH'}}
                                        </div>
                                        <div class="amount  i170">
                                            {{item.entrust_count}}
                                        </div>
                                        <div class="status i100">
                                            <span v-if="item.trade_type===1" class="st2">买</span>
                                            <span v-if="item.trade_type===2" class="st1">卖</span>
                                        </div>
                                        <div class="total i160 ir">
                                            {{((item.deal_count / item.entrust_count) * 100).toFixed(2)}}%
                                        </div>
                                    </div>
                                    <div class="goods-status">
                                        <div class="buy-time">
                                            {{item.entrust_at | moment_project}}
                                        </div>
                                        <a @click="cd(item.trade_id,item.product_id)" href="javascript:;">撤单</a>
                                    </div>
                                </div>
                            </div>
                            <div v-if="!zrArr_cur.length" class="block">
                                <img src="../../assets/img/noting.png" alt="">
                                <p>这里什么也没有～</p>
                            </div>
                        </div>
                        <!--历史成交-->
                        <div class="zr-tab-his" v-show="zrIndex===2">
                            <div v-if="zrArr_his.length" class="unblock">
                                <div class="th">
                                    <div class="i i150">项目</div>
                                    <div class="i i160">价格</div>
                                    <div class="i i170">购买数量</div>
                                    <div class="i i100">手续费</div>
                                    <div class="i i160 ir">成交金额</div>

                                </div>
                                <div class="card" v-for="item in zrArr_his">
                                    <div class="goods-info">
                                        <div class="name i150">
                                            <img :src='item.avatar' alt=" ">&nbsp;
                                            {{item.coin_name}}
                                        </div>
                                        <div class="price i160">
                                            {{(item.price / 100000000).toFixed(8)}} {{item.coin_type === 0 ? 'BTC' : 'ETH'}}
                                        </div>
                                        <div class="amount  i170">
                                            {{item.entrust_count}}
                                        </div>
                                        <div class="status i100">
                                            {{((item.trade_fee * 3 / 1000) / 100000000).toFixed(8)}}
                                        </div>
                                        <div class="total i160 ir">
                                            {{(item.deal_amount / 100000000).toFixed(8)}}
                                        </div>
                                    </div>
                                    <div class="goods-status">
                                        <div class="buy-time">
                                            {{item.deal_at | moment_project}}
                                        </div>
                                        <span v-if="item.trade_type===1" class="status status1">
                                            买
                                        </span>
                                        <span v-if="item.trade_type===2" class="status status2">
                                            卖
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="block" v-if="!zrArr_his.length">
                                <img src="../../assets/img/noting.png" alt="">
                                <p>这里什么也没有～</p>
                            </div>
                        </div>
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

    export default {
        // 没啥大用处
        name: 'app',
        data() {
            return {
                recordIndex: 1,
                zrIndex: 1,
                timeRange: {
                    from: (Date.now() - 2592000000) / 1000,
                    to: Date.now() / 1000
                },
                ysArr: [],
                gmArr: [],
                dhArr: [],
                zrArr_cur: [],
                zrArr_his: [],
                tips: {
                    id: 'trade_tip',
                    info: '',
                    man: 1
                }
            }
        },
        methods: {
            // 绑定事件的方法
            shMod: function (tips, man) {
                let _this = this;
                _this.tips.info = tips;
                _this.tips.man = man;
                $('#trade_tip').modal('show');
                setTimeout(function () {
                    $('#trade_tip').modal('hide');
                }, 1500);
            },
            updateZrMod: function () {
                var _this = this;
                // 当前委托
                t._get('trade/entrust/record', {
                    start: 0,
                    limit: 100,
                    begin_time: _this.timeRange.from,
                    end_time: _this.timeRange.to
                }, function (data) {
                    _this.zrArr_cur = data.body.data.list;
                });

                // 历史成交
                t._get('trade/deal/record', {
                    start: 0,
                    limit: 100,
                    begin_time: _this.timeRange.from,
                    end_time: _this.timeRange.to
                }, function (data) {
                    _this.zrArr_his = data.body.data.list;
                });
            },
            cd: function (trade_id, product_id) {
                var _this = this;
                t._post('trade/cancel', {tradeID: trade_id}, function (data) {
                    if (data.body.error_code) {
                        _this.shMod('撤单失败', 2);
                    } else {
                        _this.shMod('撤单成功', 1);
                    }
                    _this.updateZrMod();
                });
            }
        },
        mounted: function () {
            var _this = this;
            this.$nextTick(function () {
                var _this = this;
                $('#daterange_zr_btn').daterangepicker({},
                    function (start, end) {
                        _this.timeRange.from = Date.parse(start._d) / 1000;
                        _this.timeRange.to = Date.parse(end._d) / 1000;
                        _this.updateZrMod();
                    }
                );

                //Date picker
                $('#datepicker').daterangepicker({
                    autoclose: true
                });

                $('.daterangepicker').css({
                    'transform': 'translateX(30px) translateY(10px)',
                    'z-index': '111'
                });
            });

        },
        created() {
            var _this = this;
            // 预售记录
            t._get('game/product/presell/record', {limit: 100, start: 0}, function (data) {
                _this.ysArr = data.body.data.list;
            });

            // 购买记录
            t._get('trade/deal/record', {limit: 100, start: 0}, function (data) {
                _this.gmArr = data.body.data.list;
            });

            _this.updateZrMod();
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