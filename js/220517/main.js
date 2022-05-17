const App = {
  data() {
    return {
      title: "",
      page: 1,
      total: 0,
      movies: [],
      showObserver: true,
    };
  },
  computed: {
    hasTheRest() {
      //반응형 데이터를 기준으로 계산되고 데이터가 갱신되면 함수도 같이 갱신
      return this.total > this.movies.length;
    },
  },
  // 생성된 직후에 실행되는 함수
  // created() {
  // html 과 연결된 후
  mounted() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("교차되었음!");
          this.searchMovies();
        }
      });
    });
    io.observe(this.$refs.observer);
  },
  methods: {
    async searchMovies(isFirst) {
      if (isFirst) {
        this.movies = [];
        this.page = 1;
      }
      let res = await fetch(
        `https://www.omdbapi.com?apikey=7035c60c&s=${this.title}&page=${this.page}`
      );
      res = await res.json();
      console.log(res);
      const { Search, totalResults } = res;
      this.movies.push(...Search);
      this.page += 1;
      this.total = Number(totalResults);
      //코드 전체를 동기적으로 평가한 후에 화면에 반영함
      this.showObserver = false;
      // setTimeout(() => { 제일 오래 걸리는 방법
      await this.$nextTick(() => {
        this.showObserver = true;
      });
    },
  },
};
Vue.createApp(App).mount("#app");
