import puppeteer from 'puppeteer'
import fs from 'fs'

const url = 'https://www.localharvest.org/search.jsp?scale=9'
// ;('')
async function getScrapingFarms(url) {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto(url, { waitUntil: 'networkidle2' })

  const data = await page.evaluate(async () => {
    const listOfFarmsDiv = Array.from(document.querySelectorAll('.membercell'))

    const arrOfObj = listOfFarmsDiv.map((el) => {
      let stringUrl =
        el.querySelector('.mthumb')?.getAttribute('style').split('url') ||
        'https://ded8b07dd9e637888fc2-e87978aaae5cf97349d88697fd53e4c9.ssl.cf1.rackcdn.com/46537_60x60.jpg'
      let strUrl = stringUrl[1].slice(2)

      image = strUrl.substring(0, strUrl.length - 3).replace(/60x60/g, '300')
      let ancors = el.querySelectorAll('a')
      let name = ancors[0].textContent
      let city = ancors[1].textContent
      let desDev = el.querySelector('.short-desc')
      let description =
        desDev?.querySelector('p').innerText ||
        `
      Choose what goes in your box!  Hood River Organic is proud to be a cooperative CSA in the NW to offer boxes of local and organic produce year-round. Weekly, bi-weekly or monthly. We happily deliver to your doorstep or convenient pickup locations in both the Seattle and Portland metro area. Pick up locations also in Bend and the Columbia Gorge. 
     `
      return { image, name, city, description }
    })
    return arrOfObj
  })
  await browser.close()
  return data
}
async function scraping(url) {
  const results = await getScrapingFarms(url)
  return results
}

const data = await scraping(url)

fs.appendFile('farmersDataSet.js', JSON.stringify(data), function (err) {
  if (err) throw err
  console.log('Data Saved!')
})
