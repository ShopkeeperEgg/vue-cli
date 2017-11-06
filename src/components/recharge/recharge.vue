<style scope lang="less">
    body {
        background-color: #f9fbff;
    }

    .wall {
        text-align: center;
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
        .ewm {
            height: 138px;
            margin: 50px;
            img {
                height: 100%;
            }
        }
        .address {
            font-size: 12px;
            color: #4A4A4A;
            font-weight: 500;
            margin-bottom: 40px;
        }

    }

    .bb {
        width: 400px;
        height: 40px;
        color: #38CEAE;
        font-size: 14px;
        border: 1px solid #38CEAE;
        line-height: 40px;
        text-align: center;
        display: block;
        border-radius: 4px;
        margin-bottom: 14px;
        &:hover {
            color: #38CEAE;

        }
        &:focus {
            color: #38CEAE;
        }
    }

    .cp {
        color: #38CEAE;
        opacity: 0;
        &.op {
            animation: op 2s linear;
        }
    }

    @keyframes op {
        0% {
            opacity: 0;
        }
        20% {
            opacity: 1;
        }
        80% {
            opacity: 1;
        }
        0% {
            opacity: 0;
        }
    }


</style>

<template>
    <div class="wall">
        <!--Do it!-->
        <div class="title">
            <div class="w800">
                <a href="#/en/wallet">我的钱包</a><span>></span><i>充值</i>
            </div>
        </div>
        <div class="w400">
            <div class="btnA">
                <a href="javascript:;" @click="index=1" v-bind:class="{'active':index===1}">
                    BTC
                </a>
                <a href="javascript:;" @click="index=2" v-bind:class="{'active':index===2}">
                    ETH
                </a>
            </div>
            <div v-show="index===1">
                <div class="ewm">
                    <img src="../../assets/img/temp/ewm.jpg" alt="">
                </div>
                <div id="e_address_1" class="address">
                    0xf19b8d85c8d8154d1c41eb243d9ae98dc6cbdc6cbdc6cbdc6cbce71
                </div>
            </div>
            <div v-show="index===2">
                <div class="ewm">
                    <img src="../../assets/img/temp/ewm.jpg" alt="">
                </div>
                <div id="e_address_2" class="address">
                    0xasdasdasdasdasdasdasdasdas
                </div>
            </div>
            <a class="bb" @click="copy" href="javascript:;">复制地址</a>
            <a class="bb" href="javascript:;">下载二维码</a>
            <div v-bind:class='["cp",{"op":ani}]'>复制成功!</div>
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
                index: 1,
                ani: false
            }
        },
        methods: {
            // 绑定事件的方法
            copyToClipboard: function (elementId) {
                let aux = document.createElement("input");
                let content = document.getElementById(elementId).innerHTML || document.getElementById(elementId).value;
                aux.setAttribute("value", content);
                document.body.appendChild(aux);
                aux.select();
                document.execCommand("copy");
                document.body.removeChild(aux);
            },
            copy: function () {
                if (this.index === 1) {
                    this.copyToClipboard("e_address_1");
                } else {
                    this.copyToClipboard("e_address_2");
                }
                this.ani = true;
                setTimeout(() => {
                    this.ani = false;
                }, 2000)
            }

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