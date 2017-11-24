<style scoped="scoped" lang="less">
    .game-show {
        margin-top: 30px;
        .big-port {
            float: left;
            img {
                width: 480px;
                height: 290px;
            }
        }
        .card {
            float: right;
            position: relative;
            max-width: 270px;
            .game-info {
                .game-logo {
                    border-radius: 4px;
                    float: left;
                    img {
                        width: 45px;
                        height: 45px;
                    }
                }
                .game-detail {
                    overflow: hidden;
                    padding-left: 8px;
                    p {
                        color: #4A4A4A;
                        font-size: 16px;
                        font-weight: 600;
                        margin-bottom: 6px;
                    }
                    span {
                        color: #4A4A4A;
                        font-weight: 300;
                        letter-spacing: 0.86px;
                        i {
                            font-weight: 400;
                            font-style: normal;
                        }
                    }
                }
                .progress {
                    width: 250px;
                    height: 4px;
                    margin-top: 24px;
                    margin-bottom: 14px;
                    margin-left: 12px;
                    position: relative;
                    overflow: inherit;
                    background-color: #EBF2FF;
                    .progress-bar {
                        background-color: #3D96FF;
                    }
                    &:after {
                        content: '';
                        width: 12px;
                        height: 12px;
                        border-radius: 50%;
                        border: 3px solid #3D96FF;
                        display: block;
                        position: absolute;
                        top: 50%;
                        left: -12px;
                        margin-top: -6px;
                        background-color: #FFFFFF;
                    }
                    &:before {
                        content: '';
                        width: 12px;
                        height: 12px;
                        border-radius: 50%;
                        border: 3px solid #3D96FF;
                        display: block;
                        position: absolute;
                        top: 50%;
                        left: 128px;
                        margin-top: -6px;
                        background-color: #FFFFFF;
                    }

                }
                .pr {
                    .st {
                        float: left;
                        width: 50%;
                        .info1 {
                            font-size: 12px;
                            letter-spacing: 0.86px;
                            color: #4A4A4A;
                            font-weight: 500;
                        }
                        .info2 {
                            font-size: 10px;
                            font-weight: 200;
                            color: #717171;
                            letter-spacing: 0.71px;
                        }
                        &.st2 {
                            padding-left: 12px;
                        }
                    }
                }

            }
            .contributors {
                font-family: 'Montserrat', '微软雅黑';
                font-size: 16px;
                color: #3D96FF;
                margin-top: 20px;
                margin-bottom: 22px;
                font-weight: 600;
            }
            .amount {
                width: 257px;
                height: 100px;
                border: 0.5px dashed rgba(61, 150, 255, .5);
                padding-top: 10px;
                padding-left: 20px;
                .info1 {
                    font-size: 14px;
                    color: #3D96FF;
                    margin-bottom: 8px;
                }
                .info2 {
                    font-weight: 700;
                    font-size: 20px;
                    color: #3D96FF;
                    margin-bottom: 8px;
                }
                .info3 {
                    color: #3D96FF;
                    font-size: 14px;
                }
                .info3_3 {
                    .raise {
                        font-size: 14px;
                        color: #F3433C;
                        span {
                            margin-left: 18px;
                            white-space: nowrap;
                            i {
                                font-size: 12px;
                                transform: scaleX(0.65);
                            }
                        }
                    }
                    .flow {
                        font-size: 14px;
                        color: #38CEAE;
                        span {
                            margin-left: 18px;
                            white-space: nowrap;
                            i {
                                font-size: 12px;
                                transform: scaleX(0.65);
                            }
                        }
                    }
                }
            }
            a {
                display: block;
                position: absolute;
                color: white;
                bottom: -54px;
                width: 256px;
                height: 40px;
                border-radius: 4px;
                background-color: #3D96FF;
                text-align: center;
                line-height: 40px;
                &:hover {
                    color: white;
                }
            }
        }
    }

    .tab {
        width: 100%;
        border-bottom: 1px solid #EBF2FF;
        span {
            font-size: 14px;
            color: #717171;
            font-weight: 500;
            display: inline-block;
            width: 137px;
            a {
                display: inline-block;
                padding-top: 25px;
                padding-bottom: 29px;
                position: relative;
                &.active {
                    color: #3D96FF;
                    &:after {
                        content: '';
                        width: 40px;
                        height: 3px;
                        border-radius: 1.5px;
                        display: block;
                        position: absolute;
                        bottom: 14px;
                        left: 50%;
                        margin-left: -20px;
                        background-color: #3D96FF;
                    }
                }
            }
        }
        .a2 {
            /*transform: translateX(5px);*/
        }
        .a3 {
            /*transform: translateX(-15px);*/
        }
    }

    .main {
        > div {
            min-height: 600px;
        }
        .campaign {
            padding-top: 40px;
            .game-detail {
                font-size: 20px;
                font-weight: 600;
                letter-spacing: 1.43px;
                color: #4A4A4A;
                padding-bottom: 30px;
            }
            .common {
                margin-bottom: 50px;
                .img {
                    width: 478px;
                    height: 290px;
                    float: left;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                    .imgInfo {
                        margin-top: 20px;
                        font-size: 14px;
                        font-weight: 300;
                        color: #717171;
                        letter-spacing: 0.8px;
                        line-height: 22px;
                    }
                }
                .contributors {
                    float: right;
                    padding-top: 133px;
                    width: 279px;
                    height: 367px;
                    background-image: url(../../assets/img/d_bg.jpg);
                    -webkit-background-size: cover;
                    background-size: cover;
                    text-align: center;
                    color: #3D96FF;
                    .count {
                        font-size: 34px;
                        font-weight: 700;
                        letter-spacing: 2.14px;
                        line-height: 33px;
                    }
                    .i1 {
                        font-size: 26px;
                        font-weight: 600;
                        letter-spacing: 2.14px;
                        line-height: 33px;
                        margin-top: 8px;
                    }
                    .since {
                        color: #9B9B9B;
                        font-size: 18px;
                        font-weight: 300;
                        letter-spacing: 1.29px;
                    }
                }
            }
            .session {
                img {
                    width: 100%;
                }
            }
            .team {
                padding-bottom: 78px;
                h1 {
                    font-size: 20px;
                    font-weight: 600;
                    padding-top: 30px;
                    margin-top: 70px;
                    border-top: 1px solid #EBF2FF;
                    margin-bottom: 30px;
                }
                .id-card {
                    display: inline-block;
                    vertical-align: top;
                    width: 240px;
                    margin-right: 35px;
                    .id {
                        .avd {
                            overflow: hidden;
                            width: 60px;
                            height: 60px;
                            border-radius: 4px;
                            display: inline-block;
                            vertical-align: bottom;

                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .info {
                            margin-left: 10px;
                            display: inline-block;
                            vertical-align: bottom;
                            p {
                                font-size: 20px;
                                color: #333333;
                                font-family: 'PingFang HK', '微软雅黑';
                                font-weight: 500;
                            }
                        }
                        .do {
                            margin-top: 10px;
                            margin-bottom: 10px;
                        }
                    }
                    .detail {
                        font-size: 14px;
                        font-weight: 300;
                        color: #4A4A4A;
                        line-height: 24px;
                    }
                    &:nth-child(3n+1) {
                        margin-right: 0;
                    }
                    &:nth-child(n+5) {
                        margin-top: 20px;
                    }
                }
            }
            .game-package {
                h1 {
                    font-size: 20px;
                    font-weight: 600;
                    padding-top: 30px;
                    border-top: 1px solid #EBF2FF;
                    margin-bottom: 30px;
                    margin-top: 0;
                }

                .scroll-container {
                    width: 100%;
                    padding-bottom: 94px;
                    .scroll {
                        display: inline-block;
                        white-space: nowrap;
                        a {
                            display: inline-block;
                            margin-right: 13px;
                            .show {
                                width: 280px;
                                height: 170px;
                                overflow: hidden;
                                border-radius: 4px;
                                margin-bottom: 10px;
                                img {
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                            .p-name {
                                font-size: 18px;
                                color: #4A4A4A;
                                letter-spacing: 1.29px;
                                span {
                                    font-weight: 500;
                                }
                            }
                            &:last-child {
                                margin-right: 0;
                            }
                        }
                    }
                    &.of {
                        overflow-x: scroll;
                    }
                }
            }
        }
        .roi {
            padding-bottom: 70px;
            .ps {
                font-size: 24px;
                font-weight: 600;
                color: #4A4A4A;
                margin-top: 44px;
                span {
                    display: inline-block;
                    margin-left: 18px;
                    color: #3D96FF;
                }
            }
            .ct {
                .ps-card {
                    margin-top: 30px;
                    width: 367px;
                    display: inline-block;
                    margin-right: 60px;
                    .ps-title {
                        .index {
                            width: 36px;
                            height: 36px;
                            border-radius: 50%;
                            background-color: #3D96FF;
                            font-size: 20px;
                            color: white;
                            text-align: center;
                            line-height: 36px;
                            display: inline-block;
                        }
                        .ps-info {
                            display: inline-block;
                            margin-left: 12px;
                            font-size: 16px;
                            color: #4A4A4A;
                        }
                    }
                    .info {
                        font-size: 12px;
                        margin-top: 19px;
                        margin-bottom: 45px;
                        height: 55px;
                    }
                    .ps-img {
                        width: 366px;
                        height: 220px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }

                    &:nth-child(even) {
                        margin-right: 0;
                    }
                }
            }
        }
        .updates {
            padding-top: 36px;
            padding-bottom: 41px;
            .time-line {
                width: 100%;
                height: 248px;
                position: relative;

                .time {
                    position: absolute;
                    font-size: 24px;
                    font-weight: 600;
                    color: #4A4A4A;
                    text-align: right;
                }
                .time-info {
                    position: absolute;
                    width: 321px;
                    h1 {
                        font-size: 24px;
                        font-weight: 600;
                        color: #4A4A4A;
                        margin-bottom: 14px;
                    }
                    p {
                        font-size: 14px;
                        color: #4A4A4A;
                    }
                }
                .time-img {
                    width: 262px;
                    height: 158px;
                    overflow: hidden;
                    border-radius: 4px;
                    position: absolute;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                &:nth-child(odd) {
                    .time {
                        top: 0;
                        right: 449px;
                    }
                    .time-info {
                        left: 57px;
                        top: 53px;
                    }
                    .time-img {
                        left: 499px;
                        top: 53px;
                    }
                }
                &:nth-child(even) {
                    .time {
                        top: 0;
                        left: 499px;
                    }
                    .time-info {
                        right: 30px;
                        top: 54px;
                    }
                    .time-img {
                        left: 89px;
                        top: 53px;
                    }
                }
                &:after {
                    content: '';
                    display: block;
                    position: absolute;
                    width: 1px;
                    height: 220px;
                    background-image: url(../../assets/img/timeLine.png);
                    -webkit-background-size: cover;
                    background-size: cover;
                    bottom: 0;
                    left: 399px;
                }
                &:before {
                    content: '';
                    display: block;
                    width: 30px;
                    height: 30px;
                    border: 5px solid #3D96FF;
                    border-radius: 50%;
                    position: absolute;
                    background-size: cover;
                    top: 0;
                    left: 385px;
                    z-index: 3;
                }
            }
        }
        .faq {
            padding-top: 30px;
            padding-bottom: 60px;
            .q-card {
                margin-bottom: 30px;
                .q {
                    font-size: 16px;
                    font-weight: 600;
                    color: #3D96FF;
                    margin-bottom: 13px;
                }
                .a {
                    font-size: 16px;
                    color: #717171;
                    font-weight: 300;
                }
                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }
</style>

<template>
    <div class="w800">
        <!--Do it!-->
        <div class="game-show clearfix">
            <div class="big-port">
                <img src="../../assets/img/temp/d_banner.jpg" alt="">
            </div>
            <div class="card">
                <div class="game-info clearfix">
                    <div class="game-logo">
                        <img v-bind:src="gameCommonInfo.avatar" alt="">
                    </div>
                    {{gameCommonInfo.web_avatar}}
                    <div class="game-detail">
                        <p>{{gameCommonInfo.coin_name}}：{{gameCommonInfo.name}}</p>
                        <span>当前持有 <i>{{has}}</i> {{gameCommonInfo.coin_name}}</span>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                             aria-valuemax="100" v-bind:style="{width:gameCommonInfo.proportion*100+'%'}"></div>
                    </div>
                    <div class="pr clearfix">
                        <div class="st st1">
                            <div class="info1">
                                1{{gameCommonInfo.trade_coin}}={{gameCommonInfo.in_price}}{{gameCommonInfo.coin_name}}
                            </div>
                            <div class="info2">
                                {{gameCommonInfo.in_start | moment}}
                            </div>
                        </div>
                        <div class="st st2">
                            <div class="info1">
                                1{{gameCommonInfo.trade_coin}}={{gameCommonInfo.out_price}}{{gameCommonInfo.coin_name}}
                            </div>
                            <div class="info2">
                                {{gameCommonInfo.out_start | moment}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contributors">参与人数：{{gameCommonInfo.people_count}}</div>
                <div class="amount">
                    <div class="info1">
                        购买数量：
                    </div>
                    <div class="info2">
                        {{gameCommonInfo.apply}} / {{gameCommonInfo.in_quantity}}
                    </div>
                    <div class="info3 hide">
                        978%
                    </div>
                    <div class="info3_3">
                        <div v-if="isRaise" class="raise">
                            {{gameCommonInfo.variation}}<span>{{gameCommonInfo.ratio}} <i
                                class="glyphicon glyphicon-triangle-top"></i></span>
                        </div>
                        <div v-if="!isRaise" class="flow">
                            {{gameCommonInfo.variation}}<span>{{gameCommonInfo.ratio}} <i
                                class="glyphicon glyphicon-triangle-bottom"></i></span>
                        </div>
                    </div>
                </div>
                <a href="javascript:;" @click="showDl" v-if="!isLogin">{{gameCommonInfo.type_name}}</a>
                <a v-if="isLogin&&+gameCommonInfo.type!==7" :href="'#/en/buy/'+pid">{{gameCommonInfo.type_name}}</a>
                <a v-if="isLogin&&+gameCommonInfo.type===7" href="#/en/exchange">{{gameCommonInfo.type_name}}</a>
            </div>
        </div>
        <div class="tab">
            <span><a v-bind:class="{'active':tabIndex===1}" @click="tabChange(1)"
                     href="javascript:;">项目介绍</a></span>
            <span><a v-bind:class="['a2',{'active':tabIndex===2}]" @click="tabChange(2)"
                     href="javascript:;">回报说明</a></span>
            <span><a v-bind:class="['a3',{'active':tabIndex===3}]" @click="tabChange(3)"
                     href="javascript:;">项目动态</a></span>
            <span><a v-bind:class="{'active':tabIndex===4}" @click="tabChange(4)" href="javascript:;">常见问题</a></span>
        </div>
        <div class="main">
            <div v-if="tabIndex===1" class="campaign">
                <h1 class="game-detail">关于项目</h1>
                <div class="common clearfix">
                    <div class="img">
                        <img v-bind:src="tab_info_1_intro.pic" alt="">
                        <p class="imgInfo">
                            {{tab_info_1_intro.text}}
                        </p>
                    </div>
                    <div class="contributors">
                        <div class="count">
                            {{gameCommonInfo.people_count}}
                        </div>
                        <div class="i1">
                            购买人数
                        </div>
                        <div class="since">
                            since {{gameCommonInfo.in_start | moment_detail}}
                        </div>
                    </div>
                </div>
                <div class="session">
                    <img src="../../assets/img/temp/d_session.jpg" alt="">
                </div>
                <div class="team">
                    <h1>
                        Team
                    </h1>
                    <div class="id-card" v-for="item in team">
                        <div class="id clearfix">
                            <div class="avd">
                                <img v-bind:src="item.avatar" alt="">
                            </div>
                            <div class="info">
                                <p>{{item.name}}</p>
                            </div>
                            <div class="do">
                                {{item.job}}
                            </div>
                        </div>
                        <div class="detail">
                            {{item.intro}}
                        </div>
                    </div>
                </div>
                <div class="game-package">
                    <h1>
                        Game Package
                    </h1>
                    <div v-bind:class="['scroll-container',{'of':isGpOf}]">
                        <div class="scroll">
                            <a href="#">
                                <div class="show">
                                    <img src="../../assets/img/temp/gp.jpg" alt="">
                                </div>
                                <div class="p-name">
                                    <span>5000{{gameCommonInfo.coin_name}}</span> 10 wolf cards
                                </div>
                            </a>
                            <a href="#">
                                <div class="show">
                                    <img src="../../assets/img/temp/gp.jpg" alt="">
                                </div>
                                <div class="p-name">
                                    <span>5000{{gameCommonInfo.coin_name}}</span> 10 wolf cards
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="tabIndex===2" class="roi">
                <div class="ps">
                    Pre sale:<span>1{{gameCommonInfo.trade_coin}}={{gameCommonInfo.in_price}}{{gameCommonInfo.coin_name}}, relase {{gameCommonInfo.in_quantity}}{{gameCommonInfo.coin_name}}</span>
                </div>

                <div class="ct">
                    <div v-for="(item,index) in tab_info_2" class="ps-card">
                        <div class="ps-title">
                            <div class="index">{{index + 1}}</div>
                            <div class="ps-info">
                                {{item.title}}
                            </div>
                        </div>
                        <div class="info">
                            {{item.text}}
                        </div>
                        <div class="ps-img">
                            <img v-bind:src="item.pic" alt="">
                        </div>
                    </div>
                </div>
            </div>


            <div v-if="tabIndex===3" class="updates">
                <div class="time-line" v-for="item in tab_info_3">
                    <div class="time">
                        {{item.time}}
                    </div>
                    <div class="time-info">
                        <h1>
                            {{item.title}}
                        </h1>
                        <p>
                            {{item.text}}
                        </p>
                    </div>
                    <div class="time-img">
                        <img v-bind:src="item.pic" alt="">
                    </div>
                </div>

            </div>


            <div v-if="tabIndex===4" class="faq">
                <div class="q-card" v-for="(item,index) in tab_info_4">
                    <div class="q">
                        Q{{index + 1}}: {{item.title}}
                    </div>
                    <div class="a">
                        {{item.text}}
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
    import t from '../../assets/js/tools';

    export default {
        name: 'app',
        data() {
            return {
                tabIndex: 1,
                pid: 0,
                isGpOf: false,
                tab_info_1: {team: []},
                tab_info_2: undefined,
                tab_info_3: undefined,
                tab_info_4: undefined,
                gameCommonInfo: {},
                isRaise: true,
                tab_info_1_intro: {},
                team: [],
                has: 0,
                isLogin: false,
            }
        },
        methods: {
            tabChange: function (i) {
                this.tabIndex = i;
                if (i === 2 && !this.tab_info_2) {
                    t.get('game/web/detail', {
                        pid: this.pid,
                        tab: 2
                    }, (data) => {
                        this.tab_info_2 = data.body.data.detail.repay;
                        console.log(this.tab_info_2);
                    })
                }
                if (i === 3 && !this.tab_info_3) {
                    t.get('game/web/detail', {
                        pid: this.pid,
                        tab: 3
                    }, (data) => {
                        this.tab_info_3 = data.body.data.detail.dynamics;
                    })
                }
                if (i === 4 && !this.tab_info_4) {
                    t.get('game/web/detail', {
                        pid: this.pid,
                        tab: 4
                    }, (data) => {
                        this.tab_info_4 = data.body.data.detail.faq;
                    })
                }
            },
            isOf: function () {
                let container = document.querySelector('.game-package .scroll');
                if (container.children.length >= 3) {
                    this.isGpOf = true;
                }
            },
            showDl: function () {
                $('#myModal').modal('show');
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                this.isOf();
            })
        },
        props: ['id', 'pushStatus'],
        created() {
            this.isLogin = this.pushStatus;
            var _this = this;
            this.pid = this.$route.params.id;
            t.get('game/web/detail', {
                pid: this.pid,
                tab: 1
            }, function (data) {
                _this.gameCommonInfo = data.body.data.product;
                _this.tab_info_1 = data.body.data.detail;
                if (_this.tab_info_1) {
                    _this.tab_info_1_intro = _this.tab_info_1.intro[0];
                } else {
                    _this.tab_info_1_intro = {};
                }
                if (data.body.data.detail) {
                    _this.team = data.body.data.detail.team;
                } else {
                    _this.team = [];
                }
                if (_this.gameCommonInfo.ratio.indexOf("+") === 0) {
                    _this.isRaise = true;
                } else {
                    _this.isRaise = false;
                }
            })

            t._get('trade/info', {product_id: _this.pid, type: 1}, function (data) {
                _this.has = data.body.data.time;
            })

        },
        components: {},
        watch: {
            pushStatus: function () {
                this.isLogin = this.pushStatus;
                console.log(this.isLogin);
            }
        },
    }
</script>