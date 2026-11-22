import strawberryPhoto from "../foto/strawberry.png";
import coffeePhoto from "../foto/coffe.png";
import matchaPhoto from "../foto/matcha.png";
import thaiTeaPhoto from "../foto/thai-tee.png";
import butterscotchPhoto from "../foto/butterscotch.png";

const unsplash = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

const photos = {
  coffee: [
    coffeePhoto,
    butterscotchPhoto,
    unsplash("photo-1495474472287-4d71bcdd2085"),
    unsplash("photo-1509042239860-f550ce710b93"),
    unsplash("photo-1461023058943-07fcbe16d735"),
    unsplash("photo-1511920170033-f8396924c348"),
    unsplash("photo-1442512595331-e89e73853f31"),
  ],
  nonCoffee: [
    matchaPhoto,
    strawberryPhoto,
    unsplash("photo-1751563721808-3b81940b88f7"),
    unsplash("photo-1751033390130-cdc5a6082089"),
  ],
  tea: [
    thaiTeaPhoto,
    unsplash("photo-1544787219-7f47ccb76574"),
    unsplash("photo-1556679343-c7306c1976bc"),
    matchaPhoto,
  ],
  bakery: [
    unsplash("photo-1568471382005-99e347e2aef0"),
    unsplash("photo-1538421001169-6774f32315fe"),
    unsplash("photo-1704229350612-0dfdc7b84829"),
  ],
  food: [
    unsplash("photo-1568093858174-0f391ea21c45"),
    unsplash("photo-1565299624946-b28f40a0ae38"),
    unsplash("photo-1663721605989-3bdd2c994190"),
    unsplash("photo-1767438030771-4f1d20615881"),
    unsplash("photo-1547592180-85f173990554"),
  ],
  dessert: [
    unsplash("photo-1774002054901-1618ff2a0410"),
    unsplash("photo-1562376552-0d160a2f238d"),
    unsplash("photo-1578985545062-69928b1d9587"),
  ],
};

const categories = [
  {
    name: "Coffee", photoSet: photos.coffee,
    items: [
      ["Espresso", "A short, rich shot with a smooth crema.", 18000, 2],
      ["Americano", "Espresso lengthened with hot water for a clean finish.", 20000, 0],
      ["Café Latte", "Espresso balanced with steamed milk and a light foam.", 28000, 3],
      ["Cappuccino", "Bold espresso with steamed milk and airy foam.", 28000, 5],
      ["Caffè Mocha", "Espresso and chocolate softened with creamy milk.", 32000, 3],
      ["Caramel Macchiato", "Vanilla milk marked with espresso and caramel.", 32000, 1],
      ["Spanish Latte", "Espresso and milk with a mellow sweet finish.", 30000, 4],
      ["Flat White", "A double espresso under silky microfoam.", 28000, 6],
      ["Cold Brew", "Slow-steeped coffee served chilled over ice.", 28000, 0],
      ["Affogato", "Vanilla ice cream finished with a hot espresso shot.", 32000, 1],
    ],
  },
  {
    name: "Non-Coffee", photoSet: photos.nonCoffee,
    items: [
      ["Matcha Latte", "Earthy Japanese green tea whisked with creamy milk.", 32000, 0],
      ["Chocolate Latte", "Chocolate and steamed milk with a gentle cocoa finish.", 30000, 2],
      ["Dark Chocolate", "A deep cocoa drink with a rich, velvety texture.", 30000, 1],
      ["Strawberry Milk", "Fresh strawberry flavor swirled into cold milk.", 28000, 1],
      ["Taro Latte", "Smooth taro blended with milk for a soft, sweet sip.", 28000, 2],
      ["Red Velvet Latte", "A creamy cocoa drink with a delicate vanilla note.", 30000, 1],
      ["Vanilla Milk", "Chilled milk lightly sweetened with fragrant vanilla.", 25000, 3],
      ["Cookies & Cream", "Creamy milk blended with chocolate cookie pieces.", 32000, 1],
    ],
  },
  {
    name: "Tea", photoSet: photos.tea,
    items: [
      ["Lemon Tea", "Bright black tea with a squeeze of citrus.", 20000, 1],
      ["Peach Tea", "Fragrant tea infused with sweet peach notes.", 22000, 1],
      ["Lychee Tea", "Lightly brewed tea with floral lychee sweetness.", 22000, 1],
      ["Jasmine Tea", "A delicate, aromatic tea with a clean finish.", 18000, 1],
      ["English Breakfast", "A full-bodied black tea, served hot.", 20000, 1],
      ["Milk Tea", "Robust brewed tea mellowed with creamy milk.", 25000, 2],
      ["Hojicha Latte", "Roasted Japanese green tea blended with steamed milk.", 30000, 3],
      ["Thai Tea", "Classic spiced Thai tea served chilled with milk.", 25000, 0],
    ],
  },
  {
    name: "Bakery", photoSet: photos.bakery,
    items: [
      ["Butter Croissant", "Flaky, golden pastry made with rich butter.", 24000, 0],
      ["Chocolate Croissant", "Buttery layers wrapped around dark chocolate.", 28000, 0],
      ["Cinnamon Roll", "Soft baked dough swirled with cinnamon sugar.", 26000, 1],
      ["Brownies", "Dense chocolate brownie with a delicate crisp top.", 24000, 1],
      ["Chocolate Cookies", "Golden cookies with generous chocolate chunks.", 20000, 1],
      ["Banana Bread", "Moist banana loaf with a tender crumb.", 22000, 1],
      ["Garlic Bread", "Toasted bread brushed with savory garlic butter.", 20000, 2],
      ["Cheese Toast", "Warm toasted bread with a layer of melted cheese.", 24000, 2],
    ],
  },
  {
    name: "Food", photoSet: photos.food,
    items: [
      ["Chicken Katsu Rice", "Crispy chicken cutlet served over steamed rice.", 42000, 0],
      ["Chicken Teriyaki Rice", "Grilled chicken glazed with teriyaki over rice.", 42000, 0],
      ["Beef Rice Bowl", "Tender beef and rice with a savory house sauce.", 46000, 4],
      ["Spaghetti Bolognese", "Spaghetti tossed with slow-cooked tomato beef sauce.", 42000, 1],
      ["Creamy Carbonara", "Pasta in a creamy sauce with parmesan and pepper.", 42000, 1],
      ["Aglio Olio", "Olive oil pasta with garlic, herbs, and chili.", 38000, 1],
      ["French Fries", "Crisp golden fries served with a house dip.", 26000, 2],
      ["Chicken Wings", "Glazed chicken wings with a savory dipping sauce.", 36000, 3],
    ],
  },
  {
    name: "Dessert", photoSet: photos.dessert,
    items: [
      ["Classic Waffle", "Warm crisp-edged waffle with a soft center.", 32000, 0],
      ["Pancakes", "Fluffy pancakes finished with syrup and butter.", 30000, 0],
      ["Cheesecake", "Creamy baked cheesecake on a buttery crumb base.", 35000, 2],
      ["Tiramisu", "Coffee-soaked layers finished with cocoa.", 35000, 1],
      ["Chocolate Lava Cake", "Warm chocolate cake with a soft, flowing center.", 36000, 2],
      ["Panna Cotta", "Silky vanilla cream served chilled with berry sauce.", 32000, 2],
    ],
  },
];

let nextMenuId = 1;
const trendingTitles = new Set([
  "Espresso",
  "Café Latte",
  "Caramel Macchiato",
  "Cold Brew",
  "Matcha Latte",
  "Strawberry Milk",
  "Thai Tea",
  "Butter Croissant",
  "Chicken Katsu Rice",
  "Tiramisu",
]);

export const menu = categories.flatMap(({ name, photoSet, items }) => items.map(([title, description, price, photoIndex]) => {
  const image = photoSet[photoIndex];
  return {
    id: nextMenuId++,
    title,
    description,
    price,
    category: name,
    trending: trendingTitles.has(title),
    image,
    fallbackImage: photoSet[0],
    alt: `${title} menu item`,
  };
}));

const favoriteTitles = ["Cold Brew", "Caramel Macchiato", "Matcha Latte", "Thai Tea", "Strawberry Milk"];
export const favoriteMenu = favoriteTitles.map((title) => menu.find((item) => item.title === title));

export const gallery = [
  { title: "Morning light", alt: "Morning light through the cafe window", art: { bg: "#e8d9c0", fg: "#b0713a", kind: "window" }, rotate: -3 },
  { title: "First pour", alt: "A freshly pulled espresso", art: { bg: "#d9c3a0", fg: "#3a2318", kind: "cup" }, rotate: 2 },
  { title: "Roasted beans", alt: "Close-up of roasted coffee beans", art: { bg: "#3a2318", fg: "#d9c3a0", kind: "beans" }, rotate: -1.5 },
  { title: "Corner table", alt: "The corner table by the window", art: { bg: "#efe3cd", fg: "#3a2318", kind: "window" }, rotate: 3 },
  { title: "Barista hands", alt: "Barista preparing a drink", art: { bg: "#c98f55", fg: "#f6efe3", kind: "cup" }, rotate: -2 },
  { title: "Beans, again", alt: "Coffee beans on a wooden counter", art: { bg: "#e8d9c0", fg: "#4a2c1c", kind: "beans" }, rotate: 1.5 },
  { title: "Afternoon", alt: "Afternoon light in the cafe", art: { bg: "#b0713a", fg: "#f6efe3", kind: "window" }, rotate: -2.5 },
  { title: "Last cup", alt: "A cup at closing time", art: { bg: "#f0e4cf", fg: "#b0713a", kind: "cup" }, rotate: 2 },
];

export const hours = [
  ["Monday to Friday", "7:00 – 18:00"],
  ["Saturday", "8:00 – 20:00"],
  ["Sunday", "8:00 – 16:00"],
];
