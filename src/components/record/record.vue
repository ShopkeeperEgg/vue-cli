<style scope lang="less">
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
                                <div class="i i150">姓名</div>
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
                        <div class="block hide">
                            <img src="../../assets/img/noting.png" alt="">
                            <p>这里什么也没有～</p>
                        </div>
                    </div>
                    <div class="gm item" v-show="recordIndex===2">
                        <div class="unblock">
                            <div class="th">
                                <div class="i i150">姓名</div>
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
                                    </div>
                                    <div class="buy-time">
                                        购买时间：2017.2.14 19:34:24
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="block hide">
                            <img src="../../assets/img/noting.png" alt="">
                            <p>这里什么也没有～</p>
                        </div>
                    </div>
                    <div class="dh item" v-show="recordIndex===3">
                        <div class="unblock hide">
                            <div class="th">
                                <div class="i i150">姓名</div>
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
                        <div class="unblock hide">
                            <div class="th">
                                <div class="i i150">姓名</div>
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
                recordIndex: 1,
            }
        },
        methods: {
            // 绑定事件的方法

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