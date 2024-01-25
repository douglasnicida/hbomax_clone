/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        featured: "linear-gradient(90deg, #000000 30%, #00000000 40%)",
        maverick: "url('https://s2-techtudo.glbimg.com/Azg3GDuzrDvDPWFGXUU_HFwDl48=/0x0:1712x1054/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/v/d/igpA1vTVC6qIq8FdAcIA/topgun.jpg')",
        bgMovies: "url(https://hbomax-images.warnermediacdn.com/2022-06/plans_background.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com)",
        miles: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVl7cH669XKWmsfh1cj2Yc7wwlf5HUJlajSb5a_6Mf2rfq4Zb0VBxyvXWq&s=10)",
        gwen: "url(data:image/jpeg;base64,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)",
        peter: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW7rTEGx2EchwVEmEBVnPOu7EWZ4HHGtLIto79Tz2AwenAuy69xZbH_qVg&s=10)",
        spidermanMovie: "url(https://assets.papelpop.com/wp-content/uploads/2023/04/aranhaverso.jpg)",
        demonslayerMovie: "url(https://a.storyblok.com/f/178900/1920x1023/2435d44804/demon-slayer_-kimetsu-no-yaiba-to-the-hashira-training.png)",
        tanjiro: "url(https://images.mubicdn.net/images/cast_member/631580/cache-558501-1592720894/image-w856.jpg?size=800x)",
        nezuko: "url(https://images.mubicdn.net/images/cast_member/673079/cache-641696-1612491928/image-w856.jpg)",
        inosuke: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhoJHypuIHYOBT6MVwBfgFQuG8mOrG0IUAZvvMaadzq4VQvzbIaltFpJCZ55ZMODyYNGI)",

        box11: "url(https://hbomax-images.warnermediacdn.com/2022-10/hbo-default_0.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com)",
        box12: "url(https://hbomax-images.warnermediacdn.com/2022-10/hbo-hover_0.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com)",
        box21: "url(https://hbomax-images.warnermediacdn.com/2022-10/MAX-Default.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com)",
        box22: "url(https://hbomax-images.warnermediacdn.com/2022-10/MAX-Hover.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com)",
        box31: "url(https://hbomax-images.warnermediacdn.com/2022-10/DC_Default.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com)",
        box32: "url(https://hbomax-images.warnermediacdn.com/2022-10/DC-Hover.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com)",
        box41: "url(https://hbomax-images.warnermediacdn.com/2022-10/WB-Default.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com)",
        box42: "url(https://hbomax-images.warnermediacdn.com/2022-10/WB-Hover.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com)",
        box51: "url(https://hbomax-images.warnermediacdn.com/2022-10/CN-Default.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com)",
        box52: "url(https://hbomax-images.warnermediacdn.com/2022-10/CN-Hover.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com)",
        box61: "url(https://hbomax-images.warnermediacdn.com/2023-08/static-bpo.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com)",
        box62: "url(https://hbomax-images.warnermediacdn.com/2023-08/ucl-hubs-br.jpg?host=wme-hbomax-drupal-prod.s3.amazonaws.com)",
      }
    },
    colors: {
      darkBlue: "#030328",
      myPurple: "#B535F6",
      stdGray: "#353535",
      black: "#000000",
      white: "#FFFFFF",
      bgHeader: "rgba(0,0,0,.3)",
      transparent: "transparent",
      lightGray: "#D3D3D3",
      lightPurple: "#c759ff",
      saturatedPurple: "#A020F0",
      bottomCard: "rgba(0,0,0,.05)",
      spiderRed: "#fa4646",
      demonslayerGreen: "#46b077"
    }
  },
  plugins: [],
}

