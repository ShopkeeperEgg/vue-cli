<style lang="less">
    .app-download {
        background-image: url(../../assets/img/app-download.jpg);
        width: 100%;
        height: 100%;
        -webkit-background-size: cover;
        background-size: cover;
    }

    html, body, #app {
        width: 100%;
        height: 100%;
    }

    #app > div {
        width: 100%;
        height: 100%;
        padding-bottom: 142px;
    }

    .w490 {
        height: 100%;
        position: relative;
        .zoom {
            width: 100%;
            height: 484px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            .mobile {
                width: 239px;
                height: 484px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .info1, .info2 {
                font-size: 32px;
                font-weight: 100;
                color: #4A4A4A;
                width: 186px;
                height: 168px;
                position: absolute;
                right: 0;
                top: 18px;
                letter-spacing: 2.29px;
                line-height: 42px;
                font-family: 'Montserrat', '微软雅黑';
            }
            .info2 {
                top: 280px;
            }
            .d-btn {
                position: absolute;
                top: 376px;
                right: 65px;
                a {
                    width: 124px;
                    height: 39px;
                    display: block;
                    margin-bottom: 10px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
</style>

<template>
    <div class="app-download">
        <!--Do it!-->
        <div class="w490">
            <div class="zoom">
                <div class="mobile">
                    <img src="../../assets/img/mobile.png" alt="">
                </div>
                <div class="info1">
                    Game.com <br>
                    Creating <br>
                    a new  <br>
                    world!!
                </div>
                <div class="info2">
                    Download <br>
                    now!!
                </div>
                <div class="d-btn">
                    <a href="#">
                        <img src="../../assets/img/app-btn.png" alt="">
                    </a>
                    <a href="#">
                        <img src="../../assets/img/ad-btn.png" alt="">
                    </a>
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
                title: '我是一个小毛驴',
                index: 5
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
            this.$emit('getIndex', this.index);
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