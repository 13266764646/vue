<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
<div>
    <div v-text="msg"></div>
    <div>{{nes}}</div>
        {{5+5}}<br>
        {{ ok ? 'YES' : 'NO' }}<br>
        {{ message.split('').reverse().join('') }}
        <div v-bind:id="'list-'+id">菜吗胜利大街11111134343</div>

        <div>
            <p v-if="seen">if语法现在你看到我了</p>
            <pre><a v-bind:href="url">v-bind:href语法</a></pre>
            <p>{{modelMessage}}</p>
            <input v-model="modelMessage">
        </div>

  <hr>
        <div>
          <p>{{reverseMessage1}}</p>
          <button v-on:click="reverseMessage">反转字符串</button>
        </div>
  <hr>
  <div>
    {{ message | capitalize }}<p>过滤器测试</p>
  </div>
  <hr>
  <p>v-if条件和循环</p>
  <div>
    <p v-if="seen">v-if语法现在你看到我了</p>
    <template v-if="vIfOk">
      <h1>菜鸟教程</h1>
      <p>学的不仅是技术，更是梦想！</p>
      <p>哈哈哈，打字辛苦啊！！！</p>
    </template>
  </div>

  <hr>
  <p>v-if 和v-else语法</p>
  <div>
    <div v-if="Math.random() > 0.5">
      Sorry v-if
    </div>
    <div v-else>
      Not sorry v-else
    </div>
  </div>
  <hr>
  <div>
    <p>v-for循环语句</p>
    <ol>
      <li v-for="site in sites" :key="site">
        {{ site.name }}
      </li>
    </ol>
  </div>
</div>
</template>
<script>
export default {
  name: 'viewHtml',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      nes: '123213123',
      ok: true,
      message: 'welcome to Your Vue.js 222222',
      id: 1,
      seen: true,
      url: 'http://www.baidu.com',
      modelMessage: 'modelMessage',
      reverseMessage1: 'reverseMessage is 11111',
      vIfOk: false,
      sites: [
        {name: 'Runoob'},
        {name: 'Google'},
        {name: 'Taobao'}
      ]
    }
  },
  methods: {
    reverseMessage: function () {
      this.reverseMessage1 = this.reverseMessage1.split('').reverse().join('')
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
}
</script>
