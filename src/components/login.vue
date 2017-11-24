<style scoped="scoped" lang="less">
    .row {
        width: 100%;
        .form-label {
            text-align: right;
        }
    }
</style>

<template>
    <div>
        <!--Do it!-->
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                    aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">登录</h4>
        </div>
        <form id="login_form">
            <div class="modal-body">
                <label class="row">
                    <div class="col-md-5 form-label">用户名：</div>
                    <div class="col-md-4"><input type="text"></div>
                    <span class="col-md-3 tips"></span>
                </label>
                <br>
                <label class="row">
                    <div class="col-md-5 form-label">密 码：</div>
                    <div class="col-md-4"><input type="text"></div>
                    <span class="col-md-3 tips"></span>
                </label>
                <br>
                <label class="row">
                    <div class="col-md-5 form-label">确认密码：</div>
                    <div class="col-md-4"><input type="text"></div>
                    <span class="col-md-3 tips"></span>
                </label>
                <br>
                <label class="row">
                    <div class="col-md-5 form-label">邮箱：</div>
                    <div class="col-md-4"><input type="text"></div>
                    <span class="col-md-3 tips"></span>
                </label>
            </div>
            <div class="modal-footer">
                <button type="button" @click='sub()' class="btn btn-default" data-dismiss="modal">取消</button>
                <input type="submit" class="btn btn-primary" value="登录">
            </div>
        </form>
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
            sub() {
                $('#login_form').trigger('submit');
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