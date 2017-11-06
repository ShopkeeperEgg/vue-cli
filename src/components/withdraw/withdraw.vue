<style scope lang="less">
    body {
        background-color: #f9fbff;
    }

    .walll {
        margin-bottom: 150px;
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
        .much {
            height: 140px;
            background-color: #fff;
            padding-top: 14px;
            padding-left: 20px;
            margin-bottom: 20px;
            > span {
                display: block;
                font-size: 14px;
                color: #4D4D4D;
                font-weight: 300;
                margin-bottom: 4px;
            }
            p {
                font-size: 28px;
                font-weight: 500;
                color: #4A4A4A;
            }
            .ed {
                margin-top: 4px;
                font-size: 12px;
                color: #9B9B9B;
                font-weight: 300;
                i {
                    color: #4A4A4A;
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
            .a1 {
                position: relative;
                .extra {
                    position: absolute;
                    width: 100%;
                    z-index: 2;
                    background-color: #fff;
                    .none {
                        height: 108px;
                        text-align: center;
                        line-height: 108px;
                        color: #999999;
                        font-weight: 300;
                        font-size: 14px;
                    }
                    .exist {
                        width: 100%;
                        ul {
                            width: 100%;
                            li {
                                color: #9B9B9B;
                                font-size: 12px;
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                width: 100%;
                                padding-left: 20px;
                                padding-right: 20px;
                                line-height: 36px;
                                cursor: pointer;
                                span {
                                    color: #333333;
                                }
                                &:hover {
                                    background-color: #f9f9f9;
                                }
                            }
                        }
                    }
                    .use-new {
                        display: block;
                        width: 100%;
                        text-align: center;
                        font-size: 12px;
                        color: #3D96FF;
                        height: 40px;
                        line-height: 40px;
                        border-top: 1px solid #FAFAFA;
                        img {
                            width: 22px;
                            margin-right: 6px;
                        }
                    }
                }
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
        }
    }

    .modal-dialog-w {
        width: 100%;
        height: 100%;
        .modal-content {
            width: 360px;
            padding: 20px 30px 24px;
            border-radius: 16px;
            border: none;
            position: absolute;
            top: 50%;
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
                width: 140px;
                height: 40px;
                font-size: 16px;
                text-align: center;
                float: left;
                border-radius: 4px;
                color: #3D96FF;
                border: 1px solid #3D96FF;
                line-height: 40px;
                font-weight: 500;
                &:last-child {
                    float: right;
                    background-color: #3D96FF;
                    color: white;
                }

            }
        }
    }

</style>

<template>
    <div class="walll">
        <!--Do it!-->
        <div class="title">
            <div class="w800">
                <a href="#/en/wallet">我的钱包</a><span>></span><i>提现</i>
            </div>
        </div>
        <div class="w500">
            <div class="btnA">
                <a href="javascript:;" @click="index_w=1" v-bind:class="{'active':index_w===1}">
                    BTC
                </a>
                <a href="javascript:;" @click="index_w=2" v-bind:class="{'active':index_w===2}">
                    ETH
                </a>
            </div>
            <div v-show="index_w===1">
                <div class="much">
                    <span>可提余额</span>
                    <p>0.00764531 BTC</p>
                    <div class="ed">日提现额度： <i>2.00000000</i> BTC</div>
                    <div class="ed">今日已用： <i>0.00000000</i> BTC</div>
                </div>
                <div class="address">
                    <p>地址</p>
                    <div class="a a1">
                        <input @input="showExtra=false" type="text" v-model="address"/>
                        <i class="glyphicon glyphicon-triangle-bottom" @click="toggleExtra"></i>
                        <div class="extra" v-if="showExtra">
                            <div class="none hide">
                                您还没有地址
                            </div>
                            <div class="exist">
                                <ul>
                                    <li @click="chooseAddress('dhfuegbeblapoeowihu939584jheowi2245hu939584jh455657678767f')">
                                        <span>JessieZZ</span>
                                        dhfuegbeblapoeowihu939584jheowi2245hu939584jh455657678767f…
                                    </li>
                                    <li @click="chooseAddress('dhfuegbeblapoeowihu939584jheowi2245hu939584jh455657678767f')">
                                        <span>JessieZZ</span>
                                        dhfuegbeblapoeowihu939584jheowi2245hu939584jh455657678767f…
                                    </li>
                                    <li @click="chooseAddress('dhfuegbeblapoeowihu939584jheowi2245hu939584jh455657678767f')">
                                        <span>JessieZZ</span>
                                        dhfuegbeblapoeowihu939584jheowi2245hu939584jh455657678767f…
                                    </li>
                                </ul>
                            </div>
                            <a href="/#/en/add_new" class="use-new">
                                <img src="../../assets/img/add.png" width="22" alt="">使用新地址
                            </a>
                        </div>
                    </div>
                </div>
                <div class="address">
                    <p>数量</p>
                    <div class="a a2">
                        <input type="text" placeholder="最小提现数量0.001"/>
                        <i>全部提现</i>
                    </div>
                </div>
                <div class="d clearfix">
                    <div class="d1">手续费：</div>
                    <div class="d2">0.00</div>
                </div>
                <div class="d clearfix">
                    <div class="d1">实际到账：</div>
                    <div class="d2">0.00000000</div>
                </div>
                <a @click="withdraw" href="javascript:;" class="withdrawBtn">
                    提现
                </a>
            </div>
            <div v-show="index_w===2">
                <div class="much">
                    <span>可提余额</span>
                    <p>0.00764531 ETH</p>
                    <div class="ed">日提现额度： <i>2.00000000</i> ETH</div>
                    <div class="ed">今日已用： <i>0.00000000</i> ETH</div>
                </div>
                <div class="address">
                    <p>地址</p>
                    <div class="a a1">
                        <input type="text"/>
                        <i class="glyphicon glyphicon-triangle-bottom"></i>
                    </div>
                </div>
                <div class="address">
                    <p>数量</p>
                    <div class="a a2">
                        <input type="text" placeholder="最小提现数量0.001"/>
                        <i>全部提现</i>
                    </div>
                </div>
                <div class="d clearfix">
                    <div class="d1">手续费：</div>
                    <div class="d2">0.00</div>
                </div>
                <div class="d clearfix">
                    <div class="d1">实际到账：</div>
                    <div class="d2">0.00000000</div>
                </div>
                <a @click="withdraw" href="javascript:;" class="withdrawBtn">
                    提现
                </a>
            </div>
        </div>
        <div class="modal fade" id="withdrawModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog modal-dialog-w" role="document">
                <div class="modal-content">
                    <div class="confirm">
                        确认提现吗？
                    </div>
                    <div class="d clearfix">
                        <div class="d1">手续费：</div>
                        <div class="d2">0.01</div>
                    </div>
                    <div class="d clearfix">
                        <div class="d1">实际到账：</div>
                        <div class="d2">0.499</div>
                    </div>
                    <div class="dd">
                        <div class="title">
                            地址：
                        </div>
                        <div class="address">
                            <span>JessieZZ</span>dhfuegbeblapoeowihu939593998959384jh59384jh59384jh59384jh59384jh59384jh59384jh59384jh5986heh384jh8
                        </div>
                    </div>
                    <div class="cf-btn clearfix">
                        <a href="javascript:;" data-dismiss="modal" aria-label="Close">取消</a>
                        <a href="javascript:;" @click="confirmWithdraw">确认</a>
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
                index_w: 1, // 1-提现BTC 2-提现ETH
                address: '',
                showExtra: false
            }
        },
        methods: {
            // 点击提现按钮
            withdraw: function () {
                $('#withdrawModal').modal('show')
            },
            // 确认提现
            confirmWithdraw: function () {
                $('#withdrawModal').modal('hide');
                this.withdrawSuccess();
            },
            // 提现成功
            withdrawSuccess: function () {
                location.href = '/#/en/withdraw_success';
            },
            // 显示或者隐藏额外地址
            toggleExtra: function () {
                if (this.showExtra) {
                    this.showExtra = false;
                } else {
                    this.showExtra = true;
                }
            },
            chooseAddress: function (address) {
                this.address = address;
                this.showExtra = false;
            }
        },
        destroyed: function () {

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