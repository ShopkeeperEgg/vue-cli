<style scoped="scoped" lang="less">
    .man_content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        img {
            height: 120px;
        }
        p {
            margin-top: 16px;
            color: #999999;
            font-size: 14px;
            text-align: center;
        }
    }
</style>

<template>
    <div class="man_content">
        <img src="../assets/img/man_1.png" alt="">
        <p>{{text}}</p>
    </div>
</template>

<script>
    //    import t from '../assets/js/tools';

    export default {
        name: 'app',
        data() {
            return {
                text: '这里啥都没有哦~'
            }
        },
        methods: {},
        mounted: function () {
            this.$nextTick(function () {

            })
        },
        created() {
            if (this.msg) {
                this.text = this.msg;
            }
        },
        components: {},
        watch: {
            // a: function (val, oldVal) {
            // },
            // obj: {
            //    handler: function (val, oldVal) { /* ... */ },
            //    deep: true
            // }
        },
        props: ['msg']
    }
</script>