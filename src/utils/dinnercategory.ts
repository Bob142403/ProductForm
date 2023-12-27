export const dinnercategory = (data: string[]) => {
  const count = (text: string) => +data.includes(text);
  const group1 =
    count("d_radish") +
    count("d_perlovka") +
    count("d_carrot") +
    count("d_potatoes0") +
    count("d_turnip0") +
    count("d_other0") +
    count("d_carrot1") +
    count("d_potatoes1") +
    count("d_turnip1") +
    count("d_other1") +
    count("d_other2") +
    count("d_carrot2") +
    count("d_wheat0") +
    count("d_other3") +
    count("d_noodles0") +
    count("d_other4") +
    count("d_potatoes2") +
    count("d_rice0") +
    count("d_other5") +
    count("d_noodles1") +
    count("d_other6") +
    count("d_carrot3") +
    count("d_potatoes3") +
    count("d_lagmon0") +
    count("d_other7") +
    count("d_carrot4") +
    count("d_potatoes4") +
    count("d_beet0") +
    count("d_other8") +
    count("d_other9") +
    count("d_carrot5") +
    count("d_rice1") +
    count("d_other10") +
    count("d_carrot6") +
    count("d_potatoes5") +
    count("d_lagmon1") +
    count("d_rice2") +
    count("d_other11") +
    count("d_chapoti0") +
    count("d_fatir0") +
    count("d_other12") +
    count("d_noodles2") +
    count("d_other13") +
    count("d_other14") +
    count("d_other15") +
    count("d_carrot7") +
    count("d_potatoes6") +
    count("d_turnip2") +
    count("d_beet1") +
    count("d_other16") +
    count("d_other17") +
    count("d_other18") +
    count("d_other19") +
    count("d_potatoes7") +
    count("d_other20") +
    count("d_other21") +
    count("d_potatoes8") +
    count("d_rice3") +
    count("d_buckwheat0") +
    count("d_mung_bean0") +
    count("d_other22") +
    count("d_other23") +
    count("d_carrot8") +
    count("d_potatoes9") +
    count("d_turnip3") +
    count("d_rice4") +
    count("d_buckwheat1") +
    count("d_mung_bean1") +
    count("d_other24") +
    count("d_potatoes10") +
    count("d_other25") +
    count("d_other26") +
    count("d_cake,_homemade_bread0") +
    count("d_chapoti1") +
    count("d_fatir1") +
    count("d_sambusa0") +
    count("d_other27") +
    count("d_other28") +
    count("d_qalama0") +
    count("d_other29") +
    count("d_corn0");
  const group2 =
    count("d_peas0") +
    count("d_beans0") +
    count("d_peas1") +
    count("d_lentils0") +
    count("d_beans1") +
    count("d_peas2") +
    count("d_beans2") +
    count("d_peas3") +
    count("d_beans3") +
    count("d_peas4") +
    count("d_beans4") +
    count("d_peas5") +
    count("d_peas6") +
    count("d_peas7") +
    count("d_peas8") +
    count("d_beans5") +
    count("d_peas9") +
    count("d_peas10");
  const group3 =
    count("d_donak0") +
    count("d_almond0") +
    count("d_pistachios0") +
    count("d_groundnut0");

  const group4 =
    count("d_chakka0") +
    count("d_chakka1") +
    count("d_chakka2") +
    count("d_milk0") +
    count("d_kefir0") +
    count("d_chakka3") +
    count("d_kefir1") +
    count("d_cheese0") +
    count("d_yogurt0") +
    count("d_cream0") +
    count("d_skimmed_milk_(cottage_cheese)0") +
    count("d_jurgot0") +
    count("d_qurut0");
  const group5 =
    count("d_beef0") +
    count("d_lamb_meat0") +
    count("d_goat_meat0") +
    count("d_beef1") +
    count("d_lamb_meat1") +
    count("d_goat_meat1") +
    count("d_chicken_or_duck_meat0") +
    count("d_beef2") +
    count("d_lamb_meat2") +
    count("d_goat_meat2") +
    count("d_beef_tripe0") +
    count("d_beef3") +
    count("d_lamb_meat3") +
    count("d_goat_meat3") +
    count("d_beef4") +
    count("d_lamb_meat4") +
    count("d_goat_meat4") +
    count("d_kallapocha0") +
    count("d_beef5") +
    count("d_lamb_meat5") +
    count("d_goat_meat5") +
    count("d_chicken_or_duck_meat1") +
    count("d_beef6") +
    count("d_lamb_meat6") +
    count("d_goat_meat6") +
    count("d_chicken_or_duck_meat2") +
    count("d_beef7") +
    count("d_lamb_meat7") +
    count("d_goat_meat7") +
    count("d_beef8") +
    count("d_lamb_meat8") +
    count("d_goat_meat8") +
    count("d_chicken_or_duck_meat3") +
    count("d_fish0") +
    count("d_liver0") +
    count("d_kidney0") +
    count("d_heart0") +
    count("d_beef9") +
    count("d_lamb_meat9") +
    count("d_goat_meat9") +
    count("d_chicken_or_duck_meat4") +
    count("d_meat_of_wild_birds0") +
    count("d_rabbit_meat0") +
    count("d_liver1") +
    count("d_kidney1") +
    count("d_heart1") +
    count("d_beef10") +
    count("d_lamb_meat10") +
    count("d_goat_meat10") +
    count("d_meat_of_wild_birds1") +
    count("d_rabbit_meat1") +
    count("d_liver2") +
    count("d_kidney2") +
    count("d_heart2") +
    count("d_beef11") +
    count("d_lamb_meat11") +
    count("d_goat_meat11") +
    count("d_meat_of_wild_birds2") +
    count("d_rabbit_meat2") +
    count("d_chicken_or_duck_meat5") +
    count("d_liver3") +
    count("d_kidney3") +
    count("d_heart3") +
    count("d_beef12") +
    count("d_lamb_meat12") +
    count("d_goat_meat12") +
    count("d_chicken_or_duck_meat6") +
    count("d_liver4") +
    count("d_kidney4") +
    count("d_heart4") +
    count("d_beef13") +
    count("d_lamb_meat13") +
    count("d_goat_meat13") +
    count("d_chicken_or_duck_meat7") +
    count("d_liver5") +
    count("d_kidney5") +
    count("d_heart5") +
    count("d_beef14") +
    count("d_lamb_meat14") +
    count("d_goat_meat14") +
    count("d_chicken_or_duck_meat8") +
    count("d_beef15") +
    count("d_lamb_meat15") +
    count("d_goat_meat15") +
    count("d_beef16") +
    count("d_lamb_meat16") +
    count("d_goat_meat16") +
    count("d_chicken_or_duck_meat9") +
    count("d_beef17") +
    count("d_lamb_meat17") +
    count("d_goat_meat17");
  const group6 = count("d_egg0") + count("d_egg1") + count("d_egg2");
  const group7 =
    count("d_allium_rosenbachianum0") +
    count("d_coriander0") +
    count("d_basil0") +
    count("d_spinach0") +
    count("d_blindweed_(capsella_bursa_pastoris)_v") +
    count("d_ginger_(jambil)0") +
    count("d_allium_rosenbachianum1") +
    count("d_green_onion_leaves0") +
    count("d_green_garlic_leaf0") +
    count("d_green_onion_leaves1") +
    count("d_coriander1") +
    count("d_dill0") +
    count("d_basil1") +
    count("d_green_garlic_leaf1") +
    count("d_spinach1") +
    count("d_blindweed_(capsella_bursa_pastoris)_q") +
    count("d_ginger_(jambil)1") +
    count("d_allium_rosenbachianum2") +
    count("d_green0") +
    count("d_peppermint0") +
    count("d_dill1") +
    count("d_basil2") +
    count("d_coriander2") +
    count("d_ginger_(jambil)2") +
    count("d_spinach2") +
    count("d_blindweed_(capsella_bursa_pastoris)") +
    count("d_green_onion_leaves2") +
    count("d_green_garlic_leaf2");
  const group8 =
    count("d_pumpkin0") +
    count("d_tomatoes0") +
    count("d_pumpkin1") +
    count("d_pumpkin2") +
    count("d_tomatoes1") +
    count("d_dry_apricot0") +
    count("d_melon0") +
    count("d_watermelon0");
  const group9 =
    count("d_onion0") +
    count("d_onion1") +
    count("d_onion2") +
    count("d_onion3") +
    count("d_onion4") +
    count("d_onion5") +
    count("d_onion6") +
    count("d_onion7") +
    count("d_onion8") +
    count("d_cabbage0") +
    count("d_onion9") +
    count("d_garlic0") +
    count("d_onion10") +
    count("d_onion11") +
    count("d_onion12") +
    count("d_cucumber0") +
    count("d_onion13") +
    count("d_onion14") +
    count("d_eggplant0") +
    count("d_onion15") +
    count("d_onion16") +
    count("d_onion17") +
    count("d_onion18") +
    count("d_onion19") +
    count("d_onion20") +
    count("d_onion21") +
    count("d_onion22") +
    count("d_cucumber1");
  const group10 =
    count("d_raisins0") +
    count("d_apple0") +
    count("d_grapes0") +
    count("d_banana0") +
    count("d_tangerine0") +
    count("d_orange0") +
    count("d_pear0") +
    count("d_pomegranate0") +
    count("d_strawberry0");
  const group11 =
    count("d_wet_halva0") +
    count("d_sesame_halva0") +
    count("d_simalak0") +
    count("d_nisholo0") +
    count("d_jam0") +
    count("d_chocolates0") +
    count("d_cakes0") +
    count("d_cookies0") +
    count("d_Bun0");
  const group12 =
    count("d_oil0") +
    count("d_oil1") +
    count("d_oil2") +
    count("d_oil3") +
    count("d_oil4") +
    count("d_oil5") +
    count("d_hot_pepper0") +
    count("d_pepper0") +
    count("d_flavorings0") +
    count("d_herbs0") +
    count("d_oil6") +
    count("d_fat0") +
    count("d_buttock0") +
    count("d_pepper1") +
    count("d_oil7") +
    count("d_fat1") +
    count("d_pepper2") +
    count("d_oil8") +
    count("d_butter0") +
    count("d_oil9") +
    count("d_butter1") +
    count("d_pepper3") +
    count("d_oil10") +
    count("d_oil11") +
    count("d_fat2") +
    count("d_buttock1") +
    count("d_oil12") +
    count("d_fat3") +
    count("d_buttock2") +
    count("d_oil13") +
    count("d_fat4") +
    count("d_buttock3") +
    count("d_oil14") +
    count("d_oil15") +
    count("d_oil16") +
    count("d_buttock4") +
    count("d_oil17") +
    count("d_oil18") +
    count("d_butter2") +
    count("d_oil19") +
    count("d_oil20") +
    count("d_oil21") +
    count("d_butter3") +
    count("d_iodized_salt0") +
    count("d_hot_pepper1") +
    count("d_pepper4") +
    count("d_Zeroboy0");
  const group13 =
    count("d_tea0") +
    count("d_coffee0") +
    count("d_compote0") +
    count("d_juice0");
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
