import React from "react";
import { FaShieldAlt, FaClock, FaUsers, FaTools, FaChartLine, FaLeaf } from "react-icons/fa";

const advantages = [
    {
        icon: <FaShieldAlt className="text-blue-500 text-2xl" />,
        title: "Enhanced Safety",
        description: "Timely updates on weather conditions can help prevent accidents caused by factors like heavy rain, snow, or fog.",
    },
    {
        icon: <FaClock className="text-blue-500 text-2xl" />,
        title: "Improved Scheduling and Efficiency",
        description: "Anticipating weather-related disruptions helps in adjusting schedules proactively, reducing overall delays.",
    },
    {
        icon: <FaUsers className="text-blue-500 text-2xl" />,
        title: "Better Passenger Experience",
        description: "Passengers receive real-time updates about train statuses and potential delays due to weather, allowing better travel planning.",
    },
    {
        icon: <FaTools className="text-blue-500 text-2xl" />,
        title: "Resource Management",
        description: "Railway operators can better allocate resources like maintenance crews and emergency services based on weather forecasts.",
    },
    {
        icon: <FaChartLine className="text-blue-500 text-2xl" />,
        title: "Predictive Analytics and Planning",
        description: "Historical weather and train data help make informed, data-driven decisions for future planning and infrastructure improvements.",
    },
    {
        icon: <FaLeaf className="text-blue-500 text-2xl" />,
        title: "Environmental Benefits",
        description: "Optimizing train operations based on weather conditions can lead to more energy-efficient routes and lower emissions.",
    },
];

const AdvantagesList = () => {
    return (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mb-16">
            <h2 className="text-2xl font-bold mb-4">Why Choose Our Railway Weather Tracking System?</h2>
            <div className="space-y-4">
                {advantages.map((adv, index) => (
                    <div key={index} className="flex items-start gap-4 border-b pb-4">
                        {adv.icon}
                        <div>
                            <h3 className="font-semibold text-lg">{adv.title}</h3>
                            <p className="text-gray-500 text-sm">{adv.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdvantagesList;
