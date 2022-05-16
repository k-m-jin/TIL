const App = {
  //반응형 데이터 || 반응성을 가진 데이터
  data() {
    return {
      title: "",
      page: 1,
      movies: [],
      msg: "heropy?!",
    };
  },
  //계산된 데이터 원본 데이터가 필수
  computed: {
    customMovies() {
      this.movies.map((movie) => {
        return {
          poster: movie.Poster,
          title: movie.Title,
          id: movie.imdbID,
        };
      });
    },
    //getter
    // reversedMsg() {
    //   return this.msg.split("").reverse().join("");
    // },
    reversedMsg: {
      //set 가 필요할땐 분리해야한다.
      get() {
        return this.msg.split("").reverse().join("");
      },
      set(value) {
        console.log("Computed Setter", value);
      },
    },
  },
  watch: {
    movies(newValue, oldValue) {
      console.log("new:", newValue);
      console.log("old:", oldValue);
    },
  },
  methods: {
    async searchMovies(isFirst) {
      //일반함수
      if (isFirst) {
        this.movies = [];
        this.page = 1;
      }
      let res = await fetch(
        `https://www.omdbapi.com/?apikey=7035c60c&s=${this.title}&page=${this.page}`
      );
      res = await res.json();
      console.log(res);
      const { Search, totalResults } = res;
      this.movies.push(...Search);
      this.page += 1;
    },
    // async searchMoviesMore() {
    //   this.page += 1;
    //   let res = await fetch(
    //     `https://www.omdbapi.com/?apikey=7035c60c&s=${this.title}&page=${this.page}`
    //   );
    //   res = await res.json();
    //   console.log(res);
    //   const { Search, totalResults } = res;
    //   this.movies.push(...Search);
    // },
    reverseMsg() {
      return this.msg.split("").reverse().join("");
    },
  },
};
Vue.createApp(App).mount("#app");
