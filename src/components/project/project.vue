<style scope lang="less">
    .groom-project{
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
            .card {
                width: 300px;
                height: 340px;
                box-shadow: rgba(0, 0, 0, .4) 0 0 6px;
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
                a {
                    display: block;
                    width: 100%;
                    height: 100%;
                    .gameImg {
                        height: 190px;
                        overflow: hidden;
                        img {
                            width: 100%;
                        }
                    }
                    .title {
                        margin: 14px 20px 9px;
                        font-size: 16px;
                        font-weight: 500;
                        letter-spacing: 1.14px;
                        color: #4A4A4A;
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
                            margin-bottom: 20px;
                            font-size: 16px;
                            color: #3D96FF;
                            font-weight: 500;
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
            <div class="card">
                <a href="#/en/detail/10">
                    <div class="gameImg">
                        <img src="../../assets/img/temp/game1.jpg" alt="">
                    </div>
                    <div class="title">
                        CHTH: Super LELE
                    </div>
                    <div class="clearfix balance">
                        <div class="fl">Balance</div>
                        <div class="fr">8000CHTH</div>
                    </div>
                    <div class="clearfix amount">
                        <div class="fl">Current Price (BTC)</div>
                        <div class="fr">0.00232345</div>
                    </div>
                    <div class="clearfix amount">
                        <div class="fl">Current Value (BTC)</div>
                        <div class="fr">18.4</div>
                    </div>
                </a>
            </div>
            <div class="card">
                <a href="#/en/detail/10">
                    <div class="gameImg">
                        <img src="../../assets/img/temp/game1.jpg" alt="">
                    </div>
                    <div class="title">
                        CHTH: Super LELE
                    </div>
                    <div class="clearfix balance">
                        <div class="fl">Balance</div>
                        <div class="fr">8000CHTH</div>
                    </div>
                    <div class="clearfix amount">
                        <div class="fl">Current Price (BTC)</div>
                        <div class="fr">0.00232345</div>
                    </div>
                    <div class="clearfix amount">
                        <div class="fl">Current Value (BTC)</div>
                        <div class="fr">18.4</div>
                    </div>
                </a>
            </div>
            <div class="card">
                <a href="#/en/detail/10">
                    <div class="gameImg">
                        <img src="../../assets/img/temp/game1.jpg" alt="">
                    </div>
                    <div class="title">
                        CHTH: Super LELE
                    </div>
                    <div class="clearfix balance">
                        <div class="fl">Balance</div>
                        <div class="fr">8000CHTH</div>
                    </div>
                    <div class="clearfix amount">
                        <div class="fl">Current Price (BTC)</div>
                        <div class="fr">0.00232345</div>
                    </div>
                    <div class="clearfix amount">
                        <div class="fl">Current Value (BTC)</div>
                        <div class="fr">18.4</div>
                    </div>
                </a>
            </div>
            <div class="card">
                <a href="#/en/detail/10">
                    <div class="gameImg">
                        <img src="../../assets/img/temp/game1.jpg" alt="">
                    </div>
                    <div class="title">
                        CHTH: Super LELE
                    </div>
                    <div class="clearfix balance">
                        <div class="fl">Balance</div>
                        <div class="fr">8000CHTH</div>
                    </div>
                    <div class="clearfix amount">
                        <div class="fl">Current Price (BTC)</div>
                        <div class="fr">0.00232345</div>
                    </div>
                    <div class="clearfix amount">
                        <div class="fl">Current Value (BTC)</div>
                        <div class="fr">18.4</div>
                    </div>
                </a>
            </div>
            <div class="card">
                <a href="#/en/detail/10">
                    <div class="gameImg">
                        <img src="../../assets/img/temp/game1.jpg" alt="">
                    </div>
                    <div class="title">
                        CHTH: Super LELE
                    </div>
                    <div class="clearfix balance">
                        <div class="fl">Balance</div>
                        <div class="fr">8000CHTH</div>
                    </div>
                    <div class="clearfix amount">
                        <div class="fl">Current Price (BTC)</div>
                        <div class="fr">0.00232345</div>
                    </div>
                    <div class="clearfix amount">
                        <div class="fl">Current Value (BTC)</div>
                        <div class="fr">18.4</div>
                    </div>
                </a>
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
                title: '我是一个小毛驴'
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