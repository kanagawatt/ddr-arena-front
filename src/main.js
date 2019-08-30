import Vue from 'vue'
import App from './App'
import App2 from './App2'

var app = new Vue({
  el: '#app',
  render: h => h(App),
});

var app2 = new Vue({
  el: '#app2',
  render: h => h(App2),
});


Vue.component('todo-item', {
  template: '<li>This is a todo</li>'
})
