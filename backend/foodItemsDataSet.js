const foodItemsData = [
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_3/veg_pid_2302650_p.jpg?lastModify=2020-03-19&publishId=2938',
    name: 'Cal-Organic Organic Red Carrots, Bunch',
    price: '2.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_3/veg_erthbd_orgbbyspn_p.jpg?lastModify=2020-05-29&publishId=2938',
    name: 'Earthbound Farm Organic Baby Spinach',
    price: '5.50',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_2/veg_pid_2302356_p.jpg?lastModify=2017-11-14&publishId=2938',
    name: 'Lancaster Farm Fresh Cooperative Local Organic Hakurei Turnips',
    price: '3.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2301847_p.jpg?lastModify=2015-03-11&publishId=2938',
    name: 'Lancaster Farm Fresh Cooperative Roots and Shoots Farm Share',
    price: '39.9',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_2/veg_pid_2302455_p.jpg?lastModify=2019-02-08&publishId=2938',
    name: 'Long Wind Farms Organic Mixed Cherry Tomatoes',
    price: '6.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2302264_p.jpg?lastModify=2017-05-02&publishId=2938',
    name: 'Mushroom King Organic Heirloom Asian Blend',
    price: '7.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2302205_p.jpg?lastModify=2017-02-28&publishId=2938',
    name: 'Mushroom King Organic Heirloom Sliced Shiitake Mushrooms',
    price: '4.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/fruit_2/asp_asp_org_bch_p.jpg?lastModify=2016-04-26&publishId=2938',
    name: 'Organic Asparagus',
    price: '7.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/msh_crem_pkg_p.jpg?lastModify=2013-05-22&publishId=2938',
    name: 'Organic Baby Bella Mushrooms, Packaged ',
    price: '3.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/orgveg_beet_bnch_p.jpg?lastModify=2014-12-17&publishId=2938',
    name: 'Organic Beets, Bunch',
    price: '2.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_3/veg_org_brcclni_p.jpg?lastModify=2021-03-09&publishId=2938',
    name: 'Organic Broccolette',
    price: '3.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/grocery_49/gro_pid_4009252_p.jpg?lastModify=2018-12-11&publishId=2938',
    name: 'Just FreshDirect Unfiltered Olio Novello 2020 Harvest',
    price: '24.9',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/orgveg_carrot_bnch_p.jpg?lastModify=2016-05-02&publishId=2938',
    name: 'Organic Carrots',
    price: '3.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/orgveg_dndlion_vsku_p.jpg?lastModify=2016-05-03&publishId=2938',
    name: 'Organic Dandelion Greens',
    price: '3.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/vegetables/potatoes/veg_lclea_30224_p.jpg?lastModify=2011-11-01&publishId=2938',
    name: 'Organic Garnet Sweet Potatoes',
    price: '6.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2301610_p.jpg?lastModify=2014-10-29&publishId=2938',
    name: 'Organic Ginger Root',
    price: '2.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_org_gldbtsbch_p.jpg?lastModify=2014-12-17&publishId=2938',
    name: 'Organic Gold Beets, Bunch',
    price: '2.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_2/vbns_org_greenpkg_p.jpg?lastModify=2019-12-10&publishId=2938',
    name: 'Organic Green Beans',
    price: '5.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/cuc_grn_or_p.jpg?lastModify=2016-05-02&publishId=2938',
    name: 'Organic Green Cucumber',
    price: '1.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/orgherb_prsly_ita_p.jpg?lastModify=2016-05-02&publishId=2938',
    name: 'Organic Italian Parsley',
    price: '2.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/grns_lackale_p.jpg?lastModify=2016-05-03&publishId=2938',
    name: 'Organic Lacinato Kale',
    price: '2.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/cheese_1/ita_parm_reg_p.jpg?lastModify=2017-08-25&publishId=2938',
    name: 'Parmigiano-Reggiano DOP, Aged 2 Years',
    price: '22.9',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_3/orgveg_peppr_orng_p.jpg?lastModify=2021-03-09&publishId=2938',
    name: 'Organic Orange Greenhouse Bell Peppers',
    price: '4.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_chrd_rnbw_or_p.jpg?lastModify=2016-05-03&publishId=2938',
    name: 'Organic Rainbow Swiss Chard',
    price: '2.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/orgveg_cbbg_red_p.jpg?lastModify=2016-05-02&publishId=2938',
    name: 'Organic Red Cabbage',
    price: '1.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/ltc_rdlf_or_p.jpg?lastModify=2013-05-29&publishId=2938',
    name: 'Organic Red Leaf Lettuce',
    price: '2.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_3/on_scal_or_p.jpg?lastModify=2021-03-09&publishId=2938',
    name: 'Organic Scallions',
    price: '1.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_3/veg_pid_2302708_p.jpg?lastModify=2021-01-27&publishId=2938',
    name: 'organicgirl Baby Kale Spring Mix',
    price: '3.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_3/veg_pid_2302709_p.jpg?lastModify=2021-01-27&publishId=2938',
    name: 'organicgirl Butter, Plus!',
    price: '4.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2301828_p.jpg?lastModify=2014-12-15&publishId=2938',
    name: "Pete's Greens Clean Organic Real Baby Carrots",
    price: '5.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_2/veg_pid_2302392_p.jpg?lastModify=2018-03-09&publishId=2938',
    name: "Pete's Greens Organic Black Garlic",
    price: '9.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_2/veg_pid_2302573_p.jpg?lastModify=2019-06-11&publishId=2938',
    name: 'Blue Moon Acres Organic Micro Radish',
    price: '3.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_2/veg_pid_2302574_p.jpg?lastModify=2019-06-11&publishId=2938',
    name: 'Blue Moon Acres Organic Micro Sunflower',
    price: '3.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2301611_p.jpg?lastModify=2016-09-16&publishId=2938',
    name: 'Cal-Organic Organic Rainbow Carrots',
    price: '2.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_2/veg_pid_2302330_p.jpg?lastModify=2017-09-15&publishId=2938',
    name: 'Grown in the Hudson Valley Butternut Squash Chunks',
    price: '4.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2301554_p.jpg?lastModify=2014-12-17&publishId=2938',
    name: 'Lancaster Farm Fresh Cooperative Local Organic Jerusalem Artichokes',
    price: '5.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_2/veg_pid_2302368_p.jpg?lastModify=2017-12-21&publishId=2938',
    name: 'Lancaster Farm Fresh Cooperative Organic Watermelon Radishes',
    price: '2.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_2/veg_pid_2301967_p.jpg?lastModify=2017-10-24&publishId=2938',
    name: 'Meadows and More Jumbo Organic Maitake Mushroom',
    price: '6.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2302206_p.jpg?lastModify=2017-01-06&publishId=2938',
    name: 'Mushroom King Organic Heirloom Baby Shiitake Mushrooms',
    price: '4.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_2/veg_brssl_organic_p.jpg?lastModify=2018-02-13&publishId=2938',
    name: 'Organic Brussels Sprouts',
    price: '5.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/clry_org_stlk_p.jpg?lastModify=2016-05-02&publishId=2938',
    name: 'Organic Celery',
    price: '3.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_2/veg_pid_2302447_p.jpg?lastModify=2018-12-21&publishId=2938',
    name: 'Organic Covington Sweet Potato',
    price: '2.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_ymgrnt_org_p.jpg?lastModify=2016-10-28&publishId=2938',
    name: 'Organic Garnet Sweet Potato',
    price: '2.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_grns_kale_or_p.jpg?lastModify=2016-05-03&publishId=2938',
    name: 'Organic Green Kale',
    price: '2.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_3/ltc_grnlf_or_p.jpg?lastModify=2021-03-09&publishId=2938',
    name: 'Organic Green Leaf Lettuce',
    price: '2.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_cuc_hths_org_p.jpg?lastModify=2016-05-02&publishId=2938',
    name: 'Organic Greenhouse Cucumber',
    price: '3.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/fruit_2/avc_has_or_p.jpg?lastModify=2017-03-03&publishId=2938',
    name: 'Organic Hass Avocado',
    price: '2.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/fruit_2/avc_has_vpk_p.jpg?lastModify=2016-04-26&publishId=2938',
    name: 'Organic Hass Avocados',
    price: '8.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/fruit_2/fru_dmy_10115_p.jpg?lastModify=2017-03-03&publishId=2938',
    name: 'Organic Hass Avocados, Ready-to-Eat',
    price: '5.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/bakery_2/bak_pid_4651326_p.jpg?lastModify=2020-06-23&publishId=2938',
    name: "Eli's Bread Sliced Health Bread",
    price: '6.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/msh_org_shi_pkg_p.jpg?lastModify=2016-05-02&publishId=2938',
    name: 'Organic Shiitake Mushrooms, Packaged',
    price: '3.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_orgppr_blla_p.jpg?lastModify=2016-05-03&publishId=2938',
    name: 'Organic Sweet Mini Bell Peppers',
    price: '5.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2301660_p.jpg?lastModify=2015-09-22&publishId=2938',
    name: 'Blue Moon Acres Organic Spring Mix',
    price: '4.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_3/veg_pid_2302664_p.jpg?lastModify=2020-06-16&publishId=2938',
    name: 'Brooklyn Grange Pea Shoots',
    price: '3.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/vegetables/carrots_celery/veg_ethbnd_crrtsmini_p.jpg?lastModify=2012-10-15&publishId=2938',
    name: 'Cal-Organic Baby Carrot Snack Packs',
    price: '2.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/vegetables/carrots_celery/crt_baby_org_p.jpg?lastModify=2010-05-24&publishId=2938',
    name: 'Cal-Organic Organic Baby Carrots',
    price: '1.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/dairy_15/dai_trib_clashum_01_p.jpg?lastModify=2017-10-10&publishId=2938',
    name: 'Tribe Hummus, Classic',
    price: '3.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2302160_p.jpg?lastModify=2016-08-26&publishId=2938',
    name: 'Cal-Organic Organic Baby Carrots',
    price: '3.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_4201337_p.jpg?lastModify=2016-05-13&publishId=2938',
    name: 'Cal-Organic Organic Baby Carrots, Case',
    price: '59.7',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/vegetables/carrots_celery/veg_crt_orgchips_p.jpg?lastModify=2009-04-08&publishId=2938',
    name: 'Cal-Organic Organic Carrot Chips',
    price: '5.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/crt_bag_org_p.jpg?lastModify=2016-05-02&publishId=2938',
    name: 'Cal-Organic Organic Carrots',
    price: '1.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/orgveg_carrot_jbo_p.jpg?lastModify=2014-12-17&publishId=2938',
    name: 'Cal-Organic Organic Jumbo Carrots',
    price: '1.69',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_4201338_p.jpg?lastModify=2016-05-13&publishId=2938',
    name: 'Cal-Organic Organic Peeled Rainbow Baby Carrots, Case',
    price: '21.3',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2302004_p.jpg?lastModify=2016-01-19&publishId=2938',
    name: 'Cal-Organic Organic Rainbow Baby Carrots',
    price: '2.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2302159_p.jpg?lastModify=2016-08-26&publishId=2938',
    name: 'Cal-Organic Organic Rainbow Carrots',
    price: '3.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_crrt_org_shrd_p.jpg?lastModify=2016-05-02&publishId=2938',
    name: 'Cal-Organic Organic Shredded Carrots',
    price: '2.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2301859_p.jpg?lastModify=2015-05-12&publishId=2938',
    name: 'Chopped Collard Greens',
    price: '3.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_2/veg_pid_2302628_p.jpg?lastModify=2019-11-18&publishId=2938',
    name: 'Christopher Ranch Organic Peeled Garlic',
    price: '4.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_3/veg_pid_2302674_p.jpg?lastModify=2020-07-02&publishId=2938',
    name: 'Earthbound Farm Organic 50/50 Spinach + Spring Mix',
    price: '5.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_3/veg_dmyea_30239_p.jpg?lastModify=2021-01-19&publishId=2938',
    name: 'Earthbound Farm Organic Baby Kale',
    price: '3.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/hmr_1/hmr_pid_3750603_p.jpg?lastModify=2013-12-11&publishId=2938',
    name:
      'FreshDirect Curried Lentil, Quinoa, Chickpea and Kale Super Salad (Made with Organic Kale)',
    price: '3.39',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_3/veg_pid_2302676_p.jpg?lastModify=2020-06-19&publishId=2938',
    name: 'Earthbound Farm Organic Power Greens',
    price: '5.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_3/veg_erthbd_orgspgmx_p.jpg?lastModify=2020-05-29&publishId=2938',
    name: 'Earthbound Farm Organic Spring Mix',
    price: '5.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_3/veg_earthbd_sldclm_6_p.jpg?lastModify=2020-05-29&publishId=2938',
    name: 'Earthbound Farm Organic Sweet Baby Lettuces',
    price: '3.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2301748_p.jpg?lastModify=2016-03-22&publishId=2938',
    name: 'Lancaster Farm Fresh Cooperative Local Organic Carrots',
    price: '3.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_2/veg_pid_2302393_p.jpg?lastModify=2018-03-27&publishId=2938',
    name: 'Lancaster Farm Fresh Cooperative Local Organic Carrots',
    price: '5.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_2/veg_pid_2302376_p.jpg?lastModify=2018-01-05&publishId=2938',
    name: 'Lancaster Farm Fresh Cooperative Local Organic Mixed Lettuce',
    price: '4.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2302183_p.jpg?lastModify=2016-12-09&publishId=2938',
    name: 'Lancaster Farm Fresh Cooperative Local Organic Sweet Onions',
    price: '5.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_2/veg_pid_2301800_p.jpg?lastModify=2017-08-22&publishId=2938',
    name: 'Lancaster Farm Fresh Cooperative Local Organic Yellow Onion, Medium',
    price: '1.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_2/veg_pid_2302314_p.jpg?lastModify=2017-09-15&publishId=2938',
    name: 'Lancaster Farm Fresh Cooperative Local Organic Yellow Onions',
    price: '4.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_2/veg_pid_2302377_p.jpg?lastModify=2018-01-05&publishId=2938',
    name: 'Lancaster Farm Fresh Cooperative Local Organic Young Arugula',
    price: '4.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_2/veg_pid_2302374_p.jpg?lastModify=2018-01-05&publishId=2938',
    name: 'Lancaster Farm Fresh Cooperative Local Organic Young Kale',
    price: '4.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_2/veg_pid_2302375_p.jpg?lastModify=2018-01-05&publishId=2938',
    name: 'Lancaster Farm Fresh Cooperative Local Organic Young Rainbow Chard',
    price: '4.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_2/veg_pid_2302378_p.jpg?lastModify=2018-01-05&publishId=2938',
    name: 'Lancaster Farm Fresh Cooperative Local Organic Young Spinach',
    price: '4.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_3/veg_pid_2302698_p.jpg?lastModify=2020-10-13&publishId=2938',
    name: 'Lancaster Farm Fresh Cooperative Organic Spicy Lettuce Mix',
    price: '4.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2301788_p.jpg?lastModify=2016-12-30&publishId=2938',
    name: 'Loose Organic Beets',
    price: '2.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_ea_30330_p.jpg?lastModify=2014-10-20&publishId=2938',
    name: 'Love Beets Organic Cooked Beets',
    price: '3.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/sq_hrd_acorn_or_p.jpg?lastModify=2016-05-02&publishId=2938',
    name: 'Organic Acorn Squash',
    price: '1.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/orgveg_bbokchoy_p.jpg?lastModify=2016-05-02&publishId=2938',
    name: 'Organic Baby Bok Choy',
    price: '3.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/grocery_50/gro_pid_4009320_p.jpg?lastModify=2020-01-28&publishId=2938',
    name: 'Just FreshDirect Ground Ginger',
    price: '3.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/vegetables/lettuce/veg_lttc_bstn_or_p.jpg?lastModify=2008-09-29&publishId=2938',
    name: 'Organic Boston Lettuce',
    price: '2.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/broc_org_p.jpg?lastModify=2016-05-02&publishId=2938',
    name: 'Organic Broccoli',
    price: '3.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2301876_p.jpg?lastModify=2016-05-02&publishId=2938',
    name: 'Organic Broccoli',
    price: '6.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_2/veg_pid_2302334_p.jpg?lastModify=2017-09-22&publishId=2938',
    name: 'Organic Broccoli Crowns',
    price: '3.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/organic/vegetables/sq_hrd_bttrnt_or_p.jpg?lastModify=2005-10-03&publishId=2938',
    name: 'Organic Butternut Squash',
    price: '1.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2302251_p.jpg?lastModify=2017-03-31&publishId=2938',
    name: 'Organic Butternut Squash Chunks',
    price: '5.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2301586_p.jpg?lastModify=2014-06-16&publishId=2938',
    name: 'Organic Carrot Sticks',
    price: '5.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2301882_p.jpg?lastModify=2016-05-02&publishId=2938',
    name: 'Organic Cauliflower',
    price: '6.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2301588_p.jpg?lastModify=2014-06-16&publishId=2938',
    name: 'Organic Celery Sticks',
    price: '6.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/orghrb_cilantro_p.jpg?lastModify=2016-05-02&publishId=2938',
    name: 'Organic Cilantro',
    price: '2.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/grns_clrd_org_p.jpg?lastModify=2016-05-03&publishId=2938',
    name: 'Organic Collard Greens',
    price: '2.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_2/veg_pid_2302449_p.jpg?lastModify=2018-12-21&publishId=2938',
    name: 'Organic Covington Sweet Potatoes',
    price: '4.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2301712_p.jpg?lastModify=2017-03-03&publishId=2938',
    name: 'Organic Daikon, Bunch',
    price: '2.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2301584_p.jpg?lastModify=2014-06-16&publishId=2938',
    name: 'Organic Diced Carrots',
    price: '3.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/frozen_10/fro_cascad_garden_p_01_p.jpg?lastModify=2016-03-08&publishId=2938',
    name: 'Cascadian Farm Organic Sweet Peas, Frozen',
    price: '2.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2301589_p.jpg?lastModify=2014-06-16&publishId=2938',
    name: 'Organic Diced Celery',
    price: '6.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2301581_p.jpg?lastModify=2014-06-16&publishId=2938',
    name: 'Organic Diced Onion',
    price: '4.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2301580_p.jpg?lastModify=2014-06-16&publishId=2938',
    name: 'Organic Diced Red Onion',
    price: '4.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/orgveg_fennel_p.jpg?lastModify=2014-12-17&publishId=2938',
    name: 'Organic Fennel',
    price: '3.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/grlc_grlc_or_p.jpg?lastModify=2016-05-02&publishId=2938',
    name: 'Organic Garlic',
    price: '4.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/vegetables/potatoes/veg_pot_ykn_5lbbg_p.jpg?lastModify=2012-03-19&publishId=2938',
    name: 'Organic Gold Potatoes',
    price: '5.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/tm_grape_or_p.jpg?lastModify=2014-12-17&publishId=2938',
    name: 'Organic Grape Tomatoes',
    price: '4.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_2/veg_pid_2302611_p.jpg?lastModify=2019-10-08&publishId=2938',
    name: 'Organic Green Bell Peppers',
    price: '4.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/orgveg_cbbg_grn_p.jpg?lastModify=2016-05-02&publishId=2938',
    name: 'Organic Green Cabbage',
    price: '1.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/grns_grnchrd_or_p.jpg?lastModify=2016-05-03&publishId=2938',
    name: 'Organic Green Swiss Chard',
    price: '2.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_3/veg_pid_2302682_p.jpg?lastModify=2020-07-27&publishId=2938',
    name: 'Organic Green Zucchini Noodles',
    price: '5.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_3/orgveg_leek_bnch_p.jpg?lastModify=2021-03-09&publishId=2938',
    name: 'Organic Leeks, Bunch',
    price: '4.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_2/orghrb_mint_vsku_p.jpg?lastModify=2019-05-10&publishId=2938',
    name: 'Organic Mint',
    price: '2.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2302150_p.jpg?lastModify=2016-08-12&publishId=2938',
    name: 'Organic Mixed Creamer Potatoes',
    price: '4.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_org_mstrgrns_p.jpg?lastModify=2016-05-03&publishId=2938',
    name: 'Organic Mustard Greens',
    price: '2.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/orghrb_orgno_vsku_p.jpg?lastModify=2016-05-02&publishId=2938',
    name: 'Organic Oregano',
    price: '2.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/vegetables/mushrooms/msh_pkg_portocaps_p.jpg?lastModify=2013-09-25&publishId=2938',
    name: 'Organic Portabella Mushroom Caps, Packaged',
    price: '3.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2301493_p.jpg?lastModify=2016-05-03&publishId=2938',
    name: 'Organic Rainbow Pepper Pack',
    price: '7.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/tm_tmto_or_p.jpg?lastModify=2014-12-17&publishId=2938',
    name: 'Organic Red Beefsteak Tomato',
    price: '3.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/pep_rdbell_or_p.jpg?lastModify=2016-05-03&publishId=2938',
    name: 'Organic Red Greenhouse Bell Pepper',
    price: '4.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_kale_rssnrd_or_p.jpg?lastModify=2016-05-03&publishId=2938',
    name: 'Organic Red Kale',
    price: '2.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/on_red_org_vsku_p.jpg?lastModify=2016-05-02&publishId=2938',
    name: 'Organic Red Onion',
    price: '1.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2301623_p.jpg?lastModify=2016-05-02&publishId=2938',
    name: 'Organic Red Radish',
    price: '2.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_3/veg_pid_2302701_p.jpg?lastModify=2020-10-23&publishId=2938',
    name: 'Organic Roma Tomatoes',
    price: '3.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/ltc_rman_or_p.jpg?lastModify=2016-05-02&publishId=2938',
    name: 'Organic Romaine',
    price: '2.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/grocery_48/gro_pid_4008104_p.jpg?lastModify=2018-11-09&publishId=2938',
    name: 'Just FreshDirect Organic 100% Italian Extra-Virgin Olive Oil',
    price: '17.9',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/ltc_rmanhrt_or_p.jpg?lastModify=2016-05-02&publishId=2938',
    name: 'Organic Romaine Hearts',
    price: '5.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/hrb_rosem_org_p.jpg?lastModify=2016-05-02&publishId=2938',
    name: 'Organic Rosemary',
    price: '2.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_3/orghrb_sage_vsku_p.jpg?lastModify=2021-03-09&publishId=2938',
    name: 'Organic Sage',
    price: '2.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_2/veg_pid_2302305_p.jpg?lastModify=2017-08-04&publishId=2938',
    name: 'Organic Shallots',
    price: '5.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_2/veg_pid_2302329_p.jpg?lastModify=2017-09-15&publishId=2938',
    name: 'Organic Shredded Mixed Cabbage',
    price: '4.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2301579_p.jpg?lastModify=2015-09-11&publishId=2938',
    name: 'Organic Shredded Red Cabbage',
    price: '3.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/vegetables/squash/sq_hrd_spagh_p.jpg?lastModify=2005-05-19&publishId=2938',
    name: 'Organic Spaghetti Squash',
    price: '1.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/grns_spin_or_p.jpg?lastModify=2014-12-31&publishId=2938',
    name: 'Organic Spinach',
    price: '2.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/orghrb_trrgn_vsku_p.jpg?lastModify=2016-05-02&publishId=2938',
    name: 'Organic Tarragon',
    price: '2.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/orghrb_thym_vsku_p.jpg?lastModify=2016-05-02&publishId=2938',
    name: 'Organic Thyme',
    price: '2.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/msh_org_mush_pkg_p.jpg?lastModify=2016-05-02&publishId=2938',
    name: 'Organic White Mushrooms, Packaged',
    price: '2.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_3/orgveg_peppr_yllw_p.jpg?lastModify=2021-03-09&publishId=2938',
    name: 'Organic Yellow Greenhouse Bell Peppers',
    price: '4.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2301645_p.jpg?lastModify=2014-06-16&publishId=2938',
    name: 'organicgirl Baby Arugula',
    price: '3.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_2/veg_pid_2302450_p.jpg?lastModify=2019-01-11&publishId=2938',
    name: 'organicgirl Baby Bok Choy',
    price: '3.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2301653_p.jpg?lastModify=2014-06-16&publishId=2938',
    name: 'organicgirl Supergreens',
    price: '3.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2301829_p.jpg?lastModify=2014-12-15&publishId=2938',
    name: "Pete's Greens Clean Organic Rainbow Carrots",
    price: '5.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_2/veg_pid_2302635_p.jpg?lastModify=2019-12-13&publishId=2938',
    name: 'Sliced Organic Baby Bella Mushrooms, Packaged',
    price: '3.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2301957_p.jpg?lastModify=2016-11-18&publishId=2938',
    name: 'Stokes Organic Purple Sweet Potatoes',
    price: '9.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_dmyea_30408_p.jpg?lastModify=2015-06-11&publishId=2938',
    name: 'Sunset Organic Campari Tomatoes',
    price: '5.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/deli_3/del_fd_noslttrky_p.jpg?lastModify=2014-11-24&publishId=2938',
    name:
      'FreshDirect All-Natural Roasted Turkey Breast, Raised w/o Antibiotics (No Salt Added)',
    price: '12.9',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_3/veg_pid_2302677_p.jpg?lastModify=2020-06-19&publishId=2938',
    name: 'Taylor Farms Organic Artisan Ranch Chopped Salad Kit',
    price: '5.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_3/veg_pid_2302678_p.jpg?lastModify=2020-06-19&publishId=2938',
    name: 'Taylor Farms Organic Kale Caesar Chopped Salad Kit',
    price: '5.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/ltc_arrug_org_vsku_p.jpg?lastModify=2016-05-02&publishId=2938',
    name: 'Organic Arugula',
    price: '2.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/grocery_48/gro_pid_4008104_p.jpg?lastModify=2018-11-09&publishId=2938',
    name: 'Just FreshDirect Organic 100% Italian Extra-Virgin Olive Oil',
    price: '17.9',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/cfl_white_or_p.jpg?lastModify=2016-05-02&publishId=2938',
    name: 'Organic Cauliflower',
    price: '3.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/grocery_48/gro_pid_4008104_p.jpg?lastModify=2018-11-09&publishId=2938',
    name: 'Just FreshDirect Organic 100% Italian Extra-Virgin Olive Oil',
    price: '17.9',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_3/veg_pid_2302681_p.jpg?lastModify=2020-07-27&publishId=2938',
    name: 'Organic Cauliflower Rice',
    price: '6.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/specialty_10/clry_clryhrt_org_p.jpg?lastModify=2014-12-17&publishId=2938',
    name: 'Organic Celery Hearts',
    price: '3.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/orghrb_chve_vsku_p.jpg?lastModify=2016-05-02&publishId=2938',
    name: 'Organic Chives',
    price: '2.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/orghrb_dill_p.jpg?lastModify=2016-05-02&publishId=2938',
    name: 'Organic Dill',
    price: '3.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2302148_p.jpg?lastModify=2016-08-12&publishId=2938',
    name: 'Organic Gold Creamer Potatoes',
    price: '4.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2301612_p.jpg?lastModify=2016-05-02&publishId=2938',
    name: 'Organic Iceberg Lettuce',
    price: '2.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/vegetables/potatoes/veg_lclea_30226_p.jpg?lastModify=2011-11-01&publishId=2938',
    name: 'Organic Japanese Sweet Potatoes',
    price: '6.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_2/veg_pid_2301853_p.jpg?lastModify=2019-05-10&publishId=2938',
    name: 'Organic Mini Seedless Cucumbers',
    price: '4.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2302149_p.jpg?lastModify=2016-08-12&publishId=2938',
    name: 'Organic Red Creamer Potatoes',
    price: '4.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/pot_russet_bag_or_p.jpg?lastModify=2016-05-02&publishId=2938',
    name: 'Organic Russet Potatoes',
    price: '6.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_3/veg_lclea_30225_p.jpg?lastModify=2021-03-09&publishId=2938',
    name: 'Organic White Sweet Potatoes',
    price: '5.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_3/orghrb_basil_vsku_p.jpg?lastModify=2021-03-09&publishId=2938',
    name: 'Organic Basil',
    price: '2.99',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2301711_p.jpg?lastModify=2016-05-02&publishId=2938',
    name: 'Organic Turnip',
    price: '2.49',
  },
  {
    image:
      'https://www.freshdirect.com/media/images/product/veg_1/veg_pid_2302264_p.jpg?lastModify=2017-05-02&publishId=2938',
    name: 'Mushroom King Organic Heirloom Asian Blend',
    price: '7.99',
  },
]

export default foodItemsData
