import {
  PAGE_OF_LIST_TYPE,
  PAGE_OF_VCARD_TYPE,
  PAGE_OF_SCREENSHOTS_TYPE,
  PAGE_OF_IFRAME_TYPE,
  PAGE_OF_REDIRECT_TYPE,
  PAGE_OF_MOBILE_APP_TYPE,
  PLAY_STORE_TYPE,
  APP_STORE_TYPE
} from "../Constants";

const data = [
  {
    id: "232914",
    type: PAGE_OF_LIST_TYPE,
    number: 48,
    qrcode: "https://i.imgur.com/VzelQTm.png",
    title: "Équipement à amener en stage de garde",

    items: [
      {
        name: "parapluie",
        link:
          "https://www.essenceyelle.fr/parapluies/55-parapluie-pliant-noir-morgan-.html",
        description: "un simple parapluie qui fait le boulot",
        mainImage:
          "https://www.essenceyelle.fr/144-large_default/parapluie-pliant-noir-morgan-.jpg",
        price: 29.99
      },
      {
        name: "pantalon de pluie ciré",
        link: "https://www.oxwork.com/pantalon-de-cire-voss-helly-hansen.html",
        description: "un pantalon de pluie ciré",
        mainImage:
          "https://aposxgmjnq.cloudimg.io/catalog/product/cache/821a6a6f43bc609a8cb70f298fd59551/7/0/70480_590.jpg?w=700&org_if_sml=1",
        price: 35.28
      },
      {
        name: "bonnet",
        link:
          "https://www.gemo.fr/produit/bonnets-homme-en-maille-lot-de-2-/GEMO_727079",
        description: "2 bonnets en maille",
        mainImage:
          "https://gemo-gemo-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/1534/1848/eefe7c2d4452ff452594c7f09cb5fbf4d161bd4b_ATG03500_40575900007_1.jpeg",
        price: 9.99
      },
      {
        name: "bottes",
        link:
          "https://www.gammvert.fr/2-1360-outils-de-jardinage/2-5042-equipement-du-jardinier/3-4035-bottes-et-sabots/p-42768-bottes-optimum-marron-taille-46-rouchette#ref=4035-3",
        description: "des bottes de pluie",
        mainImage:
          "https://photos.gammvert.fr/v5/products/full/42768-bottes-optimum-marron-taille-46-rouchette-2.jpg",
        price: 38.9
      },
      {
        name: "chaussures de chasses",
        link:
          "https://www.decathlon.fr/p/chaussures-chasse-impermeables-kaki-crosshunt-300/_/R-p-10102",
        description: "pas besoin de parre-pierre mais une bonne imperméabilité",
        mainImage:
          "https://contents.mediadecathlon.com/p1136448/k$8eceb035276fad338957793242ff2016/sq/chaussures-chasse-impermeables-kaki-crosshunt-300.jpg?format=auto&f=969x969",
        price: 70
      },
      {
        name: "chaussettes",
        link:
          "https://www.decathlon.fr/p/chaussettes-de-tennis-hautes-artengo-rs-500-lot-de-3/_/R-p-2451?mc=8379841",
        description:
          "des chaussettes de base, au moins 5 lots de 3 chaussettes",
        mainImage:
          "https://contents.mediadecathlon.com/p2204959/k$29226df9d95a3e275888c411782b047c/sq/chaussettes-de-tennis-hautes-artengo-rs-500-noir-lot-de-3.jpg?format=auto&f=969x969",
        price: 7 * 5
      },
      {
        name: "coupe onglons",
        link: "https://felco.com/fr_lu/produits/felco-50",
        description:
          "Beaucoup de piétins, on ira plus vite avec 1 coupe onglons chacun",
        mainImage:
          "https://felco.com/media/catalog/product/cache/e100a6e8fddc573ac2faa940bc69d1b9/f/e/felco-50_1.png",
        price: 70
      },
      {
        name: "casquette",
        link:
          "https://www.decathlon.fr/p/casquette-de-baseball-profil-bas-adulte-ba550/_/R-p-179953?mc=8407058",
        description: "une casquette",
        mainImage:
          "https://contents.mediadecathlon.com/p1319276/k$69d4afee4c559624714c45bc65f120e1/sq/casquette-de-baseball-profil-bas-adulte-ba550-noir.jpg?format=auto&f=969x969",
        price: 8
      },
      {
        name: "jeans",
        link:
          "https://www.gemo.fr/produit/jean-homme-coupe-skinny-delave-/GEMO_744369",
        description:
          "au moins 4 jeans, 3 pour les brebis et 1 pour la civilisation",
        mainImage:
          "https://gemo-gemo-fr-storage.omn.proximis.com/Imagestorage/imagesSynchro/1534/1848/173b948d751b44c34963438cd61b0932f1730e33_ATG03500_40176100177_1.jpeg",
        price: 22.99 * 4
      },
      {
        name: "chaussures de civilisation",
        link:
          "https://www.decathlon.fr/p/chaussures-impermeables-de-randonnee-nh150-wp-homme/_/R-p-302371?mc=8504220",
        description:
          "pour éviter que le caissier du supermarché ramasse de la bouse de brebis à chacuns de nos passages",
        mainImage:
          "https://contents.mediadecathlon.com/p1546863/k$2139a4952c994b6031a5f50c8820f8f9/sq/chaussures-impermeables-de-randonnee-nh150-wp-homme.jpg?format=auto&f=969x969",
        price: 30
      },
      {
        name: "couteau à piétin",
        link: "https://www.opinel.com/couteaux-poche/inox/n7-inox",
        description: "Lorsque le coupe-onglons ne passe pas",
        mainImage:
          "https://cdn.opinel.com/sites/default/files/styles/product_large/public/produit/boutique/7inox.jpg?itok=DbAFkIIw",
        price: 10
      },
      {
        name: "couteau à saucisson",
        link: "https://www.opinel.com/couteaux-poche/inox/n8-inox",
        description: "Pour la pause pastorale",
        mainImage:
          "https://cdn.opinel.com/sites/default/files/styles/product_large/public/produit/boutique/8inox.jpg?itok=pc1u9-RU",
        price: 10.2
      },
      {
        name: "sac a dos",
        link:
          "https://www.amazon.fr/NEEKFOX-Compact-Randonn%C3%A9e-Camping-Ultra-l%C3%A9ger/dp/B074BNMVTD/ref=sr_1_1?keywords=neekfox+sac+a+dos&qid=1648910703&sprefix=neekfox%2Caps%2C116&sr=8-1",
        description: "Pour porter les affaires sur les quartiers",
        mainImage:
          "https://m.media-amazon.com/images/I/81XpN7l3lEL._AC_SY879_.jpg",
        price: 26.99
      },
      {
        name: "gants de ski",
        link:
          "https://www.decathlon.fr/p/gants-de-ski-adulte-100-noirs/_/R-p-310563?mc=8562916&c=NOIR",
        description: "Mains au chaud lors de gardes pluvieuses",
        mainImage:
          "https://contents.mediadecathlon.com/p1861343/k$ab193f07de76ae2db619604120cafe98/sq/gants-de-ski-adulte-100-noirs.jpg?format=auto&f=969x969",
        price: 13
      },
      {
        name: "sac a dos 70l",
        link:
          "https://www.decathlon.fr/p/sac-a-dos-de-voyage-50l-forclaz-50/_/R-p-6561?mc=8735043",
        description: "Sac à dos pour les grosses affaires",
        mainImage:
          "https://contents.mediadecathlon.com/p2237844/k$14f1b978eb402063c641e186daf92f36/sq/sac-a-dos-de-voyage-50l-forclaz-50.jpg?format=auto&f=969x969",
        price: 40
      }
    ]
  },
  {
    id: "848167",
    type: PAGE_OF_REDIRECT_TYPE,
    qrcode: "https://i.imgur.com/FFxVdsE.png",
    redirectTo:
      "https://fr.mappy.com/itineraire#/pieton/Le%20Bec%20d'Allier%2C%2018150%20Cuffy/Lev%C3%A9e%20du%20Poids%20de%20Fer%2C%2018320%20Jouet-sur-l'Aubois/walk/1",
    title: "Transhumance du troupeau du Bec d’Allier à Marseilles-lès-Aubigny",
    number: 51
  },
  {
    id: "327073",
    type: PAGE_OF_REDIRECT_TYPE,
    title: "Suite de la transhumance jusqu’à Marseilles-lès-Aubigny",
    number: 52,
    qrcode: "https://i.imgur.com/lHhT0Nt.png",
    redirectTo:
      "https://fr.mappy.com/itineraire#/pieton/Cuffy%2018150/Lev%C3%A9e%20du%20Poids%20de%20Fer%2C%2018320%20Jouet-sur-l'Aubois/walk/8"
  },
  {
    id: "327074",
    number: 55,
    type: PAGE_OF_REDIRECT_TYPE,
    title: "Site WWF ’Panda fluvial’",
    qrcode: "https://i.imgur.com/WqKUrYu.png",
    redirectTo: "https://www.via-allier.com/sites-touristiques/le-bec-dallier/"
  },
  {
    id: "327072",
    type: PAGE_OF_VCARD_TYPE,
    number: 49,
    qrcode: "https://i.imgur.com/buU1svM.png",
    title: "Février sans supermarché - PACA",
    card: {
      title:
        "Opération collective ’Février sans supermarché’ pour changer nos modes de consommation",
      address: "",
      tel: [],
      websites: [
        {
          label: "site principal",
          url: "https://www.facebook.com/groups/2038176666199940/"
        },
        {
          label: "article de presse",
          url:
            "https://www.ecoconso.be/fr/content/fevrier-sans-supermarche-remet-le-couvert"
        }
      ]
    }
  },
  {
    id: "232915",
    type: PAGE_OF_LIST_TYPE,
    number: 75,
    qrcode: "https://i.imgur.com/eppZ5ms.png",
    title: "Boite de SURIMI",
    items: [
      {
        name: "scalpels",
        link:
          "https://www.mediprostore.com/bistouri-a-usage-unique-sterile.html",
        description: "Pour autopsie",
        mainImage:
          "https://www.mediprostore.com/media/catalog/product/cache/1/image/460x440/9df78eab33525d08d6e5fb8d27136e95/b/i/bistouris-scalpel-usage-unique-sterile_1.jpg",
        price: 3.9
      },
      {
        name: "baume du Hibou",
        link:
          "https://www.cosmebio.org/fr/nos-produits/les-baumes-du-hibou/baume-du-hibou-hiver-tranquille-18170/",
        description: "des huiles essentielles, qui remplace du respirot",
        mainImage:
          "https://media.cosmebio.org/adherents/46/produit-11027-baume-du-hibou-hiver-tranquille.jpg.400x400_q85_background-%23ffffff.jpg",
        price: 7.99
      },
      {
        name: "seringue buccale à usage unique",
        link:
          "https://zoosante.fr/bovins/materiel-bovin/seringues-bovins/seringue-a-usage-unique-embout-conique-sans-aiguille/",
        description: "En général pour les parasites",
        mainImage:
          "https://zoosante.fr/wp-content/uploads/2020/10/SERINGUE-5-ML-LUER-LOCK-3-PIECES-TERUMO-BOITE-DE-100-UNITES.jpg",
        price: 0.6
      },
      {
        name: "boite de surimi",
        link:
          "https://www.carrefour.fr/p/surimi-moelleux-fleury-michon-3302745733029",
        description:
          "Pleine, il faut la manger. Attention, contient des déchets de poissons",
        mainImage:
          "https://media.carrefour.fr/medias/4570b75e6817357691fe8891f59b0dad/p_540x540/03302745733029-a3r1-s02.jpg",
        price: 3.97
      },
      {
        name: "seringue intra-musculaire",
        link:
          "https://www.vital-concept-agriculture.com/seringues-jetables-3-pieces.html",
        description: "Pour la plupart des injections",
        mainImage:
          "https://www.vital-concept-agriculture.com/media/catalog/product/cache/d23d1d7d81c2a595c038dc538b351809/h/e/heritage_decl-01281-seringuesnouvelles_copie_128.jpg",
        price: 9.84
      },
      {
        name: "aiguilles",
        link:
          "https://www.vital-concept-agriculture.com/aiguilles-steriles-a-usage-unique.html",
        description: "Pour les intramusculaires",
        mainImage:
          "https://www.vital-concept-agriculture.com/media/catalog/product/cache/d23d1d7d81c2a595c038dc538b351809/3/0/30000925-121273_4.jpg",
        price: 3.66
      },
      {
        name: "bande de crêpes",
        link:
          "https://www.medisafe.fr/soins/bandes/crepes/bande-de-crepe-4m-x-5-cm.html",
        description: "Pour les premiers secours",
        mainImage:
          "https://www.materielmedical.fr/2106-large_default/A-10025186-bandes-de-velpeau-crepe-hopital-boite-de-10-ou-de-20.webp",
        price: 0.4
      },
      {
        name: "pansement",
        link:
          "https://www.pharma-gdd.com/fr/elastoplast-universal-10-pansements",
        description: "Pour les premiers secours",
        mainImage:
          "https://www.pharmarket.com/media/fr_FR22722783/f280xf280/elastoplast-pansement-flexible-10-bandes-10cmx6cm-f280-f280.jpg",
        price: 2.82
      }
    ]
  },
  {
    type: PAGE_OF_VCARD_TYPE,
    number: 77,
    id: "340256",
    title: "Restaurant Le Jupiter",
    qrcode: "https://i.imgur.com/KmDYz7j.png",
    card: {
      title: "Restaurant rapide sur place ou à emporter ’Le Jupiter’",
      address: "60 Rue Henri Barbusse, 18150 La Guerche-sur-l'Aubois",
      tel: ["0248749277"],
      websites: [
        { label: "facebook", url: "https://m.facebook.com/LeJupiter58/" }
      ]
    }
  },
  {
    type: PAGE_OF_REDIRECT_TYPE,
    id: "340257",
    title: "Marine ligéene",
    qrcode: "https://i.imgur.com/ealSei6.png",
    number: 81,
    redirectTo:
      "https://www.orleans-metropole.fr/festival-de-loire/presentation"
  },
  {
    type: PAGE_OF_MOBILE_APP_TYPE,
    id: "340258",
    title: "Meteored, application météo mobile",
    qrcode: "https://i.imgur.com/niWgGLs.png",
    number: 93,
    links: [
      {
        type: PLAY_STORE_TYPE,
        label: "Télécharger pour Android",
        url:
          "https://play.google.com/store/apps/details?id=aplicacion.tiempo&hl=fr&gl=US"
      },
      {
        type: APP_STORE_TYPE,
        label: "Télécharger pour IPhone",
        url: "https://apps.apple.com/fr/app/tiempo-com/id543364901"
      }
    ]
  },
  {
    type: PAGE_OF_REDIRECT_TYPE,
    id: "340259",
    number: 93,
    title: "Vigicrues, site de surveillance des crues",
    qrcode: "https://i.imgur.com/IzO7nUa.png",
    redirectTo: "https://www.vigicrues.gouv.fr/niv2-bassin.php?CdEntVigiCru=10"
  },
  {
    type: PAGE_OF_REDIRECT_TYPE,
    id: "340260",
    number: 92,
    title: "Les Bad Guys, film de 2022",
    qrcode: "https://i.imgur.com/aSxaQC5.png",
    redirectTo: "https://www.allocine.fr/film/fichefilm_gen_cfilm=263272.html"
  },
  {
    id: "340261",
    type: PAGE_OF_VCARD_TYPE,
    number: 92,
    title: "Restaurant Saveurs Gourmandes",
    qrcode: "https://i.imgur.com/oriq0En.png",
    card: {
      title: "Buffet, Asiatique, Japonais",
      address: "100 Rue Henri Bouquillard, 58640 VARENNES-VAUZELLES",
      tel: ["0386239656"],
      websites: [
        {
          url:
            "https://www.tripadvisor.fr/Restaurant_Review-g196542-d7702413-Reviews-Saveurs_Gourmandes-Nevers_Nievre_Bourgogne_Franche_Comte.html",
          label: "tripadvisor"
        }
      ]
    }
  },
  {
    id: "340255",
    type: PAGE_OF_VCARD_TYPE,
    number: 59,
    title: "Restaurant Saveurs d’Orient",
    qrcode: "https://i.imgur.com/1JU7ZFW.png",
    card: {
      title: "Restaurant, Bar, Kebab ’Saveurs d’Orient’",
      address: "4 bis, rue du 14 juillet 58000 NEVERS",
      tel: ["0386374756"],
      websites: [
        {
          url: "https://saveurs-dorient.fr/index.html",
          label: "site principal"
        },
        {
          url:
            "https://www.tripadvisor.fr/Restaurant_Review-g196542-d8567401-Reviews-Saveurs_D_orient-Nevers_Nievre_Bourgogne_Franche_Comte.html",
          label: "tripadvisor"
        }
      ]
    }
  },
  {
    id: "065838",
    type: PAGE_OF_VCARD_TYPE,
    number: 57,
    title: "Le Nœud vert",
    qrcode: "https://i.imgur.com/ICYVh04.png",
    card: {
      title: "Fabrication de vêtements ’Le Noeud Vert’",
      address: "31 bis, rue de la Préfecture 58000 NEVERS",
      tel: ["0762357978"],
      websites: [
        { url: "https://lenoeudvert.com/", label: "site principal" },
        { url: "https://www.facebook.com/lenoeudvert/", label: "facebook" }
      ]
    }
  },
  {
    id: "363070",
    type: PAGE_OF_SCREENSHOTS_TYPE,
    number: 90,
    title: "Ou est Charlie (suite & fin)",
    qrcode: "https://i.imgur.com/FXKf16f.png",
    images: [
      "https://i.imgur.com/LALgkDQ.jpeg",
      "https://i.imgur.com/mc30OFK.jpeg",
      "https://i.imgur.com/3ksgZgq.jpeg"
    ],
    sources: [
      {
        label: "post facebook original",
        url:
          "https://m.facebook.com/story.php?story_fbid=1873232312875452&id=100005661033092"
      },
      {
        label: "imgur",
        url: "https://imgur.com/a/uTGox17"
      }
    ]
  }
];
export default data;
