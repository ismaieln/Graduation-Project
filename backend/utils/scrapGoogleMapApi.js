import fetch from 'node-fetch'
import fs from 'fs'
​
const API_KEY_GOOGLE_MAP = process.env.GOOGLE_MAP_KEY
const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=local+farm+detail+netherlands&key=${API_KEY_GOOGLE_MAP}`
​
async function getScraping() {
  try {
    const reponse = await fetch(url)
    const data = await reponse.json()
    const FarmsDetails = data.results.map((farm) => {
      let name = farm.name
      let rating = farm.rating
      let address = farm.formatted_address
      let lat = farm.geometry.location.lat
      let lng = farm.geometry.location.lng
      return { name, rating, lat, lng, address }
    })
    fs.appendFile('farmeDetails.js', JSON.stringify(FarmsDetails),  (err) => {
      if (err) throw err
      console.log('Data Saved!')
    })
  } catch (error) {
    console.log('err', error)
  }
}
getScraping()
