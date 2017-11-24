<style scoped="scoped" lang="less">
    .groom-project {
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
        .content {
            padding-bottom: 80px;
            min-height: 590px;
            position: relative;
            .card {
                width: 300px;
                box-shadow: rgba(0, 0, 0, .1) 0 0 10px;
                border-radius: 12px;
                overflow: hidden;
                float: left;
                margin-right: 15px;
                &:nth-child(3n) {
                    margin-right: 0;
                }
                &:nth-child(n+4) {
                    margin-top: 30px;
                }
                .gameImg {
                    width: 100%;
                    height: 190px;
                    overflow: hidden;
                    img {
                        height: 100%;
                        width: 100%;
                    }
                }
                .title {
                    margin: 14px 20px 0;
                    font-size: 16px;
                    font-weight: 500;
                    letter-spacing: 1.14px;
                    color: #4A4A4A;
                }
                .info {
                    .line {
                        width: 100%;
                        height: 1px;
                        background-color: #EBF2FF;
                        margin-top: 8px;
                        margin-bottom: 8px;
                    }
                    .clearfix {
                        padding: 0 20px;
                        .fl {
                            float: left;
                        }
                        .fr {
                            float: right;
                            text-align: right;
                        }
                        &.balance {
                            margin-top: 10px;
                            margin-bottom: 15px;
                            font-size: 16px;
                            font-weight: 500;
                            color: #FF8000;
                        }
                        &.amount {
                            margin-bottom: 6px;
                            font-size: 12px;
                            color: #4A4A4A;
                            .fr {
                                font-weight: 500;
                            }
                        }
                    }
                    .raise-flow {
                        .fr.raise {
                            color: #38CEAE;
                        }
                        .fr.flow {
                            color: #F3433C;
                        }
                    }
                }
                .buy-or-sell {
                    width: 100%;
                    padding-left: 16px;
                    margin-top: 15px;
                    margin-bottom: 15px;
                    a {
                        display: inline-block;
                        width: 128px;
                        height: 26px;
                        line-height: 26px;
                        color: white;
                        text-align: center;
                        background-color: #38CEAE;
                        border-radius: 4px;
                        margin-right: 7px;
                        &:last-child {
                            margin-right: 0;
                            background-color: #f3433c;
                        }
                    }
                }
            }

        }
    }

</style>

<template>
    <div class="groom-project">
        <!--Do it!-->
        <div class="title">
            <div class="w800">
                <a>我的项目</a>
            </div>
        </div>
        <div class="content w930 clearfix">
            <div class="card" v-if="dataList.length" v-for="item in dataList">
                <div class="gameImg">
                    <img v-bind:src="item.web_avatar" alt="">
                </div>
                <div class="title">
                    {{item.coin_name}}: {{item.name}}
                </div>
                <div class="info">
                    <div class="clearfix balance">
                        <div class="fl">总价值</div>
                        <div class="fr">{{item.coin_worth}} {{item.trade_coin}}</div>
                    </div>
                    <div class="clearfix amount">
                        <div class="fl">持有 ({{item.coin_name}})</div>
                        <div class="fr">{{item.coin_have}}</div>
                    </div>
                    <div class="clearfix amount">
                        <div class="fl">可用 ({{item.coin_name}})</div>
                        <div class="fr">{{item.coin_aval}}</div>
                    </div>
                    <div class="line"></div>
                    <div class="clearfix amount">
                        <div class="fl">现价 ({{item.trade_coin}})</div>
                        <div class="fr">{{item.cur_price}}</div>
                    </div>
                    <div class="clearfix amount">
                        <div class="fl">成本 ({{item.trade_coin}})</div>
                        <div class="fr">{{item.orig_price}}</div>
                    </div>
                    <div class="line"></div>
                    <div class="clearfix amount raise-flow">
                        <div class="fl">盈亏 ({{item.trade_coin}})</div>
                        <div v-if="item.variation.indexOf('+')===0" class="fr raise">{{item.variation}}</div>
                        <div v-if="item.variation.indexOf('+')!==0" class="fr flow">{{item.variation}}</div>
                    </div>
                    <div class="clearfix amount raise-flow">
                        <div class="fl">百分比 (%)</div>
                        <div v-if="item.ratio.indexOf('+')===0" class="fr raise">{{item.ratio}}</div>
                        <div v-if="item.ratio.indexOf('+')!==0" class="fr flow">{{item.ratio}}</div>
                    </div>
                </div>
                <div class="buy-or-sell">
                    <a href="javascript:;">买入</a>
                    <a href="javascript:;">卖出</a>
                </div>
            </div>
            <none v-if="!dataList.length"></none>
        </div>
    </div>
</template>

<script>
    import t from '../../assets/js/tools';
    import none from '../none'

    export default {
        // 没啥大用处
        name: 'app',
        data() {
            return {
                title: '我是一个小毛驴',
                dataList: []
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
            var _this = this;
            t._get('game/product/mygame', {}, function (data) {
                _this.dataList = data.body.data.list;
                console.log(_this.dataList);
            })
        },
        components: {
            // 引入的组件写在这里
            none
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