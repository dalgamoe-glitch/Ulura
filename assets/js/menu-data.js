/* ULURA, full menu data.
   Edit here to update the menu; menu.js renders it. Prices in JOD.
   Item shape:
     { name, desc?, price?, sizes?: [{s,p}], options?: [{n,p,ar?}] }
   A category can hold `items` and/or `groups` (each group: {title, note?, items}). */
window.ULURA_MENU = {
  currency: "JD",
  categories: [
    {
      id: "espresso",
      title: "Espresso-Based Hot Drinks",
      kicker: "Hot",
      items: [
        { name: "Espresso", desc: "Rich, intense, and perfectly extracted.", price: "2.50" },
        { name: "Americano", desc: "Espresso with hot water.", sizes: [{ s: "M", p: "3.00" }, { s: "L", p: "4.00" }] },
        { name: "Macchiato", desc: "Espresso with a touch of milk foam.", price: "3.00" },
        { name: "Cortado", desc: "Equal parts espresso and warm milk, smooth and balanced.", price: "3.00" },
        { name: "Flat White", desc: "Velvety microfoam over double espresso.", price: "3.00" },
        { name: "Cappuccino", desc: "Equal parts espresso, steamed milk, and foam.", price: "3.00" },
        { name: "Latte", desc: "Creamy steamed milk with espresso.", price: "3.00" },
        { name: "White Mocha", desc: "Espresso with white chocolate and steamed milk.", sizes: [{ s: "M", p: "3.75" }, { s: "L", p: "4.25" }] },
        { name: "Mocha", desc: "Espresso with chocolate and steamed milk.", sizes: [{ s: "M", p: "3.75" }, { s: "L", p: "4.25" }] },
        { name: "Caramel Macchiato", desc: "Steamed milk layered with vanilla and espresso, topped with caramel drizzle.", price: "4.25" },
        { name: "Spanish Latte", desc: "Espresso blended with steamed milk and sweetened condensed milk.", sizes: [{ s: "M", p: "4.00" }, { s: "L", p: "4.50" }] },
        { name: "Salted Caramel Latte", desc: "Espresso with steamed milk and salted caramel syrup, topped with a hint of sea salt.", price: "4.00" },
        { name: "Cinnamon White Mocha", desc: "White chocolate and espresso with steamed milk, infused with cinnamon spice.", price: "3.75" }
      ]
    },
    {
      id: "brew",
      title: "Manual Brew Station",
      kicker: "Craft",
      note: "Brewed to order by our baristas.",
      items: [
        { name: "V60", desc: "Cone-shaped pour-over producing a clean, bright cup with delicate flavour notes.", price: "3.50" },
        { name: "French Press", desc: "Immersion brew yielding a rich, full-bodied coffee with natural oils.", price: "3.50" },
        { name: "Chemex", desc: "Elegant pour-over with thick filters for a smooth, crisp, and clear profile.", price: "3.50" },
        { name: "Syphon", desc: "Vacuum brewing method offering theatrical presentation and complex flavour.", price: "3.50" },
        { name: "AeroPress", desc: "Pressure-based brew, versatile, smooth, bold, and low in acidity.", price: "3.50" },
        { name: "Turkish", desc: "Traditional unfiltered coffee simmered with fine grounds and served strong.", price: "2.50" }
      ]
    },
    {
      id: "non-coffee-hot",
      title: "Non-Coffee Hot Drinks",
      kicker: "Hot",
      items: [
        { name: "Hot Chocolate", desc: "Rich dark cocoa with steamed milk, optionally topped with cream.", price: "3.50" },
        { name: "White Hot Chocolate", desc: "Creamy white chocolate melted into steamed milk, sweet, smooth, indulgent.", price: "3.50" },
        { name: "Spiced Hot Chocolate", desc: "Cocoa infused with cinnamon and a hint of cayenne.", price: "3.50" },
        { name: "Chai Latte", desc: "Black tea brewed with spices and steamed milk.", price: "3.00" },
        { name: "Golden Milk", desc: "Turmeric, ginger, cinnamon, and almond milk, comforting and anti-inflammatory.", price: "3.00" },
        { name: "Matcha Latte", desc: "Japanese green tea powder whisked with milk, earthy and energizing.", price: "4.00" }
      ]
    },
    {
      id: "cold-coffee",
      title: "Cold Coffee Drinks",
      kicker: "Iced",
      items: [
        { name: "Cold Brew", desc: "Slow-steeped coffee, smooth, bold, and low in acidity.", price: "4.50" },
        { name: "Iced V60", desc: "Pour-over brewed over ice, clean and bright.", price: "4.00" },
        { name: "Iced AeroPress", desc: "Pressure-brewed coffee served chilled, bold and smooth.", price: "4.00" },
        { name: "Iced Americano", desc: "Espresso diluted with cold water and ice, smooth and light.", sizes: [{ s: "M", p: "3.00" }, { s: "L", p: "4.00" }] },
        { name: "Iced Flat White", desc: "Cold microfoam over double espresso, creamy and bold.", price: "3.00" },
        { name: "Iced Latte", desc: "Espresso with cold milk over ice, classic and creamy.", sizes: [{ s: "M", p: "3.00" }, { s: "L", p: "4.00" }] },
        { name: "Iced Mocha", desc: "Espresso with chocolate and cold milk, rich and indulgent.", price: "4.25" },
        { name: "Iced White Mocha", desc: "White chocolate, espresso, and cold milk, sweet and smooth.", price: "4.25" },
        { name: "Iced Caramel Macchiato", desc: "Vanilla milk over ice, layered with espresso and caramel drizzle.", price: "4.25" },
        { name: "Iced Spanish Latte", desc: "Espresso with cold milk and sweetened condensed milk, sweet and bold.", price: "4.00" },
        { name: "Iced Salted Caramel Latte", desc: "Espresso, cold milk, and salted caramel syrup, topped with a hint of sea salt.", price: "4.00" }
      ]
    },
    {
      id: "cold-drinks",
      title: "Cold & Non-Coffee Drinks",
      kicker: "Cold",
      note: "Classic selection.",
      items: [
        { name: "Iced Matcha", desc: "Japanese green tea powder blended with cold milk.", price: "4.00" },
        { name: "Iced White Chocolate", desc: "White chocolate and cold milk, sweet and velvety.", price: "4.00" },
        { name: "Iced Tea", desc: "Classic black tea served chilled, crisp and refreshing.", price: "3.50" },
        { name: "Passion Fruit Iced Tea", desc: "Black tea infused with tropical passion fruit, vibrant and tangy.", price: "3.50" },
        { name: "Mango Iced Tea", desc: "Black tea blended with ripe mango, smooth and fruity.", price: "3.50" },
        { name: "Raspberry Iced Tea", desc: "Black tea with raspberry essence, bright and slightly tart.", price: "3.50" },
        { name: "Lemon Iced Tea", desc: "Black tea with fresh lemon, zesty and classic.", price: "3.50" },
        { name: "Peach Iced Tea", desc: "Black tea infused with peach, fruity and smooth.", price: "3.50" },
        { name: "Hibiscus Iced Tea", desc: "Tart, floral, and caffeine-free with a vibrant red hue.", price: "3.50" },
        { name: "Red Bull", desc: "Chilled and ready to go.", price: "3.00" },
        { name: "Sparkling Water", desc: "Crisp and bubbly.", price: "3.00" },
        {
          name: "Mojito", desc: "Muddled fresh, pick your mix.",
          options: [
            { n: "Red Bull", p: "4.75" },
            { n: "Sparkling Water", p: "4.00" },
            { n: "Soda", p: "4.00" },
            { n: "G", p: "4.00" },
            { n: "Boom Boom", p: "3.75" },
            { n: "Code Red", p: "3.75" },
            { n: "Matrix", p: "3.00" }
          ]
        }
      ]
    },
    {
      id: "tea",
      title: "Tea Selection",
      kicker: "Tea",
      note: "Every pot 2.50 JD.",
      items: [
        { name: "English Breakfast", desc: "Bold, traditional black tea, perfect with milk or lemon.", price: "2.50" },
        { name: "Earl Grey", desc: "Black tea infused with bergamot citrus.", price: "2.50" },
        { name: "Green Tea", desc: "Light, grassy, and antioxidant-rich.", price: "2.50" },
        { name: "Jasmine Green Tea", desc: "Delicate green tea scented with jasmine blossoms.", price: "2.50" },
        { name: "Chamomile", desc: "Herbal infusion known for calming, sleep-enhancing effects.", price: "2.50" },
        { name: "Peppermint", desc: "Cool, refreshing herbal tea with digestive benefits.", price: "2.50" },
        { name: "Hibiscus", desc: "Tart, floral, and caffeine-free with a vibrant red hue.", price: "2.50" }
      ]
    },
    {
      id: "frappe",
      title: "Frappé Menu",
      kicker: "Blended",
      note: "Each one 4.25 JD.",
      items: [
        { name: "Caramel Frappé", desc: "Blended ice, milk, and caramel syrup, smooth and buttery.", price: "4.25" },
        { name: "Salted Caramel Frappé", desc: "A hint of sea salt for a sweet–salty twist.", price: "4.25" },
        { name: "Vanilla Frappé", desc: "Creamy vanilla blend with ice, light and classic.", price: "4.25" },
        { name: "Chocolate Frappé", desc: "Rich cocoa and milk blended over ice, decadent and bold.", price: "4.25" },
        { name: "White Mocha Frappé", desc: "White chocolate and espresso blended with ice, sweet and velvety.", price: "4.25" },
        { name: "Mint Mocha Frappé", desc: "Chocolate and espresso blended with mint, cool, bold, refreshing.", price: "4.25" },
        { name: "Hazelnut Frappé", desc: "Nutty hazelnut blended with milk and ice, smooth and aromatic.", price: "4.25" }
      ]
    },
    {
      id: "shaken",
      title: "Iced Shaken",
      kicker: "Shaken",
      note: "Hand-shaken over ice. Each 4.25 JD.",
      items: [
        { name: "Iced Shaken (Standard)", desc: "Espresso, shaken cold and bright.", price: "4.25" },
        { name: "Shaken White Mocha", desc: "White chocolate espresso, shaken over ice.", price: "4.25" },
        { name: "Shaken Salted Caramel", desc: "Salted caramel espresso, shaken smooth.", price: "4.25" },
        { name: "Shaken Dulce", desc: "Dulce de leche sweetness, shaken cold.", price: "4.25" },
        { name: "Shaken Matcha", desc: "Earthy matcha, shaken over ice.", price: "4.25" }
      ]
    },
    {
      id: "smoothies",
      title: "Fresh Smoothies",
      kicker: "Fresh",
      note: "Made fresh, every one 3.50 JD.",
      items: [
        { name: "Strawberry Banana", desc: "Creamy blend of ripe bananas and fresh strawberries.", price: "3.50" },
        { name: "Mango Passion", desc: "Tropical mango with tangy passion fruit, bright and juicy.", price: "3.50" },
        { name: "Mixed Berry", desc: "Strawberries, blueberries, and raspberries, rich in antioxidants.", price: "3.50" },
        { name: "Pineapple Coconut", desc: "Tropical fusion of pineapple and coconut milk, smooth and sunny.", price: "3.50" },
        { name: "Peach Apricot", desc: "Sweet peaches and apricots blended into a velvety treat.", price: "3.50" },
        { name: "Avocado Honey", desc: "Creamy avocado with a touch of honey and almond milk.", price: "3.50" },
        { name: "Date & Banana", desc: "Natural sweetness from dates and banana, energizing and smooth.", price: "3.50" },
        { name: "Green Detox", desc: "Spinach, cucumber, apple, and lemon, light, fresh, cleansing.", price: "3.50" }
      ]
    },
    {
      id: "juices",
      title: "Fresh Juices",
      kicker: "Fresh",
      items: [
        { name: "Fresh Orange", desc: "Cold-pressed orange juice, bright and naturally sweet.", price: "3.00" },
        { name: "Fresh Lemon", desc: "Freshly squeezed lemon juice, zesty and refreshing.", price: "3.00" }
      ]
    },
    {
      id: "cakes",
      title: "Cakes",
      kicker: "Sweet",
      items: [
        { name: "San Sebastian", desc: "Burnt Basque cheesecake, caramelised and creamy.", price: "3.50" },
        { name: "Red Velvet", desc: "Classic cocoa sponge with cream cheese.", price: "3.25" },
        { name: "Strawberry Cake", desc: "Light sponge with fresh strawberry.", price: "3.25" },
        { name: "Nutella Cake", desc: "Rich hazelnut-chocolate layers.", price: "3.25" },
        { name: "Ferrero Cake", desc: "Chocolate and hazelnut crunch.", price: "3.25" },
        { name: "Carrot Cake", desc: "Spiced sponge with cream cheese frosting.", price: "3.25" },
        { name: "Lemon Cake", desc: "Bright, zesty and moist.", price: "3.25" },
        { name: "Tiramisu", desc: "Coffee-soaked layers with mascarpone.", price: "3.25" },
        { name: "Cheesecake", desc: "Smooth and classic.", price: "3.25" }
      ]
    },
    {
      id: "salads",
      title: "Salads",
      kicker: "Fresh",
      note: "Every bowl 4.50 JD.",
      items: [
        { name: "Avocado Salad", desc: "Fresh greens with creamy avocado.", price: "4.50" },
        { name: "Strawberry Salad", desc: "Leaves, strawberries and a bright dressing.", price: "4.50" },
        { name: "Tutti Frutti Salad", desc: "A colourful mix of fresh fruit.", price: "4.50" },
        { name: "Date Salad", desc: "Greens with sweet dates.", price: "4.50" },
        { name: "Caesar Salad", desc: "Crisp romaine with grilled chicken.", price: "4.50" },
        { name: "Tacos Salad", desc: "Zesty, crunchy and satisfying.", price: "4.50" }
      ]
    },
    {
      id: "sandwiches",
      title: "Sandwiches",
      kicker: "Bites",
      note: "Choose your bread.",
      items: [
        { name: "Turkey Sandwich", desc: "Sliced turkey, fresh and simple.", options: [{ n: "Croissant", ar: "كرواسان", p: "3.00" }, { n: "Bagel", ar: "بيغل", p: "3.00" }] },
        { name: "Halloumi Sandwich", desc: "Grilled halloumi, warm and savoury.", options: [{ n: "Croissant", ar: "كرواسان", p: "4.00" }, { n: "Bagel", ar: "بيغل", p: "4.00" }] },
        { name: "Mix Cheese Sandwich", desc: "A melt of mixed cheeses.", options: [{ n: "Croissant", ar: "كرواسان", p: "4.00" }, { n: "Bagel", ar: "بيغل", p: "4.00" }] }
      ]
    },
    {
      id: "extras",
      title: "Toppings & Extras",
      kicker: "Add-ons",
      groups: [
        {
          title: "Milk Alternatives",
          note: "Swap any milk, 1.00 JD each.",
          items: [
            { name: "Oat Milk", price: "1.00" },
            { name: "Almond Milk", price: "1.00" },
            { name: "Soy Milk", price: "1.00" },
            { name: "Coconut Milk", price: "1.00" },
            { name: "Lactose-Free Milk", price: "1.00" }
          ]
        },
        {
          title: "Extras & Add-ons",
          items: [
            { name: "Flavour Shot", desc: "Vanilla · Caramel · Hazelnut.", price: "0.50" },
            { name: "House Syrup", desc: "Cardamom · Rose · Cinnamon.", price: "0.50" },
            { name: "Extra Flavour", price: "0.50" },
            { name: "Whipped Cream", price: "1.00" },
            { name: "Extra Espresso Shot", price: "1.00" },
            { name: "Still Water", price: "0.50" },
            { name: "Decaf Option", desc: "Available on request." }
          ]
        }
      ]
    }
  ]
};
