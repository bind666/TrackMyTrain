const express = require("express")
const cors = require("cors")
const cheerio = require("cheerio");
const axios = require("axios")
const fs = require('fs');

const corsOptions = {
    origin: "http://localhost:5173", // Update this based on your frontend
    methods: "GET,POST",
    allowedHeaders: "Content-Type",
};
const app = express();

const PORT = 5000;

app.use(cors(corsOptions));
app.use(express.json());
app.use(cors());

// Train Running Status API
app.get("/api/train-status/:trainNumber", async (req, res) => {
    const { trainNumber } = req.params;
    const date = new Date().toISOString().slice(0, 10).split("-").reverse().join(""); // Format: DDMMYYYY

    try {
        const data = await axios.get(`https://www.ixigo.com/trains/${trainNumber}/running-status`);
        const html = data.data;

        const $ = cheerio.load(html);
        const trainStatus = [];
        let currentStation = null;

        $(".running-status-rows .status-row").each((index, element) => {
            const stationName = $(element).find(".station-name-rs").text().trim();
            const distance = $(element).find(".sub-text").first().text().trim();
            const arrivalTime = $(element).find("td:nth-child(3) .list-time").first().text().trim();
            const scheduledArrival = $(element).find("td:nth-child(3) .list-time.sch").text().trim();
            const departureTime = $(element).find("td:nth-child(4) .list-time").first().text().trim();
            const scheduledDeparture = $(element).find("td:nth-child(4) .list-time.sch").text().trim();
            const delay = $(element).find(".delay").text().trim();
            const platform = $(element).find(".platform div:first-child").text().trim();
            const haltTime = $(element).find(".platform div:last-child").text().trim();

            const isCurrent = $(element).hasClass("current");
            if (isCurrent) {
                currentStation = {
                    stationName,
                    distance,
                    arrivalTime,
                    scheduledArrival,
                    departureTime,
                    scheduledDeparture,
                    delay,
                    platform,
                    haltTime,
                };
            }

            trainStatus.push({
                stationName,
                distance,
                arrivalTime,
                scheduledArrival,
                departureTime,
                scheduledDeparture,
                delay,
                platform,
                haltTime,
            });
        });

        const responseData = { trainNumber, trainStatus, currentStation };

        // Save to JSON file
        fs.writeFileSync("data.json", JSON.stringify(responseData, null, 2));

        res.json(responseData);
    } catch (error) {
        console.error("Error fetching train status:", error);
        res.status(500).json({ error: "Failed to fetch train status" });
    }
});

// Start Express Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
