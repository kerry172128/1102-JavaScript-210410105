import fetchDrinks from "./fetchDrinks_05.js";
import displayDrinks from "./displayDrinks_05.js";
import setDrink from './setDrink_05.js'

const presentDrinks = async (url) => {
    // fetch drinks
      const data = await fetchDrinks(url);
      console.log('drinks data', data);
      const section = await displayDrinks(data);
      if(section) {
        setDrink(section);
      }
};

export default presentDrinks;
