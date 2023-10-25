import axios from 'axios'

import getDouments from '../firebase/firestore/getData.js'

export async function fetchProducts() {
  let allData: any = []
  await getDouments('products')
    .then(({ result, error }) => {
      result?.forEach((doc) => {
        allData.push(doc.data())
      })
    })
    .catch((err) => {
      console.log(err)
    })
  return allData
}

export async function fetchCategories() {
  const allProducts = await fetchProducts()

  const set = new Set(allProducts.map((item: any) => item.category))
  let categories = Array.from(set)

  return categories
}
