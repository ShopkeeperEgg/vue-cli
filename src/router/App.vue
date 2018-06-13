
<style lang="less">
    #app {
      /*margin-bottom: 142px;*/
    }
</style>

<template>
    <div id="app">
        <router-view>
        </router-view>
    </div>
</template>

<script>
    import home from './components/home/home';
    import navBar from './components/nav.vue';
    import bottom from './components/bottom.vue';

    //    import echarts from 'echarts';

    import t from './assets/js/tools';

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
      created() {

      },
      mounted: function () {
        this.$nextTick(function () {
          window.onhashchange = function () {
            $('body,html').animate({scrollTop: 0}, 0);
          }
        })
      },
      components: {
        // 引入的组件写在这里
        home, navBar, bottom
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



