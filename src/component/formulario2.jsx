import { React, useState } from "react";
import "../Style/form2.css";
import Table from "react-bootstrap/Table";

export function Formulario() {
  const [idModificar, setIdModificar] = useState(null);

  const [rows, setRows] = useState([
    {
      id: 1,
      name: "Pistola de portales",
      price: "9999",
      description:
        "Pistola que permite abrir portales a diferentes universos dentro de la curva infinita central",
      images:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGh7SufcYR0Y53jy8Rxa3I5H-OIXTVmUZqqQ&usqp=CAU",
    },
    {
      id: 2,
      name: "Caja de Meeseeks",
      price: "20",
      description:
        "Genera Meeseeks y pidelo lo que quieras, pero no seas avaricioso o te podria costar la cabeza",
      images:
        "https://static.wikia.nocookie.net/rick-y-morty-espanol/images/8/82/Caja_de_Meeseeks.png/revision/latest?cb=20180211022717&path-prefix=es",
    },
    {
      id: 3,
      name: "Mega Semillas",
      price: "1",
      description:
        "Solo los verdaderos cerebros galaxia saben que hacer con estas semillas",
      images:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAm6-GwLnCENaXTb1Q5PO-tR54MI9oe8bM1Q&usqp=CAU",
    },
  ]);

  const [formValues, setFormValues] = useState({
    id: 0,
    name: "",
    description: "",
    price: 0,
    images: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (idModificar !== null) {
      const indexModificar = rows.findIndex((row) => row.id === idModificar);
      const nuevosDatos = [...rows];
      nuevosDatos[indexModificar] = formValues;
      setRows(nuevosDatos);
      setIdModificar(null);
    } else {
      setRows((prevState) => [...prevState, formValues]);
    }
    setFormValues({ id: 0, name: "", description: "", price: 0, images: "" });
  };

  const eliminarDato = (id) => {
    const nuevosDatos = rows.filter((row) => row.id !== id);
    setRows(nuevosDatos);
  };

  return (
    <div class="Formulario contenido">
      <div class="form">
        <h1 class="form-titulo">Formulario</h1>
        <div class="formulario">
          <Table className="form-table" striped bordered hover>
            <thead>
              <tr>
                <th>_id</th>
                <th>Nombre</th>
                <th>Price</th>
                <th>Description</th>
                <th>Images</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.price}</td>
                  <td>{row.description}</td>
                  <td>
                    <a href={row.images}>{row.images}</a>
                  </td>
                  <td>
                    <button
                      className="icon-pen"
                      onClick={() => setIdModificar(row.id)}
                    >
                      <i className="fa-regular fa-pen-to-square"></i>
                    </button>
                  </td>
                  <td>
                    <button
                      className="icon-trash"
                      onClick={() => eliminarDato(row.id)}
                    >
                      <i className="fa-regular fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              name="id"
              placeholder="Id"
              value={idModificar !== null ? idModificar : formValues.id}
              disabled={idModificar !== null}
              onChange={(e) => {
                setFormValues((prevState) => ({
                  ...prevState,
                  id: parseInt(e.target.value),
                }));
              }}
            />
            <input
              type="text"
              name="name"
              placeholder="name"
              value={
                idModificar !== null
                  ? rows.find((row) => row.id === idModificar).name
                  : formValues.name
              }
              onChange={(e) => {
                setFormValues((prevState) => ({
                  ...prevState,
                  name: e.target.value,
                }));
              }}
            />
            <input
              type="text"
              name="price"
              placeholder="Precio"
              value={
                idModificar !== null
                  ? rows.find((row) => row.id === idModificar).price
                  : formValues.price
              }
              onChange={(e) => {
                setFormValues((prevState) => ({
                  ...prevState,
                  price: e.target.value,
                }));
              }}
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={
                idModificar !== null
                  ? rows.find((row) => row.id === idModificar).description
                  : formValues.description
              }
              onChange={(e) => {
                setFormValues((prevState) => ({
                  ...prevState,
                  description: e.target.value,
                }));
              }}
            />
            <input
              type="text"
              name="images"
              placeholder="URL"
              value={
                idModificar !== null
                  ? rows.find((row) => row.id === idModificar).images
                  : formValues.images
              }
              onChange={(e) => {
                setFormValues((prevState) => ({
                  ...prevState,
                  images: e.target.value,
                }));
              }}
            />
            <button type="submit">
              {idModificar !== null ? "Modificar" : "Agregar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
