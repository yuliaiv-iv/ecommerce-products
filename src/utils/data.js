// import News from '../images/news.png';
export const initialData = [
  {
    id: "1",
    supplier: "Sneaker Company",
    name: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 250,
    // image: "../images/image-product-1.jpg",
    subImages: [
      "/images/image-product-1.jpg",
      "/images/image-product-2.jpg",
      "/images/image-product-3.jpg",
      "/images/image-product-4.jpg",
    ],
    inCart: 0,
  },
  {
    id: "2",
    supplier: "Tropicfeel",
    name: "Canyon Natural Oat",
    description:
      "Canyon is the all-terrain sneaker with 4-in-1 versatility: providing the benefits of aqua shoes, the comfort of sport shoes, the technical outsole materials of hiking shoes, and the styling of your favourite daily pieces.",
    price: 210,
    // image: "/images/shoe1.png",
    subImages: [
      "/images/shoe1.png",
      "/images/shoe2.png",
      "/images/shoe3.png",
      "/images/shoe4.png",
    ],
    inCart: 0,
  },
];

export const navigation = [
  {
    path: "#",
    text: "Collections"
  },
  {
    path: "#",
    text: "Men"
  },
  {
    path: "#",
    text: "Women"
  },
  {
    path: "#",
    text: "About"
  },
  {
    path: "#",
    text: "Contact"
  },
];