const productData = [
  {
    "id": "prod-12345",
    "name": "Ultra Comfort Running Shoes",
    "title": "Ultra Comfort All-Terrain Running Shoes - Lightweight & Durable",
    "description": "Experience ultimate comfort with our premium running shoes designed for all terrains. The breathable mesh upper and responsive cushioning provide superior support for both casual joggers and marathon runners.",
    "imageUrl": "https://example.com/images/shoes/ultra-comfort-main.jpg",
    "price": 129.99,
    "discountPrice": 99.99,
    "rating": 4.7,
    "category": "Footwear",
    "subCategory": "Running Shoes",
    "brand": "AthleteFirst",
    "colors": ["Black", "Blue", "Red", "White"],
    "sizes": ["7", "8", "9", "10", "11", "12"],
    "tags": ["running", "athletic", "breathable", "lightweight", "cushioned"],
    "material": "Synthetic mesh with rubber sole",
    "inStock": true,
    "freeShipping": true,
    "newArrival": false,
    "bestSeller": true,
    "images": [
      {
        "id": "img-001",
        "url": "https://example.com/images/shoes/ultra-comfort-angle1.jpg",
        "alt": "Ultra Comfort Running Shoes - Side View"
      },
      {
        "id": "img-002",
        "url": "https://example.com/images/shoes/ultra-comfort-angle2.jpg",
        "alt": "Ultra Comfort Running Shoes - Top View"
      },
      {
        "id": "img-003",
        "url": "https://example.com/images/shoes/ultra-comfort-sole.jpg",
        "alt": "Ultra Comfort Running Shoes - Sole Detail"
      }
    ],
    "features": [
      "Breathable mesh upper for enhanced ventilation",
      "Responsive cushioning for impact absorption",
      "Durable rubber outsole with superior traction",
      "Reflective elements for visibility in low light"
    ],
    "reviews": [
      {
        "id": "rev-001",
        "author": "Michael R.",
        "rating": 5,
        "date": "2025-02-15",
        "comment": "Best running shoes I've ever owned! Perfect support for my marathon training."
      },
      {
        "id": "rev-002",
        "author": "Sarah T.",
        "rating": 4,
        "date": "2025-02-01",
        "comment": "Very comfortable and lightweight. Runs slightly small, so order half a size up."
      }
    ],
    "variants": [
      {
        "id": "var-001",
        "name": "Black/Size 9",
        "price": 129.99,
        "compareAtPrice": 149.99,
        "inStock": true
      },
      {
        "id": "var-002",
        "name": "Blue/Size 10",
        "price": 129.99,
        "compareAtPrice": 149.99,
        "inStock": true
      }
    ],
    "specs": [
      {
        "name": "Weight",
        "value": "8.5 oz (size 9)"
      },
      {
        "name": "Heel-to-toe Drop",
        "value": "8mm"
      }
    ]
  },
  {
    "id": "prod-12346",
    "name": "Professional Chef Knife",
    "title": "8-inch Professional Chef Knife - German Steel",
    "description": "This premium chef knife features a razor-sharp German steel blade with perfect balance and ergonomic handle for precise cutting and reduced hand fatigue.",
    "imageUrl": "https://example.com/images/kitchen/chef-knife-main.jpg",
    "price": 89.99,
    "discountPrice": 69.99,
    "rating": 4.8,
    "category": "Kitchen",
    "subCategory": "Knives",
    "brand": "CulinaryPro",
    "colors": ["Silver/Black", "Silver/Brown"],
    "sizes": [],
    "tags": ["chef knife", "cooking", "german steel", "professional", "kitchenware"],
    "material": "High-carbon German steel with pakkawood handle",
    "inStock": true,
    "freeShipping": true,
    "newArrival": false,
    "bestSeller": true,
    "images": [
      {
        "id": "img-101",
        "url": "https://example.com/images/kitchen/chef-knife-angle1.jpg",
        "alt": "Chef Knife - Side View"
      },
      {
        "id": "img-102",
        "url": "https://example.com/images/kitchen/chef-knife-angle2.jpg",
        "alt": "Chef Knife - Handle Detail"
      }
    ],
    "features": [
      "Full-tang construction for perfect balance",
      "Hand-polished edge at 15° per side",
      "Premium pakkawood handle resistant to heat and moisture",
      "Lifetime warranty against manufacturing defects"
    ],
    "reviews": [
      {
        "id": "rev-101",
        "author": "Chef Thomas",
        "rating": 5,
        "date": "2025-03-02",
        "comment": "This knife has transformed my meal prep. Perfect balance and incredible edge retention."
      },
      {
        "id": "rev-102",
        "author": "Jamie L.",
        "rating": 5,
        "date": "2025-02-18",
        "comment": "Worth every penny! Makes cutting vegetables effortless and precise."
      }
    ],
    "variants": [
      {
        "id": "var-101",
        "name": "Silver/Black Handle",
        "price": 89.99,
        "compareAtPrice": 109.99,
        "inStock": true
      },
      {
        "id": "var-102",
        "name": "Silver/Brown Handle",
        "price": 89.99,
        "compareAtPrice": 109.99,
        "inStock": true
      }
    ],
    "specs": [
      {
        "name": "Blade Length",
        "value": "8 inches"
      },
      {
        "name": "Blade Material",
        "value": "High-carbon German steel"
      },
      {
        "name": "Handle Material",
        "value": "Pakkawood"
      },
      {
        "name": "Weight",
        "value": "8.5 oz"
      }
    ]
  },
  {
    "id": "prod-12347",
    "name": "Ergonomic Office Chair",
    "title": "Premium Ergonomic Office Chair with Lumbar Support",
    "description": "Designed for all-day comfort, this ergonomic office chair features adjustable lumbar support, breathable mesh back, and customizable armrests to reduce fatigue and improve posture.",
    "imageUrl": "https://example.com/images/furniture/office-chair-main.jpg",
    "price": 249.99,
    "discountPrice": 199.99,
    "rating": 4.6,
    "category": "Furniture",
    "subCategory": "Office Chairs",
    "brand": "ErgoComfort",
    "colors": ["Black", "Gray", "Blue"],
    "sizes": [],
    "tags": ["office", "ergonomic", "chair", "lumbar support", "adjustable"],
    "material": "Mesh fabric with aluminum base",
    "inStock": true,
    "freeShipping": true,
    "newArrival": true,
    "bestSeller": false,
    "images": [
      {
        "id": "img-201",
        "url": "https://example.com/images/furniture/office-chair-angle1.jpg",
        "alt": "Office Chair - Side View"
      },
      {
        "id": "img-202",
        "url": "https://example.com/images/furniture/office-chair-back.jpg",
        "alt": "Office Chair - Back View"
      }
    ],
    "features": [
      "Adjustable lumbar support for lower back comfort",
      "Breathable mesh back prevents heat buildup",
      "4D adjustable armrests for optimal arm positioning",
      "Synchronized tilt mechanism with multiple lock positions",
      "Heavy-duty aluminum base with smooth-rolling casters"
    ],
    "reviews": [
      {
        "id": "rev-201",
        "author": "Robert M.",
        "rating": 5,
        "date": "2025-03-10",
        "comment": "After 8 hours of sitting, my back feels great. Worth the investment!"
      },
      {
        "id": "rev-202",
        "author": "Lisa K.",
        "rating": 4,
        "date": "2025-02-27",
        "comment": "Assembly was a bit challenging, but the chair is fantastic once set up."
      }
    ],
    "variants": [
      {
        "id": "var-201",
        "name": "Black",
        "price": 249.99,
        "compareAtPrice": 299.99,
        "inStock": true
      },
      {
        "id": "var-202",
        "name": "Gray",
        "price": 249.99,
        "compareAtPrice": 299.99,
        "inStock": true
      },
      {
        "id": "var-203",
        "name": "Blue",
        "price": 249.99,
        "compareAtPrice": 299.99,
        "inStock": false
      }
    ],
    "specs": [
      {
        "name": "Weight Capacity",
        "value": "300 lbs"
      },
      {
        "name": "Seat Height Range",
        "value": "17-21 inches"
      },
      {
        "name": "Warranty",
        "value": "5 years"
      }
    ]
  },
  {
    "id": "prod-12348",
    "name": "Wireless Noise-Cancelling Headphones",
    "title": "Premium Bluetooth Noise-Cancelling Headphones - 40H Battery",
    "description": "Experience crystal-clear sound with our wireless headphones featuring active noise cancellation technology, 40-hour battery life, and ultra-comfortable memory foam ear cushions.",
    "imageUrl": "https://example.com/images/electronics/headphones-main.jpg",
    "price": 199.99,
    "discountPrice": 169.99,
    "rating": 4.7,
    "category": "Electronics",
    "subCategory": "Headphones",
    "brand": "SoundScape",
    "colors": ["Black", "Silver", "Rose Gold"],
    "sizes": [],
    "tags": ["wireless", "bluetooth", "noise-cancelling", "headphones", "audio"],
    "material": "Premium leather with aluminum accents",
    "inStock": true,
    "freeShipping": true,
    "newArrival": false,
    "bestSeller": true,
    "images": [
      {
        "id": "img-301",
        "url": "https://example.com/images/electronics/headphones-angle1.jpg",
        "alt": "Headphones - Side View"
      },
      {
        "id": "img-302",
        "url": "https://example.com/images/electronics/headphones-folded.jpg",
        "alt": "Headphones - Folded View"
      }
    ],
    "features": [
      "Active noise cancellation reduces ambient noise by up to 95%",
      "40-hour battery life with quick charge (10 min charge = 5 hours playback)",
      "Premium 40mm drivers for studio-quality sound",
      "Built-in microphone with voice assistant compatibility",
      "Foldable design with travel case included"
    ],
    "reviews": [
      {
        "id": "rev-301",
        "author": "Alex W.",
        "rating": 5,
        "date": "2025-03-15",
        "comment": "The noise cancellation is incredible - completely blocks out airplane noise!"
      },
      {
        "id": "rev-302",
        "author": "Priya S.",
        "rating": 4,
        "date": "2025-03-01",
        "comment": "Great sound quality and comfortable for hours. Battery life is impressive."
      }
    ],
    "variants": [
      {
        "id": "var-301",
        "name": "Black",
        "price": 199.99,
        "compareAtPrice": 249.99,
        "inStock": true
      },
      {
        "id": "var-302",
        "name": "Silver",
        "price": 199.99,
        "compareAtPrice": 249.99,
        "inStock": true
      },
      {
        "id": "var-303",
        "name": "Rose Gold",
        "price": 219.99,
        "compareAtPrice": 269.99,
        "inStock": true
      }
    ],
    "specs": [
      {
        "name": "Battery Life",
        "value": "40 hours (ANC on), 60 hours (ANC off)"
      },
      {
        "name": "Driver Size",
        "value": "40mm"
      },
      {
        "name": "Bluetooth Version",
        "value": "5.2"
      },
      {
        "name": "Weight",
        "value": "9.8 oz"
      }
    ]
  },
  {
    "id": "prod-12349",
    "name": "Ceramic Non-Stick Cookware Set",
    "title": "10-Piece Ceramic Non-Stick Cookware Set - Eco-Friendly",
    "description": "This premium cookware set features ceramic non-stick coating that's free from PFOA, PFAS, and other harmful chemicals. Distributes heat evenly and requires less oil for healthier cooking.",
    "imageUrl": "https://example.com/images/kitchen/cookware-set-main.jpg",
    "price": 179.99,
    "discountPrice": 149.99,
    "rating": 4.5,
    "category": "Kitchen",
    "subCategory": "Cookware",
    "brand": "GreenChef",
    "colors": ["Teal", "Black", "Red"],
    "sizes": [],
    "tags": ["cookware", "non-stick", "ceramic", "pots and pans", "eco-friendly"],
    "material": "Ceramic-coated aluminum with tempered glass lids",
    "inStock": true,
    "freeShipping": true,
    "newArrival": true,
    "bestSeller": false,
    "images": [
      {
        "id": "img-401",
        "url": "https://example.com/images/kitchen/cookware-set-arranged.jpg",
        "alt": "Cookware Set - Arranged View"
      },
      {
        "id": "img-402",
        "url": "https://example.com/images/kitchen/cookware-set-stacked.jpg",
        "alt": "Cookware Set - Stacked View"
      }
    ],
    "features": [
      "PFOA and PFAS-free ceramic non-stick coating",
      "Aluminum core for quick and even heat distribution",
      "Tempered glass lids with steam vents",
      "Soft-touch handles stay cool while cooking",
      "Compatible with all stovetops including induction"
    ],
    "reviews": [
      {
        "id": "rev-401",
        "author": "Emily J.",
        "rating": 5,
        "date": "2025-03-12",
        "comment": "Love cooking with these! Food doesn't stick and cleanup is a breeze."
      },
      {
        "id": "rev-402",
        "author": "Daniel T.",
        "rating": 4,
        "date": "2025-02-28",
        "comment": "Great quality for the price. The non-stick surface works well."
      }
    ],
    "variants": [
      {
        "id": "var-401",
        "name": "Teal",
        "price": 179.99,
        "compareAtPrice": 229.99,
        "inStock": true
      },
      {
        "id": "var-402",
        "name": "Black",
        "price": 179.99,
        "compareAtPrice": 229.99,
        "inStock": true
      },
      {
        "id": "var-403",
        "name": "Red",
        "price": 179.99,
        "compareAtPrice": 229.99,
        "inStock": false
      }
    ],
    "specs": [
      {
        "name": "Set Includes",
        "value": "8\" fry pan, 10\" fry pan, 1.5 qt saucepan with lid, 2.5 qt saucepan with lid, 3 qt sauté pan with lid, 6 qt stockpot with lid"
      },
      {
        "name": "Dishwasher Safe",
        "value": "Yes"
      },
      {
        "name": "Oven Safe",
        "value": "Up to 350°F"
      }
    ]
  },
  {
    "id": "prod-12350",
    "name": "Smart Fitness Watch",
    "title": "Advanced Smart Fitness Watch with Heart Rate & GPS",
    "description": "Track your fitness journey with this advanced smartwatch featuring continuous heart rate monitoring, built-in GPS, sleep tracking, and 7-day battery life. Water-resistant up to 50m.",
    "imageUrl": "https://example.com/images/electronics/fitness-watch-main.jpg",
    "price": 149.99,
    "discountPrice": 129.99,
    "rating": 4.6,
    "category": "Electronics",
    "subCategory": "Wearables",
    "brand": "FitTech",
    "colors": ["Black", "Blue", "Pink"],
    "sizes": [],
    "tags": ["fitness", "smartwatch", "heart rate", "GPS", "activity tracker"],
    "material": "Aluminum case with silicone band",
    "inStock": true,
    "freeShipping": true,
    "newArrival": true,
    "bestSeller": true,
    "images": [
      {
        "id": "img-501",
        "url": "https://example.com/images/electronics/fitness-watch-front.jpg",
        "alt": "Fitness Watch - Front View"
      },
      {
        "id": "img-502",
        "url": "https://example.com/images/electronics/fitness-watch-side.jpg",
        "alt": "Fitness Watch - Side View"
      }
    ],
    "features": [
      "24/7 heart rate monitoring with abnormal heart rate alerts",
      "Built-in GPS for accurate pace and distance tracking",
      "Over 20 exercise modes with automatic detection",
      "Advanced sleep tracking with sleep stage analysis",
      "7-day battery life with typical use"
    ],
    "reviews": [
      {
        "id": "rev-501",
        "author": "Mark L.",
        "rating": 5,
        "date": "2025-03-18",
        "comment": "This watch has revolutionized my workouts! GPS is incredibly accurate."
      },
      {
        "id": "rev-502",
        "author": "Sophia R.",
        "rating": 4,
        "date": "2025-03-05",
        "comment": "Great fitness features and battery life. The app could be more intuitive."
      }
    ],
    "variants": [
      {
        "id": "var-501",
        "name": "Black",
        "price": 149.99,
        "compareAtPrice": 179.99,
        "inStock": true
      },
      {
        "id": "var-502",
        "name": "Blue",
        "price": 149.99,
        "compareAtPrice": 179.99,
        "inStock": true
      },
      {
        "id": "var-503",
        "name": "Pink",
        "price": 149.99,
        "compareAtPrice": 179.99,
        "inStock": true
      }
    ],
    "specs": [
      {
        "name": "Display",
        "value": "1.3\" AMOLED touchscreen"
      },
      {
        "name": "Water Resistance",
        "value": "5 ATM (50m)"
      },
      {
        "name": "Battery Life",
        "value": "7 days typical use, 20 hours with GPS active"
      },
      {
        "name": "Compatibility",
        "value": "iOS 13+, Android 8.0+"
      }
    ]
  },
  {
    "id": "prod-12351",
    "name": "Organic Cotton Bedsheet Set",
    "title": "100% Organic Cotton Sheet Set - 400 Thread Count",
    "description": "Experience luxurious comfort with our 400 thread count organic cotton sheets. GOTS certified, these breathable sheets keep you cool in summer and warm in winter.",
    "imageUrl": "https://example.com/images/home/bedsheet-set-main.jpg",
    "price": 99.99,
    "discountPrice": 79.99,
    "rating": 4.8,
    "category": "Home",
    "subCategory": "Bedding",
    "brand": "EcoComfort",
    "colors": ["White", "Gray", "Sage", "Navy"],
    "sizes": ["Twin", "Full", "Queen", "King", "California King"],
    "tags": ["bedding", "sheets", "organic", "cotton", "sustainable"],
    "material": "100% GOTS Certified Organic Cotton",
    "inStock": true,
    "freeShipping": true,
    "newArrival": false,
    "bestSeller": true,
    "images": [
      {
        "id": "img-601",
        "url": "https://example.com/images/home/bedsheet-set-folded.jpg",
        "alt": "Bedsheet Set - Folded View"
      },
      {
        "id": "img-602",
        "url": "https://example.com/images/home/bedsheet-set-on-bed.jpg",
        "alt": "Bedsheet Set - On Bed"
      }
    ],
    "features": [
      "100% GOTS certified organic cotton",
      "400 thread count for luxurious softness",
      "Breathable fabric regulates temperature",
      "Deep pockets fit mattresses up to 18 inches",
      "Pre-washed for extra softness"
    ],
    "reviews": [
      {
        "id": "rev-601",
        "author": "Jennifer M.",
        "rating": 5,
        "date": "2025-03-14",
        "comment": "These sheets get softer with each wash. Best sheets I've ever owned!"
      },
      {
        "id": "rev-602",
        "author": "Brian K.",
        "rating": 5,
        "date": "2025-02-22",
        "comment": "Worth every penny. They keep me cool at night and feel luxurious."
      }
    ],
    "variants": [
      {
        "id": "var-601",
        "name": "Queen/White",
        "price": 99.99,
        "compareAtPrice": 129.99,
        "inStock": true
      },
      {
        "id": "var-602",
        "name": "King/Navy",
        "price": 119.99,
        "compareAtPrice": 149.99,
        "inStock": true
      },
      {
        "id": "var-603",
        "name": "Twin/Sage",
        "price": 79.99,
        "compareAtPrice": 99.99,
        "inStock": false
      }
    ],
    "specs": [
      {
        "name": "Set Includes",
        "value": "1 fitted sheet, 1 flat sheet, 2 pillowcases (1 for Twin)"
      },
      {
        "name": "Thread Count",
        "value": "400"
      },
      {
        "name": "Certifications",
        "value": "GOTS, OEKO-TEX Standard 100"
      }
    ]
  },
  {
    "id": "prod-12352",
    "name": "Professional DSLR Camera",
    "title": "24MP Professional DSLR Camera with 18-55mm Lens Kit",
    "description": "Capture stunning photos and videos with this professional-grade DSLR featuring a 24MP sensor, 4K video recording, 45-point autofocus system, and included 18-55mm versatile lens.",
    "imageUrl": "https://example.com/images/electronics/dslr-camera-main.jpg",
    "price": 899.99,
    "discountPrice": 799.99,
    "rating": 4.9,
    "category": "Electronics",
    "subCategory": "Cameras",
    "brand": "OptikPro",
    "colors": ["Black"],
    "sizes": [],
    "tags": ["camera", "photography", "DSLR", "4K video", "professional"],
    "material": "Polycarbonate body with metal components",
    "inStock": true,
    "freeShipping": true,
    "newArrival": false,
    "bestSeller": true,
    "images": [
      {
        "id": "img-701",
        "url": "https://example.com/images/electronics/dslr-camera-front.jpg",
        "alt": "DSLR Camera - Front View"
      },
      {
        "id": "img-702",
        "url": "https://example.com/images/electronics/dslr-camera-back.jpg",
        "alt": "DSLR Camera - Back View"
      }
    ],
    "features": [
      "24.2MP APS-C CMOS sensor for detailed images",
      "4K UHD video recording at 30fps",
      "45-point all cross-type autofocus system",
      "6.5 fps continuous shooting",
      "3.0\" vari-angle touchscreen LCD",
      "Built-in Wi-Fi and Bluetooth connectivity"
    ],
    "reviews": [
      {
        "id": "rev-701",
        "author": "Chris J.",
        "rating": 5,
        "date": "2025-03-20",
        "comment": "Incredible image quality and intuitive controls. Perfect for my photography business."
      },
      {
        "id": "rev-702",
        "author": "Maria T.",
        "rating": 5,
        "date": "2025-03-08",
        "comment": "Great camera for both beginners and advanced users. The kit lens is surprisingly good!"
      }
    ],
    "variants": [
      {
        "id": "var-701",
        "name": "Camera Body Only",
        "price": 699.99,
        "compareAtPrice": 799.99,
        "inStock": true
      },
      {
        "id": "var-702",
        "name": "Camera with 18-55mm Lens",
        "price": 899.99,
        "compareAtPrice": 999.99,
        "inStock": true
      },
      {
        "id": "var-703",
        "name": "Camera with 18-55mm & 55-250mm Lenses",
        "price": 1199.99,
        "compareAtPrice": 1399.99,
        "inStock": true
      }
    ],
    "specs": [
      {
        "name": "Sensor",
        "value": "24.2MP APS-C CMOS"
      },
      {
        "name": "ISO Range",
        "value": "100-25600 (expandable to 51200)"
      },
      {
        "name": "Shutter Speed",
        "value": "30-1/8000 sec"
      },
      {
        "name": "Storage",
        "value": "Dual SD card slots (UHS-II compatible)"
      }
    ]
  }
]

export default productData;