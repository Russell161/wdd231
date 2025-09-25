const park = {
  id: "F58C6D24-8D10-4573-9826-65D42B8B83AD",
  url: "https://www.nps.gov/yell/index.htm",
  fullName: "Yellowstone National Park",
  parkCode: "yell",
  description:
    "On March 1, 1872, Yellowstone became the first national park for all to enjoy the unique hydrothermal wonders. Today, millions of people come here each year to camp, hike, and enjoy the majesty of the park.",
  latitude: "44.59824417",
  longitude: "-110.5471695",
  latLong: "lat:44.59824417, long:-110.5471695",
  states: "ID,MT,WY",
  contacts: {
    phoneNumbers: [
      { phoneNumber: "307-344-7381", type: "Voice" },
      { phoneNumber: "307-344-2014", type: "Fax" },
      { phoneNumber: "307-344-2386", type: "TTY" }
    ],
    emailAddresses: [
      {
        description:
          "Contact Yellowstone's park rangers for general park questions, lost and found, or for special use permits.",
        emailAddress: "YELL_Information@nps.gov"
      }
    ]
  },
  addresses: [
    {
      postalCode: "82190",
      city: "Yellowstone National Park",
      stateCode: "WY",
      line1: "2 Officers Row",
      type: "Physical",
      line2: "Yellowstone National Park Headquarters",
      line3: ""
    },
    {
      postalCode: "82190-0168",
      city: "Yellowstone National Park",
      stateCode: "WY",
      line1: "PO Box 168",
      type: "Mailing",
      line2: "",
      line3: ""
    }
  ],
  directionsInfo:
    "Yellowstone National Park covers nearly 3,500 square miles in the northwest corner of Wyoming...",
  directionsUrl: "http://www.nps.gov/yell/planyourvisit/directions.htm",
  images: [
    {
      title: "Grand Prismatic Spring",
      altText: "Brilliant blues and greens of a hot spring...",
      url: "https://www.nps.gov/common/uploads/structured_data/3C7D5920-1DD8-B71B-0B83F012ED802CEA.jpg"
    },
    {
      title: "Aurum Geyser",
      altText: "A crowd of people watches a geyser erupt.",
      url: "https://www.nps.gov/common/uploads/structured_data/3C7D2FBB-1DD8-B71B-0BED99731011CFCE.jpg"
    },
    {
      title: "Black Pool",
      altText: "A visitor stands on a boardwalk near a hot spring.",
      url: "https://www.nps.gov/common/uploads/structured_data/3C7D383B-1DD8-B71B-0BEC4A4D6BDF7CAD.jpg"
    },
    {
      title: "Beehive Geyser",
      altText: "People on a boardwalk watch a geyser erupt.",
      url: "https://www.nps.gov/common/uploads/structured_data/3C7D334F-1DD8-B71B-0B108C7771F4E854.jpg"
    },
    {
      title: "Wolf howling",
      altText: "A wolf howls while standing on a snowy field.",
      url: "https://www.nps.gov/common/uploads/structured_data/3C7D3BD3-1DD8-B71B-0BB607F9BAAE1271.jpg"
    },
    {
      title: "Fishing Bridge Trailside Museum",
      altText: "Visitors walk into a rustic, log and stone building.",
      url: "https://www.nps.gov/common/uploads/structured_data/3C7D573E-1DD8-B71B-0B5C0DF5BB91D043.jpg"
    },
    {
      title: "Great Fountain Geyser",
      altText: "A geyser erupting in the middle of a pool.",
      url: "https://www.nps.gov/common/uploads/structured_data/3C7D5AB4-1DD8-B71B-0BF91CF45345ED16.jpg"
    },
    {
      title: "Old Faithful Geyser in winter",
      altText: "A crowd in front of an erupting geyser during winter.",
      url: "https://www.nps.gov/common/uploads/structured_data/3C7D610A-1DD8-B71B-0BEF676112007818.jpg"
    },
    {
      title: "Palette Spring",
      altText: "Visitors walk in front of a terraced landscape.",
      url: "https://www.nps.gov/common/uploads/structured_data/3C7D8903-1DD8-B71B-0BA8669AEEF74379.jpg"
    },
    {
      title: "Bighorn sheep",
      altText: "Two bighorn sheep laying on the ground.",
      url: "https://www.nps.gov/common/uploads/structured_data/3C7D95DD-1DD8-B71B-0BC4FA19BD72F0EC.jpg"
    }
  ],
  name: "Yellowstone",
  designation: "National Park"
};

export function getParkData() {
  return park;
}

export const parkInfoLinks = [
  {
    name: "Current Conditions ›",
    link: "conditions.html",
    image: park.images[2].url,
    description:
      "See what conditions to expect in the park before leaving on your trip!"
  },
  {
    name: "Fees and Passes ›",
    link: "fees.html",
    image: park.images[3].url,
    description: "Learn about the fees and passes that are available."
  },
  {
    name: "Visitor Centers ›",
    link: "visitorcenters.html",
    image: park.images[9].url,
    description: "Learn about the visitor centers in the park."
  }
];
