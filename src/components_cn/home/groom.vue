<style scope lang="less">
    .groom {
        background-color: #F9FBFF;

    }

    .content {
        padding-top: 78px;
        padding-bottom: 80px;
        .card {
            width: 300px;
            height: 448px;
            box-shadow: rgba(0, 0, 0, .4) 0 0 4px;
            border-radius: 12px;
            overflow: hidden;
            float: left;
            margin-right: 15px;
            &:nth-child(3n) {
                margin-right: 0;
            }
            &:nth-child(n+4) {
                margin-top: 12px;
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
                .gameInfo {
                    margin: 0 20px;
                    font-size: 12px;
                    font-weight: 200;
                    color: #4A4A4A;
                }
                .progress {
                    width: 244px;
                    height: 2px;
                    margin-left: 24px;
                    margin-top: 30px;
                    margin-bottom: 10px;
                    position: relative;
                    overflow: inherit;
                    .progress-bar {
                        background-color: #3D96FF;
                    }
                    &:after {
                        content: '';
                        width: 10px;
                        height: 10px;
                        border-radius: 50%;
                        background-color: #3D96FF;
                        display: block;
                        position: absolute;
                        top: 50%;
                        left: -10px;
                        margin-top: -5px;
                    }
                    &:before {
                        content: '';
                        width: 10px;
                        height: 10px;
                        border-radius: 50%;
                        border: 2px solid #3D96FF;
                        display: block;
                        position: absolute;
                        top: 50%;
                        left: 121px;
                        margin-top: -5px;
                        background-color: #FFFFFF;
                    }

                }
                .pr {
                    .st {
                        margin-left: 14px;
                        float: left;
                        .info1 {
                            font-size: 12px;
                            letter-spacing: 0.86px;
                            color: #4A4A4A;
                            font-weight: 500;
                        }
                        .info2 {
                            font-size: 10px;
                            font-weight: 200;
                            color: #4A4A4A;
                            letter-spacing: 0.71px;
                        }
                    }
                }
                .count {
                    margin-left: 14px;
                    margin-top: 21px;
                    .num {
                        padding-right: 10px;
                        font-weight: 500;
                        font-size: 12px;
                        color: #4A4A4A;
                    }
                    .t {
                        color: rgba(121, 120, 121, 0.86);
                    }
                }
                .currentVal {
                    margin-top: 20px;
                    margin-left: 14px;
                    .info1 {
                        font-size: 10px;
                        color: #3D96FF;
                    }
                    .info2 {
                        font-size: 17px;
                        font-weight: 600;
                        color: #3D96FF;
                        line-height: 22px;
                    }
                }
            }
        }

    }
</style>

<template>
    <div class="groom">
        <!--Do it!-->
        <div class="content w930 clearfix">
            <div class="card">
                <a href="#/en/detail/10">
                    <div class="gameImg">
                        <img src="../../assets/img/temp/game1.jpg" alt="">
                    </div>
                    <div class="title">
                        The Robot 2234
                    </div>
                    <div class="gameInfo">
                        You love games and you always wanted to create one of your own? Board Game Creative Kit is what
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                             aria-valuemax="100" style="width: 30%;"></div>
                    </div>
                    <div class="pr clearfix">
                        <div class="st st1">
                            <div class="info1">
                                1BTC=2000CHTC
                            </div>
                            <div class="info2">
                                2017.12.09
                            </div>
                        </div>
                        <div class="st st2">
                            <div class="info1">
                                1BTC=1000CHTC
                            </div>
                            <div class="info2">
                                2018.04.09
                            </div>
                        </div>
                    </div>
                    <div class="count">
                        <table>
                            <tr>
                                <td class="num">9789542</td>
                                <td class="t">预售数量</td>
                            </tr>
                            <tr>
                                <td class="num">87490</td>
                                <td class="t">参与人数</td>
                            </tr>
                        </table>
                    </div>
                    <div class="currentVal hide">
                        <div class="info1">
                            当前价格 (CHTC / BTC)
                        </div>
                        <div class="info2">
                            0.00098566 BTC
                        </div>
                    </div>
                </a>
            </div>
            <div class="card">
                <a href="#/en/detail/11">
                    <div class="gameImg">
                        <img src="../../assets/img/temp/game1.jpg" alt="">
                    </div>
                    <div class="title">
                        The Robot 2234
                    </div>
                    <div class="gameInfo">
                        You love games and you always wanted to create one of your own? Board Game Creative Kit is what
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                             aria-valuemax="100" style="width: 70%;"></div>
                    </div>
                    <div class="pr clearfix">
                        <div class="st st1">
                            <div class="info1">
                                1BTC=2000CHTC
                            </div>
                            <div class="info2">
                                2017.12.09
                            </div>
                        </div>
                        <div class="st st2">
                            <div class="info1">
                                1BTC=1000CHTC
                            </div>
                            <div class="info2">
                                2018.04.09
                            </div>
                        </div>
                    </div>
                    <div class="count">
                        <table>
                            <tr>
                                <td class="num">9789542</td>
                                <td class="t">预售数量</td>
                            </tr>
                            <tr>
                                <td class="num">87490</td>
                                <td class="t">参与人数</td>
                            </tr>
                        </table>
                    </div>
                    <div class="currentVal hide">
                        <div class="info1">
                            当前价格 (CHTC / BTC)
                        </div>
                        <div class="info2">
                            0.00098566 BTC
                        </div>
                    </div>
                </a>
            </div>
            <div class="card">
                <a href="#/en/detail/12">
                    <div class="gameImg">
                        <img src="../../assets/img/temp/game1.jpg" alt="">
                    </div>
                    <div class="title">
                        The Robot 2234
                    </div>
                    <div class="gameInfo">
                        You love games and you always wanted to create one of your own? Board Game Creative Kit is what
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                             aria-valuemax="100" style="width: 100%;"></div>
                    </div>
                    <div class="pr clearfix">
                        <div class="st st1">
                            <div class="info1">
                                1BTC=2000CHTC
                            </div>
                            <div class="info2">
                                2017.12.09
                            </div>
                        </div>
                        <div class="st st2">
                            <div class="info1">
                                1BTC=1000CHTC
                            </div>
                            <div class="info2">
                                2018.04.09
                            </div>
                        </div>
                    </div>
                    <div class="count hide">
                        <table>
                            <tr>
                                <td class="num">9789542</td>
                                <td class="t">预售数量</td>
                            </tr>
                            <tr>
                                <td class="num">87490</td>
                                <td class="t">参与人数</td>
                            </tr>
                        </table>
                    </div>
                    <div class="currentVal">
                        <div class="info1">
                            当前价格 (CHTC / BTC)
                        </div>
                        <div class="info2">
                            0.00098566 BTC
                        </div>
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