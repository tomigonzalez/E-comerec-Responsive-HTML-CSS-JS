const products = [
    //jordan 1
    {
      id: 1,
      img: "img/JordanRed.png",
      name: "Jordan 1 Red",
      
      price: 190,
      category: "jordan1",
    },
    {
      id: 2,
      img: "img/JordanBlue.png",
      name: "Jordan 1 Blue",
    
      price: 210,
      category: "jordan1",
    },
    {
      id: 3,
      img: "img/JordanByN.png",
      name: "Jordan 1 black and white",
      
      price: 220,
      category: "jordan1",
     
    },
    {
      id: 4,
      img: "img/JordanYellow.png",
      name: "Jordan 1 Yellow",
      
      price: 250,
      category: "jordan1",
      
    },
    {
      id: 5,
      img: "img/JordanOrange.png",
      name: "Jordan 1 Orange",
     
      price: 220,
      category: "jordan1",
    },
    {
      id: 6,
      img: "img/JordanWhiteOut.png",
      name: "Jordan 1 White out",
    
      price: 200,
      category: "jordan1",
      
    },
    {
      id: 7,
      img: "img/JordanGreen.png",
      name: "Jordan 1 Green",
      
      price: 215,
      category: "jordan1",
      recommended: true,
    },
    {
      id: 8,
      img: "img/JordanLightBlue.png",
      name: "Jordan 1 Light Blue",
      
      price: 210,
      category: "jordan1",
      
    },
    // Air
    {
      id: 9,
      img: "img/MaxWhite.png",
      name: "Air Max white",
     
      price: 200,
      category: "air",
    },
    {
      id: 10,
      img: "img/Force.png",
      name: "Air Force 1",
      
      price: 150,
      category: "air",
     
    },
    {
      id: 11,
      img: "img/Force1Supreme.png",
      name: "Air Force 1 Supreme",
      
      price: 350,
      category: "air",
    },
    {
      id: 12,
      img: "img/Max720.png",
      name: "Air Max 720",
      
      price: 250,
      category: "air",
    },
    // Offwhite
    {
      id: 13,
      img: "img/Jordan4Off.png",
      name: "Jordan 4 X Offwhite",
      
      price: 450,
      category: "offwhite",
    },
    {
      id: 14,
      img: "img/Jordan1Off.png",
      name: "Jordan 1 X Offwhite",
      
      price: 400,
      category: "offwhite",
      recommended: true,
    },
    {
      id: 15,
      img: "img/VaporOff.png",
      name: "VaporMax X Offwhite",
    
      price: 290,
      category: "offwhite",
     
    },
    {
      id: 16,
      img: "img/PrestoOff.png",
      name: "Air Presto X Offwhite",
     
      price: 320,
      category: "offwhite",
    },
    // Adidas
    {
      id: 17,
      img: "img/Cortes.png",
      name: "Cortes",
      
      price: 180,
      category: "adidas",
    },
    {
      id: 18,
      img: "img/Superstar.png",
      name: "Superstar",
      
      price: 160,
      category: "adidas",
    },
    {
      id: 19,
      img: "img/Forum.png",
      name: "Forum",
     
      price: 240,
      category: "adidas",
    },
    // Personalizados (NO HAY STOCK)
    // Retro
    {
      id: 20,
      img: "img/Jordan11retro.png",
      name: "JORDAN 11 RETRO",
     
      price: 350,
      category: "retro",
    },
    {
      id: 21,
      img: "img/Jordan6Retro.png",
      name: "JORDAN 6 RETRO",
     
      price: 360,
      category: "retro",
    },
  ];

  const mostPopularProducts = () => {

    const popularProducts = [];
    
    for (let i = 0; i < 12; i++) {
      if (i % 2 != 0) {
        popularProducts.push(products[i]);
      }
    }
    return popularProducts;
  };