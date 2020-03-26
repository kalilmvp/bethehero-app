const express = require("express");
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

//login
routes.post("/sessions", SessionController.store);

//profile
routes.get("/profile", ProfileController.index);

//ongs
routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.store);

//incidents
routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.store);
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;
