<style scoped="scoped" lang="less">
    .coin-type-sel {
        width: 100%;
        overflow-x: auto;
        white-space: nowrap;
        padding-bottom: 15px;
        margin-top: 50px;
        a {
            display: inline-block;
            padding: 11px 14px;
            margin-right: 35px;
            font-size: 16px;
            color: #999999;
            i {
                font-size: 12px;
            }
            &:last-child {
                margin-right: 0;
            }
            &.active {
                background-color: #3D96FF;
                color: white;
                border-radius: 8px;
            }
        }
    }

    .value-flow {
        li {
            margin-top: 23px;
            text-align: center;
            display: inline-block;
            width: 33%;
            height: 90px;
            padding-top: 25px;
            color: #666666;
            font-size: 28px;
            font-weight: 500;
            border-left: 1px solid #D8D8D8;
            i {
                margin-left: 2px;
                display: inline-block;
                padding-top: 5px;
                font-size: 14px;
                vertical-align: top;
            }
            p {
                font-size: 14px;
                color: #94ABC9;
                font-weight: 300;
                letter-spacing: 0.8px;
                margin-top: 5px;
            }
            span {
                display: none;
                &.r {
                    color: #7ED321;
                    display: inline-block;
                }
                &.d {
                    color: #F3433C;
                    display: inline-block;
                }
            }
            &:first-child {
                border-left: none;
            }
        }
    }

    .tab-sel-time {
        margin-top: 39px;
        a {
            font-size: 14px;
            color: #999999;
            display: inline-block;
            position: relative;
            line-height: 25px;
            margin-right: 30px;
            &.active {
                color: #3D96FF;
                font-weight: 500;
                &:after {
                    width: 20px;
                    height: 2px;
                    border-radius: 1px;
                    content: "";
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    background-color: #3D96FF;
                    bottom: -2px;
                }
            }
            &.y {
                margin-right: 690px;
            }
            &:last-child {
                margin-right: 0;
            }
        }
    }

    .trade-content {
        margin-top: 64px;
        padding-bottom: 45px;
        > div {
            background-color: #FAFCFF;
            border: 1px solid #CDD8EC;
            padding: 24px 20px;
            width: 426px;
            height: 544px;
        }
        .trade-view {
            position: relative;
            float: left;
            .tab-sel {
                a {
                    font-size: 14px;
                    color: #999999;
                    display: inline-block;
                    position: relative;
                    line-height: 25px;
                    margin-right: 48px;
                    &.active {
                        color: #3D96FF;
                        font-weight: 500;
                        &:after {
                            width: 30px;
                            height: 2px;
                            border-radius: 1px;
                            content: "";
                            position: absolute;
                            left: 50%;
                            transform: translateX(-50%);
                            background-color: #3D96FF;
                            bottom: -2px;
                        }
                    }
                    &:last-child {
                        margin-right: 0;
                    }
                }
            }
            .tab-content {

                .tab-trade {
                    .ratio {
                        text-align: center;
                        padding-top: 30px;
                        padding-bottom: 27px;
                        p {
                            color: #3D96FF;
                            font-weight: 500;
                            font-size: 16px;
                        }
                        span {
                            color: #4D4D4D;
                            font-weight: 500;
                            font-size: 22px;
                        }
                    }
                    > .clearfix {
                        margin-bottom: 50px;
                        .fl {
                            float: left;
                            .available-money {
                                margin-bottom: 28px;
                                h4 {
                                    padding: 0;
                                    margin-top: 0;
                                    margin-bottom: 4px;
                                    font-size: 12px;
                                    color: #999999;
                                }
                                p {
                                    color: #4D4D4D;
                                    font-size: 16px;
                                    font-weight: 500;
                                }
                            }
                            .edit-area {
                                position: relative;
                                margin-bottom: 8px;
                                input {
                                    width: 170px;
                                    height: 42px;
                                    border: none;
                                    background-color: #EBF2FF;
                                    padding-right: 41px;
                                    padding-left: 10px;
                                }
                                i {
                                    color: #94ABC9;
                                    font-size: 14px;
                                    font-weight: 500;
                                    position: absolute;
                                    top: 50%;
                                    transform: translateY(-50%);
                                    right: 12px;
                                }
                            }
                            .suoha {
                                .options {
                                    float: left;
                                    width: 38px;
                                    height: 22px;
                                    line-height: 22px;
                                    border: 1px solid #E9E9E9;
                                    font-size: 10px;
                                    text-align: center;
                                    margin-right: 6px;
                                    color: #999999;
                                    cursor: pointer;
                                }
                            }
                            .total {
                                margin-top: 20px;
                                width: 176px;
                                h5 {
                                    font-size: 12px;
                                    color: #999999;
                                    font-weight: 400;
                                    margin-top: 0;
                                    margin-bottom: 4px;
                                }
                                p {
                                    font-size: 16px;
                                    color: #4D4D4D;
                                    font-weight: 500;
                                }
                            }
                        }
                        .fr {
                            float: right;
                            text-align: right;
                            tr {
                                height: 21px;
                                font-size: 12px;
                                color: #4A4A4A;
                            }
                            .th {
                                .c {
                                    font-size: 12px;
                                    color: #999999;
                                }
                                .c2 {
                                    padding-right: 0;
                                }
                            }
                            .r {
                                color: #F3433C;
                            }
                            .g {
                                color: #38CEAE;
                            }
                            .c2 {
                                padding-right: 19px;
                                padding-left: 25px;
                            }
                            .line {
                                height: 17px;
                                text-align: left;
                                color: #D8D8D8;
                                font-weight: 200;
                                .line-view {
                                    font-size: 12px;
                                }
                            }
                        }
                    }
                    .trade-btn {
                        width: 378px;
                        height: 42px;
                        color: #fff;
                        border-radius: 4px;
                        display: inline-block;
                        line-height: 42px;
                        text-align: center;
                        font-weight: 500;
                        &.buy-btn {
                            background-color: #3D96FF;
                        }
                        &.sell-btn {
                            background-color: #38CEAE;
                        }
                        &.cannot {
                            background-color: #A6A9B0;
                            cursor: default;
                        }
                    }
                }
                .tab-oo {
                    text-align: right;
                    /*overflow-y: scroll;*/
                    .del-btn {
                        padding: 6px 9px;
                        border-radius: 2px;
                        border: 1px solid #3D96FF;
                        color: #3D96FF;
                        font-size: 12px;
                        text-align: center;
                        margin-top: 23px;
                        margin-bottom: 20px;
                        display: inline-block;
                    }
                    .oo-item {
                        height: 380px;
                        overflow-y: auto;
                        width: 395px;
                        padding: 3px;
                        li {
                            text-align: left;
                            width: 376px;
                            height: 110px;
                            box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
                            padding-top: 10px;
                            padding-left: 10px;
                            padding-right: 30px;
                            position: relative;
                            margin-bottom: 15px;
                            background-color: white;
                            .c-t {
                                border-bottom: 1px dashed #EBF2FF;
                                h5 {
                                    margin-top: 0;
                                    margin-bottom: 3px;
                                    display: inline-block;
                                    color: #4D4D4D;
                                    font-weight: 500;
                                    font-size: 12px;
                                }
                                span {
                                    display: inline-block;
                                    margin-left: 6px;
                                    font-size: 12px;
                                    font-weight: 500;
                                    margin-bottom: 3px;
                                    &.buy {
                                        color: #3D96FF;
                                    }
                                    &.sell {
                                        color: #38CEAE;
                                    }
                                }
                                i {
                                    display: block;
                                    font-size: 12px;
                                    color: #999999;
                                    margin-bottom: 8px;
                                }

                            }
                            .c-b {
                                letter-spacing: -3px;
                                text-align: center;
                                .pat {
                                    letter-spacing: 0;
                                    width: 33%;
                                    display: inline-block;
                                    margin-top: 10px;
                                    p {
                                        font-size: 12px;
                                        color: #4D4D4D;
                                        font-weight: 500;
                                    }
                                    span {
                                        font-size: 12px;
                                        color: #999999;
                                    }
                                }
                            }
                            .del-btn {
                                position: absolute;
                                top: 10px;
                                right: 6px;
                                margin: 0;
                                padding: 4px 8px;
                            }
                        }
                    }
                }
                .tab-th {
                    padding-top: 24px;
                    .time-sel {
                        width: 362px;
                        height: 60px;
                        background-color: #fff;
                        box-shadow: rgba(0, 0, 0, .1) 0 0 10px;
                        margin-top: 17px;
                        margin-bottom: 20px;
                        padding-top: 9px;
                        padding-bottom: 11px;
                        > div {
                            p {
                                color: #999999;
                                font-size: 12px;
                                margin-bottom: 6px;
                            }
                            span {
                                color: #4D4D4D;
                                font-size: 12px;
                            }
                        }
                        .fl {
                            float: left;
                            width: 49%;
                            padding-left: 19px;
                            border-right: 1px solid #EBF2FF;
                        }
                        .fr {
                            padding-left: 10px;
                            float: right;
                            width: 49%;
                        }
                    }
                    .th-item {
                        height: 350px;
                        overflow-y: auto;
                        width: 395px;
                        padding: 3px;
                        li {
                            background-color: #fff;
                            text-align: left;
                            width: 362px;
                            height: 145px;
                            box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
                            padding-top: 10px;
                            padding-left: 10px;
                            padding-right: 30px;
                            position: relative;
                            margin-bottom: 15px;
                            .c-t {
                                border-bottom: 1px dashed #EBF2FF;
                                padding-bottom: 5px;
                                h5 {
                                    margin-top: 0;
                                    margin-bottom: 3px;
                                    display: inline-block;
                                    color: #4D4D4D;
                                    font-weight: 500;
                                    font-size: 12px;
                                }
                                span {
                                    display: inline-block;
                                    margin-left: 6px;
                                    font-size: 12px;
                                    font-weight: 500;
                                    margin-bottom: 3px;
                                    &.buy {
                                        color: #3D96FF;
                                    }
                                    &.sell {
                                        color: #38CEAE;
                                    }
                                }
                                i {
                                    display: inline-block;
                                    font-size: 12px;
                                    color: #999999;
                                    margin-bottom: 8px;
                                    margin-left: 120px;
                                }
                                .p-a {
                                    letter-spacing: -3px;
                                    text-align: center;
                                    > div {
                                        letter-spacing: 0;
                                        width: 49%;
                                        display: inline-block;
                                        margin-top: 10px;
                                        p {
                                            font-size: 12px;
                                            color: #4D4D4D;
                                            font-weight: 500;
                                        }
                                        span {
                                            font-size: 12px;
                                            color: #999999;
                                        }
                                    }
                                }
                            }
                            .c-b {
                                padding-top: 8px;
                                .fl {
                                    color: #999999;
                                    font-size: 12px;
                                    float: left;
                                }
                                .fr {
                                    color: #4D4D4D;
                                    font-size: 12px;
                                    float: right;
                                    text-align: right;
                                }
                            }
                        }
                    }
                }
            }
        }
        .your-portfolio {
            float: right;
            dt {
                color: #3D96FF;
                padding-bottom: 20px;
                font-size: 18px;
                border-bottom: 1px solid #CDD8EC;
            }
            .yp-content {
                height: 330px;
                overflow: auto;
                padding-right: 17px;
            }
            dd {
                border-bottom: 1px solid #CDD8EC;
                padding-top: 30px;
                padding-bottom: 9px;
                .fl {
                    float: left;
                    color: #666666;
                    font-size: 16px;
                }
                .fr {
                    float: right;
                    text-align: right;
                    p {
                        font-size: 16px;
                        font-weight: 500;
                        color: #3D96FF;
                    }
                    span {
                        color: #999999;
                        font-size: 12px;
                    }
                }
            }
            .btn-area {
                margin-top: 56px;
                a {
                    display: inline-block;
                    width: 170px;
                    height: 42px;
                    line-height: 42px;
                    text-align: center;
                    color: white;
                    background-color: #3D96FF;
                    border-radius: 4px;
                    margin-right: 35px;
                    &:last-child {
                        background-color: #38CEAE;
                        margin-right: 0;
                    }
                }
            }
        }
    }

    .canvas {
        width: 100%;
        height: 273px;
        border: 1px solid #000;
        margin-top: 20px;
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
            .d3 {
                float: right;
                text-align: right;
                color: #4D4D4D;
                margin-top: 8px;
            }
            &.total {
                margin-top: 25px;
                font-weight: 500;
                margin-bottom: 22px;
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
        }
        .sell {
            a {
                background-color: #38CEAE;
            }
        }
        .close {
            position: absolute;
            top: 10px;
            right: 25px;
            font-size: 30px;
        }
    }

    #main-ec {
        width: 1030px;
        height: 350px;
        margin-left: -50px;
    }

    .w960 {
        /*padding-bottom:;*/
        min-height: 650px;
    }
</style>

<template>
    <div class="w960">
        <div class="coin-type-sel">
            <a v-for="(item,index) in coinType" v-bind:class="{'active':coin_type_id===item.product_id}"
               @click="clCoinType(item.product_id,index)"
               href="javascript:;">{{item.coin_name + " / " + item.cur_price}}<i> {{item.trade_coin}}</i></a>
        </div>
        <div class="value-flow">
            <ul>
                <li>
                    {{coinType[curShowIndex].cur_price}}<i>{{coinType[curShowIndex].trade_coin}}</i>
                    <p>{{coinType[curShowIndex].coin_name}} 价格</p>
                </li>
                <li>

                    <span class="r" v-show="coinType[curShowIndex].variation[0]==='+'">+ </span><span
                        v-show="coinType[curShowIndex].variation[0]==='-'"
                        class="d">- </span>{{coinType[curShowIndex].variation.substring(1)}}<i>{{coinType[curShowIndex].trade_coin}}</i>
                    <p>今日增长</p>
                </li>
                <li>
                    <span class="r" v-show="coinType[curShowIndex].ratio[0]==='+'">+ </span><span
                        v-show="coinType[curShowIndex].ratio[0]==='-'"
                        class="d">- </span>{{coinType[curShowIndex].ratio.substring(1)}}
                    <p>今日增长 %</p>
                </li>
            </ul>
        </div>
        <div class="tab-sel-time">
            <a @click="timeIndex=1;echart_type='1H'" v-bind:class="{'active':timeIndex===1}" href="javascript:;">时线</a>
            <a @click="timeIndex=2;echart_type='1D'" v-bind:class="{'active':timeIndex===2}" href="javascript:;">日线</a>
            <a @click="timeIndex=3;echart_type='1W'" v-bind:class="{'active':timeIndex===3}" href="javascript:;">周线</a>
            <!--<a @click="timeIndex=4" v-bind:class="{'active':timeIndex===4}" href="javascript:;">1M</a>-->
            <!--<a @click="timeIndex=5" v-bind:class="['y',{'active':timeIndex===5}]" href="javascript:;">1Y</a>-->
            <!--<a @click="timeIndex=6" v-bind:class="{'active':timeIndex===6}" href="javascript:;">ALL</a>-->
        </div>
        <div id="main-ec"></div>

        <div v-if="isLogin" class="trade-content clearfix">
            <div class="trade-view">
                <div class="tab-sel">
                    <a @click="cardIndex=1" v-bind:class="{'active':cardIndex===1}" href="javascript:;">购买</a>
                    <a @click="cardIndex=2" v-bind:class="{'active':cardIndex===2}" href="javascript:;">出售</a>
                    <a @click="cardIndex=3" v-bind:class="{'active':cardIndex===3}" href="javascript:;">当前委托</a>
                    <a @click="cardIndex=4" v-bind:class="{'active':cardIndex===4}"
                       href="javascript:;">历史成交</a>
                </div>
                <div class="tab-content">
                    <!--TODO-->
                    <div v-show="cardIndex===1" class="tab-trade tab-buy">
                        <div class="ratio">
                            <p>{{coinType[curShowIndex].coin_name}}/{{coinType[curShowIndex].trade_coin}}</p>
                            <span>{{(buy_data.price / 100000000).toFixed(8)}}</span>
                        </div>
                        <div class="clearfix">
                            <div class="fl">
                                <div class="available-money">
                                    <h4>
                                        可用余额:
                                    </h4>
                                    <p>
                                        {{buy_data.avl}} {{coinType[curShowIndex].trade_coin}}
                                    </p>
                                </div>
                                <div class="edit-area">
                                    <input type="number" v-model="buy_price">
                                    <i>{{coinType[curShowIndex].trade_coin}}</i>
                                </div>
                                <div class="edit-area">
                                    <input @input="check" type="number" v-model="buyAmount">
                                    <i>{{coinType[curShowIndex].coin_name}}</i>
                                </div>
                                <div class="suoha clearfix">
                                    <div class="options" @click="soha_buy(0.25)">25%</div>
                                    <div class="options" @click="soha_buy(0.5)">50%</div>
                                    <div class="options" @click="soha_buy(0.75)">75%</div>
                                    <div class="options" @click="soha_buy(1)">100%</div>
                                </div>
                                <div class="total">
                                    <h5>总计:</h5>
                                    <p>
                                        {{(buyAmount * +buy_price).toFixed(8)}} {{coinType[curShowIndex].trade_coin}}</p>
                                </div>
                            </div>
                            <div class="fr">
                                <table>

                                    <tr class="th">
                                        <td class="c c1 r">价格({{coinType[curShowIndex].trade_coin}})</td>
                                        <td class="c c2">数量({{coinType[curShowIndex].coin_name}})</td>
                                    </tr>

                                    <tr v-for="item in buy_arr">
                                        <td class="c c1 r">
                                            {{isNaN(+item.price) ? '--' : (item.price / 100000000).toFixed(8)}}
                                        </td>
                                        <td class="c c2">{{item.count}}</td>
                                    </tr>

                                    <tr class="line">
                                        <td colspan="2">
                                            <div class="line-view">- - - - - - - - - - - - - -</div>
                                        </td>
                                    </tr>

                                    <tr v-for="item in sell_arr">
                                        <td class="c c1 g">
                                            {{isNaN(+item.price) ? '--' : (item.price / 100000000).toFixed(8)}}
                                        </td>
                                        <td class="c c2">{{item.count}}</td>
                                    </tr>

                                </table>
                            </div>
                        </div>
                        <a @click="clBuy" v-if="canBuy" href="javascript:;" class="trade-btn buy-btn">
                            购买
                        </a>
                        <a v-if="!canBuy" href="javascript:;" class="trade-btn buy-btn cannot">
                            购买
                        </a>
                    </div>
                    <div v-show="cardIndex===2" class="tab-trade tab-sell">
                        <div class="ratio">
                            <p>{{coinType[curShowIndex].coin_name}}/{{coinType[curShowIndex].trade_coin}}</p>
                            <span>{{coinType[curShowIndex].cur_price}}</span>
                        </div>
                        <div class="clearfix">
                            <div class="fl">
                                <div class="available-money">
                                    <h4>
                                        可用余额:
                                    </h4>
                                    <p>
                                        {{sell_data.time}} {{coinType[curShowIndex].coin_name}}
                                    </p>
                                </div>
                                <div class="edit-area">
                                    <input type="number" v-model="sell_price">
                                    <i>{{coinType[curShowIndex].trade_coin}}</i>
                                </div>
                                <div class="edit-area">
                                    <input type="text" v-model="sellAmount">
                                    <i>{{coinType[curShowIndex].coin_name}}</i>
                                </div>
                                <div class="suoha clearfix">
                                    <div class="options" @click="soha_sell(0.25)">25%</div>
                                    <div class="options" @click="soha_sell(0.5)">50%</div>
                                    <div class="options" @click="soha_sell(0.75)">75%</div>
                                    <div class="options" @click="soha_sell(1)">100%</div>
                                </div>
                                <div class="total">
                                    <h5>总计:</h5>
                                    <p>
                                        {{(sell_price * sellAmount).toFixed(8)}} {{coinType[curShowIndex].trade_coin}}</p>
                                </div>
                            </div>
                            <div class="fr">
                                <table>

                                    <tr class="th">
                                        <td class="c c1 r">价格({{coinType[curShowIndex].trade_coin}})</td>
                                        <td class="c c2">数量({{coinType[curShowIndex].coin_name}})</td>
                                    </tr>

                                    <tr v-for="item in buy_arr">
                                        <td class="c c1 r">
                                            {{isNaN(+item.price) ? '--' : (item.price / 100000000).toFixed(8)}}
                                        </td>
                                        <td class="c c2">{{item.count}}</td>
                                    </tr>

                                    <tr class="line">
                                        <td colspan="2">
                                            <div class="line-view">- - - - - - - - - - - - - -</div>
                                        </td>
                                    </tr>


                                    <tr v-for="item in sell_arr">
                                        <td class="c c1 g">
                                            {{isNaN(+item.price) ? '--' : (item.price / 100000000).toFixed(8)}}
                                        </td>
                                        <td class="c c2">{{item.count}}</td>
                                    </tr>


                                </table>
                            </div>

                        </div>
                        <a v-if="canSell" href="javascript:;" @click="clSell" class="trade-btn sell-btn">
                            出售
                        </a>
                        <a v-if="!canSell" href="javascript:;" class="trade-btn sell-btn cannot">
                            出售
                        </a>
                    </div>
                    <div v-show="cardIndex===3" class="tab-oo">
                        <a v-if="wtList.length" @click="cdAll" href="javascript:;" class="del-btn">充值</a>
                        <ul v-if="wtList.length" class="oo-item">
                            <li v-for="item in wtList">
                                <div class="c-t">
                                    <h5>{{item.coin_name}}/{{item.coin_type === 0 ? 'BTC' : 'ETH'}}</h5>
                                    <span v-if="item.trade_type===1" class="buy">买</span>
                                    <span v-if="item.trade_type===2" class="sell">卖</span>
                                    <i>{{item.entrust_at | moment_project('HH:MM:SS  YYYY.MM.DD')}}</i>
                                </div>
                                <div class="c-b">
                                    <div class="pat">
                                        <p>{{(item.price / 100000000).toFixed(8)}}</p>
                                        <span>价格</span>
                                    </div>
                                    <div class="pat">
                                        <p>{{item.entrust_count}}</p>
                                        <span>数量</span>
                                    </div>
                                    <div class="pat">
                                        <p>{{((item.deal_count / item.entrust_count) * 100).toFixed(2)}}%</p>
                                        <span>成交率</span>
                                    </div>
                                </div>
                                <a @click="cd(item.trade_id,item.product_id)" href="javascript:;" class="del-btn">撤单</a>
                            </li>
                        </ul>
                        <none v-if="!wtList.length"></none>
                    </div>
                    <div v-show="cardIndex===4" class="tab-th">
                        <div id="daterange-btn" class="time-sel clearfix">
                            <div class="fl">
                                <p>起始日期</p>
                                <span>{{timeRange.from | _moment}}</span>
                            </div>
                            <div class="fr">
                                <p>结束日期</p>
                                <span>{{timeRange.to | _moment}}</span>
                            </div>
                        </div>
                        <ul v-if="zrArr_his.length" class="th-item">
                            <li v-for="item in zrArr_his">
                                <div class="c-t">
                                    <h5>{{item.coin_name}}/{{item.coin_type === 0 ? 'BTC' : 'ETH'}}</h5>
                                    <span v-if="item.trade_type===1" class="buy">买</span>
                                    <span v-if="item.trade_type===2" class="sell">卖</span>
                                    <i> {{item.deal_at | moment_project('hh:mm:ss YYYY.MM.DD')}}</i>
                                    <div class="p-a">
                                        <div class="p">
                                            <p>
                                                {{(item.price / 100000000).toFixed(8)}} {{item.coin_type === 0 ? 'BTC' : 'ETH'}}</p>
                                            <span>价格</span>
                                        </div>
                                        <div class="a">
                                            <p>{{item.entrust_count}}</p>
                                            <span>数量</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="c-b clearfix">
                                    <div class="fl">
                                        <p>Fee</p>
                                        <p>Total Price</p>
                                    </div>
                                    <div class="fr">
                                        <p>
                                            {{((item.trade_fee * 3 / 1000) / 100000000).toFixed(8)}} {{item.coin_type === 0 ? 'BTC' : 'ETH'}}</p>
                                        <p>
                                            {{(item.deal_amount / 100000000).toFixed(8)}} {{item.coin_type === 0 ? 'BTC' : 'ETH'}}</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <none style="margin-top:50px;" v-if="!zrArr_his.length"></none>
                    </div>

                </div>
            </div>
            <div class="your-portfolio">
                <dl>
                    <dt>我的资产</dt>
                    <div class="yp-content">
                        <dd class="clearfix">
                            <div class="fl">Ethereum</div>
                            <div class="fr">
                                <p>{{walletData.eth_total}} ETH</p>
                                <span>{{walletData.eth_to_usdt}} USD</span>
                            </div>
                        </dd>
                        <dd class="clearfix">
                            <div class="fl">Bitcoin</div>
                            <div class="fr">
                                <p>{{walletData.btc_total}} BTC</p>
                                <span>{{walletData.btc_to_usdt}} USD</span>
                            </div>
                        </dd>
                    </div>
                </dl>
                <div class="btn-area">
                    <a href="#/en/recharge">充值</a>
                    <a href="#/en/withdraw">提现</a>
                </div>
            </div>
        </div>


        <div class="modal fade" id="exchangeBuyConfirmModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog modal-dialog-buy" role="document">
                <div class="modal-content">
                    <div class="confirm">
                        确认
                    </div>
                    <div class="d clearfix">
                        <div class="d1">价格：</div>
                        <div class="d2">{{buy_price}} {{coinType[curShowIndex].trade_coin}}
                        </div>
                    </div>
                    <div class="d clearfix">
                        <div class="d1">数量</div>
                        <div class="d2">{{buyAmount}} {{coinType[curShowIndex].coin_name}}</div>
                        <br>
                        <div class="d3">
                            (手续费 ：{{(Math.ceil((buyAmount * +buy_price * buy_data.trade_fee / 1000) * 100000000) / 100000000).toFixed(8)
                            }} {{coinType[curShowIndex].trade_coin}})
                        </div>
                    </div>
                    <div class="d total clearfix">
                        <div class="d1">Total：</div>
                        <div class="d2">
                            {{(buyAmount * +buy_price).toFixed(8)}} {{coinType[curShowIndex].trade_coin}}
                        </div>
                    </div>
                    <div class="cf-btn">
                        <a @click="goBuy" href="javascript:;">购买</a>
                    </div>


                    <button type="button" class="close" data-dismiss="modal"
                            aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>

                </div>
            </div>

        </div>
        <div class="modal fade" id="exchangeSellConfirmModal" tabindex="-1" role="dialog"
             aria-labelledby="myModalLabel">
            <div class="modal-dialog modal-dialog-buy" role="document">
                <div class="modal-content">
                    <div class="confirm">
                        确认
                    </div>
                    <div class="d clearfix">
                        <div class="d1">价格：</div>
                        <div class="d2">{{sell_price}} {{coinType[curShowIndex].trade_coin}}</div>
                    </div>
                    <div class="d clearfix">
                        <div class="d1">数量</div>
                        <div class="d2">{{sellAmount}} {{coinType[curShowIndex].coin_name}}</div>
                        <br>
                        <div class="d3">
                            (手续费 ：{{(Math.ceil((sellAmount * +sell_price * sell_data.trade_fee / 1000) * 100000000) / 100000000).toFixed(8)
                            }} {{coinType[curShowIndex].trade_coin}})
                        </div>
                    </div>
                    <div class="d total clearfix">
                        <div class="d1">Total：</div>
                        <div class="d2">
                            {{(sell_price * sellAmount).toFixed(8)}} {{coinType[curShowIndex].trade_coin}}
                        </div>
                    </div>
                    <div class="cf-btn sell">
                        <a @click="goSell" href="javascript:;">出售</a>
                    </div>

                    <button type="button" class="close" data-dismiss="modal"
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
    //    import echarts from './echarts';
    import t from '../../assets/js/tools';
    import none from '../none';

    export default {
        name: 'app',
        data() {
            return {
                cardIndex: 1,
                timeIndex: 1,
                coin_type_id: 1,
                isYEBZ: false,
                canSell: false,
                canBuy: false,
                timeRange: {
                    from: (Date.now() - 2592000000) / 1000,
                    to: Date.now() / 1000
                },
                coinType: [{
                    coin_name: "----",
                    coin_type: 0,
                    cur_price: "0.00000000",
                    name: "",
                    own: 0,
                    product_id: 0,
                    ratio: "+0.00%",
                    trade_coin: "---",
                    turnover: 16,
                    variation: "+0.00000000"
                }],
                curShowIndex: 0,
                echart_data_x: [],
                echart_data_y: [],
                echart_type: '1H',
                buy_arr: [],
                sell_arr: [],
                buy_data: {},
                sell_data: {},
                buyPrice: 0,
                sellPrice: 0,
                buyAmount: 0,
                buy_price: 0,
                sellAmount: 0,
                sell_price: 0,
                wtList: [],
                zrArr_his: [],
                tips: {
                    id: 'trade_tip',
                    info: '',
                    man: 1
                },
                walletData: {},
                index: 3,
                isLogin: false
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

            // 点击了大buy
            clBuy: function () {
                $("#exchangeBuyConfirmModal").modal('show');
            },

            clSell: function () {
                $("#exchangeSellConfirmModal").modal('show');
            },

            // 点击了buy
            goBuy: function () {
                var _this = this;
                $("#exchangeBuyConfirmModal").modal('hide');
                t._post('trade/buy', {
                    productID: _this.coin_type_id,
                    price: Math.ceil(_this.buy_price * 100000000),
                    count: +_this.buyAmount
                }, function (data) {
                    if (data.body.error_code) {
                        _this.shMod('委托失败', 2);
                    } else {
                        _this.shMod('委托成功', 1);
                        setTimeout(function () {
                            _this.getEntrustData();
                        }, 1000)
                        _this.getBSInfo()
                    }
                    _this.refreshWalletData();
                })
            },

            // 点击了sell
            goSell: function () {
                var _this = this;
                $("#exchangeSellConfirmModal").modal('hide');
                t._post('trade/sell', {
                    productID: _this.coin_type_id,
                    price: Math.ceil(_this.sell_price * 100000000),
                    count: +_this.sellAmount
                }, function (data) {
                    if (data.body.error_code) {
                        _this.shMod('委托失败', 2);
                    } else {
                        _this.shMod('委托成功', 1);
                        _this.getEntrustData();
                        _this.getBSInfo()
                    }
                    this.refreshWalletData();
                })
            },

            // 设置筛选器
            setRange: function () {
                var _this = this;
                $('#daterange-btn').daterangepicker({},
                    function (start, end) {
                        _this.timeRange.from = Date.parse(start._d) / 1000;
                        _this.timeRange.to = Date.parse(end._d) / 1000;
                        _this.getEntrustData();
                    }
                );

                //Date picker
                $('#datepicker').daterangepicker({
                    autoclose: true
                });

                $('.daterangepicker').css({
                    'transform': 'translateX(30px) translateY(20px)'
                });
            },

            // echars设置
            echartInit: function () {
                var _this = this;
                var tip = '价格(' + _this.coinType[_this.curShowIndex].trade_coin + ')';
                var x_arr = _this.echart_data_x;
                var y_arr = _this.echart_data_y;
                var myChart = echarts.init(document.getElementById('main-ec'));
                var option = {
                    color: ['#E89A44'],
                    backgroundColor: '#ffffff',
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#000000'
                            }
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            data: x_arr,
                            axisLine: {
                                lineStyle: {
                                    color: '#D8D8D8'
                                }
                            },
                            nameTextStyle: {
                                color: '#fff'
                            }
                        }
                    ],
                    yAxis: [
                        {
                            show: false
                        }
                    ],
                    textStyle: {
                        color: '#94ABC9'
                    },
                    series: [
                        {
                            name: tip,
                            type: 'line',
                            stack: '总量',
                            smooth: true,  //这句就是让曲线变平滑的
                            areaStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#fef4e6'
                                    }, {
                                        offset: 1,
                                        color: '#fff'
                                    }])
                                }
                            },
                            data: y_arr
                        }
                    ]
                };
                myChart.setOption(option);
            },

            // 获取币种
            getCoinType: function () {
                var _this = this;
                t.get('game/trade/platform', {}, function (data) {
                    _this.coinType = data.body.data.list;
                    _this.coinType.forEach(function (item) {
                        item.trade_price = item.cur_price;
                    });
                    _this.coin_type_id = data.body.data.list[0].product_id || 0;
                    _this.getEchartsData(_this.coin_type_id);
                    _this.getBSInfo();
                    _this.buy_price = _this.coinType[_this.curShowIndex].cur_price;
                    _this.sell_price = _this.coinType[_this.curShowIndex].cur_price;
                })
            },

            // 币种点击事件
            clCoinType: function (id, index) {
                var _this = this;
                _this.coin_type_id = id;
                _this.curShowIndex = index;
            },

            // 更新交易数据
            getTradeInfo: function () {
                var _this = this;
                t._get('trade/detail/first', {product_id: _this.coin_type_id}, function (data) {
                    _this.buy_arr = data.body.data.entrust_buy;
                    _this.sell_arr = data.body.data.entrust_sell;
                })
            },

            // echarts数据
            getEchartsData() {
                var _this = this;
                var arr_x = [];
                var arr_y = [];
                var id = _this.coin_type_id;
                var eType = 0;
                if (_this.echart_type === '1H') {
                    // 时线
                    eType = 0;
                    t.get('trade/detail/price', {product_id: id, type: eType}, function (data) {
                        data.body.data.detail.forEach(function (item) {
                            arr_x.push(moment(item.ts * 1000).format('HH:mm'));
                            arr_y.push(((+item.price) / 100000000).toFixed(8));
                        });
                        _this.echart_data_x = arr_x;
                        _this.echart_data_y = arr_y;
                        _this.echartInit();
                    })
                } else if (_this.echart_type === '1D') {
                    // 日线
                    eType = 1;
                    t.get('trade/detail/price', {product_id: id, type: eType}, function (data) {
                        data.body.data.detail.forEach(function (item) {
                            arr_x.push(moment(item.ts * 1000).format('HH:mm'));
                            console.log((+item.price) / 100000000);
                            arr_y.push(((+item.price) / 100000000).toFixed(8));
                        });
                        _this.echart_data_x = arr_x;
                        _this.echart_data_y = arr_y;
                        _this.echartInit();
                    })
                } else {
                    // 周线
                    eType = 2;
                    t.get('trade/detail/price', {product_id: id, type: eType}, function (data) {
                        data.body.data.detail.forEach(function (item) {
                            arr_x.push(moment(item.ts * 1000).format('YYYY-MM-DD HH:mm'));
                            console.log((+item.price) / 100000000);
                            arr_y.push(((+item.price) / 100000000).toFixed(8));
                        });
                        _this.echart_data_x = arr_x;
                        _this.echart_data_y = arr_y;
                        _this.echartInit();
                    })
                }
            },

            // 购买或及出售前拉取交易数据
            getBSInfo() {
                var _this = this;
                t._get('trade/info', {product_id: _this.coin_type_id, type: 1}, function (data) {
                    _this.buy_data = data.body.data;
                    if (_this.coinType[_this.curShowIndex].trade_coin === 'BTC') {
                        _this.buy_data.avl = data.body.common.btc_avail;
                    } else {
                        _this.buy_data.avl = data.body.common.eth_avail;
                    }
                });
                t._get('trade/info', {product_id: _this.coin_type_id, type: 2}, function (data) {
                    _this.sell_data = data.body.data;
                });
            },

            soha_buy: function (e) {
                this.buyAmount = Math.floor((+this.buy_data.avl / +this.buy_price) * e);
            },

            soha_sell: function (e) {
                this.sellAmount = Math.floor(+this.sell_data.time * e);
            },

            // 清除购买数据
            clearData: function () {
                this.sellAmount = 0;
                this.buyAmount = 0;
            },

            // 获取委托数据
            getEntrustData: function () {
                var _this = this;
                t._get('trade/entrust/record', {start: 0, limit: 100}, function (data) {
                    _this.wtList = data.body.data.list;
                })

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

            // 撤单
            cd: function (trade_id, product_id) {
                var _this = this;
                t._post('trade/cancel', {tradeID: trade_id}, function (data) {
                    if (data.body.error_code) {
                        _this.shMod('撤单失败', 2);
                    } else {
                        _this.shMod('撤单成功', 1);
                    }
                    _this.getEntrustData();
                });
            },

            // 全部撤单
            cdAll: function () {
                var _this = this;
                t._post('trade/cancelall', {}, function (data) {
                    if (data.body.error_code) {
                        _this.shMod('撤单失败', 2);
                    } else {
                        _this.shMod('撤单成功', 1);
                    }
                    _this.getEntrustData();
                });
            },

            // 检查
            check: function () {
                this.buyAmount = Math.floor(this.buyAmount);
            },


            // 验证是否可以买
            canTrade: function () {
                let buy = (this.buyAmount * +this.buy_price).toFixed(8);
                let sell = (this.sellAmount * +this.sell_price).toFixed(8);
                if (buy > 0 && this.sellAmount <= this.buy_data.avl) {
                    this.canBuy = true;
                } else {
                    this.canBuy = false;
                }

                if (sell > 0 && +this.sellAmount <= +this.sell_data.time) {
                    this.canSell = true;
                } else {
                    this.canSell = false;
                }
            },

            // 更新钱包数据
            refreshWalletData: function () {
                var _this = this;
                t._get('users/coin/asset', {}, function (data) {
                    _this.walletData = data.body.data;
                })
            },

            // 初始化
            init: function () {
                this.isLogin = this.pushStatus;
                this.$emit('getIndex', this.index);
                this.getCoinType();
                if (this.isLogin) {
                    this.getTradeInfo();
                    this.getEntrustData();
                    this.refreshWalletData();
                }
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                this.setRange();
            });
        },
        created: function () {
            this.init();
        },
        components: {none},
        watch: {
            coin_type_id: function () {
                this.getEchartsData();
                this.getTradeInfo();
                this.getBSInfo();
                this.clearData();
                this.buy_price = this.coinType[this.curShowIndex].cur_price;
                this.sell_price = this.coinType[this.curShowIndex].cur_price;
            },
            echart_type: function () {
                this.getEchartsData();
                this.getTradeInfo();
                this.getBSInfo();
            },
            buy_price: function (val) {
                let valStr = val.toString();
                if (valStr.indexOf('.') !== -1) {
                    if (valStr.split(".")[1].length > 8) {
                        this.buy_price = (+valStr).toFixed(8);
                    }
                }
                this.canTrade();
            },
            sell_price: function (val) {
                let valStr = val.toString();
                if (valStr.indexOf('.') !== -1) {
                    if (valStr.split(".")[1].length > 8) {
                        this.buy_price = (+valStr).toFixed(8);
                    }
                }
                this.canTrade();
            },
            buyAmount: function () {
                this.canTrade();
            },
            sellAmount: function () {
                this.canTrade();
            },
            pushStatus: function () {
                this.isLogin = this.pushStatus;
                this.init();
            }
        },
        props: ['pushStatus']
    }
</script>