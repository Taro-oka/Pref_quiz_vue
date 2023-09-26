import { collection, getDocs } from "firebase/firestore";
import { ref } from "vue";
import { db } from "../firebase";

export const getData = async (channelName) => {
  const fbData = ref([]);
  const dataRef = collection(db, channelName);
  try {
    const querySnapshot = await getDocs(dataRef);
    const newData = [];
    querySnapshot.forEach((doc) => {
      newData.push({ id: doc.id, ...doc.data() });
    });
    // データを更新
    fbData.value = newData;
  } catch (error) {
    console.error("データの取得に失敗しました:", error);
  }

  // すべての都道府県から3つずつ市町村をランダムに選びます。
  function getRandomCitiesFromAllPrefs(fbData) {
    const allCities = [];
    fbData.forEach((prefObj) => {
      const shuffledCities = prefObj.cities.slice();
      for (let i = shuffledCities.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledCities[i], shuffledCities[j]] = [
          shuffledCities[j],
          shuffledCities[i],
        ];
      }
      const selectedCities = shuffledCities.slice(0, 3);
      allCities.push(...selectedCities);
    });
    return allCities;
  }

  // NewObオブジェクトを作成
  const data = [];
  const selectedCities = getRandomCitiesFromAllPrefs(fbData.value);

  for (let i = 0; i < selectedCities.length; i++) {
    const index = Math.floor(i / 3); // 3つの市町村ごとに都道府県を選択
    const prefObj = fbData.value[index];
    const city = selectedCities[i];
    const pref = prefObj.pref;

    data.push({
      id: i + 1,
      city: city,
      pref: pref,
      yourAnswer: "",
    });
  }

  // data配列をシャッフル
  for (let i = data.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
    // シャッフル後、idを更新
    data[i].id = i;
    data[j].id = j;
  }

  //   console.log(data);
  return data;
};
