import React, { useEffect} from "react";
import { GlobalProvider } from "../../context/GlobalContext";
import useFirebase from "../../hooks/UseFirebase";
import ItemList from "../ItemList/ItemList";
const ItemListContainer = ({ filter }) => {


  const { productos,fetchGetDataCollection } = useFirebase();
  const { buscar } = GlobalProvider();

  useEffect(() => {
    fetchGetDataCollection();
  },[]);

  const filtered = filter
    ? productos.filter((e) => e.categoria === filter)
    : productos;
  const busqueda = filtered.filter((f) =>
    f.nombre.toLocaleLowerCase().includes(buscar.toLocaleLowerCase())
  );

  return (
    <div>
      <ItemList items={busqueda} />
    </div>
  );
};

export default ItemListContainer;
