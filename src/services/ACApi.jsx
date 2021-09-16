export const getChars = (iD) => {
  const url = iD ? `https://ac-vill.herokuapp.com/villagers/${iD}` : 'https://ac-vill.herokuapp.com/villagers';
  return fetch(url)
    .then((res) => res.json())
    .then((json) => iD ? 
      {
        id: json._id,
        name: json.name,
        quote: json.quote,
        personality: json.personality
      } :
      json.map((villager) => ({
        id: villager._id,
        name: villager.name,
        quote: villager.quote,
        personality: villager.personality
      }))
    );
};
