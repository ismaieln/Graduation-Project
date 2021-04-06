const farmersDataSet = [
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/46537_300.jpg',
    name: 'Agriberry Farm and CSA',
    city: 'Hanover, VA',
    description:
      'Agriberry Farm grows premium fruits and berries using safe, sustainable practices. The farm currently grows 18 varieties of raspberries and blackberries, as well as several types of nectarines and peaches. They also grow strawberries, plums and cherries, and more is always in the works!  more...',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/1616_300.jpg',
    name: 'Allicins Ranch',
    city: 'Moyie Springs, ID',
    description:
      'Our farm is named after the the chemical compound allicin, which is responsible for the broad based anti-bacterial properties found in garlic. We truly believe that we are not only growing great food, but medicine as well.  more...',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/0a63fc69-bc38-477c-bb7d-83c0b224756f_300.jpg',
    name: 'Baker No. 9 Handcrafted Bread',
    city: 'Spirit Lake, ID',
    description:
      '"Baker No. 9 Handcrafted Bread" creates world-class artisan Sourdough and other naturally fermented breads, shaped by hand and baked in our 3-ton Italian Hearth Deck Oven by a Ninth-Generation Master Baker and his lovely wife.  more...',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/9f1dae45-7356-4703-99f3-049623300657_300.jpg',
    name: 'Coyote Family Farm',
    city: 'Penngrove, CA',
    description:
      'Everything we offer in our CSA is grown with love on our farm. Our vegetables, eggs and flowers arrive to you weekly full of life and flavor, and ready to be transformed into healthy, vibrant meals for your family. We are a small, diversified family farm growing produce and flowers and raising pastured eggs year-round.  more...',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/b8a696c3-9a97-4f56-b946-7593d9fc9d5d_300.jpg',
    name: 'Earth Matterz',
    city: 'Los Angeles, CA',
    description:
      "Earth Matterz Fresh certified organic fruits and vegetables from small local farms: delivered to your front door! We've cultivated direct personal relationships with the small local organic farms we love. We're so proud of the farms we work with and happy to support them while sharing their bounty with you.  more...",
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/11319_300.jpg',
    name: 'Ellett Medjool Dates',
    city: 'El Centro, CA',
    description:
      'The Ellett Medjool Date family farm is a second generation producer of the highest quality, naturally grown Medjool dates. We specialize in mail order of these luscious, healthy and exquisite gifts.  more...',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/16427_300.jpg',
    name: "Farmer Dave's",
    city: 'Dracut, MA',
    description:
      "2020 CSA REGISTRATION NOW OPEN! Farmer Dave's Community Supported Agriculture started in 2007, has expanded over the years and now offers CSA distribution in several communities throughout the Merrimack Valley, North Shore, and Boston area.  more...",
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/f8d68d77-1de4-4cce-bb34-b31bd1b72d77_300.jpg',
    name: 'Farmers Fresh CSA',
    city: 'Tallapoosa, GA',
    description:
      "Farmers' Fresh CSA works with more than 50 small locally based sustainable farms. All of our animal and vegetable growers use organic or Integrated Pest Management growing practices to provide the healthiest food possible.  more...",
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/fff51755-b737-4c42-8e57-70ca6ff2d37a_300.jpg',
    name: 'Front Porch Farm',
    city: 'Healdsburg, CA',
    description:
      'Front Porch Farm is a 110-acre mosaic of fruit and olive orchards, rows of flowers, acres of heritage vegetable crops, fields of heirloom polenta corn, and vineyards on sunny hillsides. We pride ourselves on our diverse certified organic produce and flowers, and artisanal wine made with organic grapes.  more...',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/30454_300.jpg',
    name: 'Good Life Organics',
    city: 'Los Angeles, CA',
    description:
      'Good Life Organics delivers seasonal, locally grown, 100 percent organic produce to schools and homes . Good Life Organics works with multiple farms to provide the freshest and best fruits and vegetables Southern California has to offer, making it easy and affordable for Los Angeles locals to enjoy farm-fresh organic produce.  more...',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/7e5affb8-85d1-4f8a-9a48-ee525a38a1bd_300.jpg',
    name: 'Hidden Meadows Orchard',
    city: 'Escondido, CA',
    description:
      'We are a family-run orchard in the hills of Hidden Meadows above Escondido, California and about 20 miles from the coast. The Mediterranean-style climate is considered ideal for growing blood oranges.  more...',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/d0c766fb-fa53-4d10-a3c0-81df6b9c1f43_300.jpg',
    name: 'Maria Aviles',
    city: 'Mountain Lakes, NJ',
    description:
      'Members receive a weekly or bi-weekly bag of organic fruits and vegetables. We have pick-up sites in Mountain Lake, Denville, Madison, and Rockaway. We also deliver to Mountain Lakes, Denville, Boonton, Parsippany, Montville, Rockaway, Morris Plains, Morristown, Caldwell, Dover, Madison, Montclair, East Orange and Hackensack, NJ.  more...',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/7fc9b466-cb7d-4641-90df-90679d1910a6_300.jpg',
    name: 'Rivenwood Gardens',
    city: 'Glade Hill, VA',
    description:
      'We are two young farmers passionate about growing food that is sustainable and accessible. We pride ourselves in growing only the best quality produce that features primarily heirloom varieties. We are currently in the process of getting organically certified. Our farming methods are ecologically and sustainably focused.  more...',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/ad7d12df-72c2-4497-bf44-4c1e0a0d4139_300.jpg',
    name: 'Sand n Straw Community Farm',
    city: 'Vista, CA',
    description:
      'Come visit our Farm Stand open Wednesday & Saturday. Visit with the farm animals, grab a coffee, shop for produce and enjoy a bit of the farm life. We offer weekly Farm Box (CSA) subscriptions in addition to shopping at our Farm Stand including produce, eggs, almond milk and pantry items.  more...',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/1717afa7-bc7a-41ee-9714-5cd3aa670c95_300.jpg',
    name: 'Snowfields Farm',
    city: 'Pownal, ME',
    description:
      'Snowfields Farm is a small but growing farm dedicated to growing food and practicing organic farming methods to improve and sustain the soil for the future. For us, there is no greater reward than being able to share what we grow with others and promoting local, sustainable food production.  more...',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/2bc606eb-8281-4237-818f-f5cda79ee593_300.jpg',
    name: 'Soaring Eagle Farm LLC',
    city: 'New Holland, PA',
    description:
      'Soaring Eagle Farm LLC is a family owned and operated vegetable farm. We grow your basic vegetables and sell them in shares to our members. Our farm is not organic certified at this time, however, we do follow organic practices to the best of our abilities and use OMRI listed biological controls for insect and blight control.  more...',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/55d4f801-d43e-496d-81e8-a8cd8b54f47a_300.jpg',
    name: 'SongHaven Farm',
    city: 'Cahone, CO',
    description:
      'Since 2005 we have been stewards of this land we call SongHaven Farm. We grow our crops the way nature intended - through recognition of daily and seasonal rhythms and honoring the life of the soil.  more...',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/39154_300.jpg',
    name: 'Threshing Table Farm',
    city: 'Star Prairie, WI',
    description:
      'Threshing Table farm is located 4 miles from New Richmond, Wisconsin. We are enjoying our mission of returning one more small family farm to the rural landscape. We are a family farm offering 100 Full CSA Shares. We believe in growing our produce naturally and sustainably.  more...',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/1f177bb8-2109-4241-84c9-bc39c68cc111_300.jpg',
    name: 'Tonkawa Farm',
    city: 'Salado, TX',
    description:
      'We are a small family farm with that provides produce (vegetables and / or fruit), premium meats (beef, bison, chicken, lamb, goat, turkey, quail, fish, seafood), dairy and eggs, groceries and more, sourced from farmers who use beyond organic and sustainable practices, all delivered to your door. We have three different beef herds.  more...',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/3c343bb6-dbdd-440b-97c4-0f767100ec65_300.jpg',
    name: 'Turnip Rock Farm / Cosmic Wheel Creamery',
    city: 'Clear Lake, WI',
    description:
      'Turnip Rock Farm is a diversified family farm where we use intensive methods to grow top quality produce, raise 100% grass-fed cows for meat and dairy, as well as whey fed pork. We are striving for a truly sustainable whole-farm ecosystem.  more...',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/c0b89f54-7260-4485-a546-32a69d39fb8e_300.jpg',
    name: 'Walking Bird Farm',
    city: 'Egg Harbor, NJ',
    description:
      'Join our CSA Farm Share program! CSA members receive a weekly share of our produce, flowers and herbs. Farm Share options: Small $280, Medium $490, Large $630 - 20 weeks Jun-Oct. Flexible payment options. Pick-Your-Own crops INCLUDED (when available) - cherry tomatoes, green beans, flowers and herbs!  more...',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/15742_300.jpg',
    name: 'Wholesome Harvest',
    city: 'Fort Atkinson, WI',
    description:
      'Wholesome Harvest is located just outside Fort Atkinson. We offer organically grown fruits and vegetables through our CSA program and farm sales. We deliver vegetable boxes throughout the entire growing season to many different sites throughout the city of Madison and Jefferson County. We also offer certified organic eggs, pork and beef.  more...',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/28298_300.jpg',
    name: 'herbfresh.com',
    city: 'Fallbrook, CA',
    description:
      'Herbfresh grows many varieties of fruit,herbs and scented geraniums. We grow in Southern California and because of our climate we are able to grow year round. Herbfresh sells locally to nurseries, attends farmers markets in our area and sells online mail order throughout the country.  more...',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/28824_300.jpg',
    name: 'Hood River Organic',
    city: 'Hood River, OR',
    description:
      'Choose what goes in your box! Hood River Organic is proud to be a cooperative CSA in the NW to offer boxes of local and organic produce year-round. Weekly, bi-weekly or monthly. We happily deliver to your doorstep or convenient pickup locations in both the Seattle and Portland metro area. Pick up locations also in Bend and the Columbia Gorge.  more...',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/39154_300.jpg ',
    name: 'A Farm Less Ordinary',
    city: 'Bluemont, VA',
    description:
      'A Farm Less Ordinary (AFLO) is a 501c3 non-profit whose mission is to provide employment and a welcoming community to adults with developmental and intellectual disabilities, while sustainably growing organic vegetables for the Washington, DC area.  more...',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/28824_300.jpg',
    name: 'Agriberry Annapolis CSA',
    city: 'Annapolis, MD',
    description:
      '\n      Choose what goes in your box!  Hood River Organic is proud to be a cooperative CSA in the NW to offer boxes of local and organic produce year-round. Weekly, bi-weekly or monthly. We happily deliver to your doorstep or convenient pickup locations in both the Seattle and Portland metro area. Pick up locations also in Bend and the Columbia Gorge. \n     ',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/10866_300.jpg',
    name: 'Angelic Organics',
    city: 'Caledonia, IL',
    description:
      'Enjoy a weekly or bi-weekly 3/4 bushel box of fresh vegetables and herbs delivered to over 40 Chicagoland area sites from June through October.  more...',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/541399c1-bd1d-4141-b940-9b082094ac6b_300.jpg',
    name: 'Ashby Pasture',
    city: 'Ashby, MA',
    description:
      'Ashby Pasture is a small, family farm in Ashby, MA that specializes in no-spray vegetables and herbs as well as pastured eggs, poultry and meat through our custom CSA program.  more...',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/489b81c4-c264-4eec-981d-93a815757c23_300.jpg',
    name: 'Aunt Beez Greenhouse',
    city: 'Scales Mound, IL',
    description:
      'We are a local plant and produce destination that grows all of our own produce starting from seed here on the farm. Our retail greenhouse is open in the Spring, and we continue to grow vegetables and cut-flowers Spring through Fall utilizing our fields, high tunnels and greenhouses.  more...',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/4053_300.jpg',
    name: "Byrd's Pecans",
    city: 'Butler, MO',
    description:
      'L. V. Byrd started everything in 1964 with high ideals and an even higher work ethic. He stood behind Missouri pecans being higher in quality and richer in taste than other pecans. The tradition he started 50 years ago and his spirit lives on in every pecan we harvest from our 500 acre grove of more than 14,000 trees and bring to you.  more...',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/9d95129a-da34-43ca-b3a4-937a04723274_300.jpg',
    name: 'Eatwell Farm',
    city: 'Dixon, CA',
    description:
      'Please visit eatwell.com for more information about how to sign up with us! Eatwell Farm is a 105-acre organic farm in the Sacramento Valley in Northern California. In 1998 we were lucky enough to be able to buy land that is now all organic.  more...',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/50de24a9-0232-468e-9a0b-ccef091d8035_300.jpg',
    name: 'EcoCulture Farms',
    city: 'Temecula, CA',
    description:
      "We're a small family farm located in the heart of the Temecula wine country. We provide nutrient dense produce to our members through our Community Supported Agriculture (CSA) program. We also offer pasture raised eggs, free range beef, and pastured pork.  more...",
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/40563_300.jpg',
    name: 'Fairview Orchards',
    city: 'Ojai, CA',
    description:
      'Fairview Orchards is a family owned & operated farm that cultivates a diverse variety of certified organic fruit such as Hass Avocados, Meyer Lemons, Blood Oranges, Figs, Specialty Tangerines, Jujubes & Pomegranates.  more...',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/489b81c4-c264-4eec-981d-93a815757c23_300.jpg',
    name: 'Foothill Roots Farm',
    city: 'MEADOW VISTA, CA',
    description:
      'We believe that growing good food feels great! We believe in growing and producing the freshest, most nutrient dense, flavorful food for our community so that they can be the healthiest and most productive members of society. We are certified organic and work hard to be good stewards of this land.  more...',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/10330_300.jpg',
    name: 'Fresh Gardens',
    city: 'Homestead, FL',
    description:
      'We are a family owned farm operating in the historic Redland growing area in Dade county Florida. We have over 1000 tropical trees on our farm. Specializing in Golden Passion fruit, Longans, Lychees, Guava, Carambola, and Dragon Fruit.We offer farm tours for 12.00 per per person or 40.00 per family. Call for appt.  more...',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/82170964-29a0-4383-ab41-048e21377633_300.jpg',
    name: 'Frog Hollow Farm CSA',
    city: 'Brentwood, CA',
    description:
      "Frog Hollow Farm is a thriving 242-acre organic farm located in Brentwood, California. We are located a hop, skip and a jump east of San Francisco in the fertile Sacramento River Delta (about an hour's drive).  more...",
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/438161b8-1d92-43df-9d3d-093cc0f47229_300.jpg',
    name: 'Grassroots Farm & Dairy',
    city: 'Marshall, NC',
    description:
      'We are a small scale, grass-based sheep dairy located in Marshall, North Carolina. We care for our land and animals with diligence and respect and we believe that the farm is accountable to our larger community and should be run in a sustainable and transparent way.  more...',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/90a9fce6-87a8-4abc-9e41-46d4ecd4afed_300.jpg',
    name: 'Grey Arrow Farm',
    city: 'Camrose, AB',
    description:
      'We are a certified organic, family farm growing produce for our community! We grow approximately 55 types of vegetables and herbs over 2.5 acres of cultivated land on our beautiful oasis here in the Alberta prairies.  more...',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/b84df4d1-ab22-4e24-8d63-0c6616209a12_300.jpg',
    name: 'Halfacre Farms',
    city: 'Norwalk, IA',
    description:
      'Halfacre Farms is an operation that produces locally grown chicken, eggs and produce in an ethical manner using organic methods.  more...',
  },
  {
    image:
      'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/f6b78ca5-eed1-4155-9a26-b19ceea761dd_300.jpg',
    name: 'Haw River Mushrooms',
    city: 'Saxapahaw, NC',
    description:
      "Haw River Mushrooms, LLC is dedicated to bringing the flavors, textures, and stories of culinary mushrooms to a larger audience. We believe that thinking mycologically leads to acting ecologically and that an appreciation for mushrooms opens doors to understanding fungi's many rolls in preserving and restoring our environment.  more...",
  },
]

export default farmersDataSet
