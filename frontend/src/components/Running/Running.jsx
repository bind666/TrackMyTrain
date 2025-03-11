import React, { useEffect, useState } from "react";
import { Table, Button, Tag, Timeline, Spin } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const Running = () => {
    const [trainData, setTrainData] = useState([]);
    const [currentStation, setCurrentStation] = useState(null);
    const [trainNumber, setTrainNumber] = useState("");
    const [loading, setLoading] = useState(false);
    const [searchParams] = useSearchParams();
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        const trainNum = searchParams.get("trainNumber");
        if (trainNum) {
            setTrainNumber(trainNum);
            fetchTrainStatus(trainNum);
        }
    }, [searchParams]);

    const handleTextToSpeech = (text) => {
        if ("speechSynthesis" in window) {
            const speech = new SpeechSynthesisUtterance("You are reached to "+text);
            speech.lang = "hi-IN"; // Change language if needed
            speech.rate = 1; // Adjust speed (0.1 to 10)
            speech.pitch = 1; // Adjust pitch (0 to 2)
            window.speechSynthesis.speak(speech);
        } else {
            alert("Your browser does not support text-to-speech!");
        }
    }

    // Fetch train status
    const fetchTrainStatus = async (trainNum) => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:5000/api/train-status/${trainNum}`);
            const trainStatus = response.data.trainStatus || [];
            setTrainData(trainStatus);
            setCurrentStation(response.data.currentStation || null);

            // Fetch weather for all stations
            fetchWeatherForStations(trainStatus);
        } catch (error) {
            console.error("Error fetching train status:", error);
            alert("Failed to fetch train status. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    // Fetch weather data for each station
    const fetchWeatherForStations = async (stations) => {
        const weatherInfo = {};
        for (let station of stations) {
            try {
                const weatherResponse = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${station.stationName}&appid=9f733f7d19158d1f8357df5ced5c17a5&units=metric`
                );
                weatherInfo[station.stationName] = weatherResponse.data.main.temp; // Store temperature
            } catch (error) {
                console.error(`Error fetching weather for ${station.stationName}:`, error);
                weatherInfo[station.stationName] = "N/A";
            }
        }
        setWeatherData(weatherInfo);
    };

    const columns = [
        { title: "Station", dataIndex: "stationName", key: "stationName", render: (text) => <strong>{text}</strong> },
        { title: "Arrival Status", dataIndex: "arrivalTime", key: "arrivalTime" },
        { title: "Departure Status", dataIndex: "departureTime", key: "departureTime" },
        { title: "Delay", dataIndex: "delay", key: "delay", render: (text) => <Tag color="red">{text || "On Time"}</Tag> },
        { title: "Platform", dataIndex: "platform", key: "platform" },
        { title: "Weather", dataIndex: "stationName", key: "weather", render: (stationName) => weatherData[stationName] ? `${weatherData[stationName]}°C` : <Spin size="small" /> },
    ];

    return (
        <div className="h-fit max-w-7xl justify-center w-full mx-auto p-6 bg-white shadow-lg rounded-lg flex gap-6 mb-5">
            <div className="w-3/4">
                <div className="flex justify-between items-center border-b pb-4">
                    <h2 className="text-xl font-bold">Train Status for {trainNumber}</h2>
                    <Button icon={<ReloadOutlined />} type="default" onClick={() => fetchTrainStatus(trainNumber)} loading={loading}>
                        Refresh
                    </Button>
                </div>

                <div className="mt-4">
                    {currentStation && (

                        <div className="mb-4 flex justify-between">
                            <p className="text-lg font-semibold text-blue-600">
                                🚆 Currently at: {currentStation.stationName} ({currentStation.departureTime || "N/A"})
                            </p>

                            <button className="border-2 border-black px-6 py-2 rounded-xl" onClick={()=>handleTextToSpeech(currentStation.stationName)}>Voice</button>
                        </div>
                    )}
                    <Table columns={columns} dataSource={trainData} pagination={false} bordered />
                </div>
            </div>

            {/* Timeline with Weather */}
            <div className="w-1/4 p-6 mt-20">
                <Timeline mode="left">
                    {trainData.map((station, index) => (
                        <Timeline.Item key={index} color={station.stationName === currentStation?.stationName ? "green" : "gray"}>
                            <span className={station.stationName === currentStation?.stationName ? "font-bold text-green-600" : "text-gray-500"}>
                                {station.stationName}
                            </span>
                            <p className="text-sm text-gray-600">
                                🌡 Weather: {weatherData[station.stationName] ? `${weatherData[station.stationName]}°C` : <Spin size="small" />}
                            </p>
                        </Timeline.Item>
                    ))}
                </Timeline>
            </div>
        </div>
    );
};

export default Running;
