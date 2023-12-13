export const breakfastcategory = (data: string[]) => {
  const count = (text: string) => +data.includes(text);
  const group1 =
    count("flour") +
    count("other") +
    count("other_shirchoy") +
    count("other_fried_eggs") +
    count("potatoes") +
    count("rice") +
    count("buckwheat") +
    count("semolina") +
    count("oatmeal") +
    count("other_porridge") +
    count("other_milk_soup_with_pumpkin") +
    count("rice_milk_rice_porridge") +
    count("other_milk_rice_porridge") +
    count("rice_rice") +
    count("other_boiled_egg") +
    count("other_cholob") +
    count("cake_homemade_bread") +
    count("chapoti") +
    count("fatir") +
    count("sambusa") +
    count("other_sambusa") +
    count("other_belyash") +
    count("qalama") +
    count("other_qalama") +
    count("corn");
  const group2 = count("peas");
  const group3 =
    count("nut") +
    count("donak") +
    count("almond") +
    count("pistachios") +
    count("groundnut");
  const group4 =
    count("milk") +
    count("milk_shirchoy") +
    count("milk_porridge") +
    count("milk_milk_rice_porridge") +
    count("milk_milk") +
    count("kefir") +
    count("chakka") +
    count("kefir_kefir") +
    count("cheese") +
    count("yogurt") +
    count("cream") +
    count("skimmed_milk_(cottage_cheese)") +
    count("jurgot") +
    count("qurut");
  const group5 = 0;
  const group6 = count("egg") + count("egg_boiled_egg");
  const group7 =
    count("allium_rosenbachianum") +
    count("green") +
    count("green_cholob") +
    count("peppermint") +
    count("dill") +
    count("basil") +
    count("coriander") +
    count("ginger_(jambil)") +
    count("spinach") +
    count("blindweed(capsella_bursa_pastoris)") +
    count("green_onion_leaves") +
    count("green_garlic_leaf");
  const group8 =
    count("tomatoes") +
    count("pumpkin") +
    count("tomatoes_cholob") +
    count("dry_apricot") +
    count("melon") +
    count("watermelon");
  const group9 = count("onion") + count("cucumber");
  const group10 =
    count("raisins") +
    count("apple") +
    count("grapes") +
    count("banana") +
    count("tangerine") +
    count("orange") +
    count("pear") +
    count("pomegranate") +
    count("strawberry");
  const group11 =
    count("sweets_(sugar_sand,_sugar_cubes)") +
    count("wet_halva") +
    count("sesame_halva") +
    count("simalak") +
    count("nisholo") +
    count("jam") +
    count("chocolates") +
    count("cakes") +
    count("cookies") +
    count("bun");
  const group12 =
    count("butter") +
    count("butter_shirchoy") +
    count("oil") +
    count("butter_milk_soup_with_pumpkin") +
    count("butter_milk_rice_porridge") +
    count("butter_butter") +
    count("oil_fatir") +
    count("oil_sambusa") +
    count("oil_belyash") +
    count("butter_belyash") +
    count("iodized_salt") +
    count("hot_pepper") +
    count("pepper") +
    count("zeroboy");
  const group13 =
    count("tea") +
    count("tea_tea") +
    count("coffee") +
    count("compote") +
    count("juice");
  return {
    group1,
    group2,
    group3,
    group4,
    group5,
    group6,
    group7,
    group8,
    group9,
    group10,
    group11,
    group12,
    group13,
  };
};
