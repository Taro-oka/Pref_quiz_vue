import { createStore } from "vuex";

// ストアを作成
const store = createStore({
  state: {
    prefData: [],
    currentNum: -1,
    currentPref: "",
    selectedAnswer: "",
    score: 0,
    message: "",
    isNext: true,
    isConfirm: false,
    isAnySelected: false,
    isChecked: false,
    isResultShown: false,
  },
  mutations: {
    setPrefData(state, payload) {
      state.prefData = payload;
      //   console.log(state.prefData);
    },
    gotoNext(state) {
      if (!state.currentNum) {
        state.currentNum++;
        state.currentPref = state.prefData[state.currentNum].city;
      } else {
        state.currentNum++;
        state.currentPref = state.prefData[state.currentNum].city;
      }

      [state.isNext, state.isConfirm] = [!state.isNext, !state.isConfirm];
      //   console.log(state.currentNum);
    },
    confirmAnswer(state, payload) {
      //   選択がなされなかった時の処理は、呼び出す側で行っているのでOK

      state.prefData[state.currentNum].yourAnswer = state.selectedAnswer;

      [state.isNext, state.isConfirm] = [!state.isNext, !state.isConfirm];

      state.selectedAnswer = "";

      //   console.log(state.prefData);
    },
    getSomeSelected(state) {
      state.isAnySelected = true;
    },
    getNoneSelected(state) {
      state.isAnySelected = false;
    },
    getSomeChecked(state) {
      state.isChecked = true;
    },
    getUnchecked(state) {
      state.isChecked = false;
    },
    showResult(state) {
      state.isResultShown = !state.isResultShown;
    },
    getSore(state) {
      let score = 0;
      state.prefData.forEach((item) => {
        if (item.pref === item.yourAnswer) {
          score++;
          // console.log(score);
        }
      });
      state.score = score;
    },
    getMessage(state) {
      let msg = "";
      switch (true) {
        case state.score >= 18:
          msg = "天才ですか？";
          break;
        case state.score >= 16:
          msg = "よくできました！";
          break;
        case state.score >= 13:
          msg = "まあまあですね";
          break;
        case state.score >= 10:
          msg = "要復習！";
          break;
        case state.score >= 7:
          msg = "もっと頑張れ";
          break;
        case state.score >= 4:
          msg = "大丈夫？";
          break;
        case state.score >= 1:
          msg = "適当にやったやろ";
          break;
        case state.score === 0:
          msg = "逆にすごい";
          break;
        default:
          msg = "スコアが不明です";
      }
      state.message = msg;
    },
  },
  actions: {
    commitSetPrefData({ commit }, payload) {
      commit("setPrefData", payload.data);
    },
    commitGotoNext({ commit }) {
      commit("gotoNext");
    },
    commitConfirmAnswer({ commit }, payload) {
      commit("confirmAnswer", payload);
    },
    commitGetSomeSelected({ commit }) {
      commit("getSomeSelected");
    },
    commitGetNoneSelected({ commit }) {
      commit("getNoneSelected");
    },
    commitGetSomeChecked({ commit }) {
      commit("getSomeChecked");
    },
    commitGetUnchecked({ commit }) {
      commit("getUnchecked");
    },
    commitShowResult({ commit }) {
      commit("showResult");
    },
    commitGetSore({ commit }) {
      commit("getSore");
    },
    async commitGetMessage({ commit }) {
      setTimeout(() => {
        commit("getMessage");
      }, 2000);
    },
    // commitGetMessage({ commit }) {
    //   setTimeout(commit("getMessage"), 1000);
    // },
  },
  getters: {},
});

export default store;
