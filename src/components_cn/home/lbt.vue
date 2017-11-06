<style scope lang="less">
    #carousel-example-generic {
        width: 100%;
        height: 428px;
        text-align: center;
        margin-top: 30px;
        .carousel-indicators {
            position: absolute;
            bottom: 0px;
            li {
                width: 4px;
                height: 4px;
                border-radius: 0;
                background-color: rgba(256, 256, 256, .5);
                border: none;
                transition: all .3s linear;
                margin-left: 5px;
                margin-right: 5px;
                &.active {
                    width: 14px;
                    height: 4px;
                    background-color: white;
                    margin: 1px 5px;
                }
            }
        }
        .carousel-inner {
            height: 100%;
            .item {
                height: 100%;
                a {
                    img {
                        height: 100%;
                        /*!*width: auto;*!*/
                        /*margin: 0 auto;*/
                        /*max-width:0%;*/
                        max-width: inherit;
                        position: absolute;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                }
            }
        }
    }
</style>

<template>
    <div>
        <!--Do it!-->
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
                <div class="item active">
                    <a href="javascript:;">
                        <img src="../../assets/img/temp/lbt.jpg" alt="...">
                    </a>
                    <div class="carousel-caption">
                    </div>
                </div>
                <div class="item">
                    <a href="javascript:;">
                        <img src="../../assets/img/temp/lbt.jpg" style="width: 1440px;" alt="...">
                    </a>
                    <div class="carousel-caption">
                    </div>
                </div>
                <div class="item">
                    <a href="javascript:;">
                        <img src="../../assets/img/temp/lbt.jpg" style="width: 1440px;" alt="...">
                    </a>
                    <div class="carousel-caption">
                    </div>
                </div>
            </div>

            <!-- Controls -->
            <a class="hide left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="hide right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
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