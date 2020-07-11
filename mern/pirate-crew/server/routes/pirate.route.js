const PirateController = require("../controllers/pirate.controller");

module.exports = function(app){
    app.get("/api/pirates", PirateController.list);
    app.post("/api/pirates", PirateController.create);
    app.get("/api/pirates/:id", PirateController.detail);
    app.put("/api/pirates/:id", PirateController.update);
    app.delete("/api/pirates/:id", PirateController.delete);
}
