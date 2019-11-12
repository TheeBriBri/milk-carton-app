const URL = "http://localhost:3002";

function fetchRequest(path, options) {
  return fetch(URL + path, options)
    .then(res => res.json())
    .catch(error => console.error(error))

}

export const getAllKids = () => {
  return fetchRequest('/lostKids');
}



// export const getOneKid = () => {
//   return fetchRequest()
// }
