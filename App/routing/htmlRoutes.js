const path = require("path");

module.exports = function (app) {
    // A GET Route to /tables which should display the tables page.
    app.get("/table", (req, res) => res.sendFile(path.join(__dirname, "/../public/table.html")));

    // A GET Route to /reserve which should display the reservations page.
    app.get("/reservation", (req, res) => res.sendFile(path.join(__dirname, "/../public/reservation.html")));

    // A default, catch-all route that leads to home.html which displays the home page.
    app.use((req, res) => res.sendFile(path.join(__dirname + "/../public/home.html")));
}