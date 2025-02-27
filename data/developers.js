const developerData = [
  {
    id: 1,
    name: "Emaar Properties",
    slug: "emaar-properties",
    description:
      "Emaar Properties is one of the UAE's most iconic real estate developers, responsible for transforming Dubai's skyline with groundbreaking projects like the Burj Khalifa (the world's tallest building) and The Dubai Mall (one of the world's largest shopping destinations). Founded by Mohamed Alabbar, Emaar has expanded its portfolio to include master-planned communities, retail, hospitality, and entertainment ventures across the Middle East, North Africa, Asia, Europe, and North America. Their developments are known for luxury, innovation, and creating integrated lifestyle experiences.",
    img: "/dev/emaar.jpg",
    foundingYear: 1997,
    mainOffice: "Dubai, UAE",
  },
  {
    id: 2,
    name: "Damac Properties",
    slug: "damac-properties",
    description:
      "Damac Properties, founded by Hussain Sajwani, has established itself as a premium luxury developer with an impressive portfolio of residential, commercial, and leisure properties throughout the Middle East and beyond. Known for collaborations with prestigious brands like Versace, Fendi, and Trump, Damac creates distinctive, high-end living experiences. Their developments include luxury apartments, villas, and townhouses in prime locations, often featuring world-class amenities and innovative designs. Damac has delivered over 42,000 homes and has a development portfolio of more than 28,000 units at various stages of progress.",
    img: "/dev/damac.jpg",
    foundingYear: 2002,
    mainOffice: "Dubai, UAE",
  },
  {
    id: 3,
    name: "Aldar Properties",
    slug: "aldar-properties",
    description:
      "Aldar Properties is Abu Dhabi's leading real estate developer, playing a pivotal role in the emirate's development strategy. The company has created some of Abu Dhabi's most iconic destinations, including Yas Island (home to Ferrari World and Warner Bros. World), Al Raha Beach, and Saadiyat Island's cultural district. With a focus on creating vibrant communities, Aldar's diverse portfolio encompasses residential, commercial, retail, hospitality, education, and infrastructure projects. The company prioritizes sustainability and innovation while contributing significantly to Abu Dhabi's economic diversification and urban development goals.",
    img: "/dev/aldar.jpg",
    foundingYear: 2005,
    mainOffice: "Abu Dhabi, UAE",
  },
  {
    id: 4,
    name: "Meraas",
    slug: "meraas-holding",
    description:
      "Meraas is a Dubai-based holding company that has redefined the city's urban landscape through innovative, experience-driven developments. Established by Sheikh Mohammed bin Rashid Al Maktoum, Meraas has created distinctive destinations that blend residential, retail, hospitality, and entertainment elements. Their portfolio includes popular attractions like City Walk, Bluewaters Island (home to Ain Dubai, the world's largest observation wheel), La Mer beachfront, and Dubai Harbour. Meraas focuses on creating unique lifestyle experiences that appeal to residents and tourists alike, contributing significantly to Dubai's position as a global tourist destination and an attractive place to live.",
    img: "/dev/meraas.jpg",
    source: "https://en.wikipedia.org/wiki/Meraas",
    foundingYear: 2007,
    mainOffice: "Dubai, UAE",
  },
  {
    id: 5,
    name: "Nakheel Properties",
    slug: "nakheel-properties",
    description:
      "Nakheel Properties is renowned for transforming Dubai's coastline with ambitious, palm-shaped artificial islands that have become global symbols of engineering prowess. Their flagship development, Palm Jumeirah, houses luxury residences, five-star hotels, and leisure facilities. Nakheel's portfolio also includes The World Islands, an archipelago of islands forming a world map, and other large-scale developments like Jumeirah Park, Discovery Gardens, and Dragon City. As a government-owned developer, Nakheel has played a crucial role in establishing Dubai as a premier global real estate destination, focusing on creating communities with comprehensive amenities and infrastructure.",
    img: "/dev/nakheel.jpg",
    source: "https://en.wikipedia.org/wiki/Nakheel_Properties",
    foundingYear: 2000,
    mainOffice: "Dubai, UAE",
  },
  {
    id: 6,
    name: "Omniyat",
    slug: "omniyat-group",
    description:
      "Omniyat is a visionary luxury developer known for creating architectural masterpieces that push the boundaries of design and innovation in Dubai. Founded by Mahdi Amjad, the company focuses on ultra-luxury residential, hospitality, and commercial projects that emphasize artistic expression and exclusivity. Notable projects include One Palm (an exclusive residential development on Palm Jumeirah), The Opus (designed by the late Zaha Hadid), and The Sterling (twin art deco-inspired towers). Omniyat collaborates with world-renowned architects, designers, and hospitality brands to create unique living experiences that appeal to discerning global investors and residents seeking sophisticated urban lifestyles.",
    img: "/dev/omniyaat.jpg",
    foundingYear: 2005,
    mainOffice: "Dubai, UAE",
  },
  {
    id: 7,
    name: "Dubai Holding",
    slug: "dubai-holding",
    description:
      "Dubai Holding is a diversified global investment company with a presence in over 13 countries, operating at the heart of the emirate's economic diversification strategy. Established by Sheikh Mohammed bin Rashid Al Maktoum, the company manages a vast portfolio spanning real estate, hospitality, telecommunications, investments, and entertainment. Its real estate arm has developed iconic destinations including Jumeirah Beach Residence (JBR), Dubai Internet City, Dubai Media City, and Madinat Jumeirah. Through subsidiaries like Dubai Properties and Jumeirah Group, Dubai Holding has created world-class destinations and experiences while driving innovation across multiple sectors and contributing substantially to Dubai's economic growth.",
    img: "/dev/dubaiholding.jpg",
    foundingYear: 2004,
    mainOffice: "Dubai, UAE",
  },
  {
    id: 8,
    name: "Danube Properties",
    slug: "danube-properties",
    description:
      "Danube Properties, the real estate arm of Danube Group, has established itself as a pioneer in affordable luxury housing in Dubai. Founded by Rizwan Sajan, the developer has revolutionized the market with its innovative payment plans, including the popular 1% monthly payment scheme, making homeownership accessible to middle-income residents. Despite its affordable pricing strategy, Danube Properties maintains high standards of quality, incorporating smart home features, energy-efficient designs, and comprehensive amenities in its developments. Projects like Dreamz, Glitz, Starz, and Miraclz have gained popularity for delivering excellent value while adhering to timely construction schedules and quality benchmarks.",
    img: "/dev/danube.jpeg",
    foundingYear: 2014,
    mainOffice: "Dubai, UAE",
  },
  {
    id: 9,
    name: "Sobha Realty",
    slug: "sobha-realty",
    description:
      "Sobha Realty is an international luxury developer that brings over four decades of expertise from its Indian parent company, Sobha Limited, to the UAE market. Founded by PNC Menon, Sobha is distinguished by its unique backward integration model, maintaining in-house capabilities for design, engineering, construction, and even manufacturing of key components. This approach ensures exceptional quality control and craftsmanship across all projects. Their flagship development, Sobha Hartland, is a premium freehold community in Dubai's Mohammed Bin Rashid City, offering luxurious villas, townhouses, and apartments amidst lush greenery. Sobha's developments emphasize sustainability, thoughtful design, and creating harmonious living environments that stand the test of time.",
    img: "/dev/soba.jpg",
    foundingYear: 2003,
    mainOffice: "Dubai, UAE",
  },
  {
    id: 10,
    name: "Select Group",
    slug: "select-group",
    description:
      "Select Group has established itself as a leading real estate development and investment firm in the UAE, particularly known for its significant presence in Dubai Marina. Founded by Rahail Aslam, the multidisciplinary company has delivered over 7,000 homes with a development value exceeding $4 billion. Select Group's portfolio includes premium residential towers, commercial properties, and hospitality assets, with notable projects like Marina Gate, No.9, and Jumeirah Living Marina Gate (in partnership with Jumeirah Group). The developer is recognized for selecting prime waterfront locations, partnering with renowned architects and interior designers, and creating buildings that combine striking aesthetics with functional design and high-quality finishes.",
    img: "/dev/select.jpg",
    foundingYear: 2002,
    mainOffice: "Dubai, UAE",
  },
  {
    id: 11,
    name: "Samana Developers",
    slug: "samana-developers",
    description:
      "Samana Developers has rapidly established itself in Dubai's competitive real estate market by focusing on boutique luxury residential projects with distinctive designs and investor-friendly payment plans. Founded by Imran Farooq, the company specializes in creating resort-style living experiences with extensive wellness amenities, including private pools, landscaped terraces, and advanced fitness facilities. Samana's developments, predominantly located in emerging areas like Arjan, Dubai Studio City, and Jumeirah Village Circle, offer attractive ROI potential and are designed with both end-users and investors in mind. The developer is known for its commitment to timely delivery, sustainable building practices, and creating residences that prioritize health and wellbeing.",
    img: "/dev/samana.jpg",
    foundingYear: 2016,
    mainOffice: "Dubai, UAE",
  },
  {
    id: 12,
    name: "Binghatti Developers",
    slug: "binghatti-developers",
    description:
      "Binghatti Developers has made a distinctive mark on Dubai's skyline with its instantly recognizable architectural identity featuring geometric patterns and vibrant facades inspired by Middle Eastern art and culture. Founded by Muhammad BinGhatti, the company has delivered over 5,000 units across more than 40 projects in a remarkably short timeframe, earning a reputation for rapid construction and delivery. Binghatti focuses primarily on affordable and mid-market residential properties in strategic locations like Business Bay, Dubai Silicon Oasis, and Jumeirah Village Circle. Their developments feature contemporary designs, smart home technology, and efficient use of space, appealing to young professionals and first-time buyers seeking modern urban living at accessible price points.",
    img: "/dev/binghati.jpg",
    source: "https://en.wikipedia.org/wiki/Binghatti_Properties",
    foundingYear: 2008,
    mainOffice: "Dubai, UAE",
  },
  {
    id: 13,
    name: "Azizi Developments",
    slug: "azizi-developments",
    description:
      "Azizi Developments, part of the Azizi Group established by Mirwais Azizi, has grown into one of Dubai's most prolific developers with an extensive portfolio spanning affordable luxury to ultra-premium properties. The company has made significant investments in emerging communities like Al Furjan, Dubai Healthcare City, and most notably Meydan, where its flagship project Azizi Riviera creates a French Mediterranean-inspired waterfront community. With over 100 projects completed or under development, Azizi is known for its ambitious construction timelines, competitive pricing, and creating residences with comprehensive amenities. The developer places strong emphasis on strategic locations with growth potential, often investing in areas ahead of market trends and contributing to neighborhood development.",
    img: "/dev/azizi.jpg",
    foundingYear: 2007,
    mainOffice: "Dubai, UAE",
  },
  {
    id: 14,
    name: "Citi Developers",
    slug: "citi-developers",
    description:
      "Citi Developers has carved out a niche in Dubai's real estate market by focusing on boutique residential projects in established and emerging neighborhoods. The company specializes in creating modern, functional living spaces that emphasize quality finishes, space efficiency, and contemporary design. Their developments typically feature mid-rise buildings with thoughtfully designed apartments offering competitive price points for both end-users and investors. Citi Developers places strong emphasis on selecting locations with strong rental yield potential and appreciation prospects, typically choosing areas with good infrastructure and connectivity. Their projects incorporate sustainability features, smart home technology, and lifestyle amenities tailored to young professionals and small families looking for comfortable urban living.",
    img: "/dev/citi.jpeg",
    foundingYear: 2013,
    mainOffice: "Dubai, UAE",
  },
  {
    id: 15,
    name: "Arada",
    slug: "arada-developments",
    description:
      "Arada, founded as a joint venture between KBW Investments and Basma Group, has quickly established itself as an influential developer in Sharjah and more recently in Dubai. The company is best known for its record-breaking master developments in Sharjah, including Aljada (a 24 million square foot mixed-use destination) and Nasma Residences. Led by Prince Khaled bin Alwaleed bin Talal, Arada focuses on creating comprehensive, carefully planned communities that offer excellent value while raising the bar for design and amenities in emerging markets. The developer emphasizes creating family-friendly environments with extensive green spaces, educational facilities, and retail options. Arada's expansion into Dubai signals its ambition to become a major player throughout the UAE real estate landscape.",
    img: "/dev/arada.jpg",
    source: "https://en.wikipedia.org/wiki/Arada_(company)",
    foundingYear: 2017,
    mainOffice: "Sharjah, UAE",
  },
  {
    id: 16,
    name: "Al Habtoor Group",
    slug: "al-habtoor-group",
    description:
      "Al Habtoor Group is one of the UAE's most established conglomerates with a diverse portfolio spanning real estate, hospitality, automotive, education, and publishing sectors. Founded by Khalaf Ahmad Al Habtoor, the group's real estate division has created landmark developments including the Al Habtoor City complex along Dubai Water Canal (featuring three luxury hotels and three residential towers), Metropolitan Hotel, and Al Habtoor Polo Resort & Club. The company is known for developing integrated, large-scale projects that combine residential, hospitality, and leisure elements. With a history dating back to the 1970s, Al Habtoor Group has played a significant role in Dubai's transformation and continues to invest in iconic developments that shape the city's landscape.",
    img: "/dev/alhabtoor.jpg",
    foundingYear: 1970,
    mainOffice: "Dubai, UAE",
  },
  {
    id: 17,
    name: "Al Barari",
    slug: "al-barari",
    description:
      "Al Barari stands as Dubai's premier eco-conscious luxury developer, creating a unique botanical haven in the desert landscape. Founded by the Zaal family, this boutique developer has created a lush, sustainability-focused community featuring 80% green space, including themed gardens, freshwater streams, and indigenous plants. The development includes exclusive villa collections (The Residences, The Reserve, and The Nest), luxury apartments (Ashjar and Seventh Heaven), and the region's first dedicated wellness resort, Heart & Soul. Al Barari emphasizes environmental responsibility throughout its operations, incorporating advanced water recycling systems, energy-efficient designs, and sustainable construction methods. The development appeals to affluent residents seeking privacy, natural surroundings, and a commitment to sustainable luxury.",
    img: "/dev/albarari.jpg",
    foundingYear: 2005,
    mainOffice: "Dubai, UAE",
  },
  {
    id: 18,
    name: "Aqua Properties",
    slug: "aqua-properties",
    description:
      "Aqua Properties has evolved from a real estate brokerage into a comprehensive property company offering development, sales, leasing, and property management services across the UAE. The company's development portfolio includes residential and commercial projects in locations such as Jumeirah Village Circle, Dubai Sports City, and Business Bay. Aqua Properties focuses on creating value-driven real estate with competitive pricing strategies while maintaining quality construction and desirable amenities. Their developments typically feature contemporary architecture, efficient layouts, and community-oriented facilities. As a full-service real estate company, Aqua leverages its market knowledge and customer insights to develop properties that address specific market demands, appealing to both investors seeking rental returns and end-users looking for practical living spaces.",
    img: "/dev/aqua.jpeg",
    foundingYear: 2005,
    mainOffice: "Dubai, UAE",
  },
  {
    id: 19,
    name: "Deyaar Development PJSC",
    slug: "deyaar-development",
    description:
      "Deyaar Development PJSC has established itself as one of Dubai's leading real estate companies with diversified operations spanning property development, property management, facilities management, and brokerage services. Founded as a subsidiary of Dubai Islamic Bank, the publicly-listed company has delivered numerous residential and commercial projects across prime locations including Business Bay, Dubai Production City, and Dubai South. Deyaar is known for creating value-oriented properties with contemporary designs and comprehensive amenities. The company's integrated business model allows it to maintain long-term relationships with property owners and tenants through its management services. Notable projects include Midtown (a master community in Dubai Production City), The Atria (a luxury mixed-use development), and Millennium Al Barsha Hotel, showcasing the developer's versatility across asset classes.",
    img: "/dev/deyaar.jpg",
    source: "https://en.wikipedia.org/wiki/Deyaar",
    foundingYear: 2002,
    mainOffice: "Dubai, UAE",
  },
  {
    id: 20,
    name: "Dubai International Financial Centre (DIFC)",
    slug: "difc",
    description:
      "The Dubai International Financial Centre (DIFC) is a purpose-built financial free zone that has transformed Dubai into a global financial hub. Established by government decree, DIFC offers a unique ecosystem combining world-class infrastructure, an independent regulatory framework, a common law judicial system, and a vibrant urban environment. As a master developer, DIFC has created a thriving district featuring premium office towers, luxury residences, retail destinations, art galleries, and fine dining establishments. The development continues to expand with projects like Gate Avenue (a premium retail corridor) and the new Innovation Hub. DIFC's real estate offerings are specifically designed to meet the needs of financial and professional services firms while creating a sophisticated live-work-play environment that attracts global talent.",
    img: "/dev/difc.jpeg",
    foundingYear: 2004,
    mainOffice: "Dubai, UAE",
  },
  {
    id: 21,
    name: "Dubai South",
    slug: "dubai-south",
    description:
      "Dubai South (formerly Dubai World Central) is a massive 145 square kilometer master development centered around Al Maktoum International Airport, which is set to become the world's largest airport upon completion. Established as part of the Dubai government's strategic vision, Dubai South is divided into specialized districts focusing on aviation, logistics, commerce, exhibitions, humanitarian operations, and residential communities. The project's residential component, The Residential District, aims to create a city focused on happiness and quality of life, with pedestrian-friendly neighborhoods, ample green spaces, and comprehensive amenities. As both a free zone and master developer, Dubai South offers investment opportunities across various real estate segments, including residential villas and apartments, commercial properties, and industrial facilities, all strategically positioned to benefit from proximity to the emerging global aviation hub.",
    img: "/dev/dubaisouth.jpeg",
    foundingYear: 2006,
    mainOffice: "Dubai, UAE",
  },
  {
    id: 22,
    name: "Iman Developers",
    slug: "iman-developers",
    description:
      "Iman Developers has established itself as a boutique real estate developer focused on creating thoughtfully designed residential projects in Dubai's emerging communities. Founded by Ismail Marfani, the company specializes in mid-market properties that offer excellent value without compromising on quality or amenities. Their developments, primarily located in Jumeirah Village Circle, feature distinctive architectural elements, efficient space utilization, and lifestyle amenities tailored to young professionals and small families. Iman Developers places strong emphasis on construction quality, timely delivery, and incorporating smart home technology into their projects. The developer has gained recognition for its customer-centric approach, flexible payment plans, and creating residences that balance affordability with desirable features and finishes.",
    img: "/dev/iman.jpeg",
    foundingYear: 2012,
    mainOffice: "Dubai, UAE",
  },
  {
    id: 23,
    name: "Imtiaz Developments",
    slug: "imtiaz-developments",
    description:
      "Imtiaz Developments has made its mark in Dubai's real estate sector by creating residential projects that blend contemporary design, quality construction, and strategic locations. The company focuses on developing properties that offer strong value propositions for both investors and end-users, with particular attention to emerging areas with growth potential. Imtiaz's portfolio includes mid-rise residential buildings featuring modern apartments with efficient layouts and comprehensive amenities. The developer is known for its commitment to architectural integrity, attention to detail in finishes, and creating living spaces that meet the practical needs of residents while offering aesthetic appeal. Imtiaz Developments typically incorporates sustainable features and smart home technology into their projects while maintaining competitive price points in their target market segments.",
    img: "/dev/imiaz.png",
    foundingYear: 2011,
    mainOffice: "Dubai, UAE",
  },
  {
    id: 24,
    name: "Jumeirah Golf Estates",
    slug: "jumeirah-golf-estates",
    description:
      "Jumeirah Golf Estates is a world-class residential golf community that has established itself as one of Dubai's most prestigious addresses for luxury living. The 1,119-hectare development is built around two championship golf courses designed by Greg Norman - Earth and Fire - which have hosted the DP World Tour Championship. The estate offers a diverse range of luxury properties, from Mediterranean-inspired villas to contemporary townhouses and apartments, all set within meticulously landscaped surroundings. Residents enjoy exceptional amenities including a clubhouse, swimming pools, tennis courts, fitness facilities, and dining options. The development is known for its serene environment, lush greenery, and exclusive lifestyle, attracting golf enthusiasts, families seeking spacious homes, and those desiring a premium community away from the urban density of central Dubai.",
    img: "/dev/golfestate.jpg",
    foundingYear: 2007,
    mainOffice: "Dubai, UAE",
  },
  {
    id: 25,
    name: "Majid Al Futtaim",
    slug: "majid-al-futtaim",
    description:
      "Majid Al Futtaim is a premier lifestyle conglomerate that has revolutionized the concept of integrated retail and leisure experiences across the Middle East, Africa, and Asia. Founded by Majid Al Futtaim, the company has developed iconic destinations including Mall of the Emirates (featuring indoor ski slope Ski Dubai) and City Centre malls. Their real estate division creates mixed-use communities that exemplify the 'live, work, and play' concept, such as Tilal Al Ghaf in Dubai and Al Mouj in Muscat, Oman. These master developments integrate residential neighborhoods, retail experiences, leisure facilities, and hospitality venues within thoughtfully planned environments. The company is recognized for its commitment to sustainability, receiving numerous LEED certifications for its developments, and for creating immersive destinations that transform everyday living into extraordinary experiences.",
    img: "/dev/majdalfutaim.jpg",
    foundingYear: 1992,
    mainOffice: "Dubai, UAE",
  },
  {
    id: 26,
    name: "MAG Property Development",
    slug: "mag-property-development",
    description:
      "MAG Property Development, the real estate development arm of the MAG Group conglomerate, has established itself as a significant player in Dubai's premium property market. Founded by Moafaq Al Gaddah, the company delivers residential, commercial, and mixed-use projects focused on innovation and quality. MAG is particularly known for its wellness-oriented developments, including MAG Creek Wellbeing Resort, which incorporates holistic health concepts into residential living. The developer's portfolio also includes luxury projects like MAG 318 in Business Bay, MAG 5 Boulevard in Dubai South, and MAG Eye in Meydan. MAG emphasizes creating value through thoughtful design, quality construction, and incorporating distinctive features that differentiate their properties in competitive market segments, appealing to both investors and end-users seeking quality living environments.",
    img: "/dev/mag.jpeg",
    foundingYear: 2003,
    mainOffice: "Dubai, UAE",
  },
  {
    id: 27,
    name: "Mira Real Estate",
    slug: "mira-real-estate",
    description:
      "Mira Real Estate has emerged as a notable boutique developer in Dubai's competitive real estate landscape, focusing on creating distinctive residential properties in strategic locations. The company specializes in developing mid-sized residential buildings with contemporary designs, efficient layouts, and quality finishes. Mira places particular emphasis on identifying emerging neighborhoods with growth potential, allowing them to offer competitive pricing while positioning their developments for future appreciation. Their projects typically incorporate modern amenities including fitness facilities, swimming pools, and recreational areas, catering primarily to young professionals and small families. Mira Real Estate is known for its customer-centric approach, offering flexible payment plans and maintaining transparent communication throughout the development process, helping them build a loyal customer base among both investors and end-users.",
    img: "/dev/mira.png",
    foundingYear: 2010,
    mainOffice: "Dubai, UAE",
  },
  {
    id: 28,
    name: "Object 1",
    slug: "object-one",
    description:
      "Object 1 has positioned itself as a design-focused boutique developer creating bespoke properties that emphasize architectural distinction and personalized living experiences. The company specializes in developing small to medium-scale projects with unique character and attention to detail that sets them apart from mass-market developments. Object 1's approach involves close collaboration with acclaimed architects and interior designers to create spaces that blend aesthetic appeal with functional excellence. Their developments typically feature customizable elements allowing residents to personalize their living spaces. The developer focuses on prime and emerging locations in Dubai, creating residences that appeal to design-conscious buyers seeking something beyond conventional offerings. Object 1's projects often incorporate art installations, distinctive façades, and thoughtfully curated amenities that reflect a boutique sensibility rather than a one-size-fits-all approach.",
    img: "/dev/object1.jpeg",
    foundingYear: 2015,
    mainOffice: "Dubai, UAE",
  },
  {
    id: 29,
    name: "Prestige One Developments",
    slug: "prestige-one-developments",
    description:
      "Prestige One Developments has established itself in Dubai's real estate market by focusing on high-end residential projects that emphasize quality construction, premium finishes, and architectural excellence. The boutique developer specializes in creating exclusive apartment buildings and townhouse communities in established residential districts, catering to discerning buyers seeking sophisticated urban living. Prestige One is known for its meticulous attention to detail, from façade design to interior specifications, ensuring their developments maintain a distinctive character and enduring value. The company typically incorporates premium amenities including concierge services, spa facilities, smart home technology, and carefully designed communal spaces in their projects. With a focus on creating homes rather than mere investment products, Prestige One appeals to both end-users seeking quality living environments and investors looking for properties with strong rental appeal and appreciation potential.",
    img: "/dev/prestige1.png",
    foundingYear: 2014,
    mainOffice: "Dubai, UAE",
  },
  {
    id: 30,
    name: "Sol Properties",
    slug: "sol-properties",
    description:
      "Sol Properties has grown into a diversified real estate company with operations spanning development, leasing, and property management across multiple asset classes in the UAE. The developer's portfolio includes residential apartments and villas, commercial offices, retail spaces, and hospitality projects. Sol Properties focuses on creating value-driven developments in strategic locations with strong growth potential and connectivity advantages. Their residential projects typically feature contemporary designs, efficient space utilization, and amenities tailored to modern urban lifestyles. The company leverages its integrated business model to maintain long-term relationships with property owners and tenants through its management services. Sol Properties is known for its market-responsive approach, developing properties that address specific demand segments while maintaining quality standards and competitive pricing strategies.",
    img: "/dev/sol.jpg",
    foundingYear: 2004,
    mainOffice: "Dubai, UAE",
  },
  {
    id: 31,
    name: "Vincitore Real Estate Development",
    slug: "vincitore-real-estate",
    description:
      "Vincitore Real Estate Development has created a distinctive niche in Dubai's property market by bringing European-inspired architectural elegance to mid-market residential projects. Founded by Vijay Doshi, the boutique developer is known for creating residences with ornate façades, grand entrances, and classical design elements that stand out in a landscape dominated by modern minimalism. Their signature developments include Vincitore Palacio, Vincitore Boulevard, and Vincitore Benessere, primarily located in the Arjan district. Vincitore's properties feature marble-clad lobbies, palatial common areas, and resort-style amenities including premium swimming pools, fitness centers, and landscaped gardens. The developer focuses on delivering aesthetic luxury at accessible price points, appealing to buyers who appreciate classical architectural details and comprehensive lifestyle amenities while maintaining competitive pricing compared to Dubai's premium segments.",
    img: "/dev/vincitore.jpeg",
    foundingYear: 2013,
    mainOffice: "Dubai, UAE",
  },
];

export default developerData;
