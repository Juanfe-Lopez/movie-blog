import { useEffect, useState } from "react";
import "./BlogList.css";
import { getDataId } from "../functions/functions";
import {
  deleteFromFirebase,
  getFromFirebase,
  getFromFirebaseID,
  updateFromFirebase,
} from "../functions/firebaseHelper";

function Favs() {
  const [data, setData] = useState([]);
  const [nombre, setNombre] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const handleUpdate = async (id) => {
    // Obtenemos el objeto completo de Firebase
    console.log(nombre);
    const doc = await getFromFirebaseID("Favs", id);
    console.log("objetoo", doc);
    // Actualizamos el título del objeto local
    const updatedDoc = { ...doc, e: { ...doc.e, title: nombre } };
    setData(data.map((item) => (item.id === id ? updatedDoc : item)));
    console.log("nuevo", updatedDoc);
    await updateFromFirebase(id, updatedDoc, "Favs");

    // Limpiamos los estados de edición
    setEditing(false);
    setEditingId(null);
    setNombre("");
  };
  const handelNombreOnChange = (e) => {
    setNombre(e.target.value);
  };
  const handleEdit = (id, title) => {
    console.log(title);
    setEditingId(id);
    setNombre(title);
    setEditing(true);
  };

  const handleDelete = async (e) => {
    try {
      await deleteFromFirebase(e, "Favs");
      console.log("Document deleted with ID: " + e);
      setData(data.filter((item) => item.id !== e));
    } catch (e) {
      console.error("Error deleting document: ", e);
    }
  };
  const fetchData = async () => {
    const result = await getFromFirebase("Favs");
    if (result) {
      console.log(result);
      setData(result);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Favorite List</h1>
      <ul className="products">
        {data.map((movie) => (
          <li key={movie.e.id}>
            <div className="product">
              <img src={movie.e.image} />
              {editing && editingId === movie.id ? (
                <div>
                  <input
                    type="text"
                    value={nombre}
                    onChange={(e) => handelNombreOnChange(e)}
                  />
                  <button
                    onClick={() => handleUpdate(movie.id)}
                    className="update-btn"
                  >
                    Actualizar
                  </button>
                </div>
              ) : (
                <div>
                  <a className="product-name" href={`/BlogPost/${movie.e.id}`}>
                    {movie.e.title}
                  </a>
                  <div className="product-price">{movie.e.rating}</div>
                  <div>
                    <button onClick={() => handleEdit(movie.id,movie.e.title)}>Edit</button>
                    <button onClick={() => handleDelete(movie.id)}>delete</button>
                  </div>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favs;
