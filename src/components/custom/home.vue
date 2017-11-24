<style scoped="scoped" lang="less">
    .w800 {
        width: 810px;
        .logo-home {
            display: inline-block;
            width: 100%;
            height: 44px;
            margin-top: 106px;
            text-align: center;
            margin-bottom: 81px;
            img {
                height: 100%;
            }
        }
        .card-area {
            margin-bottom: 100px;
            .card {
                width: 240px;
                height: 116px;
                box-shadow: rgba(0, 0, 0, .5) 0 0 4px;
                margin-right: 38px;
                display: inline-block;
                padding-top: 40px;
                text-align: center;
                font-size: 16px;
                color: #94ABC9;
                font-weight: 500;
                margin-bottom: 30px;
                background-color: #fff;
                &:nth-child(3n) {
                    margin-right: 0;
                }
                img {
                    width: 36px;
                }
            }
        }
    }
</style>

<template>
    <div class="custom">
        <div class="w800">
            <div class="logo-home">
                <img src="../../assets/img/logo_home.png" alt="">
            </div>
            <div class="card-area">
                <a href="#" class="card">
                    <img src="../../assets/img/c-logo1.png" alt="">
                    关于Game.com
                </a>
                <a href="#" class="card">
                    <img src="../../assets/img/c-logo2.png" alt="">
                    金牌中心
                </a>
                <a href="#" class="card">
                    <img src="../../assets/img/c-logo3.png" alt="">
                    意见反馈
                </a>
                <a href="#" class="card">
                    <img src="../../assets/img/c-logo4.png" alt="">
                    常见问题
                </a>
                <a href="#" class="card">
                    <img src="../../assets/img/c-logo5.png" alt="">
                    联系客服
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    //    import t from '../assets/js/tools';

    export default {
        name: 'app',
        data() {
            return {}
        },
        methods: {},
        mounted: function () {
            this.$nextTick(function () {

            })
        },
        created() {

        },
        components: {},
        watch: {
            // a: function (val, oldVal) {
            // },
            // obj: {
            //    handler: function (val, oldVal) { /* ... */ },
            //    deep: true
            // }
        }
    }
</script>