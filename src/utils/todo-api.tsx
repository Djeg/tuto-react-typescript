import { collection, doc, getDocs, query, setDoc } from 'firebase/firestore'
import { db } from './firebase'
/**
 * Ce fichier contient toutes les fonctions concernant
 * firebase
 */

/**
 * Retourne tout les todos depuis firebase
 */
export async function fetchTodos() {
  // Créé une demande à firebase
  const q = query(collection(db, 'todos'))
  // On récupére les documents
  const docs = await getDocs(q)

  // On formatte les documents pour react
  const todos = docs.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }))

  // Retourne les todos
  return todos
}

/**
 * Enregistre un todo sur firebase
 */
export async function saveTodo(todo: any) {
  console.warn(todo)
  await setDoc(doc(db, 'todos', todo.id), todo)
}
