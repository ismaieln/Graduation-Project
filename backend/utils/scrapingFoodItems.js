import puppeteer from 'puppeteer'
import fs from 'fs'

const url =
  'https://www.freshdirect.com/browse.jsp?pageType=browse&id=veg_org&pageSize=30&all=true&activePage=0&sortBy=Sort_ExpertRatingHigh&orderAsc=false&activeTab=product&brandFilterGroup=clearall'

async function getScraping(url) {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto(url, { waitUntil: 'networkidle2' })

  const data = await page.evaluate(async () => {
    const listOfProducts = Array.from(
      document.querySelectorAll('.portrait-item-image-link')
    )

    const arrOfObj = listOfProducts.map((el) => {
      let src = el.querySelector('img').getAttribute('src')
      let name = el.querySelector('.portrait-item-header-name').textContent
      let price = el.parentElement
        .querySelector('.portrait-item-price')
        .textContent.slice(1, 5)
      let baseUrl = 'https://www.freshdirect.com'

      let image = baseUrl.concat('', src)
      return { image, name, price }
    })
    return arrOfObj
  })
  await browser.close()
  return data
}

async function scraping(url) {
  const results = await getScraping(url)
  return results
}
const data = await scraping(url)

fs.appendFile('foodItemsDataSet.js', JSON.stringify(data), function (err) {
  if (err) throw err
  console.log('Data Saved!')
})
