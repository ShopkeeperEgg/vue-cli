<style scoped="scoped" lang="less">
    #main-ec {
        width:1030px;
        height: 300px;
        margin-left: -50px;
    }
</style>

<template>
    <div>
        <div id="main-ec"></div>
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
                var myChart = echarts.init(document.getElementById('main-ec'));
                var option = {
                    color: ['#E89A44'],
                    backgroundColor: '#ffffff',
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#000000'
                            }
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                            axisLine: {
                                lineStyle: {
                                    color: '#D8D8D8'
                                }
                            },
                            nameTextStyle: {
                                color: '#fff'
                            }
                        }
                    ],
                    yAxis: [
                        {
                            show: false
                        }
                    ],
                    textStyle: {
                        color: '#94ABC9'
                    },
                    series: [
                        {
                            name: '邮件营销',
                            type: 'line',
                            stack: '总量',
                            smooth:true,  //这句就是让曲线变平滑的
                            areaStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#fef4e6'
                                    }, {
                                        offset: 1,
                                        color: '#fff'
                                    }])
                                }
                            },
                            data: [120, 132, 101, 134, 90, 230, 210]
                        }
                    ]
                };
                myChart.setOption(option);
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