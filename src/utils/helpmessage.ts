import { Category } from "../types/Category";

export const helpMessage = (category: Category) => {
  const for1Category =
    category.group1 === 0
      ? `1. Grains, white roots and tubers, and plantains: wheat, flour, lagmon, noodles, rice, buckwheat, mung bean, semolina, перловка, corn, oatmeal, Column1, cake, homemade bread, baker's bread, chapoti, fatir, sambusa, blish (pie), qalama, ozuq, chak-chak, Column2, potatoes, white potatoes, turnip, beet, carrot, green radish, Column3, Other.`
      : "";
  const for2Category =
    category.group2 === 0 &&
    "2. Pulses (beans, peas and lentils): beans, peas, lentils, Other4.";
  const for3Category =
    category.group3 === 0 &&
    "3. Nuts and seeds24 (including groundnut): nut, donak, almond, pistachios, groundnut, sunflower seeds, pumpkin seed, sesame, Other5.";
  const for4Category =
    category.group4 === 0 &&
    "4. Dairy: milk, cheese, yogurt, kefir, chakka, cream, skimmed milk (cottage cheese), jurgot, qurut, Other6.";
  const for5Category =
    category.group5 === 0 &&
    "5. Meat, poultry, and fish: liver, kidney, heart, lamb's head and feet, cow stomach, Column7, beef, lamb meat, goat meat, chicken or duck meat, beef tripe, kallapocha, rabbit meat, Column8, liver9, kidney10, heart11, Column12, meat of wild birds, rabbit meat13, pork, Column14, fish, zadafak, seafood, Other15.";
  const for6Category =
    category.group6 === 0 && "6. Eggs: egg, duck eggs, quail eggs, Other16.";
  const for7Category =
    category.group7 === 0 &&
    "7. Dark green leafy vegetables: green onion leaves, green garlic leaf, coriander, peppermint, dill, basil, broccoli, spinach, blindweed (Capsella bursa pastoris), ginger (jambil), allium rosenbachianum, green, alfalfa, green beans, beetroot, chinese cabbage leaves, okra, Other17.";
  const for8Category =
    category.group8 === 0 &&
    "8. Other vitamin A-rich fruits and vegetables: pumpkin, carrot18, sweet potato, bulgarian yellow, egg19, Column20, dry apricot, peach, yellow melons, pumpkin21, carrot22, yellow plum, handalak, Column23, tomatoes, apricot, peach24, plum, watermelon, melon, Other25.";
  const for9Category =
    category.group9 === 0 &&
    "9. Other vegetables: onion, cabbage, cauliflower, garlic, corn26, cucumber, bulgarian green, eggplant, chinese cabbage, mushroom, okra27, radish, Other28.";
  const for10Category =
    category.group10 === 0 &&
    "10. Other fruits: watermelon29, cherry, sweet cherry, hawthorn, apple, grapes, banana, tangerine, orange, pear, pomegranate, strawberry, persimmon, khuj, plum30, Tut, sanjid, lemon, black currant, raisins, Other31.";
  const for11Category =
    category.group11 === 0 &&
    "11. Unhealthy foods - Sweet food: chocolates, cakes, cookies, wet halva, sesame halva, simalak, nisholo, sunflower seeds-halva, sweets (sugar sand, sugar cubes), jam, Bun, honey, ice cream, Other32.";
  const for12Category =
    category.group12 === 0 &&
    "12. Other relevant food groups (other oil and fats+condiments and seasoning): oil, fat, butter, buttock, margarine, Column33, hot pepper, pepper, Zeroboy, flavorings, herbs, bay leaf, cumin, iodized salt, Other34.";
  const for13Category =
    category.group13 === 0 && "13. Drinks: tea, coffee, compote, juice.";
  return (
    for1Category +
    for2Category +
    for3Category +
    for4Category +
    for5Category +
    for6Category +
    for7Category +
    for8Category +
    for9Category +
    for10Category +
    for11Category +
    for12Category +
    for13Category
  );
};
