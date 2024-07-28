import { collection, getDocs } from "firebase/firestore"; 
import { db } from "./config"

// Função genérica para buscar dados de qualquer coleção
export const fetchCollectionData = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const dataList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return dataList;
  } catch (error) {
    console.error("Erro ao buscar dados da coleção:", error);
    throw error;
  }
}
