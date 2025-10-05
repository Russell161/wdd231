const baseUrl = "https://developer.nps.gov/api/v1/";
const apiKey = import.meta.env.VITE_NPS_API_KEY;


async function getJson(url) {
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey
    }
  };
  let data = {};
  const response = await fetch(baseUrl + url, options);
  if (response.ok) {
    data = await response.json();
  } else throw new Error("response not ok");
  return data;
}


export async function getParkData() {
  const parkData = await getJson("parks?parkCode=yell");
  return parkData.data[0]; 
}


export function getInfoLinks(images) {
 
  const links = [
    {
      name: "Current Conditions ›",
      link: "conditions.html",
      image: images[2]?.url,
      description:
        "See what conditions to expect in the park before leaving on your trip!"
    },
    {
      name: "Fees and Passes ›",
      link: "fees.html",
      image: images[3]?.url,
      description: "Learn about the fees and passes that are available."
    },
    {
      name: "Visitor Centers ›",
      link: "visitorcenters.html",
      image: images[9]?.url,
      description: "Learn about the visitor centers in the park."
    }
  ];

  return links;
}
