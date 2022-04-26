const App = Vue.createApp({
  data() {
    return {
      title: 'ToDo App',
      tasks: [],
    };
  },
  methods: {
    addItem: function () {
      if (!this.tasks.name) {
        return;
      }
      this.tasks.push({
        name: this.tasks.name,
        del: '',
      });
      this.tasks.name = '';
    },
    delItem: function () {
      this.tasks.splice(this.tasks.indexOf(task), 1);
    },
  },
}).mount('#app');
