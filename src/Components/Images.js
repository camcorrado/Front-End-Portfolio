const images = [
  {
    image: "https://i.imgur.com/pGm6aGo.jpg",
    alt: "Cam posing with friends after marching the Princeton P-rade",
    description: "Friends & me after marching the Princeton P-rade",
  },
  {
    image: "https://i.imgur.com/T0b27u2.jpg",
    alt: "Cam posing with friends after marching DC Pride",
    description: "Friends & me after marching DC Pride",
  },
  {
    image: "https://i.imgur.com/yrXoeNJ.jpg",
    alt: "Cam posing with friends in a Polaroid at the beach",
    description: "Best friends at the beach",
  },
  {
    image: "https://i.imgur.com/soLCWGt.jpg",
    alt: "Cam on a boat in the Tyrrhenian Sea",
    description: "Sailing the Tyrrhenian Sea",
  },
  {
    image: "https://i.imgur.com/64vesOH.jpg",
    alt: "Cam & a friend in the waters of Capri",
    description: "Jumping into the freezing waters of Capri, Italy",
  },
  {
    image: "https://i.imgur.com/hLDIiw5.jpg",
    alt: "Cam posing with high school friends",
    description: "High school besties",
  },
  {
    image: "https://i.imgur.com/GevimOB.jpg",
    alt: "Cam cosplaying Renly Baratheon",
    description: "Cosplay of Renly Baratheon from Game of Thrones",
  },
  {
    image: "https://i.imgur.com/lE4YCZl.jpg",
    alt: "Cam & a friend posing with pasta dough",
    description: "Making pasta in Florence, Italy",
  },
  {
    image: "https://i.imgur.com/Fvay3BR.jpg",
    alt: "Marching Queens Pride",
    description: "Marching Queens Pride 2016",
  },
  {
    image: "https://i.imgur.com/w4dSEaK.jpg",
    alt: "Cam reading in a tent",
    description: "Reading at the camp ground",
  },
  {
    image: "https://i.imgur.com/NRCuGuZ.jpg",
    alt: "Cam & a friend eating ice cream on the National Mall",
    description: "Soft serve on the National Mall!",
  },
  {
    image: "https://i.imgur.com/DCiQ5Np.jpg",
    alt: "Cam dressed as Luigi from Luigi's Mansion",
    description: "Luigi's Mansion cosplay",
  },
  {
    image: "https://i.imgur.com/KJiK7JJ.jpg",
    alt: "Preparing to step off at the Equality March",
    description: "Preparing to step off at the Equality March",
  },
  {
    image: "https://i.imgur.com/3Ze5EYz.jpg",
    alt: "Cam posing with Mario & Luigi",
    description: "From left to right: Mario, Wario, & Luigi",
  },
  {
    image: "https://i.imgur.com/dIpxM0U.jpg",
    alt: "Cam & his old bike",
    description: "Biking the streets of Brooklyn",
  },
  {
    image: "https://i.imgur.com/FoNTIjK.jpg",
    alt: "Cam & friends posing by the lake at Turkey Swamp Park",
    description: "Posing by the lake at Turkey Swamp Park",
  },
  {
    image: "https://i.imgur.com/xMUm9yl.jpg",
    alt: "The LGBAC drum line",
    description: "The best drum line in the world",
  },
  {
    image: "https://i.imgur.com/n4p7ofq.jpg",
    alt: "Cam tuning his snare drum",
    description: "Drum tuning before step off",
  },
  {
    image: "https://i.imgur.com/XHl5hIN.jpg",
    alt: "Cam blowing bubbles in the woods",
    description: "Blowing bubbles in the woods",
  },
  {
    image: "https://i.imgur.com/B6JatMo.jpg",
    alt: "The LGBAC posing with banner on Fire Island",
    description: "The LGBAC at the Invasion of the Pines",
  },
  {
    image: "https://i.imgur.com/Sx5MYoP.jpg",
    alt: "Cam & friends posing fiercely with chiffon at the beach",
    description: "Bring chiffon to the beach! It will change your life",
  },
  {
    image: "https://i.imgur.com/EdMAtzS.jpg",
    alt: "The LGBAC marching NYC Heritage Pride",
    description: "Marching NYC Heritage Pride",
  },
  {
    image: "https://i.imgur.com/xPXLD4Y.jpg",
    alt: "Cam & friends in the ocean",
    description: "Swimming at Riis Beach",
  },
  {
    image: "https://i.imgur.com/JXE4Qw2.jpg",
    alt: "Waluigi & Koffing costumes",
    description: "*WAAAAAAAAH* *KOFFIIIING*",
  },
  {
    image: "https://i.imgur.com/X2MpOwP.jpg",
    alt: "Cam posing with friends after marching Providence Pride",
    description: "Celebrating post Providence, RI Pride",
  },
  {
    image: "https://i.imgur.com/HQWxUMq.jpg",
    alt: "Cam posing with the LGBAC at NYC City Hall",
    description: "Celebrating NY Marriage Equality",
  },
  {
    image: "https://i.imgur.com/ilnbD1Y.jpg",
    alt: "Cam & friends posing before NYC Heritage Pride",
    description: "The LGBAC at NYC Heritage Pride",
  },
  {
    image: "https://i.imgur.com/fXMLTPL.jpg",
    alt:
      "Miranda Sings, Avatar Aang, Demonic High Priestess Halloween costumes",
    description: "Miranda Sings, Avatar Aang, Demonic High Priestess",
  },
  {
    image: "https://i.imgur.com/cnvdnPb.jpg",
    alt: "Cam in a hammock in the woods",
    description: "Where I can usually be found",
  },
  {
    image: "https://i.imgur.com/b8bJOAU.jpg",
    alt: "A poofy cat staring at the camera",
    description: "*evil glare*",
  },
  {
    image: "https://i.imgur.com/tEK3O9j.jpg",
    alt: "A picture of Cam & crying siblings from 2010",
    description: "The best Mother's Day gift ever",
  },
  {
    image: "https://i.imgur.com/INGj152.jpg",
    alt: "Cam & friends on a boat by Capri",
    description: "Visiting the island of Capri, Italy",
  },
  {
    image: "https://i.imgur.com/YuKx9sN.jpg",
    alt: "Cam posing with family",
    description: "Family winter hike",
  },
  {
    image: "https://i.imgur.com/f32uKzr.jpg",
    alt: "Cam posing with friends on their way to the beach",
    description: "Just a couple of broads at Broad Channel",
  },
  {
    image: "https://i.imgur.com/iT7sIK1.jpg",
    alt: "Cam & friends posing in Halloween costumes",
    description: "Marching the NYC Halloween Parade",
  },

  {
    image: "https://i.imgur.com/ZBXc6mT.png",
    alt: "Cam & Catkeisha with a Lavender Echinacea bouquet",
    description: "Floral Harvest",
  },
  {
    image: "https://i.imgur.com/8MNr2Yj.png",
    alt: "Cam with the window refracting a witch ball onto his face",
    description: "In the Witch's Ball",
  },
  {
    image: "https://i.imgur.com/ThF51vF.png",
    alt: "Catkeisha lying on her back in the sun",
    description: "Bellykeisha",
  },
  {
    image: "https://i.imgur.com/6qFXE1M.png",
    alt: "Cam & friends posing in Minneapolis",
    description: "Meeting Internet friends IRL",
  },
  {
    image: "https://i.imgur.com/UvOuSiD.png",
    alt: "Cam & Catkeisha",
    description: "Chonk",
  },

  {
    image: "https://i.imgur.com/uWGhl8J.png",
    alt: "Cam teaching friends a new card game",
    description: "Teaching friends a new game",
  },
  {
    image: "https://i.imgur.com/7H65dwI.png",
    alt: "Cam in the pool with family",
    description: "Everyone enjoys the pool differently, I guess",
  },
  {
    image: "https://i.imgur.com/5Vz4wHe.png",
    alt: "Cam and friends at an orchard in Minnesota",
    description: "Minnesota Apple Orchard",
  },
  {
    image: "https://i.imgur.com/hU2rO3e.png",
    alt: "Cam and family at Coney Island",
    description: "Family day trip to Coney Island",
  },
  {
    image: "https://i.imgur.com/UO0sTN8.png",
    alt: "Cam and friends at the Fire Island Pines",
    description: "Late Summer at Fire Island Pines",
  },
  {
    image: "https://i.imgur.com/hsdw4wQ.png",
    alt: "Cam and his roommates posing",
    description: "Roommates AND best friends",
  },
  {
    image: "https://i.imgur.com/8oZr4HF.png",
    alt: "Praying Mantis in the garden",
    description: "A 'little' visitor in my garden",
  },
  {
    image: "https://i.imgur.com/3utfcde.png",
    alt: "Cam canoeing",
    description: "Canoeing at Turkey Swamp Park",
  },
  {
    image: "https://i.imgur.com/XnZopln.png",
    alt: "A Polaroid of Cam and friends",
    description: "A week at Fire Island Pines",
  },
];

export default images;
