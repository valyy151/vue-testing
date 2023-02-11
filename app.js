const app = Vue.createApp({
  data() {
    return {
      books: [
        {
          isFav: false,
          img: '/1.jpg',
          title: 'The Brothers Karamazov',
          author: 'Fyodor Dostoyevsky',
          age: 40,
        },
        {
          isFav: false,
          img: '/2.jpg',
          title: 'The Power of Now',
          author: 'Eckhart Tolle',
          age: 56,
        },
        {
          isFav: true,
          img: '/3.jpeg',
          title: 'Meditations',
          author: 'Marcus Aurelius',
          age: 67,
        },
        {
          isFav: false,
          img: '/4.jpg',
          title: 'The Book of Five Rings',
          author: 'Miyamoto Musashi',
          age: 75,
        },
      ],
    };
  },
  methods: {
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav == true);
    },
  },
});

app.mount('#app');
