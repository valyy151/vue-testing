const app = Vue.createApp({
  data() {
    return {
      firstTitle: true,
      books: [
        {
          title: 'The Brothers Karamazov',
          author: 'Fyodor Dostoyevsky',
          age: 40,
        },
        {
          title: 'The Power of Now',
          author: 'Eckhart Tolle',
          age: 56,
        },
        {
          title: 'Meditations',
          author: 'Marcus Aurelius',
          age: 67,
        },
        {
          title: 'The Book of Five Rings',
          author: 'Miyamoto Musashi',
          age: 75,
        },
      ],
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
