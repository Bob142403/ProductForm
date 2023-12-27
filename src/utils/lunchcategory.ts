export const lunchCategory = (data: string[]) => {
  const count = (text: string) => +data.includes(text);
  const group1 =
    count("l_radish") +
    count("l_perlovka") +
    count("l_carrot") +
    count("l_potatoes0") +
    count("l_turnip0") +
    count("l_other0") +
    count("l_carrot1") +
    count("l_potatoes1") +
    count("l_turnip1") +
    count("l_other1") +
    count("l_other2") +
    count("l_carrot2") +
    count("l_wheat0") +
    count("l_other3") +
    count("l_noodles0") +
    count("l_other4") +
    count("l_potatoes2") +
    count("l_rice0") +
    count("l_other5") +
    count("l_noodles1") +
    count("l_other6") +
    count("l_carrot3") +
    count("l_potatoes3") +
    count("l_lagmon0") +
    count("l_other7") +
    count("l_carrot4") +
    count("l_potatoes4") +
    count("l_beet0") +
    count("l_other8") +
    count("l_other9") +
    count("l_carrot5") +
    count("l_rice1") +
    count("l_other10") +
    count("l_carrot6") +
    count("l_potatoes5") +
    count("l_lagmon1") +
    count("l_rice2") +
    count("l_other11") +
    count("l_chapoti0") +
    count("l_fatir0") +
    count("l_other12") +
    count("l_noodles2") +
    count("l_other13") +
    count("l_other14") +
    count("l_other15") +
    count("l_carrot7") +
    count("l_potatoes6") +
    count("l_turnip2") +
    count("l_beet1") +
    count("l_other16") +
    count("l_other17") +
    count("l_other18") +
    count("l_other19") +
    count("l_potatoes7") +
    count("l_other20") +
    count("l_other21") +
    count("l_potatoes8") +
    count("l_rice3") +
    count("l_buckwheat0") +
    count("l_mung_bean0") +
    count("l_other22") +
    count("l_other23") +
    count("l_carrot8") +
    count("l_potatoes9") +
    count("l_turnip3") +
    count("l_rice4") +
    count("l_buckwheat1") +
    count("l_mung_bean1") +
    count("l_other24") +
    count("l_potatoes10") +
    count("l_other25") +
    count("l_other26") +
    count("l_cake,_homemade_bread0") +
    count("l_chapoti1") +
    count("l_fatir1") +
    count("l_sambusa0") +
    count("l_other27") +
    count("l_other28") +
    count("l_qalama0") +
    count("l_other29") +
    count("l_corn0");
  const group2 =
    count("l_peas0") +
    count("l_beans0") +
    count("l_peas1") +
    count("l_lentils0") +
    count("l_beans1") +
    count("l_peas2") +
    count("l_beans2") +
    count("l_peas3") +
    count("l_beans3") +
    count("l_peas4") +
    count("l_beans4") +
    count("l_peas5") +
    count("l_peas6") +
    count("l_peas7") +
    count("l_peas8") +
    count("l_beans5") +
    count("l_peas9") +
    count("l_peas10");
  const group3 =
    count("l_donak0") +
    count("l_almond0") +
    count("l_pistachios0") +
    count("l_groundnut0");

  const group4 =
    count("l_chakka0") +
    count("l_chakka1") +
    count("l_chakka2") +
    count("l_milk0") +
    count("l_kefir0") +
    count("l_chakka3") +
    count("l_kefir1") +
    count("l_cheese0") +
    count("l_yogurt0") +
    count("l_cream0") +
    count("l_skimmed_milk_(cottage_cheese)0") +
    count("l_jurgot0") +
    count("l_qurut0");
  const group5 =
    count("l_beef0") +
    count("l_lamb_meat0") +
    count("l_goat_meat0") +
    count("l_beef1") +
    count("l_lamb_meat1") +
    count("l_goat_meat1") +
    count("l_chicken_or_duck_meat0") +
    count("l_beef2") +
    count("l_lamb_meat2") +
    count("l_goat_meat2") +
    count("l_beef_tripe0") +
    count("l_beef3") +
    count("l_lamb_meat3") +
    count("l_goat_meat3") +
    count("l_beef4") +
    count("l_lamb_meat4") +
    count("l_goat_meat4") +
    count("l_kallapocha0") +
    count("l_beef5") +
    count("l_lamb_meat5") +
    count("l_goat_meat5") +
    count("l_chicken_or_duck_meat1") +
    count("l_beef6") +
    count("l_lamb_meat6") +
    count("l_goat_meat6") +
    count("l_chicken_or_duck_meat2") +
    count("l_beef7") +
    count("l_lamb_meat7") +
    count("l_goat_meat7") +
    count("l_beef8") +
    count("l_lamb_meat8") +
    count("l_goat_meat8") +
    count("l_chicken_or_duck_meat3") +
    count("l_fish0") +
    count("l_liver0") +
    count("l_kidney0") +
    count("l_heart0") +
    count("l_beef9") +
    count("l_lamb_meat9") +
    count("l_goat_meat9") +
    count("l_chicken_or_duck_meat4") +
    count("l_meat_of_wild_birds0") +
    count("l_rabbit_meat0") +
    count("l_liver1") +
    count("l_kidney1") +
    count("l_heart1") +
    count("l_beef10") +
    count("l_lamb_meat10") +
    count("l_goat_meat10") +
    count("l_meat_of_wild_birds1") +
    count("l_rabbit_meat1") +
    count("l_liver2") +
    count("l_kidney2") +
    count("l_heart2") +
    count("l_beef11") +
    count("l_lamb_meat11") +
    count("l_goat_meat11") +
    count("l_meat_of_wild_birds2") +
    count("l_rabbit_meat2") +
    count("l_chicken_or_duck_meat5") +
    count("l_liver3") +
    count("l_kidney3") +
    count("l_heart3") +
    count("l_beef12") +
    count("l_lamb_meat12") +
    count("l_goat_meat12") +
    count("l_chicken_or_duck_meat6") +
    count("l_liver4") +
    count("l_kidney4") +
    count("l_heart4") +
    count("l_beef13") +
    count("l_lamb_meat13") +
    count("l_goat_meat13") +
    count("l_chicken_or_duck_meat7") +
    count("l_liver5") +
    count("l_kidney5") +
    count("l_heart5") +
    count("l_beef14") +
    count("l_lamb_meat14") +
    count("l_goat_meat14") +
    count("l_chicken_or_duck_meat8") +
    count("l_beef15") +
    count("l_lamb_meat15") +
    count("l_goat_meat15") +
    count("l_beef16") +
    count("l_lamb_meat16") +
    count("l_goat_meat16") +
    count("l_chicken_or_duck_meat9") +
    count("l_beef17") +
    count("l_lamb_meat17") +
    count("l_goat_meat17");
  const group6 = count("l_egg0") + count("l_egg1") + count("l_egg2");
  const group7 =
    count("l_allium_rosenbachianum0") +
    count("l_coriander0") +
    count("l_basil0") +
    count("l_spinach0") +
    count("l_blindweed_(capsella_bursa_pastoris)_p") +
    count("l_ginger_(jambil)0") +
    count("l_allium_rosenbachianum1") +
    count("l_green_onion_leaves0") +
    count("l_green_garlic_leaf0") +
    count("l_green_onion_leaves1") +
    count("l_coriander1") +
    count("l_dill0") +
    count("l_basil1") +
    count("l_green_garlic_leaf1") +
    count("l_spinach1") +
    count("l_blindweed_(capsella_bursa_pastoris)_q") +
    count("l_ginger(jambil)1") +
    count("l_allium_rosenbachianum2") +
    count("l_green0") +
    count("l_peppermint0") +
    count("l_dill1") +
    count("l_basil2") +
    count("l_coriander2") +
    count("l_ginger_(jambil)2") +
    count("l_spinach2") +
    count("l_blindweed_(capsella_bursa_pastoris)1") +
    count("l_green_onion_leaves2") +
    count("l_green_garlic_leaf2");
  const group8 =
    count("l_pumpkin0") +
    count("l_tomatoes0") +
    count("l_pumpkin1") +
    count("l_pumpkin2") +
    count("l_tomatoes1") +
    count("l_dry_apricot0") +
    count("l_melon0") +
    count("l_watermelon0");
  const group9 =
    count("l_onion0") +
    count("l_onion1") +
    count("l_onion2") +
    count("l_onion3") +
    count("l_onion4") +
    count("l_onion5") +
    count("l_onion6") +
    count("l_onion7") +
    count("l_onion8") +
    count("l_cabbage0") +
    count("l_onion9") +
    count("l_garlic0") +
    count("l_onion10") +
    count("l_onion11") +
    count("l_onion12") +
    count("l_cucumber0") +
    count("l_onion13") +
    count("l_onion14") +
    count("l_eggplant0") +
    count("l_onion15") +
    count("l_onion16") +
    count("l_onion17") +
    count("l_onion18") +
    count("l_onion19") +
    count("l_onion20") +
    count("l_onion21") +
    count("l_onion22") +
    count("l_cucumber1");
  const group10 =
    count("l_raisins0") +
    count("l_apple0") +
    count("l_grapes0") +
    count("l_banana0") +
    count("l_tangerine0") +
    count("l_orange0") +
    count("l_pear0") +
    count("l_pomegranate0") +
    count("l_strawberry0");
  const group11 =
    count("l_wet_halva0") +
    count("l_sesame_halva0") +
    count("l_simalak0") +
    count("l_nisholo0") +
    count("l_jam0") +
    count("l_chocolates0") +
    count("l_cakes0") +
    count("l_cookies0") +
    count("l_Bun0");
  const group12 =
    count("l_oil0") +
    count("l_oil1") +
    count("l_oil2") +
    count("l_oil3") +
    count("l_oil4") +
    count("l_oil5") +
    count("l_hot_pepper0") +
    count("l_pepper0") +
    count("l_flavorings0") +
    count("l_herbs0") +
    count("l_oil6") +
    count("l_fat0") +
    count("l_buttock0") +
    count("l_pepper1") +
    count("l_oil7") +
    count("l_fat1") +
    count("l_pepper2") +
    count("l_oil8") +
    count("l_butter0") +
    count("l_oil9") +
    count("l_butter1") +
    count("l_pepper3") +
    count("l_oil10") +
    count("l_oil11") +
    count("l_fat2") +
    count("l_buttock1") +
    count("l_oil12") +
    count("l_fat3") +
    count("l_buttock2") +
    count("l_oil13") +
    count("l_fat4") +
    count("l_buttock3") +
    count("l_oil14") +
    count("l_oil15") +
    count("l_oil16") +
    count("l_buttock4") +
    count("l_oil17") +
    count("l_oil18") +
    count("l_butter2") +
    count("l_oil19") +
    count("l_oil20") +
    count("l_oil21") +
    count("l_butter3") +
    count("l_iodized_salt0") +
    count("l_hot_pepper1") +
    count("l_pepper4") +
    count("l_Zeroboy0");
  const group13 =
    count("l_tea0") +
    count("l_coffee0") +
    count("l_compote0") +
    count("l_juice0");
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
