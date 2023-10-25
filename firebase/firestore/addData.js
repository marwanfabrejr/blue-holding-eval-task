import firebase_app from '../config'
import { getFirestore, doc, setDoc } from 'firebase/firestore'

const db = getFirestore(firebase_app)
export default async function addData(collectionName, id, data) {
  let result = null
  let error = null

  try {
    result = await setDoc(doc(db, collectionName, id.toString()), data)
  } catch (e) {
    error = e
  }

  return { result, error }
}
