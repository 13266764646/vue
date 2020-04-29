<template>
<div>
    <div v-text="msg"></div>
    <div>{{nes}}</div>
        {{5+5}}<br>
        {{ ok ? 'YES' : 'NO' }}<br>
        {{ message.split('').reverse().join('') }}
        <div v-bind:id="'list-'+id">菜吗胜利大街11111134343</div>

        <div id="app">
            <p v-if="seen">if语法现在你看到我了</p>
            <pre><a v-bind:href="url">v-bind:href语法</a></pre>
            <p>{{modelMessage}}</p>
            <input v-model="modelMessage">
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
      message: 'Welcome to Your Vue.js 111',
      id: 1,
      seen: true,
      url: 'http://www.baidu.com',
      modelMessage: 'modelMessage'
    }
  }
}
</script>
