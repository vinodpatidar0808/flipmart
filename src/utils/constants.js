export const getDayStartTimestamp = (date) => {
  if (!date) return null;
  const [year, month, day] = date.split('-');
  const newDate = new Date(year, month - 1, day, 0, 0, 0, 0);
  return newDate.getTime();
};

export const getDayEndTimestamp = (date) => {
  if (!date) return null;
  const [year, month, day] = date.split('-');
  const newDate = new Date(year, month - 1, day, 23, 59, 59, 999);
  return newDate.getTime();
};

export const categories = [
  { name: 'Clothing', value: 'Clothing' },
  { name: 'Furniture', value: 'Furniture' },
  { name: 'Footwear', value: 'Footwear' },
  { name: 'Pet Supplies', value: 'Pet Supplies' },
  {
    name: 'Eternal Gandhi Super Series Crystal Paper Weight...',
    value: 'Eternal Gandhi Super Series Crystal Paper Weight...',
  },
  { name: 'Pens & Stationery', value: 'Pens & Stationery' },
  { name: 'Sports & Fitness', value: 'Sports & Fitness' },
  {
    name: 'Beauty and Personal Care',
    value: 'Beauty and Personal Care',
  },
  {
    name: 'Bengal Blooms Rose Artificial Plant  with Pot (3...',
    value: 'Bengal Blooms Rose Artificial Plant  with Pot (3...',
  },
  { name: 'Bags, Wallets & Belts', value: 'Bags, Wallets & Belts' },
  {
    name: 'Home Decor & Festive Needs',
    value: 'Home Decor & Festive Needs',
  },
  { name: 'Automotive', value: 'Automotive' },
  { name: 'Tools & Hardware', value: 'Tools & Hardware' },
  {
    name: "Vishudh Printed Women's Straight Kurta",
    value: "Vishudh Printed Women's Straight Kurta",
  },
  {
    name: "Vishudh Printed Women's Anarkali Kurta",
    value: "Vishudh Printed Women's Anarkali Kurta",
  },
  {
    name: 'BuildTrack PIR Wireless Motion Sensor - One Swit...',
    value: 'BuildTrack PIR Wireless Motion Sensor - One Swit...',
  },
  {
    name: 'Skayvon SUMMERSIBLE SINGLE PHASE PUMP CONTROLLER...',
    value: 'Skayvon SUMMERSIBLE SINGLE PHASE PUMP CONTROLLER...',
  },
  {
    name: "MASARA Solid Women's Straight Kurta",
    value: "MASARA Solid Women's Straight Kurta",
  },
  {
    name: 'Skayvon SUBMERSIBBLE THREE PHASE PUMP CONTROLLER...',
    value: 'Skayvon SUBMERSIBBLE THREE PHASE PUMP CONTROLLER...',
  },
  {
    name: 'Behringer Xenyx 502 Analog Sound Mixer',
    value: 'Behringer Xenyx 502 Analog Sound Mixer',
  },
  {
    name: "Noor Embroidered Women's Straight Kurta",
    value: "Noor Embroidered Women's Straight Kurta",
  },
  {
    name: "Libas Printed Women's A-line Kurta",
    value: "Libas Printed Women's A-line Kurta",
  },
  {
    name: "Libas Printed Women's Anarkali Kurta",
    value: "Libas Printed Women's Anarkali Kurta",
  },
  { name: 'Home Furnishing', value: 'Home Furnishing' },
  { name: 'Baby Care', value: 'Baby Care' },
  { name: 'Mobiles & Accessories', value: 'Mobiles & Accessories' },
  { name: 'Food & Nutrition', value: 'Food & Nutrition' },
  { name: 'Watches', value: 'Watches' },
  { name: 'Toys & School Supplies', value: 'Toys & School Supplies' },
  { name: 'Jewellery', value: 'Jewellery' },
  {
    name: 'Cellbazaar Blackberry 8520 WHITE LCD LCD (YIT-562)',
    value: 'Cellbazaar Blackberry 8520 WHITE LCD LCD (YIT-562)',
  },
  {
    name: 'Dressberry Gold Synthetic  Clutch',
    value: 'Dressberry Gold Synthetic  Clutch',
  },
  {
    name: 'Mast & Harbour Black Synthetic  Clutch',
    value: 'Mast & Harbour Black Synthetic  Clutch',
  },
  {
    name: "Sisel Printed Poly Cotton Women's Stole",
    value: "Sisel Printed Poly Cotton Women's Stole",
  },
  {
    name: 'Knight Ace Kraasa Sports Running Shoes, Cycling ...',
    value: 'Knight Ace Kraasa Sports Running Shoes, Cycling ...',
  },
  {
    name: "Indistar Self Design Viscose Women's Stole",
    value: "Indistar Self Design Viscose Women's Stole",
  },
  { name: 'Glacier Running Shoes', value: 'Glacier Running Shoes' },
  {
    name: 'Dressberry Black Synthetic  Clutch',
    value: 'Dressberry Black Synthetic  Clutch',
  },
  {
    name: 'Asics Gel-Cumulus 17 Running Shoes',
    value: 'Asics Gel-Cumulus 17 Running Shoes',
  },
  {
    name: 'Mast & Harbour Gold Synthetic  Clutch',
    value: 'Mast & Harbour Gold Synthetic  Clutch',
  },
  {
    name: 'Asics Gel-Kayano 22 Running Shoes',
    value: 'Asics Gel-Kayano 22 Running Shoes',
  },
  {
    name: 'Dressberry Orange Synthetic  Clutch',
    value: 'Dressberry Orange Synthetic  Clutch',
  },
  {
    name: 'Dressberry Green Synthetic  Clutch',
    value: 'Dressberry Green Synthetic  Clutch',
  },
  { name: 'Escan Lace Up', value: 'Escan Lace Up' },
  {
    name: "Nine Maternity Wear Women's Fit and Flare Dress",
    value: "Nine Maternity Wear Women's Fit and Flare Dress",
  },
  { name: 'Sunglasses', value: 'Sunglasses' },
];
