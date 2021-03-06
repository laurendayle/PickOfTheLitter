const db = require('./index.js');
const Pets = require('./Pets.js');

const pets = [
  {
    id: 55470424,
    organization_id: "TX1660",
    url: "https://www.petfinder.com/dog/star-willow-55470424/tx/justin/apollo-support-and-rescue-tx1660/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Australian Cattle Dog / Blue Heeler",
      secondary: null,
      mixed: true,
      unknown: false
    },
    colors: {
      primary: "Tricolor (Brown, Black, & White)",
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Female",
    size: "Medium",
    coat: "Short",
    attributes: {
      spayed_neutered: true,
      house_trained: true,
      declawed: null,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: null,
      dogs: false,
      cats: null
    },
    tags: [
      "Friendly",
      "Playful"
    ],
    name: "*Willow",
    description: "Hi my name is Willow! I was born in January 2020. I have a very big personality. I need someone...",
    organization_animal_id: null,
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470424/1/?bust=1651536630&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470424/1/?bust=1651536630&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470424/1/?bust=1651536630&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470424/1/?bust=1651536630"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470424/2/?bust=1651536630&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470424/2/?bust=1651536630&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470424/2/?bust=1651536630&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470424/2/?bust=1651536630"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470424/3/?bust=1651536631&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470424/3/?bust=1651536631&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470424/3/?bust=1651536631&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470424/3/?bust=1651536631"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470424/4/?bust=1651536631&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470424/4/?bust=1651536631&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470424/4/?bust=1651536631&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470424/4/?bust=1651536631"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470424/5/?bust=1651536632&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470424/5/?bust=1651536632&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470424/5/?bust=1651536632&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470424/5/?bust=1651536632"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470424/6/?bust=1651536632&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470424/6/?bust=1651536632&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470424/6/?bust=1651536632&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470424/6/?bust=1651536632"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470424/1/?bust=1651536630&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470424/1/?bust=1651536630&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470424/1/?bust=1651536630&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470424/1/?bust=1651536630"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:10:34+0000",
    published_at: "2022-05-03T00:10:34+0000",
    distance: null,
    contact: {
      email: "Inquire@Apollosupportandrescue.org",
      phone: null,
      address: {
        address1: "1170 Dove Hill Rd",
        address2: null,
        city: "Justin",
        state: "TX",
        postcode: "76247",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470424"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/tx1660"
      }
    }
  },
  {
    id: 55467612,
    organization_id: "ON96",
    url: "https://www.petfinder.com/dog/bella-55467612/on/lucknow/adopt-a-pet-pet-rescue-on96/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Border Collie",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: "White / Cream",
      secondary: "Black",
      tertiary: null
    },
    age: "Baby",
    gender: "Female",
    size: "Medium",
    coat: "Medium",
    attributes: {
      spayed_neutered: false,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: true,
      dogs: true,
      cats: null
    },
    tags: [],
    name: "Bella",
    organization_animal_id: null,
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:09:16+0000",
    published_at: "2022-05-03T00:09:16+0000",
    distance: null,
    contact: {
      email: "petrescue@hurontel.on.ca",
      phone: null,
      address: {
        address1: null,
        address2: null,
        city: "Lucknow",
        state: "ON",
        postcode: "N0G 2H0",
        country: "CA"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55467612"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/on96"
      }
    }
  },
  {
    id: 55470420,
    organization_id: "TX2471",
    url: "https://www.petfinder.com/dog/50096962-55470420/tx/el-paso/el-paso-animal-services-tx2471/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Mixed Breed",
      secondary: null,
      mixed: true,
      unknown: false
    },
    colors: {
      primary: "Black",
      secondary: null,
      tertiary: null
    },
    age: "Young",
    gender: "Male",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: false,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "50096962",
    description: null,
    organization_animal_id: "50096962",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:07:26+0000",
    published_at: "2022-05-03T00:07:26+0000",
    distance: null,
    contact: {
      email: "epasadoptions@elpasotexas.gov",
      phone: "(915) 212-7297",
      address: {
        address1: "5001 Fred Wilson",
        address2: null,
        city: "El Paso",
        state: "TX",
        postcode: "79906",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470420"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/tx2471"
      }
    }
  },
  {
    id: 55470413,
    organization_id: "QC06",
    url: "https://www.petfinder.com/cat/ambre-55470413/qc/montreal/spca-montreal-qc06/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Short Hair",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Female",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: false,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Ambre",
    description: null,
    organization_animal_id: "50072485",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:29+0000",
    published_at: "2022-05-03T00:06:29+0000",
    distance: null,
    contact: {
      email: "spcapetfinderteam@gmail.com",
      phone: "514-735-2711",
      address: {
        address1: "5215 Jean-Talon Ouest",
        address2: null,
        city: "Montreal",
        state: "QC",
        postcode: "H4P 1X4",
        country: "CA"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470413"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/qc06"
      }
    }
  },
  {
    id: 55470415,
    organization_id: "QC06",
    url: "https://www.petfinder.com/cat/charlotte-55470415/qc/montreal/spca-montreal-qc06/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Long Hair",
      secondary: "Domestic Short Hair",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Young",
    gender: "Female",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: false,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Charlotte",
    description: null,
    organization_animal_id: "50081894",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:28+0000",
    published_at: "2022-05-03T00:06:28+0000",
    distance: null,
    contact: {
      email: "spcapetfinderteam@gmail.com",
      phone: "514-735-2711",
      address: {
        address1: "5215 Jean-Talon Ouest",
        address2: null,
        city: "Montreal",
        state: "QC",
        postcode: "H4P 1X4",
        country: "CA"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470415"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/qc06"
      }
    }
  },
  {
    id: 55470414,
    organization_id: "QC06",
    url: "https://www.petfinder.com/cat/nana-55470414/qc/montreal/spca-montreal-qc06/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Medium Hair",
      secondary: "Domestic Short Hair",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Baby",
    gender: "Female",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: false,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Nana",
    description: null,
    organization_animal_id: "50081570",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:26+0000",
    published_at: "2022-05-03T00:06:26+0000",
    distance: null,
    contact: {
      email: "spcapetfinderteam@gmail.com",
      phone: "514-735-2711",
      address: {
        address1: "5215 Jean-Talon Ouest",
        address2: null,
        city: "Montreal",
        state: "QC",
        postcode: "H4P 1X4",
        country: "CA"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470414"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/qc06"
      }
    }
  },
  {
    id: 55470410,
    organization_id: "PA678",
    url: "https://www.petfinder.com/dog/daffodil-55470410/pa/chester-springs/all-4-paws-rescue-pa678/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Yorkshire Terrier",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Female",
    size: "Small",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Daffodil",
    description: "Daffodil is a 2.5 year old spayed female Yorkshire Terrier who weighs about 5 lbs. Daffodil came to All 4...",
    organization_animal_id: "49820674",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:20+0000",
    published_at: "2022-05-03T00:06:20+0000",
    distance: null,
    contact: {
      email: "info@all4pawsrescue.com",
      phone: "(610) 731-1086",
      address: {
        address1: null,
        address2: null,
        city: "Chester Springs",
        state: "PA",
        postcode: "19425",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470410"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/pa678"
      }
    }
  },
  {
    id: 55470411,
    organization_id: "TX106",
    url: "https://www.petfinder.com/cat/roly-poly-55470411/tx/carrollton/operation-kindness-tx106/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Long Hair",
      secondary: "Domestic Short Hair",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Senior",
    gender: "Male",
    size: "Small",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: true,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Roly Poly",
    description: "I came to Operation Kindness on 4/23/2022. I am a 9y3m old, Male, Domestic Longhair mix. I am neutered, microchipped...",
    organization_animal_id: "19782218",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:20+0000",
    published_at: "2022-05-03T00:06:20+0000",
    distance: null,
    contact: {
      email: "ok@operationkindness.org",
      phone: "(972) 418-PAWS (7297)",
      address: {
        address1: "3201 Earhart Dr",
        address2: null,
        city: "Carrollton",
        state: "TX",
        postcode: "75006",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470411"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/tx106"
      }
    }
  },
  {
    id: 55470412,
    organization_id: "TX106",
    url: "https://www.petfinder.com/cat/tabbytha-55470412/tx/carrollton/operation-kindness-tx106/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Short Hair",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Female",
    size: "Small",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: false,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Tabbytha",
    description: "I came to Operation Kindness on 4/13/2022. I am a 5y old, Female, Domestic Shorthair mix. I am spayed, microchipped...",
    organization_animal_id: "49965894",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:20+0000",
    published_at: "2022-05-03T00:06:20+0000",
    distance: null,
    contact: {
      email: "ok@operationkindness.org",
      phone: "(972) 418-PAWS (7297)",
      address: {
        address1: "3201 Earhart Dr",
        address2: null,
        city: "Carrollton",
        state: "TX",
        postcode: "75006",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470412"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/tx106"
      }
    }
  },
  {
    id: 55470404,
    organization_id: "OK319",
    url: "https://www.petfinder.com/dog/waffles-55470404/ok/oklahoma-city/bella-spca-ok319/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Hound",
      secondary: "Rottweiler",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Baby",
    gender: "Female",
    size: "Large",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Waffles",
    description: null,
    organization_animal_id: "50096727",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:19+0000",
    published_at: "2022-05-03T00:06:19+0000",
    distance: null,
    contact: {
      email: "info@thebellafoundation.org",
      phone: "(866) 318-7387",
      address: {
        address1: "PO Box 20035",
        address2: null,
        city: "Oklahoma City",
        state: "OK",
        postcode: "73120",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470404"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/ok319"
      }
    }
  },
  {
    id: 55470405,
    organization_id: "OK319",
    url: "https://www.petfinder.com/dog/butter-55470405/ok/oklahoma-city/bella-spca-ok319/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Hound",
      secondary: "Rottweiler",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Baby",
    gender: "Female",
    size: "Large",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Butter",
    description: null,
    organization_animal_id: "50096713",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:19+0000",
    published_at: "2022-05-03T00:06:19+0000",
    distance: null,
    contact: {
      email: "info@thebellafoundation.org",
      phone: "(866) 318-7387",
      address: {
        address1: "PO Box 20035",
        address2: null,
        city: "Oklahoma City",
        state: "OK",
        postcode: "73120",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470405"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/ok319"
      }
    }
  },
  {
    id: 55470406,
    organization_id: "OK319",
    url: "https://www.petfinder.com/dog/toast-55470406/ok/oklahoma-city/bella-spca-ok319/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Hound",
      secondary: "Rottweiler",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Baby",
    gender: "Male",
    size: "Large",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Toast",
    description: null,
    organization_animal_id: "50096716",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:19+0000",
    published_at: "2022-05-03T00:06:19+0000",
    distance: null,
    contact: {
      email: "info@thebellafoundation.org",
      phone: "(866) 318-7387",
      address: {
        address1: "PO Box 20035",
        address2: null,
        city: "Oklahoma City",
        state: "OK",
        postcode: "73120",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470406"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/ok319"
      }
    }
  },
  {
    id: 55470407,
    organization_id: "OK319",
    url: "https://www.petfinder.com/dog/spud-55470407/ok/oklahoma-city/bella-spca-ok319/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Hound",
      secondary: "Rottweiler",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Baby",
    gender: "Male",
    size: "Large",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Spud",
    description: null,
    organization_animal_id: "50096731",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:19+0000",
    published_at: "2022-05-03T00:06:19+0000",
    distance: null,
    contact: {
      email: "info@thebellafoundation.org",
      phone: "(866) 318-7387",
      address: {
        address1: "PO Box 20035",
        address2: null,
        city: "Oklahoma City",
        state: "OK",
        postcode: "73120",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470407"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/ok319"
      }
    }
  },
  {
    id: 55470408,
    organization_id: "OK319",
    url: "https://www.petfinder.com/dog/beans-55470408/ok/oklahoma-city/bella-spca-ok319/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Hound",
      secondary: "Rottweiler",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Baby",
    gender: "Male",
    size: "Large",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Beans",
    description: null,
    organization_animal_id: "50096720",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:19+0000",
    published_at: "2022-05-03T00:06:19+0000",
    distance: null,
    contact: {
      email: "info@thebellafoundation.org",
      phone: "(866) 318-7387",
      address: {
        address1: "PO Box 20035",
        address2: null,
        city: "Oklahoma City",
        state: "OK",
        postcode: "73120",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470408"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/ok319"
      }
    }
  },
  {
    id: 55470409,
    organization_id: "OK319",
    url: "https://www.petfinder.com/dog/sunny-55470409/ok/oklahoma-city/bella-spca-ok319/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Hound",
      secondary: "Rottweiler",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Baby",
    gender: "Male",
    size: "Large",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Sunny",
    description: null,
    organization_animal_id: "50096709",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:19+0000",
    published_at: "2022-05-03T00:06:19+0000",
    distance: null,
    contact: {
      email: "info@thebellafoundation.org",
      phone: "(866) 318-7387",
      address: {
        address1: "PO Box 20035",
        address2: null,
        city: "Oklahoma City",
        state: "OK",
        postcode: "73120",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470409"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/ok319"
      }
    }
  },
  {
    id: 55470398,
    organization_id: "NC488",
    url: "https://www.petfinder.com/dog/raven-55470398/nc/reidsville/rockingham-county-animal-shelter-nc488/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Pit Bull Terrier",
      secondary: "Mixed Breed",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Female",
    size: "Large",
    coat: null,
    attributes: {
      spayed_neutered: false,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Raven",
    description: null,
    organization_animal_id: "50056430",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:18+0000",
    published_at: "2022-05-03T00:06:18+0000",
    distance: null,
    contact: {
      email: "RCAS@co.rockingham.nc.us",
      phone: "(336) 394-0075",
      address: {
        address1: "250 Cherokee Camp Road",
        address2: null,
        city: "Reidsville",
        state: "NC",
        postcode: "27320",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470398"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/nc488"
      }
    }
  },
  {
    id: 55470399,
    organization_id: "NC488",
    url: "https://www.petfinder.com/dog/grackle-55470399/nc/reidsville/rockingham-county-animal-shelter-nc488/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Pit Bull Terrier",
      secondary: "Mixed Breed",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Female",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: false,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Grackle",
    description: null,
    organization_animal_id: "50047487",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:18+0000",
    published_at: "2022-05-03T00:06:18+0000",
    distance: null,
    contact: {
      email: "RCAS@co.rockingham.nc.us",
      phone: "(336) 394-0075",
      address: {
        address1: "250 Cherokee Camp Road",
        address2: null,
        city: "Reidsville",
        state: "NC",
        postcode: "27320",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470399"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/nc488"
      }
    }
  },
  {
    id: 55470400,
    organization_id: "OR03",
    url: "https://www.petfinder.com/cat/ralph-55470400/or/eugene/greenhill-humane-society-spca-or03/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Short Hair",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Baby",
    gender: "Male",
    size: "Small",
    coat: null,
    attributes: {
      spayed_neutered: false,
      house_trained: false,
      declawed: false,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Ralph",
    description: "Ralph was found on the 100 Blk. Of Holeman Ave. in Eugene around 4/29/2022. He came to the shelter not...",
    organization_animal_id: "50096661",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:18+0000",
    published_at: "2022-05-03T00:06:18+0000",
    distance: null,
    contact: {
      email: "information@green-hill.org",
      phone: "(541) 689-1503",
      address: {
        address1: "88530 Green Hill Rd.",
        address2: null,
        city: "Eugene",
        state: "OR",
        postcode: "97402",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470400"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/or03"
      }
    }
  },
  {
    id: 55470402,
    organization_id: "GA423",
    url: "https://www.petfinder.com/dog/bigg-boss-55470402/ga/chamblee/dekalb-county-animal-services-ga423/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Mixed Breed",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Male",
    size: "Large",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Bigg Boss",
    description: "Big Boss is aptly named because at 70 pounds he is big but he&amp;#39;s also kind of short so you...",
    organization_animal_id: "49582688",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:18+0000",
    published_at: "2022-05-03T00:06:18+0000",
    distance: null,
    contact: {
      email: "adoption@dekalbanimalservices.com",
      phone: "(404) 294-2165",
      address: {
        address1: "3280 Chamblee Dunwoody Rd",
        address2: null,
        city: "Chamblee",
        state: "GA",
        postcode: "30341",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470402"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/ga423"
      }
    }
  },
  {
    id: 55470403,
    organization_id: "OK319",
    url: "https://www.petfinder.com/dog/ketchup-55470403/ok/oklahoma-city/bella-spca-ok319/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Hound",
      secondary: "Rottweiler",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Baby",
    gender: "Male",
    size: "Large",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Ketchup",
    description: null,
    organization_animal_id: "50096734",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:18+0000",
    published_at: "2022-05-03T00:06:18+0000",
    distance: null,
    contact: {
      email: "info@thebellafoundation.org",
      phone: "(866) 318-7387",
      address: {
        address1: "PO Box 20035",
        address2: null,
        city: "Oklahoma City",
        state: "OK",
        postcode: "73120",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470403"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/ok319"
      }
    }
  },
  {
    id: 55470390,
    organization_id: "OR194",
    url: "https://www.petfinder.com/dog/sammy-55470390/or/pendleton/pioneer-humane-society-pendleton-animal-welfare-shelter-paws-or194/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Border Collie",
      secondary: "Retriever",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Baby",
    gender: "Male",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: false,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Sammy",
    description: null,
    organization_animal_id: "50096535",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:17+0000",
    published_at: "2022-05-03T00:06:17+0000",
    distance: null,
    contact: {
      email: "pawspendleton@gmail.com",
      phone: "541-276-0181 ",
      address: {
        address1: "517 SE 3rd ST",
        address2: "PO Box 1876",
        city: "Pendleton",
        state: "OR",
        postcode: "97801",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470390"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/or194"
      }
    }
  },
  {
    id: 55470391,
    organization_id: "OR194",
    url: "https://www.petfinder.com/dog/willow-55470391/or/pendleton/pioneer-humane-society-pendleton-animal-welfare-shelter-paws-or194/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "German Shepherd Dog",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Senior",
    gender: "Female",
    size: "Large",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Willow",
    description: null,
    organization_animal_id: "50096665",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:17+0000",
    published_at: "2022-05-03T00:06:17+0000",
    distance: null,
    contact: {
      email: "pawspendleton@gmail.com",
      phone: "541-276-0181 ",
      address: {
        address1: "517 SE 3rd ST",
        address2: "PO Box 1876",
        city: "Pendleton",
        state: "OR",
        postcode: "97801",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470391"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/or194"
      }
    }
  },
  {
    id: 55470392,
    organization_id: "NY318",
    url: "https://www.petfinder.com/dog/humphrey-55470392/ny/west-seneca/erie-county-spca-ny318/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Mixed Breed",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Male",
    size: "Large",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "HUMPHREY",
    description: "Howdy, I&amp;#39;m happy go-lucky Humphrey ! Are you looking for a very handsome and enthusiastic young dog who loves activity?...",
    organization_animal_id: "49903541",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:17+0000",
    published_at: "2022-05-03T00:06:17+0000",
    distance: null,
    contact: {
      email: null,
      phone: "(716) 875-7360",
      address: {
        address1: "300 Harlem Road",
        address2: null,
        city: "West Seneca",
        state: "NY",
        postcode: "14224",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470392"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/ny318"
      }
    }
  },
  {
    id: 55470393,
    organization_id: "NY318",
    url: "https://www.petfinder.com/dog/piglet-55470393/ny/west-seneca/erie-county-spca-ny318/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Pit Bull Terrier",
      secondary: "Mixed Breed",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Female",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "PIGLET",
    description: "Hey there, friend! I&amp;#39;m Piglet, a pretty, sweet, and fun-loving lady that can&amp;#39;t wait to meet you! I&amp;#39;d love to...",
    organization_animal_id: "49677405",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:17+0000",
    published_at: "2022-05-03T00:06:17+0000",
    distance: null,
    contact: {
      email: null,
      phone: "(716) 875-7360",
      address: {
        address1: "300 Harlem Road",
        address2: null,
        city: "West Seneca",
        state: "NY",
        postcode: "14224",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470393"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/ny318"
      }
    }
  },
  {
    id: 55470394,
    organization_id: "NY318",
    url: "https://www.petfinder.com/dog/blaire-55470394/ny/west-seneca/erie-county-spca-ny318/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Mixed Breed",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Young",
    gender: "Female",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Blaire",
    description: null,
    organization_animal_id: "50057408",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:17+0000",
    published_at: "2022-05-03T00:06:17+0000",
    distance: null,
    contact: {
      email: null,
      phone: "(716) 875-7360",
      address: {
        address1: "300 Harlem Road",
        address2: null,
        city: "West Seneca",
        state: "NY",
        postcode: "14224",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470394"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/ny318"
      }
    }
  },
  {
    id: 55470395,
    organization_id: "NY318",
    url: "https://www.petfinder.com/dog/pancake-55470395/ny/west-seneca/erie-county-spca-ny318/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Mixed Breed",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Young",
    gender: "Female",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Pancake",
    description: null,
    organization_animal_id: "50055736",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:17+0000",
    published_at: "2022-05-03T00:06:17+0000",
    distance: null,
    contact: {
      email: null,
      phone: "(716) 875-7360",
      address: {
        address1: "300 Harlem Road",
        address2: null,
        city: "West Seneca",
        state: "NY",
        postcode: "14224",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470395"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/ny318"
      }
    }
  },
  {
    id: 55470396,
    organization_id: "OH63",
    url: "https://www.petfinder.com/cat/birdy-55470396/oh/maumee/toledo-area-humane-society-oh63/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Medium Hair",
      secondary: "Domestic Short Hair",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Male",
    size: "Small",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: false,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Birdy",
    description: "Birdy is a sweet boy! He loves to be pet but sometimes will nip if he gets overstimulated! He is...",
    organization_animal_id: "49778712",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:17+0000",
    published_at: "2022-05-03T00:06:17+0000",
    distance: null,
    contact: {
      email: "info@toledohumane.org",
      phone: "(419) 891-0705",
      address: {
        address1: "827 Illinois Ave",
        address2: null,
        city: "Maumee",
        state: "OH",
        postcode: "43537",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470396"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/oh63"
      }
    }
  },
  {
    id: 55470397,
    organization_id: "NC488",
    url: "https://www.petfinder.com/dog/crow-55470397/nc/reidsville/rockingham-county-animal-shelter-nc488/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Labrador Retriever",
      secondary: "Mixed Breed",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Male",
    size: "Large",
    coat: null,
    attributes: {
      spayed_neutered: false,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Crow",
    description: null,
    organization_animal_id: "49963834",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:17+0000",
    published_at: "2022-05-03T00:06:17+0000",
    distance: null,
    contact: {
      email: "RCAS@co.rockingham.nc.us",
      phone: "(336) 394-0075",
      address: {
        address1: "250 Cherokee Camp Road",
        address2: null,
        city: "Reidsville",
        state: "NC",
        postcode: "27320",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470397"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/nc488"
      }
    }
  },
  {
    id: 55470401,
    organization_id: "GA423",
    url: "https://www.petfinder.com/dog/50096632-55470401/ga/chamblee/dekalb-county-animal-services-ga423/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Mixed Breed",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Male",
    size: "Large",
    coat: null,
    attributes: {
      spayed_neutered: false,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "50096632",
    description: null,
    organization_animal_id: "50096632",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:17+0000",
    published_at: "2022-05-03T00:06:17+0000",
    distance: null,
    contact: {
      email: "adoption@dekalbanimalservices.com",
      phone: "(404) 294-2165",
      address: {
        address1: "3280 Chamblee Dunwoody Rd",
        address2: null,
        city: "Chamblee",
        state: "GA",
        postcode: "30341",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470401"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/ga423"
      }
    }
  },
  {
    id: 55470382,
    organization_id: "IL157",
    url: "https://www.petfinder.com/dog/jessie-55470382/il/chicago-heights/south-suburban-humane-society-il157/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Hound",
      secondary: "Mixed Breed",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Female",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Jessie",
    description: null,
    organization_animal_id: "49646437",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:16+0000",
    published_at: "2022-05-03T00:06:16+0000",
    distance: null,
    contact: {
      email: "office@southsuburbanhumane.org",
      phone: "(708) 755-7387",
      address: {
        address1: "1103 West End Avenue",
        address2: null,
        city: "Chicago Heights",
        state: "IL",
        postcode: "60411",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470382"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/il157"
      }
    }
  },
  {
    id: 55470383,
    organization_id: "MS09",
    url: "https://www.petfinder.com/cat/spot-55470383/ms/picayune/pearl-river-county-spca-ms09/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Short Hair",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Baby",
    gender: "Female",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: false,
      house_trained: true,
      declawed: false,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: true
    },
    tags: [],
    name: "Spot",
    description: "My siblings, Nugget, Sandy, and I were surrendered when we were only 5 weeks old because our owner didn&amp;#39;t want...",
    organization_animal_id: "49966216",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:16+0000",
    published_at: "2022-05-03T00:06:16+0000",
    distance: null,
    contact: {
      email: "prcspca@prcspca.org",
      phone: "601-798-8000",
      address: {
        address1: "1700 Palestine Road",
        address2: null,
        city: "Picayune",
        state: "MS",
        postcode: "39466",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470383"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/ms09"
      }
    }
  },
  {
    id: 55470384,
    organization_id: "MS09",
    url: "https://www.petfinder.com/cat/nugget-55470384/ms/picayune/pearl-river-county-spca-ms09/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Siamese",
      secondary: "Domestic Short Hair",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Baby",
    gender: "Female",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: false,
      house_trained: true,
      declawed: false,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: true
    },
    tags: [],
    name: "Nugget",
    description: "My siblings, Sandy, Spot, and I were brought to the shelter when we were five weeks old because our owner...",
    organization_animal_id: "49966186",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:16+0000",
    published_at: "2022-05-03T00:06:16+0000",
    distance: null,
    contact: {
      email: "prcspca@prcspca.org",
      phone: "601-798-8000",
      address: {
        address1: "1700 Palestine Road",
        address2: null,
        city: "Picayune",
        state: "MS",
        postcode: "39466",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470384"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/ms09"
      }
    }
  },
  {
    id: 55470385,
    organization_id: "MS09",
    url: "https://www.petfinder.com/cat/sandy-55470385/ms/picayune/pearl-river-county-spca-ms09/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Siamese",
      secondary: "Domestic Short Hair",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Baby",
    gender: "Male",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: false,
      house_trained: true,
      declawed: false,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: true
    },
    tags: [],
    name: "Sandy",
    description: "My siblings, Spot, Nugget, and I were surrendered when we were 5 weeks old because our owners didn&amp;#39;t want us....",
    organization_animal_id: "49966201",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:16+0000",
    published_at: "2022-05-03T00:06:16+0000",
    distance: null,
    contact: {
      email: "prcspca@prcspca.org",
      phone: "601-798-8000",
      address: {
        address1: "1700 Palestine Road",
        address2: null,
        city: "Picayune",
        state: "MS",
        postcode: "39466",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470385"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/ms09"
      }
    }
  },
  {
    id: 55470389,
    organization_id: "IN309",
    url: "https://www.petfinder.com/dog/cortez-55470389/in/anderson/animal-protection-league-in309/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "German Shepherd Dog",
      secondary: "Mixed Breed",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Male",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: false,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Cortez",
    description: null,
    organization_animal_id: "50096624",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:16+0000",
    published_at: "2022-05-03T00:06:16+0000",
    distance: null,
    contact: {
      email: "Adopt@inapl.org",
      phone: "(765) 356-0900",
      address: {
        address1: "613 Dewey Street",
        address2: null,
        city: "Anderson",
        state: "IN",
        postcode: "46011",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470389"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/in309"
      }
    }
  },
  {
    id: 55470368,
    organization_id: "CA2392",
    url: "https://www.petfinder.com/cat/grayson-55470368/ca/buena-park/the-cat-adoption-service-ca2392/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Turkish Van",
      secondary: "Turkish Angora",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: "Tabby (Gray / Blue / Silver)",
      secondary: null,
      tertiary: null
    },
    age: "Baby",
    gender: "Male",
    size: "Small",
    coat: "Medium",
    attributes: {
      spayed_neutered: false,
      house_trained: true,
      declawed: false,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: null,
      dogs: null,
      cats: true
    },
    tags: [
      "Friendly",
      "Playful",
      "Curious",
      "Loyal",
      "Brave",
      "Funny",
      "Smart",
      "Affectionate"
    ],
    name: "Grayson",
    description: "Grayson is sweet boy very playful. Enjoys jumping around and being curious. He will be neutered when older  He has...",
    organization_animal_id: null,
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470368/1/?bust=1651536373&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470368/1/?bust=1651536373&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470368/1/?bust=1651536373&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470368/1/?bust=1651536373"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470368/2/?bust=1651536374&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470368/2/?bust=1651536374&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470368/2/?bust=1651536374&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470368/2/?bust=1651536374"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470368/1/?bust=1651536373&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470368/1/?bust=1651536373&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470368/1/?bust=1651536373&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470368/1/?bust=1651536373"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:16+0000",
    published_at: "2022-05-03T00:06:16+0000",
    distance: null,
    contact: {
      email: "lana4y@yahoo.com",
      phone: "7142621234",
      address: {
        address1: null,
        address2: null,
        city: "Buena Park",
        state: "CA",
        postcode: "90620",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470368"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/ca2392"
      }
    }
  },
  {
    id: 55470379,
    organization_id: "IL959",
    url: "https://www.petfinder.com/cat/yin-55470379/il/northbrook/border-tails-rescue-il959/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Short Hair",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Male",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: false,
      house_trained: false,
      declawed: false,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Yin",
    description: null,
    organization_animal_id: "50096640",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:15+0000",
    published_at: "2022-05-03T00:06:15+0000",
    distance: null,
    contact: {
      email: "adopt@bordertailsrescue.org",
      phone: "(847) 813-5774",
      address: {
        address1: "2975 N Milwaukee Ave",
        address2: null,
        city: "Northbrook",
        state: "IL",
        postcode: "60062",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470379"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/il959"
      }
    }
  },
  {
    id: 55470380,
    organization_id: "IL959",
    url: "https://www.petfinder.com/cat/cashel-55470380/il/northbrook/border-tails-rescue-il959/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Short Hair",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Male",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: false,
      house_trained: false,
      declawed: false,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Cashel",
    description: null,
    organization_animal_id: "50096609",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:15+0000",
    published_at: "2022-05-03T00:06:15+0000",
    distance: null,
    contact: {
      email: "adopt@bordertailsrescue.org",
      phone: "(847) 813-5774",
      address: {
        address1: "2975 N Milwaukee Ave",
        address2: null,
        city: "Northbrook",
        state: "IL",
        postcode: "60062",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470380"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/il959"
      }
    }
  },
  {
    id: 55470381,
    organization_id: "IL157",
    url: "https://www.petfinder.com/dog/sunny-55470381/il/chicago-heights/south-suburban-humane-society-il157/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Labrador Retriever",
      secondary: "Hound",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Male",
    size: "Large",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Sunny",
    description: "Your days will always be filled with happiness and sunshine if you adopt this handsome guy! Sunny is super friendly...",
    organization_animal_id: "43904080",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:15+0000",
    published_at: "2022-05-03T00:06:15+0000",
    distance: null,
    contact: {
      email: "office@southsuburbanhumane.org",
      phone: "(708) 755-7387",
      address: {
        address1: "1103 West End Avenue",
        address2: null,
        city: "Chicago Heights",
        state: "IL",
        postcode: "60411",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470381"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/il157"
      }
    }
  },
  {
    id: 55470378,
    organization_id: "NY1419",
    url: "https://www.petfinder.com/cat/bunny-55470378/ny/middle-village/puppy-kitty-ny-city-ny1419/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Short Hair",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: "Black & White / Tuxedo",
      secondary: null,
      tertiary: null
    },
    age: "Young",
    gender: "Female",
    size: "Small",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: false,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Bunny",
    description: "Hi, Im Bunny! Im your dreamgirl! I love to play, socialize with other cats, and to give you lots of...",
    organization_animal_id: "05fc0b31-3d25-418a-91e1-8b0feb8af484",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:14+0000",
    published_at: "2022-05-03T00:06:14+0000",
    distance: null,
    contact: {
      email: "volunteers@puppykittynyc.com",
      phone: null,
      address: {
        address1: null,
        address2: null,
        city: "Middle Village",
        state: "NY",
        postcode: "11379",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470378"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/ny1419"
      }
    }
  },
  {
    id: 55470365,
    organization_id: "CA1707",
    url: "https://www.petfinder.com/cat/pecan-55470365/ca/pleasanton/pleasanton-valley-humane-society-ca1707/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Short Hair",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Baby",
    gender: "Female",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: false,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Pecan",
    description: null,
    organization_animal_id: "49995787",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:12+0000",
    published_at: "2022-05-03T00:06:12+0000",
    distance: null,
    contact: {
      email: null,
      phone: "(925) 426-8656",
      address: {
        address1: "3670 Nevada Street",
        address2: null,
        city: "Pleasanton",
        state: "CA",
        postcode: "94566",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470365"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/ca1707"
      }
    }
  },
  {
    id: 55470366,
    organization_id: "CA1707",
    url: "https://www.petfinder.com/cat/cashew-55470366/ca/pleasanton/pleasanton-valley-humane-society-ca1707/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Short Hair",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Baby",
    gender: "Male",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: true,
      declawed: false,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Cashew",
    description: "Cashew is a sweet and loving kitten. He&amp;#39;s very playful and has made a game out of trying to catch...",
    organization_animal_id: "49995784",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:12+0000",
    published_at: "2022-05-03T00:06:12+0000",
    distance: null,
    contact: {
      email: null,
      phone: "(925) 426-8656",
      address: {
        address1: "3670 Nevada Street",
        address2: null,
        city: "Pleasanton",
        state: "CA",
        postcode: "94566",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470366"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/ca1707"
      }
    }
  },
  {
    id: 55470367,
    organization_id: "CA1707",
    url: "https://www.petfinder.com/cat/macadamia-55470367/ca/pleasanton/pleasanton-valley-humane-society-ca1707/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Short Hair",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Baby",
    gender: "Male",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: true,
      declawed: false,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Macadamia",
    description: "Macadamia is full of energy! This fun-loving boy loves to chase, hide, seek, and play in any way he can....",
    organization_animal_id: "49995782",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:12+0000",
    published_at: "2022-05-03T00:06:12+0000",
    distance: null,
    contact: {
      email: null,
      phone: "(925) 426-8656",
      address: {
        address1: "3670 Nevada Street",
        address2: null,
        city: "Pleasanton",
        state: "CA",
        postcode: "94566",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470367"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/ca1707"
      }
    }
  },
  {
    id: 55470369,
    organization_id: "CA1441",
    url: "https://www.petfinder.com/cat/calla-55470369/ca/palm-springs/palm-springs-animal-shelter-ca1441/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Short Hair",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Young",
    gender: "Female",
    size: "Small",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: false,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Calla",
    description: null,
    organization_animal_id: "50024854",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:12+0000",
    published_at: "2022-05-03T00:06:12+0000",
    distance: null,
    contact: {
      email: "adoption@psanimalshelter.org",
      phone: "(760) 416-5718",
      address: {
        address1: "4575 E. Mesquite Avenue",
        address2: null,
        city: "Palm Springs",
        state: "CA",
        postcode: "92263",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470369"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/ca1441"
      }
    }
  },
  {
    id: 55470370,
    organization_id: "CA1441",
    url: "https://www.petfinder.com/cat/olivia-55470370/ca/palm-springs/palm-springs-animal-shelter-ca1441/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Short Hair",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Young",
    gender: "Female",
    size: "Small",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: false,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Olivia",
    description: null,
    organization_animal_id: "49732476",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:12+0000",
    published_at: "2022-05-03T00:06:12+0000",
    distance: null,
    contact: {
      email: "adoption@psanimalshelter.org",
      phone: "(760) 416-5718",
      address: {
        address1: "4575 E. Mesquite Avenue",
        address2: null,
        city: "Palm Springs",
        state: "CA",
        postcode: "92263",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470370"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/ca1441"
      }
    }
  },
  {
    id: 55470371,
    organization_id: "CA628",
    url: "https://www.petfinder.com/dog/eevie-55470371/ca/madera/madera-county-animal-control-ca628/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "German Shepherd Dog",
      secondary: "Mixed Breed",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Senior",
    gender: "Female",
    size: "Large",
    coat: null,
    attributes: {
      spayed_neutered: false,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Eevie",
    description: null,
    organization_animal_id: "50096602",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:12+0000",
    published_at: "2022-05-03T00:06:12+0000",
    distance: null,
    contact: {
      email: "AnimalControl@MaderaCounty.com",
      phone: "(559) 675-7891",
      address: {
        address1: "205 Tozer Street ",
        address2: null,
        city: "Madera",
        state: "CA",
        postcode: "93638",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470371"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/ca628"
      }
    }
  },
  {
    id: 55470362,
    organization_id: "TX2572",
    url: "https://www.petfinder.com/dog/mistletoe-55470362/tx/caldwell/haven-animal-rescue-of-texas-tx2572/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Hound",
      secondary: "Mixed Breed",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Young",
    gender: "Male",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: true,
      dogs: true,
      cats: true
    },
    tags: [],
    name: "Mistletoe",
    description: "Mistletoe is a joy. He is happy, vocal, and playful. He came to our rescue with his mother and sibling....",
    organization_animal_id: "41d17142-b4b0-4575-a0cd-b942c5ef6194",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:09+0000",
    published_at: "2022-05-03T00:06:09+0000",
    distance: null,
    contact: {
      email: "adoptmeathart@gmail.com",
      phone: "(979) 353-1183",
      address: {
        address1: null,
        address2: null,
        city: "Caldwell",
        state: "TX",
        postcode: "77836",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470362"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/tx2572"
      }
    }
  },
  {
    id: 55470358,
    organization_id: "OH1280",
    url: "https://www.petfinder.com/cat/gypsy-55470358/oh/cuyahoga-falls/tobys-critter-cove-rescue-oh1280/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Tortoiseshell",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Young",
    gender: "Female",
    size: "Small",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: false,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: true,
      dogs: null,
      cats: true
    },
    tags: [],
    name: "Gypsy",
    description: "Gypsy is a very sweet girl, very affectionate and quite the talker. She has had 4 kittens which were recently...",
    organization_animal_id: "18001307-10241",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:06:07+0000",
    published_at: "2022-05-03T00:06:07+0000",
    distance: null,
    contact: {
      email: "tobyscrittercove@gmail.com",
      phone: "(330) 790-1185",
      address: {
        address1: null,
        address2: null,
        city: "Cuyahoga Falls",
        state: "OH",
        postcode: "44221",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470358"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/oh1280"
      }
    }
  },
  {
    id: 55470354,
    organization_id: "ON662",
    url: "https://www.petfinder.com/dog/gabriel-55470354/on/welland/ozzie-to-the-rescue-canada-on662/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Rat Terrier",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Male",
    size: "Small",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: null,
      special_needs: true,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Gabriel",
    description: "Gabriel was hit by a car in Texas. He had a fractured back and both back legs were fractured. Gabriel ...",
    organization_animal_id: "32b9f413-a136-481d-8656-929d4899db25",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:05:59+0000",
    published_at: "2022-05-03T00:05:59+0000",
    distance: null,
    contact: {
      email: "ozzietotherescuecanada@gmail.com",
      phone: null,
      address: {
        address1: null,
        address2: null,
        city: "Welland",
        state: "ON",
        postcode: "L3B 4J6",
        country: "CA"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470354"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/on662"
      }
    }
  },
  {
    id: 55470352,
    organization_id: "PA304",
    url: "https://www.petfinder.com/cat/adam-55470352/pa/greensburg/wayward-whiskers-pa304/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Short Hair",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: "Gray & White",
      secondary: null,
      tertiary: null
    },
    age: "Young",
    gender: "Male",
    size: "Small",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: true,
      declawed: false,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: true
    },
    tags: [],
    name: "Adam",
    description: "Friendly, but a little shy, loves back scratches and playing with his foster brothers.",
    organization_animal_id: "a567ec1b-a6c2-499f-8be7-492d8d7664bc",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:05:25+0000",
    published_at: "2022-05-03T00:05:25+0000",
    distance: null,
    contact: {
      email: "waywardwhiskers15601@gmail.com",
      phone: "(724) 610-9646",
      address: {
        address1: null,
        address2: null,
        city: "Greensburg",
        state: "PA",
        postcode: "15601",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470352"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/pa304"
      }
    }
  },
  {
    id: 55470344,
    organization_id: "AL278",
    url: "https://www.petfinder.com/dog/rigby-55470344/wi/ripon/second-chance-shelter-al278/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Border Collie",
      secondary: "American Staffordshire Terrier",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: "White / Cream",
      secondary: "Red / Chestnut / Orange",
      tertiary: null
    },
    age: "Adult",
    gender: "Male",
    size: "Large",
    coat: "Short",
    attributes: {
      spayed_neutered: true,
      house_trained: true,
      declawed: null,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: null,
      dogs: true,
      cats: false
    },
    tags: [],
    name: "Rigby",
    description: "Rigby is a 2 year old, 65# male pup that is looking for his happily ever after. We are still...",
    organization_animal_id: null,
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470344/1/?bust=1651536305&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470344/1/?bust=1651536305&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470344/1/?bust=1651536305&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470344/1/?bust=1651536305"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470344/2/?bust=1651536306&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470344/2/?bust=1651536306&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470344/2/?bust=1651536306&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470344/2/?bust=1651536306"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470344/3/?bust=1651536307&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470344/3/?bust=1651536307&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470344/3/?bust=1651536307&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470344/3/?bust=1651536307"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470344/1/?bust=1651536305&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470344/1/?bust=1651536305&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470344/1/?bust=1651536305&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470344/1/?bust=1651536305"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:05:08+0000",
    published_at: "2022-05-03T00:05:08+0000",
    distance: null,
    contact: {
      email: "secondchancenorthpetfinder@gmail.com",
      phone: null,
      address: {
        address1: null,
        address2: null,
        city: "Ripon",
        state: "WI",
        postcode: "54971",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470344"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/al278"
      }
    }
  },
  {
    id: 55470343,
    organization_id: "CA2569",
    url: "https://www.petfinder.com/dog/winnie-55470343/ca/yreka/siskiyou-county-animal-control-ca2569/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Corgi",
      secondary: "Shepherd",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: "Red / Chestnut / Orange",
      secondary: "Black",
      tertiary: null
    },
    age: "Young",
    gender: "Female",
    size: "Medium",
    coat: "Medium",
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [
      "Friendly",
      "Affectionate",
      "Playful",
      "Smart",
      "Protective",
      "Curious",
      "Athletic"
    ],
    name: "Winnie",
    description: "Winnie is as adorable as they come! She has lived with other dogs and enjoys her time with people once...",
    organization_animal_id: "22532",
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470343/1/?bust=1651536287&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470343/1/?bust=1651536287&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470343/1/?bust=1651536287&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470343/1/?bust=1651536287"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470343/2/?bust=1651536288&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470343/2/?bust=1651536288&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470343/2/?bust=1651536288&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470343/2/?bust=1651536288"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470343/1/?bust=1651536287&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470343/1/?bust=1651536287&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470343/1/?bust=1651536287&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470343/1/?bust=1651536287"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:04:49+0000",
    published_at: "2022-05-03T00:04:49+0000",
    distance: null,
    contact: {
      email: "shoffman@co.siskiyou.ca.us",
      phone: "(530) 841-4028",
      address: {
        address1: "550 South Foothill Drive",
        address2: null,
        city: "Yreka",
        state: "CA",
        postcode: "96097",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470343"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/ca2569"
      }
    }
  },
  {
    id: 55470342,
    organization_id: "MO743",
    url: "https://www.petfinder.com/dog/ted-55470342/mo/eldon/pigs-pals-and-posies-mo743/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Standard Poodle",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: "White / Cream",
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Male",
    size: "Medium",
    coat: "Short",
    attributes: {
      spayed_neutered: true,
      house_trained: true,
      declawed: null,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: true,
      dogs: true,
      cats: null
    },
    tags: [
      "Friendly",
      "Affectionate",
      "Loyal",
      "Playful",
      "Smart",
      "Curious",
      "Funny",
      "Quiet",
      "Loves kisses"
    ],
    name: "Ted",
    description: "Ted is a 5-year-old Standard Poodle needing a new home. He grew up on a farm and loves looking at...",
    organization_animal_id: null,
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470342/1/?bust=1651536268&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470342/1/?bust=1651536268&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470342/1/?bust=1651536268&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470342/1/?bust=1651536268"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470342/1/?bust=1651536268&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470342/1/?bust=1651536268&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470342/1/?bust=1651536268&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470342/1/?bust=1651536268"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:04:29+0000",
    published_at: "2022-05-03T00:04:29+0000",
    distance: null,
    contact: {
      email: "aheldman@diamondpet.com",
      phone: "(614) 284-8455",
      address: {
        address1: null,
        address2: null,
        city: "Eldon",
        state: "MO",
        postcode: "65026",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470342"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/mo743"
      }
    }
  },
  {
    id: 55470341,
    organization_id: "IN274",
    url: "https://www.petfinder.com/dog/daisy-55470341/in/mt-vernon/pc-pound-puppies-in274/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Silky Terrier",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Senior",
    gender: "Female",
    size: "Small",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: true,
      declawed: null,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: null,
      dogs: false,
      cats: false
    },
    tags: [],
    name: "Daisy",
    description: "Daisy! DOB: 4/2012 Weight: 12-14lbs Meet Daisy! Please read the entire bio before applying to adopt. Daisy is a senior Silky ...",
    organization_animal_id: "18001296",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:04:20+0000",
    published_at: "2022-05-03T00:04:20+0000",
    distance: null,
    contact: {
      email: "pc_poundpuppies@yahoo.com",
      phone: "812-483-4341 ",
      address: {
        address1: "PO Box 295",
        address2: null,
        city: "Mt. Vernon",
        state: "IN",
        postcode: "47620",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470341"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/in274"
      }
    }
  },
  {
    id: 55470338,
    organization_id: "IL943",
    url: "https://www.petfinder.com/dog/river-55470338/il/crystal-lake/paws-and-affect-animal-rescue-il943/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Shepherd",
      secondary: "Australian Cattle Dog / Blue Heeler",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Young",
    gender: "Male",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: true,
      declawed: null,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: true,
      dogs: true,
      cats: null
    },
    tags: [
      "Friendly",
      "Affectionate",
      "Smart",
      "Quiet",
      "Playful",
      "Curious",
      "Loves kisses",
      "Funny",
      "Loyal",
      "Gentle",
      "Couch potato",
      "Athletic"
    ],
    name: "River",
    description: "Meet River! River is a 1-2 year old male Shepherd maybe Heeler mix.  He is good with dogs and all ...",
    organization_animal_id: null,
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470338/1/?bust=1651536222&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470338/1/?bust=1651536222&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470338/1/?bust=1651536222&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470338/1/?bust=1651536222"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470338/2/?bust=1651536223&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470338/2/?bust=1651536223&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470338/2/?bust=1651536223&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470338/2/?bust=1651536223"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470338/3/?bust=1651536224&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470338/3/?bust=1651536224&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470338/3/?bust=1651536224&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470338/3/?bust=1651536224"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470338/4/?bust=1651536225&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470338/4/?bust=1651536225&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470338/4/?bust=1651536225&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470338/4/?bust=1651536225"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470338/5/?bust=1651536225&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470338/5/?bust=1651536225&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470338/5/?bust=1651536225&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470338/5/?bust=1651536225"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470338/6/?bust=1651536226&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470338/6/?bust=1651536226&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470338/6/?bust=1651536226&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470338/6/?bust=1651536226"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470338/1/?bust=1651536222&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470338/1/?bust=1651536222&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470338/1/?bust=1651536222&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470338/1/?bust=1651536222"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:03:47+0000",
    published_at: "2022-05-03T00:03:47+0000",
    distance: null,
    contact: {
      email: "care@pawsandaffectrescue.org",
      phone: "(847) 875-9254",
      address: {
        address1: null,
        address2: null,
        city: "Crystal Lake",
        state: "IL",
        postcode: "60014",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470338"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/il943"
      }
    }
  },
  {
    id: 55470337,
    organization_id: "PA1035",
    url: "https://www.petfinder.com/dog/flopsy-and-mopsy-55470337/pa/chester-springs/1love4animals-inc-pa1035/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Pug",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: "Apricot / Beige",
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Female",
    size: "Small",
    coat: "Short",
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: true,
      dogs: true,
      cats: true
    },
    tags: [
      "Friendly",
      "Loves kisses",
      "Gentle",
      "Playful",
      "Funny"
    ],
    name: "Flopsy and Mopsy",
    description: "Flopsy and Mopsy arrived on Easter. Two sisters from the land of puppy mills, deep in the mountains of Pennsylvania....",
    organization_animal_id: null,
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470337/1/?bust=1651536210&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470337/1/?bust=1651536210&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470337/1/?bust=1651536210&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470337/1/?bust=1651536210"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470337/1/?bust=1651536210&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470337/1/?bust=1651536210&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470337/1/?bust=1651536210&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470337/1/?bust=1651536210"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:03:32+0000",
    published_at: "2022-05-03T00:03:32+0000",
    distance: null,
    contact: {
      email: "JenZ4Animals@gmail.com",
      phone: "(610) 405-1514",
      address: {
        address1: null,
        address2: null,
        city: "Chester Springs",
        state: "PA",
        postcode: "19425",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470337"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/pa1035"
      }
    }
  },
  {
    id: 55470336,
    organization_id: "ME155",
    url: "https://www.petfinder.com/cat/ayesha-55470336/me/winthrop/protectors-of-animal-lives-society-pals-me155/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Short Hair",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: "Black & White / Tuxedo",
      secondary: null,
      tertiary: null
    },
    age: "Baby",
    gender: "Female",
    size: "Medium",
    coat: "Short",
    attributes: {
      spayed_neutered: true,
      house_trained: true,
      declawed: false,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: true,
      dogs: null,
      cats: true
    },
    tags: [],
    name: "Ayesha",
    description: "Ayesha is a 9 week old female.  She is very friendly and playful and should do well in most homes....",
    organization_animal_id: null,
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:03:22+0000",
    published_at: "2022-05-03T00:03:22+0000",
    distance: null,
    contact: {
      email: "palsnokillshelter@yahoo.com",
      phone: "(207) 395-4274",
      address: {
        address1: "188 Case Road",
        address2: null,
        city: "Winthrop",
        state: "ME",
        postcode: "04364",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470336"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/me155"
      }
    }
  },
  {
    id: 55470330,
    organization_id: "FL1679",
    url: "https://www.petfinder.com/dog/angelina-55470330/fl/tampa/mercy-full-project-fl1679/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Cattle Dog",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: "Bicolor",
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Female",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: false,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: true,
      dogs: null,
      cats: null
    },
    tags: [
      "Gentle and Friendly"
    ],
    name: "Angelina",
    description: "My name is Angelina. They don&amp;#39;t know too much about me yet except that I&amp;#39;m sweet and loving. I&amp;#39;d love...",
    organization_animal_id: "24107",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:02:15+0000",
    published_at: "2022-05-03T00:02:15+0000",
    distance: null,
    contact: {
      email: "Info@mercyfullprojects.org",
      phone: null,
      address: {
        address1: null,
        address2: null,
        city: "Tampa",
        state: "FL",
        postcode: "33602",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470330"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/fl1679"
      }
    }
  },
  {
    id: 55470331,
    organization_id: "FL1679",
    url: "https://www.petfinder.com/dog/huey-55470331/fl/tampa/mercy-full-project-fl1679/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Cattle Dog",
      secondary: "Mixed Breed",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: "Yellow / Tan / Blond / Fawn",
      secondary: null,
      tertiary: null
    },
    age: "Baby",
    gender: "Male",
    size: "Small",
    coat: null,
    attributes: {
      spayed_neutered: false,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: true,
      dogs: true,
      cats: true
    },
    tags: [
      "Playful"
    ],
    name: "Huey",
    description: "My name is Huey and I&amp;#39;m just a pup learning what I like and don&amp;#39;t like. I will require exercise...",
    organization_animal_id: "24102",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:02:15+0000",
    published_at: "2022-05-03T00:02:15+0000",
    distance: null,
    contact: {
      email: "Info@mercyfullprojects.org",
      phone: null,
      address: {
        address1: null,
        address2: null,
        city: "Tampa",
        state: "FL",
        postcode: "33602",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470331"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/fl1679"
      }
    }
  },
  {
    id: 55470332,
    organization_id: "FL1679",
    url: "https://www.petfinder.com/dog/samson-55470332/fl/tampa/mercy-full-project-fl1679/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Great Dane",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: "Black",
      secondary: null,
      tertiary: null
    },
    age: "Young",
    gender: "Male",
    size: "Extra Large",
    coat: null,
    attributes: {
      spayed_neutered: false,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: false,
      cats: null
    },
    tags: [
      "Gentle and Friendly"
    ],
    name: "Samson",
    description: "My name is Samson. I&amp;#39;m looking for a home that has had my breed before. Who knows what they are...",
    organization_animal_id: "24119",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:02:15+0000",
    published_at: "2022-05-03T00:02:15+0000",
    distance: null,
    contact: {
      email: "Info@mercyfullprojects.org",
      phone: null,
      address: {
        address1: null,
        address2: null,
        city: "Tampa",
        state: "FL",
        postcode: "33602",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470332"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/fl1679"
      }
    }
  },
  {
    id: 55470329,
    organization_id: "ME155",
    url: "https://www.petfinder.com/cat/quill-55470329/me/winthrop/protectors-of-animal-lives-society-pals-me155/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Short Hair",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: "Tabby (Brown / Chocolate)",
      secondary: "White",
      tertiary: null
    },
    age: "Baby",
    gender: "Male",
    size: "Medium",
    coat: "Short",
    attributes: {
      spayed_neutered: true,
      house_trained: true,
      declawed: false,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: true,
      dogs: null,
      cats: true
    },
    tags: [],
    name: "Quill",
    description: "Quill is a 9 week old male.  He is very friendly and playful and should do well in most homes....",
    organization_animal_id: null,
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:02:13+0000",
    published_at: "2022-05-03T00:02:13+0000",
    distance: null,
    contact: {
      email: "palsnokillshelter@yahoo.com",
      phone: "(207) 395-4274",
      address: {
        address1: "188 Case Road",
        address2: null,
        city: "Winthrop",
        state: "ME",
        postcode: "04364",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470329"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/me155"
      }
    }
  },
  {
    id: 55470326,
    organization_id: "CO91",
    url: "https://www.petfinder.com/cat/dolly-55470326/co/golden/foothills-animal-shelter-co91/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Short Hair",
      secondary: null,
      mixed: true,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Female",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: false,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Dolly",
    description: "Foothills Animal Shelter is proud to support our shelter partners in Colorado and beyond by providing adoption opportunities to pets...",
    organization_animal_id: "247760",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:01:17+0000",
    published_at: "2022-05-03T00:01:17+0000",
    distance: null,
    contact: {
      email: "info@fas4pets.org",
      phone: "(303) 278-7575",
      address: {
        address1: "580 McIntyre St (new)",
        address2: null,
        city: "Golden",
        state: "CO",
        postcode: "80401",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470326"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/co91"
      }
    }
  },
  {
    id: 55470324,
    organization_id: "CA440",
    url: "https://www.petfinder.com/dog/kappa-55470324/ca/novato/marin-humane-society-ca440/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "German Shepherd Dog",
      secondary: null,
      mixed: true,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Baby",
    gender: "Female",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Kappa",
    description: "Primary Color: Black Secondary Color: Tan Points Weight: 16.6lbs Age: 0yrs 3mths 0wks Animal has been Spayed",
    organization_animal_id: "272193",
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:01:10+0000",
    published_at: "2022-05-03T00:01:10+0000",
    distance: null,
    contact: {
      email: "adoptions@marinhumanesociety.org",
      phone: "415 506-6225 ",
      address: {
        address1: "171 Bel Marin Keys Blvd",
        address2: null,
        city: "Novato",
        state: "CA",
        postcode: "94949",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470324"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/ca440"
      }
    }
  },
  {
    id: 55470323,
    organization_id: "IL943",
    url: "https://www.petfinder.com/dog/peanut-55470323/il/crystal-lake/paws-and-affect-animal-rescue-il943/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Hound",
      secondary: null,
      mixed: true,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Baby",
    gender: "Female",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: false,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: true,
      dogs: true,
      cats: true
    },
    tags: [
      "Friendly",
      "Affectionate",
      "Playful",
      "Athletic",
      "Smart",
      "Loves kisses",
      "Funny"
    ],
    name: "Peanut",
    description: "Meet Peanut! Peanut is an 8 week old female possible hound mix. They definitely have something smaller in them. They ...",
    organization_animal_id: null,
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470323/1/?bust=1651536048&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470323/1/?bust=1651536048&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470323/1/?bust=1651536048&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470323/1/?bust=1651536048"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470323/2/?bust=1651536049&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470323/2/?bust=1651536049&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470323/2/?bust=1651536049&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470323/2/?bust=1651536049"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470323/1/?bust=1651536048&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470323/1/?bust=1651536048&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470323/1/?bust=1651536048&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470323/1/?bust=1651536048"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:00:50+0000",
    published_at: "2022-05-03T00:00:50+0000",
    distance: null,
    contact: {
      email: "care@pawsandaffectrescue.org",
      phone: "(847) 875-9254",
      address: {
        address1: null,
        address2: null,
        city: "Crystal Lake",
        state: "IL",
        postcode: "60014",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470323"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/il943"
      }
    }
  },
  {
    id: 55470321,
    organization_id: "CO327",
    url: "https://www.petfinder.com/cat/mira-55470321/co/littleton/humane-society-of-the-south-platte-valley-co327/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Short Hair",
      secondary: null,
      mixed: true,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Young",
    gender: "Female",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: false,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Mira",
    description: "Hi there, my name is Mira! I am a beautiful young lady with a sweet demeanor. I am social, affectionate,...",
    organization_animal_id: "45544",
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470321/1/?bust=1651536655&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470321/1/?bust=1651536655&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470321/1/?bust=1651536655&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470321/1/?bust=1651536655"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470321/1/?bust=1651536655&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470321/1/?bust=1651536655&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470321/1/?bust=1651536655&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470321/1/?bust=1651536655"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:00:47+0000",
    published_at: "2022-05-03T00:00:47+0000",
    distance: null,
    contact: {
      email: "info@hsspv.org",
      phone: "303-703-2938",
      address: {
        address1: "2129 W. Chenango Ave., Unit A",
        address2: null,
        city: "Littleton",
        state: "CO",
        postcode: "80120",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470321"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/co327"
      }
    }
  },
  {
    id: 55470320,
    organization_id: "CO327",
    url: "https://www.petfinder.com/cat/maggie-55470320/co/littleton/humane-society-of-the-south-platte-valley-co327/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Medium Hair",
      secondary: null,
      mixed: true,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Female",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: false,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Maggie",
    description: "Hi there, my name is Maggie! I am a gorgeous young lady with a kind heart. I am social, affectionate,...",
    organization_animal_id: "45548",
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470320/1/?bust=1651536655&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470320/1/?bust=1651536655&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470320/1/?bust=1651536655&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470320/1/?bust=1651536655"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470320/1/?bust=1651536655&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470320/1/?bust=1651536655&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470320/1/?bust=1651536655&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470320/1/?bust=1651536655"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:00:47+0000",
    published_at: "2022-05-03T00:00:47+0000",
    distance: null,
    contact: {
      email: "info@hsspv.org",
      phone: "303-703-2938",
      address: {
        address1: "2129 W. Chenango Ave., Unit A",
        address2: null,
        city: "Littleton",
        state: "CO",
        postcode: "80120",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470320"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/co327"
      }
    }
  },
  {
    id: 55470322,
    organization_id: "CO327",
    url: "https://www.petfinder.com/cat/ronin-55470322/co/littleton/humane-society-of-the-south-platte-valley-co327/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Short Hair",
      secondary: null,
      mixed: true,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Young",
    gender: "Male",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: false,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Ronin",
    description: "Hi there, my name is Ronin! I am a handsome young man with a sweet demeanor. I am social, affectionate,...",
    organization_animal_id: "45543",
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470322/1/?bust=1651536655&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470322/1/?bust=1651536655&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470322/1/?bust=1651536655&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470322/1/?bust=1651536655"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470322/1/?bust=1651536655&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470322/1/?bust=1651536655&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470322/1/?bust=1651536655&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470322/1/?bust=1651536655"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:00:47+0000",
    published_at: "2022-05-03T00:00:47+0000",
    distance: null,
    contact: {
      email: "info@hsspv.org",
      phone: "303-703-2938",
      address: {
        address1: "2129 W. Chenango Ave., Unit A",
        address2: null,
        city: "Littleton",
        state: "CO",
        postcode: "80120",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470322"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/co327"
      }
    }
  },
  {
    id: 55470319,
    organization_id: "MD255",
    url: "https://www.petfinder.com/cat/moose-55470319/md/gaithersburg/animal-welfare-league-of-montgomery-county-md255/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Short Hair",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Male",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: false,
      house_trained: false,
      declawed: false,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [
      "Social and Friendly"
    ],
    name: "Moose",
    description: "There is absolutely nothing I, Moose, have in common with my namesake in the wild! I am a low-key, loving...",
    organization_animal_id: "21658",
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470319/1/?bust=1651536646&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470319/1/?bust=1651536646&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470319/1/?bust=1651536646&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470319/1/?bust=1651536646"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470319/1/?bust=1651536646&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470319/1/?bust=1651536646&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470319/1/?bust=1651536646&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470319/1/?bust=1651536646"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:00:43+0000",
    published_at: "2022-05-03T00:00:43+0000",
    distance: null,
    contact: {
      email: "adopt@awlmc.org",
      phone: "(301) 740-2511",
      address: {
        address1: "12 Park Ave",
        address2: null,
        city: "Gaithersburg",
        state: "MD",
        postcode: "20898",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470319"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/md255"
      }
    }
  },
  {
    id: 55470318,
    organization_id: "MD255",
    url: "https://www.petfinder.com/cat/bear-55470318/md/gaithersburg/animal-welfare-league-of-montgomery-county-md255/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Short Hair",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: "Black",
      tertiary: null
    },
    age: "Adult",
    gender: "Male",
    size: "Large",
    coat: null,
    attributes: {
      spayed_neutered: false,
      house_trained: false,
      declawed: false,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: null,
      dogs: null,
      cats: true
    },
    tags: [
      "Social and Friendly"
    ],
    name: "Bear",
    description: "Would you like to meet a cat thats also a big, sweet teddy bear? Look no further, because thats me,...",
    organization_animal_id: "21635",
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470318/1/?bust=1651536647&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470318/1/?bust=1651536647&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470318/1/?bust=1651536647&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470318/1/?bust=1651536647"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470318/2/?bust=1651536646&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470318/2/?bust=1651536646&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470318/2/?bust=1651536646&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470318/2/?bust=1651536646"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470318/1/?bust=1651536647&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470318/1/?bust=1651536647&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470318/1/?bust=1651536647&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470318/1/?bust=1651536647"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:00:43+0000",
    published_at: "2022-05-03T00:00:43+0000",
    distance: null,
    contact: {
      email: "adopt@awlmc.org",
      phone: "(301) 740-2511",
      address: {
        address1: "12 Park Ave",
        address2: null,
        city: "Gaithersburg",
        state: "MD",
        postcode: "20898",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470318"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/md255"
      }
    }
  },
  {
    id: 55470314,
    organization_id: "MN254",
    url: "https://www.petfinder.com/dog/ace-of-spades-55470314/mn/minneapolis/save-a-bull-mn254/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "American Staffordshire Terrier",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: "White / Cream",
      secondary: null,
      tertiary: null
    },
    age: "Young",
    gender: "Male",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: null,
      dogs: true,
      cats: true
    },
    tags: [],
    name: "Ace of Spades",
    description: "Hi, my name is Ace of Spades. Im all white with blue on my ears and I have the biggest...",
    organization_animal_id: "21211",
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470314/1/?bust=1651536635&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470314/1/?bust=1651536635&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470314/1/?bust=1651536635&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470314/1/?bust=1651536635"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470314/2/?bust=1651536639&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470314/2/?bust=1651536639&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470314/2/?bust=1651536639&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470314/2/?bust=1651536639"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470314/3/?bust=1651536639&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470314/3/?bust=1651536639&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470314/3/?bust=1651536639&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470314/3/?bust=1651536639"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470314/4/?bust=1651536631&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470314/4/?bust=1651536631&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470314/4/?bust=1651536631&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470314/4/?bust=1651536631"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470314/5/?bust=1651536638&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470314/5/?bust=1651536638&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470314/5/?bust=1651536638&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470314/5/?bust=1651536638"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470314/1/?bust=1651536635&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470314/1/?bust=1651536635&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470314/1/?bust=1651536635&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470314/1/?bust=1651536635"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:00:27+0000",
    published_at: "2022-05-03T00:00:27+0000",
    distance: null,
    contact: {
      email: "adoption@saveabullmn.org",
      phone: null,
      address: {
        address1: null,
        address2: null,
        city: "Minneapolis",
        state: "MN",
        postcode: "55407",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470314"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/mn254"
      }
    }
  },
  {
    id: 55470309,
    organization_id: "CT609",
    url: "https://www.petfinder.com/dog/choc-chip-cookie-55470309/ct/griswold/all-paws-on-deck-inc-ct609/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Jack Russell Terrier",
      secondary: "Labrador Retriever",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: "White / Cream",
      secondary: "Black",
      tertiary: null
    },
    age: "Baby",
    gender: "Male",
    size: "Small",
    coat: null,
    attributes: {
      spayed_neutered: false,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: true,
      dogs: true,
      cats: true
    },
    tags: [
      "Good with Cats",
      "Good with Dogs",
      "Good with Kids"
    ],
    name: "Choc Chip Cookie",
    description: "Meet Cookie&amp;#39;s puppies!  Little chunky puppies could be a mix of terriers, bulldogs, cattle dogs... we guess they will be ...",
    organization_animal_id: "APCT-A-317",
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470309/1/?bust=1651536620&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470309/1/?bust=1651536620&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470309/1/?bust=1651536620&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470309/1/?bust=1651536620"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470309/2/?bust=1651536618&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470309/2/?bust=1651536618&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470309/2/?bust=1651536618&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470309/2/?bust=1651536618"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470309/3/?bust=1651536621&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470309/3/?bust=1651536621&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470309/3/?bust=1651536621&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470309/3/?bust=1651536621"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470309/4/?bust=1651536620&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470309/4/?bust=1651536620&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470309/4/?bust=1651536620&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470309/4/?bust=1651536620"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470309/1/?bust=1651536620&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470309/1/?bust=1651536620&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470309/1/?bust=1651536620&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470309/1/?bust=1651536620"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:00:13+0000",
    published_at: "2022-05-03T00:00:13+0000",
    distance: null,
    contact: {
      email: "donations@allpawsondeck.org",
      phone: null,
      address: {
        address1: null,
        address2: null,
        city: "Griswold",
        state: "CT",
        postcode: "06351",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470309"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/ct609"
      }
    }
  },
  {
    id: 55470308,
    organization_id: "CT609",
    url: "https://www.petfinder.com/dog/bailey-aka-fluffy-55470308/ct/griswold/all-paws-on-deck-inc-ct609/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Dachshund",
      secondary: "Cocker Spaniel",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: "Apricot / Beige",
      secondary: null,
      tertiary: null
    },
    age: "Young",
    gender: "Male",
    size: "Small",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: true,
      declawed: null,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: true,
      dogs: true,
      cats: true
    },
    tags: [
      "Good with Cats",
      "Good with Dogs",
      "Good with Kids",
      "Housetrained"
    ],
    name: "Bailey aka Fluffy",
    description: "Bailey aka Fluffy is a neutered male, 7 months old, only 17lbs.  We don&amp;#39;t know much about his personality yet ...",
    organization_animal_id: "APCT-A-322",
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470308/1/?bust=1651536618&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470308/1/?bust=1651536618&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470308/1/?bust=1651536618&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470308/1/?bust=1651536618"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470308/2/?bust=1651536620&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470308/2/?bust=1651536620&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470308/2/?bust=1651536620&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470308/2/?bust=1651536620"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470308/3/?bust=1651536619&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470308/3/?bust=1651536619&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470308/3/?bust=1651536619&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470308/3/?bust=1651536619"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470308/1/?bust=1651536618&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470308/1/?bust=1651536618&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470308/1/?bust=1651536618&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470308/1/?bust=1651536618"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-03T00:00:13+0000",
    published_at: "2022-05-03T00:00:13+0000",
    distance: null,
    contact: {
      email: "donations@allpawsondeck.org",
      phone: null,
      address: {
        address1: null,
        address2: null,
        city: "Griswold",
        state: "CT",
        postcode: "06351",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470308"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/ct609"
      }
    }
  },
  {
    id: 55470305,
    organization_id: "CO202",
    url: "https://www.petfinder.com/dog/ralphie-55470305/co/aurora/animal-rescue-of-the-rockies-co202/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Chihuahua",
      secondary: null,
      mixed: true,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Young",
    gender: "Male",
    size: "Small",
    coat: null,
    attributes: {
      spayed_neutered: false,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Ralphie",
    description: "Hi, I&amp;#39;m Ralphie. More information coming soon! Animal Rescue of the Rockies believes every pet should find a wonderful and ...",
    organization_animal_id: "18001303",
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470305/1/?bust=1651536618&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470305/1/?bust=1651536618&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470305/1/?bust=1651536618&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470305/1/?bust=1651536618"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470305/1/?bust=1651536618&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470305/1/?bust=1651536618&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470305/1/?bust=1651536618&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470305/1/?bust=1651536618"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-02T23:59:52+0000",
    published_at: "2022-05-02T23:59:52+0000",
    distance: null,
    contact: {
      email: "admin@arrcolorado.org",
      phone: "(970) 389-8324",
      address: {
        address1: null,
        address2: null,
        city: "Aurora",
        state: "CO",
        postcode: "80012",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470305"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/co202"
      }
    }
  },
  {
    id: 55470303,
    organization_id: "MO519",
    url: "https://www.petfinder.com/dog/oreo-55470303/mo/fenton/4-paws-4-rescue-mo519/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Shepherd",
      secondary: null,
      mixed: true,
      unknown: false
    },
    colors: {
      primary: null,
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Female",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: true,
      declawed: null,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: true,
      dogs: true,
      cats: true
    },
    tags: [],
    name: "Oreo",
    description: null,
    organization_animal_id: "17977867",
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470303/1/?bust=1651536587&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470303/1/?bust=1651536587&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470303/1/?bust=1651536587&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470303/1/?bust=1651536587"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470303/2/?bust=1651536587&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470303/2/?bust=1651536587&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470303/2/?bust=1651536587&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470303/2/?bust=1651536587"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470303/3/?bust=1651536592&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470303/3/?bust=1651536592&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470303/3/?bust=1651536592&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470303/3/?bust=1651536592"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470303/1/?bust=1651536587&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470303/1/?bust=1651536587&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470303/1/?bust=1651536587&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470303/1/?bust=1651536587"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-02T23:59:41+0000",
    published_at: "2022-05-02T23:59:41+0000",
    distance: null,
    contact: {
      email: "adopt@4paws4rescue.com",
      phone: "(314) 420-7930",
      address: {
        address1: null,
        address2: null,
        city: "Fenton",
        state: "MO",
        postcode: "63026",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470303"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/mo519"
      }
    }
  },
  {
    id: 55470302,
    organization_id: "OK473",
    url: "https://www.petfinder.com/dog/barnini-55470302/ok/tulsa/bixby-animal-rescue-network-ok473/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "German Shepherd Dog",
      secondary: null,
      mixed: true,
      unknown: false
    },
    colors: {
      primary: "Bicolor",
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Female",
    size: "Large",
    coat: "Medium",
    attributes: {
      spayed_neutered: true,
      house_trained: true,
      declawed: null,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: true,
      dogs: null,
      cats: null
    },
    tags: [
      "Friendly",
      "Affectionate",
      "Gentle",
      "Smart",
      "Curious",
      "Couch potato",
      "Quiet",
      "Loves kisses"
    ],
    name: "Barnini",
    description: "Very sweet and a hugger ? She&#039;s a big snuggle buddy and great on a leash. She&#039;s crate trained and...",
    organization_animal_id: null,
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470302/1/?bust=1651535969&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470302/1/?bust=1651535969&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470302/1/?bust=1651535969&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470302/1/?bust=1651535969"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470302/2/?bust=1651535970&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470302/2/?bust=1651535970&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470302/2/?bust=1651535970&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470302/2/?bust=1651535970"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470302/3/?bust=1651535972&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470302/3/?bust=1651535972&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470302/3/?bust=1651535972&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470302/3/?bust=1651535972"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470302/4/?bust=1651535974&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470302/4/?bust=1651535974&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470302/4/?bust=1651535974&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470302/4/?bust=1651535974"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470302/5/?bust=1651535976&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470302/5/?bust=1651535976&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470302/5/?bust=1651535976&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470302/5/?bust=1651535976"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470302/6/?bust=1651535977&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470302/6/?bust=1651535977&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470302/6/?bust=1651535977&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470302/6/?bust=1651535977"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470302/1/?bust=1651535969&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470302/1/?bust=1651535969&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470302/1/?bust=1651535969&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470302/1/?bust=1651535969"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-02T23:59:38+0000",
    published_at: "2022-05-02T23:59:38+0000",
    distance: null,
    contact: {
      email: "barn74008@gmail.com",
      phone: "(918) 955-1914",
      address: {
        address1: null,
        address2: null,
        city: "Tulsa",
        state: "OK",
        postcode: "74133",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470302"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/ok473"
      }
    }
  },
  {
    id: 55470301,
    organization_id: "WA7",
    url: "https://www.petfinder.com/cat/marilyn-55470301/wa/bellingham/whatcom-humane-society-wa7/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Short Hair",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: "Black",
      secondary: "White",
      tertiary: null
    },
    age: "Young",
    gender: "Female",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: false,
      house_trained: true,
      declawed: false,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: true,
      dogs: null,
      cats: null
    },
    tags: [
      "Sweet",
      "Gentle",
      "Chatty",
      "Lovey Dovey"
    ],
    name: "Marilyn",
    description: "Hi, my name is Marilyn! Here is what would work best for me in my new home:-Personality: Super sweet, ...",
    organization_animal_id: null,
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470301/1/?bust=1651535953&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470301/1/?bust=1651535953&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470301/1/?bust=1651535953&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470301/1/?bust=1651535953"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470301/1/?bust=1651535953&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470301/1/?bust=1651535953&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470301/1/?bust=1651535953&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470301/1/?bust=1651535953"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-02T23:59:15+0000",
    published_at: "2022-05-02T23:59:15+0000",
    distance: null,
    contact: {
      email: "adoptions@whatcomhumane.org",
      phone: "(360) 733-2080 ext. 0",
      address: {
        address1: "2172 Division Street",
        address2: null,
        city: "Bellingham",
        state: "WA",
        postcode: "98226",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470301"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/wa7"
      }
    }
  },
  {
    id: 55470295,
    organization_id: "ME155",
    url: "https://www.petfinder.com/cat/streaks-55470295/me/winthrop/protectors-of-animal-lives-society-pals-me155/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Medium Hair",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: "Black & White / Tuxedo",
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Male",
    size: "Medium",
    coat: "Medium",
    attributes: {
      spayed_neutered: true,
      house_trained: true,
      declawed: false,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: true,
      dogs: null,
      cats: true
    },
    tags: [],
    name: "Streaks",
    description: "Streaks is a 4 year old male who came to the shelter with his three brothers.  He is very friendly...",
    organization_animal_id: null,
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-02T23:58:07+0000",
    published_at: "2022-05-02T23:58:07+0000",
    distance: null,
    contact: {
      email: "palsnokillshelter@yahoo.com",
      phone: "(207) 395-4274",
      address: {
        address1: "188 Case Road",
        address2: null,
        city: "Winthrop",
        state: "ME",
        postcode: "04364",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470295"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/me155"
      }
    }
  },
  {
    id: 55470294,
    organization_id: "ME155",
    url: "https://www.petfinder.com/cat/rolo-55470294/me/winthrop/protectors-of-animal-lives-society-pals-me155/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Medium Hair",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: "Black & White / Tuxedo",
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Male",
    size: "Medium",
    coat: "Medium",
    attributes: {
      spayed_neutered: true,
      house_trained: true,
      declawed: false,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: true,
      dogs: null,
      cats: true
    },
    tags: [],
    name: "Rolo",
    description: "Rolo is a 4 year old male who came to the shelter with his three brothers.  He is very friendly...",
    organization_animal_id: null,
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-02T23:57:43+0000",
    published_at: "2022-05-02T23:57:43+0000",
    distance: null,
    contact: {
      email: "palsnokillshelter@yahoo.com",
      phone: "(207) 395-4274",
      address: {
        address1: "188 Case Road",
        address2: null,
        city: "Winthrop",
        state: "ME",
        postcode: "04364",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470294"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/me155"
      }
    }
  },
  {
    id: 55470293,
    organization_id: "NY187",
    url: "https://www.petfinder.com/dog/bagoo-courtesy-listing-55470293/ny/harrison/pet-rescue-ny187/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Pit Bull Terrier",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: "Black",
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Male",
    size: "Large",
    coat: "Short",
    attributes: {
      spayed_neutered: false,
      house_trained: true,
      declawed: null,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: null,
      dogs: true,
      cats: null
    },
    tags: [
      "Friendly",
      "Playful",
      "Loving"
    ],
    name: "Bagoo- Courtesy Listing",
    description: "Bagoo is a sweet, lovable boy.  He is a social dog who loves to go on walks. Bagoo is friendly,...",
    organization_animal_id: null,
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470293/1/?bust=1651535851&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470293/1/?bust=1651535851&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470293/1/?bust=1651535851&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470293/1/?bust=1651535851"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470293/2/?bust=1651535852&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470293/2/?bust=1651535852&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470293/2/?bust=1651535852&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470293/2/?bust=1651535852"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470293/1/?bust=1651535851&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470293/1/?bust=1651535851&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470293/1/?bust=1651535851&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470293/1/?bust=1651535851"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-02T23:57:33+0000",
    published_at: "2022-05-02T23:57:33+0000",
    distance: null,
    contact: {
      email: "nypetrescue@gmail.com",
      phone: "(914) 835-3332",
      address: {
        address1: "7 Harrison Avenue",
        address2: null,
        city: "Harrison",
        state: "NY",
        postcode: "10528",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470293"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/ny187"
      }
    }
  },
  {
    id: 55470291,
    organization_id: "ME155",
    url: "https://www.petfinder.com/cat/cookie-55470291/me/winthrop/protectors-of-animal-lives-society-pals-me155/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Medium Hair",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: "Black & White / Tuxedo",
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Male",
    size: "Medium",
    coat: "Medium",
    attributes: {
      spayed_neutered: true,
      house_trained: true,
      declawed: false,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: true,
      dogs: null,
      cats: true
    },
    tags: [],
    name: "Cookie",
    description: "Cookie is a 4 year old male who came to the shelter with his three brothers.  He is very friendly...",
    organization_animal_id: null,
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-02T23:57:16+0000",
    published_at: "2022-05-02T23:57:16+0000",
    distance: null,
    contact: {
      email: "palsnokillshelter@yahoo.com",
      phone: "(207) 395-4274",
      address: {
        address1: "188 Case Road",
        address2: null,
        city: "Winthrop",
        state: "ME",
        postcode: "04364",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470291"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/me155"
      }
    }
  },
  {
    id: 55470281,
    organization_id: "PR17",
    url: "https://www.petfinder.com/dog/kiki-55470281/pr/loiza/amigos-de-los-animales-pr17/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Pomeranian",
      secondary: "Chihuahua",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: "Bicolor",
      secondary: null,
      tertiary: null
    },
    age: "Senior",
    gender: "Female",
    size: "Small",
    coat: "Medium",
    attributes: {
      spayed_neutered: false,
      house_trained: true,
      declawed: null,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: true,
      dogs: true,
      cats: true
    },
    tags: [
      "Friendly",
      "Affectionate",
      "Loyal",
      "Gentle",
      "Playful",
      "Independent",
      "Brave",
      "Smart",
      "Quiet",
      "Dignified",
      "Loves kisses"
    ],
    name: "Kiki",
    description: "Kiki was rescued by two of our workers here at the ADLA. A woman came to the shelter looking for...",
    organization_animal_id: null,
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470281/1/?bust=1651535744&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470281/1/?bust=1651535744&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470281/1/?bust=1651535744&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470281/1/?bust=1651535744"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470281/2/?bust=1651535744&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470281/2/?bust=1651535744&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470281/2/?bust=1651535744&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470281/2/?bust=1651535744"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470281/3/?bust=1651535745&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470281/3/?bust=1651535745&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470281/3/?bust=1651535745&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470281/3/?bust=1651535745"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470281/4/?bust=1651536446&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470281/4/?bust=1651536446&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470281/4/?bust=1651536446&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470281/4/?bust=1651536446"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470281/1/?bust=1651535744&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470281/1/?bust=1651535744&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470281/1/?bust=1651535744&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470281/1/?bust=1651535744"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-02T23:57:06+0000",
    published_at: "2022-05-02T23:57:06+0000",
    distance: null,
    contact: {
      email: "Adoptions@amigosdelosanimalespr.org",
      phone: null,
      address: {
        address1: null,
        address2: null,
        city: "Loiza",
        state: "PR",
        postcode: "00772",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470281"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/pr17"
      }
    }
  },
  {
    id: 55470288,
    organization_id: "PA95",
    url: "https://www.petfinder.com/cat/mousey-55470288/pa/pottsville/hillside-s-dot-pc-dot-a-pa95/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Short Hair",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: "Tabby (Gray / Blue / Silver)",
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Male",
    size: "Small",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: true,
      declawed: false,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: null,
      dogs: null,
      cats: true
    },
    tags: [
      "Friendly",
      "Loyal",
      "Independent",
      "Quiet"
    ],
    name: "Mousey",
    description: "Mousey is a male gray tabby who came in with several of his buddies.  He is one of the sweetest...",
    organization_animal_id: null,
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470288/1/?bust=1651535798&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470288/1/?bust=1651535798&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470288/1/?bust=1651535798&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470288/1/?bust=1651535798"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470288/2/?bust=1651535799&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470288/2/?bust=1651535799&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470288/2/?bust=1651535799&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470288/2/?bust=1651535799"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470288/1/?bust=1651535798&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470288/1/?bust=1651535798&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470288/1/?bust=1651535798&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470288/1/?bust=1651535798"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-02T23:56:40+0000",
    published_at: "2022-05-02T23:56:40+0000",
    distance: null,
    contact: {
      email: "kdhadopt34@gmail.com",
      phone: "(570) 622-7769",
      address: {
        address1: "P.O. Box 233",
        address2: "51 SPCA Road",
        city: "Pottsville",
        state: "PA",
        postcode: "17901",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470288"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/pa95"
      }
    }
  },
  {
    id: 55470287,
    organization_id: "GA477",
    url: "https://www.petfinder.com/dog/gage-55470287/ga/greensboro/circle-of-friends-animal-society-inc-ga477/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Wirehaired Terrier",
      secondary: null,
      mixed: true,
      unknown: false
    },
    colors: {
      primary: "White / Cream",
      secondary: "Yellow / Tan / Blond / Fawn",
      tertiary: null
    },
    age: "Adult",
    gender: "Male",
    size: "Small",
    coat: "Wire",
    attributes: {
      spayed_neutered: true,
      house_trained: true,
      declawed: null,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: null,
      dogs: true,
      cats: null
    },
    tags: [],
    name: "Gage",
    description: "Gage is a small scruffy terrier mix.  He weighs in at about 9 pounds  and is probably around 3 yrs...",
    organization_animal_id: null,
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470287/1/?bust=1651535795&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470287/1/?bust=1651535795&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470287/1/?bust=1651535795&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470287/1/?bust=1651535795"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470287/2/?bust=1651535796&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470287/2/?bust=1651535796&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470287/2/?bust=1651535796&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470287/2/?bust=1651535796"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470287/1/?bust=1651535795&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470287/1/?bust=1651535795&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470287/1/?bust=1651535795&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470287/1/?bust=1651535795"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-02T23:56:38+0000",
    published_at: "2022-05-02T23:56:38+0000",
    distance: null,
    contact: {
      email: "pacn53@gmail.com",
      phone: null,
      address: {
        address1: "P.O. Box 1235",
        address2: null,
        city: "Greensboro",
        state: "GA",
        postcode: "30642",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470287"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/ga477"
      }
    }
  },
  {
    id: 55470285,
    organization_id: "MD256",
    url: "https://www.petfinder.com/dog/gemma-with-jax-55470285/md/annapolis/spca-of-anne-arundel-county-md256/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Boxer",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: "White / Cream",
      secondary: "Yellow / Tan / Blond / Fawn",
      tertiary: null
    },
    age: "Young",
    gender: "Male",
    size: "Large",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Gemma (with Jax)",
    description: null,
    organization_animal_id: "50049823",
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470285/1/?bust=1651535782&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470285/1/?bust=1651535782&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470285/1/?bust=1651535782&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470285/1/?bust=1651535782"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470285/2/?bust=1651535782&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470285/2/?bust=1651535782&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470285/2/?bust=1651535782&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470285/2/?bust=1651535782"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470285/1/?bust=1651535782&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470285/1/?bust=1651535782&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470285/1/?bust=1651535782&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470285/1/?bust=1651535782"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-02T23:56:24+0000",
    published_at: "2022-05-02T23:56:24+0000",
    distance: null,
    contact: {
      email: "adoptions@aacspca.org",
      phone: "(410) 268-4388",
      address: {
        address1: "1815 Bay Ridge Avenue",
        address2: null,
        city: "Annapolis",
        state: "MD",
        postcode: "21403",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470285"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/md256"
      }
    }
  },
  {
    id: 55470284,
    organization_id: "ME155",
    url: "https://www.petfinder.com/cat/mickey-55470284/me/winthrop/protectors-of-animal-lives-society-pals-me155/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Medium Hair",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: "Black & White / Tuxedo",
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Male",
    size: "Medium",
    coat: "Medium",
    attributes: {
      spayed_neutered: true,
      house_trained: true,
      declawed: false,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: true,
      dogs: null,
      cats: true
    },
    tags: [],
    name: "Mickey",
    description: "Mickey is a 4 year old male who came to the shelter with his three brothers.  He is very friendly...",
    organization_animal_id: null,
    photos: [],
    primary_photo_cropped: null,
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-02T23:56:12+0000",
    published_at: "2022-05-02T23:56:12+0000",
    distance: null,
    contact: {
      email: "palsnokillshelter@yahoo.com",
      phone: "(207) 395-4274",
      address: {
        address1: "188 Case Road",
        address2: null,
        city: "Winthrop",
        state: "ME",
        postcode: "04364",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470284"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/me155"
      }
    }
  },
  {
    id: 55470282,
    organization_id: "CA2678",
    url: "https://www.petfinder.com/dog/barrett-55470282/ca/modesto/country-road-rescue-ca2678/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Beagle",
      secondary: "Chihuahua",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: "Bicolor",
      secondary: "Golden",
      tertiary: "White / Cream"
    },
    age: "Baby",
    gender: "Male",
    size: "Small",
    coat: "Short",
    attributes: {
      spayed_neutered: false,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: true,
      dogs: true,
      cats: true
    },
    tags: [
      "Friendly",
      "Affectionate",
      "Playful",
      "Curious",
      "Loves kisses",
      "Quiet",
      "Dignified"
    ],
    name: "Barrett",
    description: "Hi, my name is Barrett.  When you pick me up, I&#039;ll curl up and sleep on your chest.  I&#039;m a...",
    organization_animal_id: "CRR371",
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470282/1/?bust=1651535754&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470282/1/?bust=1651535754&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470282/1/?bust=1651535754&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470282/1/?bust=1651535754"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470282/2/?bust=1651535755&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470282/2/?bust=1651535755&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470282/2/?bust=1651535755&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470282/2/?bust=1651535755"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470282/3/?bust=1651535755&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470282/3/?bust=1651535755&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470282/3/?bust=1651535755&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470282/3/?bust=1651535755"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470282/4/?bust=1651535756&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470282/4/?bust=1651535756&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470282/4/?bust=1651535756&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470282/4/?bust=1651535756"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470282/1/?bust=1651535754&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470282/1/?bust=1651535754&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470282/1/?bust=1651535754&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470282/1/?bust=1651535754"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-02T23:55:57+0000",
    published_at: "2022-05-02T23:55:57+0000",
    distance: null,
    contact: {
      email: "adoptions@countryroadrescue.org",
      phone: "(916) 996-0564",
      address: {
        address1: null,
        address2: null,
        city: "modesto",
        state: "CA",
        postcode: "95358",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470282"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/ca2678"
      }
    }
  },
  {
    id: 55470280,
    organization_id: "OH820",
    url: "https://www.petfinder.com/dog/bowie-55470280/oh/cincinnati/louies-legacy-animal-rescue-oh820/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Mixed Breed",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: "Black",
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Female",
    size: "Small",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Bowie",
    description: "Let&amp;#39;s dance, Cincinnati! Meet Bowie, a one-of-a-kind rock star full of personality and charm! Bowie is a 2-year-old, 30lb mystery...",
    organization_animal_id: "LOUC-A-19020",
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470280/1/?bust=1651536342&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470280/1/?bust=1651536342&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470280/1/?bust=1651536342&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470280/1/?bust=1651536342"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470280/2/?bust=1651536343&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470280/2/?bust=1651536343&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470280/2/?bust=1651536343&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470280/2/?bust=1651536343"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470280/3/?bust=1651536342&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470280/3/?bust=1651536342&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470280/3/?bust=1651536342&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470280/3/?bust=1651536342"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470280/4/?bust=1651536342&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470280/4/?bust=1651536342&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470280/4/?bust=1651536342&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470280/4/?bust=1651536342"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470280/5/?bust=1651536344&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470280/5/?bust=1651536344&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470280/5/?bust=1651536344&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470280/5/?bust=1651536344"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470280/1/?bust=1651536342&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470280/1/?bust=1651536342&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470280/1/?bust=1651536342&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470280/1/?bust=1651536342"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-02T23:55:30+0000",
    published_at: "2022-05-02T23:55:30+0000",
    distance: null,
    contact: {
      email: "info@louieslegacy.org",
      phone: null,
      address: {
        address1: null,
        address2: null,
        city: "Cincinnati",
        state: "OH",
        postcode: "45247",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470280"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/oh820"
      }
    }
  },
  {
    id: 55470279,
    organization_id: "MD256",
    url: "https://www.petfinder.com/dog/jax-with-gemma-55470279/md/annapolis/spca-of-anne-arundel-county-md256/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Boxer",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: "White / Cream",
      secondary: "Yellow / Tan / Blond / Fawn",
      tertiary: null
    },
    age: "Young",
    gender: "Male",
    size: "Large",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Jax (with Gemma)",
    description: null,
    organization_animal_id: "50049800",
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470279/1/?bust=1651535727&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470279/1/?bust=1651535727&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470279/1/?bust=1651535727&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470279/1/?bust=1651535727"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470279/2/?bust=1651535727&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470279/2/?bust=1651535727&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470279/2/?bust=1651535727&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470279/2/?bust=1651535727"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470279/1/?bust=1651535727&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470279/1/?bust=1651535727&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470279/1/?bust=1651535727&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470279/1/?bust=1651535727"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-02T23:55:28+0000",
    published_at: "2022-05-02T23:55:28+0000",
    distance: null,
    contact: {
      email: "adoptions@aacspca.org",
      phone: "(410) 268-4388",
      address: {
        address1: "1815 Bay Ridge Avenue",
        address2: null,
        city: "Annapolis",
        state: "MD",
        postcode: "21403",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470279"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/md256"
      }
    }
  },
  {
    id: 55470277,
    organization_id: "FL852",
    url: "https://www.petfinder.com/dog/shanta-55470277/fl/loxahatchee/big-dog-ranch-rescue-fl852/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Yellow Labrador Retriever",
      secondary: null,
      mixed: true,
      unknown: false
    },
    colors: {
      primary: "Yellow / Tan / Blond / Fawn",
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Female",
    size: "Small",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [
      "Dog Friendly",
      "Energy High",
      "Experience None",
      "Medium thirty fifty nine lbs",
      "Needs a Yard",
      "No Cats or Small Animals"
    ],
    name: "Shanta",
    description: "Hi! My name is Shanta! I was rescued in Puerto Rico with 8 other friends by an independent rescuer at...",
    organization_animal_id: "BDRR-A-22654",
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470277/1/?bust=1651536334&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470277/1/?bust=1651536334&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470277/1/?bust=1651536334&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470277/1/?bust=1651536334"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470277/2/?bust=1651536327&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470277/2/?bust=1651536327&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470277/2/?bust=1651536327&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470277/2/?bust=1651536327"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470277/3/?bust=1651536334&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470277/3/?bust=1651536334&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470277/3/?bust=1651536334&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470277/3/?bust=1651536334"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470277/4/?bust=1651536330&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470277/4/?bust=1651536330&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470277/4/?bust=1651536330&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470277/4/?bust=1651536330"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470277/1/?bust=1651536334&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470277/1/?bust=1651536334&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470277/1/?bust=1651536334&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470277/1/?bust=1651536334"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-02T23:55:18+0000",
    published_at: "2022-05-02T23:55:18+0000",
    distance: null,
    contact: {
      email: null,
      phone: "(561) 791-6465",
      address: {
        address1: null,
        address2: null,
        city: "LOXAHATCHEE",
        state: "FL",
        postcode: "33470",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470277"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/fl852"
      }
    }
  },
  {
    id: 55470278,
    organization_id: "FL852",
    url: "https://www.petfinder.com/dog/cooper-55470278/fl/loxahatchee/big-dog-ranch-rescue-fl852/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Labrador Retriever",
      secondary: null,
      mixed: true,
      unknown: false
    },
    colors: {
      primary: "Yellow / Tan / Blond / Fawn",
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Male",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [
      "Dog Selective",
      "Energy High",
      "Experience None",
      "Medium thirty fifty nine lbs",
      "No Cats or Small Animals",
      "Shy Timid"
    ],
    name: "Cooper",
    description: "Hi! My name is Cooper! I was rescued in Puerto Rico with 8 other friends by an independent rescuer at...",
    organization_animal_id: "BDRR-A-22651",
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470278/1/?bust=1651536333&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470278/1/?bust=1651536333&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470278/1/?bust=1651536333&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470278/1/?bust=1651536333"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470278/2/?bust=1651536334&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470278/2/?bust=1651536334&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470278/2/?bust=1651536334&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470278/2/?bust=1651536334"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470278/1/?bust=1651536333&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470278/1/?bust=1651536333&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470278/1/?bust=1651536333&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470278/1/?bust=1651536333"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-02T23:55:18+0000",
    published_at: "2022-05-02T23:55:18+0000",
    distance: null,
    contact: {
      email: null,
      phone: "(561) 791-6465",
      address: {
        address1: null,
        address2: null,
        city: "LOXAHATCHEE",
        state: "FL",
        postcode: "33470",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470278"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/fl852"
      }
    }
  },
  {
    id: 55470275,
    organization_id: "FL852",
    url: "https://www.petfinder.com/dog/rambo-55470275/fl/loxahatchee/big-dog-ranch-rescue-fl852/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Black Labrador Retriever",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: "Black",
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Male",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [
      "Dog Friendly",
      "Energy High",
      "Experience None",
      "Needs a Yard",
      "Shy Timid"
    ],
    name: "Rambo",
    description: "Hi! My name is Rambo! I was rescued in Puerto Rico with 8 other friends by an independent rescuer at...",
    organization_animal_id: "BDRR-A-22658",
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470275/1/?bust=1651536324&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470275/1/?bust=1651536324&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470275/1/?bust=1651536324&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470275/1/?bust=1651536324"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470275/2/?bust=1651536326&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470275/2/?bust=1651536326&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470275/2/?bust=1651536326&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470275/2/?bust=1651536326"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470275/1/?bust=1651536324&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470275/1/?bust=1651536324&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470275/1/?bust=1651536324&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470275/1/?bust=1651536324"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-02T23:55:18+0000",
    published_at: "2022-05-02T23:55:18+0000",
    distance: null,
    contact: {
      email: null,
      phone: "(561) 791-6465",
      address: {
        address1: null,
        address2: null,
        city: "LOXAHATCHEE",
        state: "FL",
        postcode: "33470",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470275"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/fl852"
      }
    }
  },
  {
    id: 55470276,
    organization_id: "FL852",
    url: "https://www.petfinder.com/dog/sadie-55470276/fl/loxahatchee/big-dog-ranch-rescue-fl852/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Labrador Retriever",
      secondary: "Rottweiler",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: "Black",
      secondary: "Yellow / Tan / Blond / Fawn",
      tertiary: null
    },
    age: "Adult",
    gender: "Female",
    size: "Small",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [
      "Dog Friendly",
      "Energy High",
      "Experience None",
      "Needs a Yard",
      "Ok in Apartment Condo",
      "Shy Timid"
    ],
    name: "Sadie",
    description: "Hi! My name is Sadie! I was rescued in Puerto Rico with 8 other friends by an independent rescuer at...",
    organization_animal_id: "BDRR-A-22657",
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470276/1/?bust=1651536329&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470276/1/?bust=1651536329&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470276/1/?bust=1651536329&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470276/1/?bust=1651536329"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470276/2/?bust=1651536327&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470276/2/?bust=1651536327&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470276/2/?bust=1651536327&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470276/2/?bust=1651536327"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470276/3/?bust=1651536330&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470276/3/?bust=1651536330&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470276/3/?bust=1651536330&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470276/3/?bust=1651536330"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470276/1/?bust=1651536329&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470276/1/?bust=1651536329&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470276/1/?bust=1651536329&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470276/1/?bust=1651536329"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-02T23:55:18+0000",
    published_at: "2022-05-02T23:55:18+0000",
    distance: null,
    contact: {
      email: null,
      phone: "(561) 791-6465",
      address: {
        address1: null,
        address2: null,
        city: "LOXAHATCHEE",
        state: "FL",
        postcode: "33470",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470276"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/fl852"
      }
    }
  },
  {
    id: 55470274,
    organization_id: "FL852",
    url: "https://www.petfinder.com/dog/noche-55470274/fl/loxahatchee/big-dog-ranch-rescue-fl852/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Black Labrador Retriever",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: "Black",
      secondary: null,
      tertiary: null
    },
    age: "Adult",
    gender: "Female",
    size: "Small",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [
      "Anaplasma Positive",
      "Dog Friendly",
      "Energy High",
      "Experience None",
      "Needs a Yard",
      "Ok in Apartment Condo",
      "Shy Timid",
      "Small fifteen twenty nine lbs"
    ],
    name: "Noche",
    description: "Hi! My name is Noche! I was rescued in Puerto Rico with 8 other friends by an independent rescuer at...",
    organization_animal_id: "BDRR-A-22662",
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470274/1/?bust=1651536330&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470274/1/?bust=1651536330&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470274/1/?bust=1651536330&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470274/1/?bust=1651536330"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470274/2/?bust=1651536333&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470274/2/?bust=1651536333&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470274/2/?bust=1651536333&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470274/2/?bust=1651536333"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470274/3/?bust=1651536329&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470274/3/?bust=1651536329&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470274/3/?bust=1651536329&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470274/3/?bust=1651536329"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470274/4/?bust=1651536334&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470274/4/?bust=1651536334&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470274/4/?bust=1651536334&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470274/4/?bust=1651536334"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470274/1/?bust=1651536330&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470274/1/?bust=1651536330&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470274/1/?bust=1651536330&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470274/1/?bust=1651536330"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-02T23:55:17+0000",
    published_at: "2022-05-02T23:55:17+0000",
    distance: null,
    contact: {
      email: null,
      phone: "(561) 791-6465",
      address: {
        address1: null,
        address2: null,
        city: "LOXAHATCHEE",
        state: "FL",
        postcode: "33470",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470274"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/fl852"
      }
    }
  },
  {
    id: 55470271,
    organization_id: "AZ253",
    url: "https://www.petfinder.com/cat/mocha-55470271/az/mesa/save-the-cats-arizona-az253/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Medium Hair",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: "Gray & White",
      secondary: null,
      tertiary: null
    },
    age: "Baby",
    gender: "Male",
    size: "Medium",
    coat: "Medium",
    attributes: {
      spayed_neutered: true,
      house_trained: true,
      declawed: false,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: null,
      dogs: true,
      cats: true
    },
    tags: [
      "Friendly",
      "Affectionate",
      "Playful"
    ],
    name: "Mocha",
    description: "Mocha is friendly, playful, loves cuddling, cat friendly, dog friendly, very sweet. To adopt please fill out our online application...",
    organization_animal_id: null,
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470271/1/?bust=1651535713&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470271/1/?bust=1651535713&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470271/1/?bust=1651535713&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470271/1/?bust=1651535713"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470271/2/?bust=1651535714&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470271/2/?bust=1651535714&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470271/2/?bust=1651535714&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470271/2/?bust=1651535714"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470271/1/?bust=1651535713&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470271/1/?bust=1651535713&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470271/1/?bust=1651535713&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470271/1/?bust=1651535713"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-02T23:55:15+0000",
    published_at: "2022-05-02T23:55:15+0000",
    distance: null,
    contact: {
      email: "katrina@savethecatsaz.org",
      phone: "(480) 297-5481",
      address: {
        address1: null,
        address2: null,
        city: "Mesa",
        state: "AZ",
        postcode: "85214",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470271"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/az253"
      }
    }
  },
  {
    id: 55470273,
    organization_id: "CA2705",
    url: "https://www.petfinder.com/dog/luna-55470273/ca/hemet/are-animal-rescue-inc-ca2705/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Mixed Breed",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: "Black",
      secondary: "White / Cream",
      tertiary: null
    },
    age: "Adult",
    gender: "Female",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Luna",
    description: null,
    organization_animal_id: "ARE-A-7429",
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470273/1/?bust=1651536328&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470273/1/?bust=1651536328&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470273/1/?bust=1651536328&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470273/1/?bust=1651536328"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470273/1/?bust=1651536328&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470273/1/?bust=1651536328&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470273/1/?bust=1651536328&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470273/1/?bust=1651536328"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-02T23:55:15+0000",
    published_at: "2022-05-02T23:55:15+0000",
    distance: null,
    contact: {
      email: "Info@ARErescue.org",
      phone: "(951) 708-1280",
      address: {
        address1: "101 E Florida Ave",
        address2: null,
        city: "Hemet",
        state: "CA",
        postcode: "92543",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470273"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/ca2705"
      }
    }
  },
  {
    id: 55470272,
    organization_id: "UT81",
    url: "https://www.petfinder.com/dog/reina-55470272/ut/salt-lake-city/best-friends-animal-society-utah-ut81/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Newfoundland Dog",
      secondary: null,
      mixed: true,
      unknown: false
    },
    colors: {
      primary: "Black",
      secondary: "White / Cream",
      tertiary: null
    },
    age: "Adult",
    gender: "Female",
    size: "Large",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Reina",
    description: "This gentle giant is ready to find her forever home. Freya is new to Best Friends and we are still...",
    organization_animal_id: "BSLC-A-18158",
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470272/1/?bust=1651536323&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470272/1/?bust=1651536323&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470272/1/?bust=1651536323&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470272/1/?bust=1651536323"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470272/1/?bust=1651536323&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470272/1/?bust=1651536323&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470272/1/?bust=1651536323&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470272/1/?bust=1651536323"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-02T23:55:14+0000",
    published_at: "2022-05-02T23:55:14+0000",
    distance: null,
    contact: {
      email: "utahadoptions@bestfriends.org",
      phone: "(801) 574-2454",
      address: {
        address1: "2005 S 1100 E",
        address2: null,
        city: "Salt Lake City",
        state: "UT",
        postcode: "84106",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470272"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/ut81"
      }
    }
  },
  {
    id: 55470270,
    organization_id: "CA1612",
    url: "https://www.petfinder.com/cat/albert-55470270/ca/hawthorne/adoptables-at-spcala-south-bay-pac-ca1612/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Siamese",
      secondary: "Domestic Short Hair",
      mixed: true,
      unknown: false
    },
    colors: {
      primary: "Lilac Point",
      secondary: null,
      tertiary: null
    },
    age: "Young",
    gender: "Male",
    size: "Large",
    coat: null,
    attributes: {
      spayed_neutered: false,
      house_trained: false,
      declawed: false,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Albert",
    description: null,
    organization_animal_id: "LACA-A-3824",
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470270/1/?bust=1651536320&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470270/1/?bust=1651536320&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470270/1/?bust=1651536320&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470270/1/?bust=1651536320"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470270/1/?bust=1651536320&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470270/1/?bust=1651536320&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470270/1/?bust=1651536320&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470270/1/?bust=1651536320"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-02T23:55:10+0000",
    published_at: "2022-05-02T23:55:10+0000",
    distance: null,
    contact: {
      email: "adoptions@spcala.com",
      phone: "(310) 676-1149",
      address: {
        address1: "12910 Yukon Ave.",
        address2: null,
        city: "Hawthorne",
        state: "CA",
        postcode: "90250",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470270"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/ca1612"
      }
    }
  },
  {
    id: 55470269,
    organization_id: "CA1612",
    url: "https://www.petfinder.com/cat/o-and-number-39malley-55470269/ca/hawthorne/adoptables-at-spcala-south-bay-pac-ca1612/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Short Hair",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: "Black",
      secondary: "White",
      tertiary: null
    },
    age: "Young",
    gender: "Male",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: false,
      house_trained: false,
      declawed: false,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "O&#39;Malley",
    description: null,
    organization_animal_id: "LACA-A-3823",
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470269/1/?bust=1651536319&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470269/1/?bust=1651536319&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470269/1/?bust=1651536319&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470269/1/?bust=1651536319"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470269/1/?bust=1651536319&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470269/1/?bust=1651536319&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470269/1/?bust=1651536319&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470269/1/?bust=1651536319"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-02T23:55:10+0000",
    published_at: "2022-05-02T23:55:10+0000",
    distance: null,
    contact: {
      email: "adoptions@spcala.com",
      phone: "(310) 676-1149",
      address: {
        address1: "12910 Yukon Ave.",
        address2: null,
        city: "Hawthorne",
        state: "CA",
        postcode: "90250",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470269"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/ca1612"
      }
    }
  },
  {
    id: 55470265,
    organization_id: "PA366",
    url: "https://www.petfinder.com/small-furry/henry-and-harvey-video-55470265/pa/edinburg/judges-park-pa366/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Small & Furry",
    species: "Rat",
    breeds: {
      primary: "Rat",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: "Black",
      secondary: "Blue / Gray",
      tertiary: null
    },
    age: "Young",
    gender: "Male",
    size: "Medium",
    coat: "Short",
    attributes: {
      spayed_neutered: false,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: false
    },
    environment: {
      children: true,
      dogs: null,
      cats: null
    },
    tags: [
      "Friendly",
      "Affectionate",
      "Curious",
      "Loves kisses"
    ],
    name: "Henry and Harvey: video!!",
    description: "*Pair of male rats* Henry is approximately 2 months old as of 5/22 and Harvey is about 4 months old....",
    organization_animal_id: null,
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470265/1/?bust=1651535655&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470265/1/?bust=1651535655&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470265/1/?bust=1651535655&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470265/1/?bust=1651535655"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470265/2/?bust=1651535655&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470265/2/?bust=1651535655&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470265/2/?bust=1651535655&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470265/2/?bust=1651535655"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470265/3/?bust=1651535656&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470265/3/?bust=1651535656&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470265/3/?bust=1651535656&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470265/3/?bust=1651535656"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470265/4/?bust=1651535657&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470265/4/?bust=1651535657&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470265/4/?bust=1651535657&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470265/4/?bust=1651535657"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470265/5/?bust=1651535657&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470265/5/?bust=1651535657&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470265/5/?bust=1651535657&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470265/5/?bust=1651535657"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470265/1/?bust=1651535655&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470265/1/?bust=1651535655&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470265/1/?bust=1651535655&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470265/1/?bust=1651535655"
    },
    status: "adoptable",
    status_changed_at: "2022-05-02T23:54:24+0000",
    published_at: "2022-05-02T23:54:24+0000",
    distance: null,
    contact: {
      email: "judges.park@yahoo.com",
      phone: "(724) 272-0378",
      address: {
        address1: null,
        address2: null,
        city: "Edinburg",
        state: "PA",
        postcode: "16116",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470265"
      },
      type: {
        href: "/v2/types/small-furry"
      },
      organization: {
        href: "/v2/organizations/pa366"
      }
    }
  },
  {
    id: 55470263,
    organization_id: "PA95",
    url: "https://www.petfinder.com/cat/mazey-55470263/pa/pottsville/hillside-s-dot-pc-dot-a-pa95/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Cat",
    species: "Cat",
    breeds: {
      primary: "Domestic Short Hair",
      secondary: null,
      mixed: false,
      unknown: false
    },
    colors: {
      primary: "Tabby (Tiger Striped)",
      secondary: null,
      tertiary: null
    },
    age: "Young",
    gender: "Female",
    size: "Small",
    coat: "Short",
    attributes: {
      spayed_neutered: true,
      house_trained: true,
      declawed: false,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: null,
      dogs: null,
      cats: true
    },
    tags: [
      "Friendly",
      "Curious",
      "Independent"
    ],
    name: "Mazey",
    description: "Mazey is a female tabby around 1-2 yrs old.  She is a very curious gal but is very sweet.  She...",
    organization_animal_id: null,
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470263/1/?bust=1651535632&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470263/1/?bust=1651535632&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470263/1/?bust=1651535632&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470263/1/?bust=1651535632"
      },
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470263/2/?bust=1651535632&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470263/2/?bust=1651535632&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470263/2/?bust=1651535632&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470263/2/?bust=1651535632"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470263/1/?bust=1651535632&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470263/1/?bust=1651535632&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470263/1/?bust=1651535632&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470263/1/?bust=1651535632"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-02T23:53:54+0000",
    published_at: "2022-05-02T23:53:54+0000",
    distance: null,
    contact: {
      email: "kdhadopt34@gmail.com",
      phone: "(570) 622-7769",
      address: {
        address1: "P.O. Box 233",
        address2: "51 SPCA Road",
        city: "Pottsville",
        state: "PA",
        postcode: "17901",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470263"
      },
      type: {
        href: "/v2/types/cat"
      },
      organization: {
        href: "/v2/organizations/pa95"
      }
    }
  },
  {
    id: 55470262,
    organization_id: "MD256",
    url: "https://www.petfinder.com/dog/rosie-55470262/md/annapolis/spca-of-anne-arundel-county-md256/?referrer_id=7e619340-a455-4622-96fd-72a4c0a4d759",
    type: "Dog",
    species: "Dog",
    breeds: {
      primary: "Pit Bull Terrier",
      secondary: null,
      mixed: true,
      unknown: false
    },
    colors: {
      primary: "Brown / Chocolate",
      secondary: "White / Cream",
      tertiary: null
    },
    age: "Baby",
    gender: "Female",
    size: "Medium",
    coat: null,
    attributes: {
      spayed_neutered: true,
      house_trained: false,
      declawed: null,
      special_needs: false,
      shots_current: true
    },
    environment: {
      children: null,
      dogs: null,
      cats: null
    },
    tags: [],
    name: "Rosie",
    description: null,
    organization_animal_id: "50040744",
    photos: [
      {
        small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470262/1/?bust=1651535617&width=100",
        medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470262/1/?bust=1651535617&width=300",
        large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470262/1/?bust=1651535617&width=600",
        full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470262/1/?bust=1651535617"
      }
    ],
    primary_photo_cropped: {
      small: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470262/1/?bust=1651535617&width=300",
      medium: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470262/1/?bust=1651535617&width=450",
      large: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470262/1/?bust=1651535617&width=600",
      full: "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55470262/1/?bust=1651535617"
    },
    videos: [],
    status: "adoptable",
    status_changed_at: "2022-05-02T23:53:38+0000",
    published_at: "2022-05-02T23:53:38+0000",
    distance: null,
    contact: {
      email: "adoptions@aacspca.org",
      phone: "(410) 268-4388",
      address: {
        address1: "1815 Bay Ridge Avenue",
        address2: null,
        city: "Annapolis",
        state: "MD",
        postcode: "21403",
        country: "US"
      }
    },
    _links: {
      self: {
        href: "/v2/animals/55470262"
      },
      type: {
        href: "/v2/types/dog"
      },
      organization: {
        href: "/v2/organizations/md256"
      }
    }
  }
]

const insertData = function() {
  Pets.create(pets)
    .then(() => console.log('Successfully inserted initial pets data'))
    .catch((err) => console.error('Unable to insert initial pets data', err))
    .finally(() => db.close());
}

insertData();