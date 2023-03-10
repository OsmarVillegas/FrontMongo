import { React, useState } from "react";
import "../Style/form2.css";
import Table from "react-bootstrap/Table";

export function Formulario() {
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
        "https://static.wikia.nocookie.net/rick-y-morty-espanol/images/8/82/Caja_de_Meeseeks.png/revision/latest/scale-to-width-down/250?cb=20180211022717&path-prefix=es",
    },
    {
      id: 3,
      name: "Mega Semillas",
      price: "1",
      description:
        "Solo los verdaderos cerebros galaxia saben que hacer con estas semillas",
      images:
        "https://static.wikia.nocookie.net/rick-y-morty-espanol/images/e/e3/Mega_Semillas.png/revision/latest/scale-to-width-down/1000?cb=20190329201247&path-prefix=es",
    },
  ]);

  const [formValues, setFormValues] = useState({ name: "", age: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setRows((prevState) => [...prevState, formValues]);
    setFormValues({ name: "", age: "" });
  };

  return (
    <div class="Formulario contenido">
      <div class="form">
        <h1 class="form-titulo">Formulario</h1>
        <div class="formulario">
          <form action="">
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
                      <button className="icon-pen">
                        <i class="fa-regular fa-pen-to-square"></i>
                      </button>
                    </td>
                    <td>
                      <button className="icon-trash">
                        <i class="fa-regular fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}

              </tbody>
            </Table>
            <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formValues.name}
                    onChange={handleInputChange}
                  />
                  <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={formValues.age}
                    onChange={handleInputChange}
                  />
                  <button type="submit">Add row</button>
                </form>
          </form>
        </div>
      </div>
    </div>
  );
}

/*

const TableForm = () => {
  const [rows, setRows] = useState([
    { name: "John", age: 25 },
    { name: "Sarah", age: 30 },
    { name: "Mark", age: 35 },
  ]);

  const [formValues, setFormValues] = useState({ name: "", age: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setRows((prevState) => [...prevState, formValues]);
    setFormValues({ name: "", age: "" });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formValues.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formValues.age}
          onChange={handleInputChange}
        />
        <button type="submit">Add row</button>
      </form>
    </div>
  );
};

*/
