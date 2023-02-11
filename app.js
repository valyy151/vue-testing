const app = Vue.createApp({
  data() {
    return {
      firstTitle: true,
      title: 'The Brothers Karamazov',
      author: 'Fyodor Dostoyevsky',
      age: 40,
    };
  },
  methods: {
    switchTitles() {
      if (this.firstTitle) {
        this.title = 'Crime and Punishment';
      } else {
        this.title = 'The Brothers Karamazov';
      }
      this.firstTitle = !this.firstTitle;
    },
  },
});

app.mount('#app');
