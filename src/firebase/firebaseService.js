import { collection, getDocs, query, where } from "firebase/firestore"; 
import { db } from "./config"

// Função genérica para buscar dados de qualquer coleção
export const fetchCollectionData = async (collectionName) => {
  try {
    // Referência à coleção específica
    const collectionRef = collection(db, collectionName);

    // Obtém o snapshot dos documentos
    const snapshot = await getDocs(collectionRef);
    const dataList = [];

    // Itera sobre cada documento e adiciona ao array dataList
    snapshot.forEach(doc => {
      dataList.push({ ...doc.data(), id: doc.id });
    });

    return dataList;
  } catch (error) {
    console.error("Erro ao buscar dados da coleção:", error);
    throw error;
  }
}


// Listar por categoria
export const categoriasCol = collection(db, 'categorias')
export async function getCategorias(categoria) {
  const filtro = query(categoriasCol, where('categoria', '==', categoria))
  const snapshot = await getDocs(filtro)
  const categorias = []

  snapshot.forEach((doc) => {
    categorias.push({...doc.data(), id: doc.id})
  })

  return categorias
}

// Filtras dicas por categoria
export const dicasCol = collection(db, 'dicas')
export async function getDicasCategorias(categoria) {
  const filtro = query(dicasCol, where('categoria', '==', categoria))
  const snapshot = await getDocs(filtro)
  const categorias = []

  snapshot.forEach((doc) => {
    categorias.push({...doc.data(), id: doc.id})
  })

  return categorias
}

