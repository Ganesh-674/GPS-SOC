const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const FIREBASE_URL = "https://speed-alert-fd1be-default-rtdb.firebaseio.com/GPS.json?auth=QfIareCvHHcSvN44yguBnnFaYqjUdIe1FzwJlfky";

app.post("/gps", async (req, res) => {
  try {
    const response = await axios.post(FIREBASE_URL, req.body);
    res.status(200).json({ status: "Uploaded to Firebase" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Firebase Error" });
  }
});

app.get("/", (req, res) => {
  res.send("Firebase Proxy Running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});