import firebase_app from '../config'
import { getFirestore, collection, query, getDocs } from 'firebase/firestore'

const db = getFirestore(firebase_app)
export default async function getDouments(collectionName) {
  const q = query(collection(db, collectionName))

  let result = null
  let error = null

  try {
    result = await getDocs(q)
  } catch (e) {
    error = e
  }

  return { result, error }
}
