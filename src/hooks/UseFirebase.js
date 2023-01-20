import { collection,getDocs,getDoc,doc,addDoc,updateDoc} from "firebase/firestore";
import db from '../services'
import { useState } from "react";
import { GlobalProvider } from "../context/GlobalContext";


const useFirebase = () => {

  const [productos,setProductos] = useState([]);
  const [producto, setProducto] = useState({});
  
  const {setLoading} = GlobalProvider()

  const fetchGetDataCollection = async () => {
    setLoading(true)
    try {
      const data = collection(db,"productos")
      const col = await getDocs(data)
      const response = col.docs.map(doc => doc={id:doc.id,...doc.data()})
      setProductos(response)
    } catch (error) {
      console.log(error);
    }

  };

  const fetchGetIndividualProduct =  async ({id}) => {
    setLoading(true)
    try {
        const document = doc(db,"productos",id)
        const response = await getDoc(document)
        let result =response.data()
        setProducto({id:response.id,...result})

    } catch (error) {
        console.log(error)
    }
  };

  const fetchGenerateTicket =  async ({datos}) => {
    try {
        const col = collection(db,"ordenes")
        const order =  await addDoc(col,datos)
        console.log(order.id)
    } catch (error) {
        console.log(error)
    }
  };

  const fetchUpdateDoc = async ({id}) => {
    const orderDoc = doc(db,"productos",id);
    try {
      await updateDoc(orderDoc,{price:3740})
      console.log("se actualizo correctamente")
    } catch (error) {
      console.log(error)
    }
  }

  return {
    productos,
    producto,
    fetchGetDataCollection,
    fetchGetIndividualProduct,
    fetchGenerateTicket,
    fetchUpdateDoc
  };
};

export default useFirebase;

