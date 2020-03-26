import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

import "./styles.css";

import api from "../../services/api";

//images
import logo from "../../assets/logo.svg";

export default function NewIncident() {
  const ongId = localStorage.getItem("ongId");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [valor, setValor] = useState("");

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      title: name,
      description,
      value: valor
    };

    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: ongId
        }
      });

      history.push("/profile");
    } catch (err) {
      console.log(err);

      alert("Erro ao cadastrar caso");
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logo} alt="Be The Hero" />
          <h1>Cadastrar Novo Caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para Home
          </Link>
        </section>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Título do Caso"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em reais"
            type="text"
            value={valor}
            onChange={e => setValor(e.target.value)}
          />
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
