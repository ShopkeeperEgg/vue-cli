<template>
  <div id="app">
    <ul>
      <li>
        <div>pic_url :</div>
        <div>
          <input v-model="pic_url" type="text">
        </div>
        <div>活动图片地址（例如 https://xxxx/xxx.jpg）</div>
      </li>


      <li>
        <div>title :</div>
        <div>
          <input v-model="title" type="text">
        </div>
        <div>活动标题（例如 【张家辉】xxx应援活动）</div>
      </li>


      <li>
        <div>uid :</div>
        <div>
          <input v-model="uid" type="text">
        </div>
        <div><div>明星uid（例如 1234567）</div></div>
      </li>


      <li>
        <div>target_number :</div>
        <div>
          <input v-model="target_number" type="text">
        </div>
        <div>目标次数（例如 8888）</div>
      </li>


      <li>
        <div>start_time :</div>
        <div>
          <input v-model="start_time" type="text">
        </div>
        <div>开始时间（例如 2018-01-01 12:23:23） 注意有空格，时和分之间的冒号是英文的冒号，建议直接修改数字</div>
      </li>


      <li>
        <div>end_time :</div>
        <div>
          <input v-model="end_time" type="text">
        </div>
        <div>结束时间（例如 2018-01-01 12:23:23） 规则同上</div>
      </li>

      <li>
        <div>detail :</div>
        <div>
          <input v-model="detail" type="text">
        </div>
        <div>活动详情 （随便写）</div>
      </li>


    </ul>

    <button @click="sub">提交</button>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      xixi: { a: 1 },
      pic_url: 'https://ww1.sinaimg.cn/bmiddle/624b7226ly1fr0x63tie7j2082055wej.jpg',
      title: '【来去之间】加点广告怎么了？',
      uid: '1111681197',
      target_number: '3',
      detail: '加广告加广告加广告',
      start_time: '2018-06-01 12:00:00',
      end_time: '2018-06-05 12:00:00',
    }
  },
  methods: {
    sub() {
      this.$http.get('/api/collect/add', {
        params: {
          pic_url: this.pic_url,
          title: this.title,
          uid: this.uid,
          target_number: this.target_number,
          start_time: this.start_time,
          end_time: this.end_time,
          detail: this.detail
        }
      }).then(data => {
        if (+data.data.ok === 1) {
          alert('Success')
        } else {
          alert('Fail')
        }
      })
    }
  },
  created() {
    setTimeout(() => {
      this.xixi.m = 3;
    }, 0);
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}

ul {

  padding-left: 50px;
}

button {
  width: 300px;
  height: 60px;
  margin: 0 auto;
  display: block;
}

input {
  width: 70%;
  display: block;
}

li {
  padding-bottom: 30px;
}
</style>