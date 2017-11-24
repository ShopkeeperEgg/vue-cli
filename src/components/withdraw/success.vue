<style scoped="scoped" lang="less">
    body {
        background-color: #f9fbff;
    }

    .wallll {
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
        .w500 {
            text-align: center;
            img {
                margin-top: 40px;
            }
            p {
                color: #4D4D4D;
                font-size: 24px;
                margin-top: 57px;
                border-bottom: 8px;
            }
            .info {
                font-size: 16px;
                line-height: 24px;
                color: #999999;
                span {
                    color: #0096FF;
                }
            }
        }
    }


</style>

<template>
    <div class="wallll">
        <!--Do it!-->
        <div class="title">
            <div class="w800">
                <a>交易成功</a>
            </div>
        </div>
        <div class="w500">
            <img src="../../assets/img/withdraw_success.png" width="265" alt="">
            <p>申请提现成功</p>
            <div class="info">
                请在 钱包-历史记录 中查看进度<br>
                页面 <span>{{leftTime}}</span> 秒后自动跳转
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        // 没啥大用处
        name: 'app',
        data() {
            return {
                leftTime: 5,
                historyUrl: '#/en/withdraw-history'
            }
        },
        methods: {
            // 倒计时跳转
            timeOut: function () {
                let timer = setInterval(function () {
                    this.leftTime--;
                    if (this.leftTime === 0) {
                        location.href = this.historyUrl;
                    }
                }.bind(this), 1000)
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                this.timeOut();
            })
        },
        created() {

        },
        components: {
            // 引入的组件写在这里

        },
        watch: {}
    }
</script>