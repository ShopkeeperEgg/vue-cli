<style scoped="scoped" lang="less">
    .modal-dialog-l {
        width: 100%;
        height: 100%;
        .modal-content {
            width: 240px;
            min-height: 160px;
            border-radius: 16px;
            border: none;
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            background-color: #F9FBFF;
            padding-bottom: 26px;

            .tip-man {
                width: 86px;
                margin-left: auto;
                margin-right: auto;
                margin-top: 30px;
                img {
                    width: 100%;
                    /*height: 100%;*/
                }
            }
            .tips {
                color: #808080;
                font-size: 14px;
                margin-top: 25px;
                text-align: center;
            }
            .close {
                display: none;
                position: absolute;
                top: 10px;
                right: 25px;
                font-size: 20px;
            }
        }
    }
</style>

<template>
    <!--<div>-->
    <div class="modal fade" v-bind:id="id" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog modal-dialog-l" role="document">
            <div class="modal-content">
                <div class="tip-man" v-if="man===1">
                    <img src="../assets/img/success_man.png" alt="">
                </div>
                <div class="tip-man" v-if="man===2">
                    <img src="../assets/img/error_man.png" alt="">
                </div>
                <div class="tips">
                    {{info}}
                </div>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                        aria-hidden="true">&times;</span></button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                id: '',
                info: '',
                man: 1,
            }
        },
        methods: {},
        mounted: function () {
            this.$nextTick(function () {

            })
        },
        created() {
            this.id = this.model_info.id;
            this.info = this.model_info.tips;
            this.man = this.model_info.man;
        },
        components: {},
        watch: {},
        props: ['model_info']
    }
</script>