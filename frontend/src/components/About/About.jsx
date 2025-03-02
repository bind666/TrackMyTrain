import React from "react";
import { Collapse } from "antd";

const { Panel } = Collapse;

const About = () => {
    return (
        <div className="w-full h-[100vh] max-w-5xl mx-auto p-6 items-center">
            <h2 className="text-3xl font-semibold">About Us</h2>
            <p className="text-gray-600 mt-4 text-xl">
                Discover how our system enhances railway safety, efficiency, and passenger experience.
            </p>

            <Collapse className="mt-5 text-xl font-medium" accordion>
                <Panel header="Enhanced Safety: Accident Prevention" key="1">
                    <p>Timely updates on weather conditions can help prevent accidents caused by factors like heavy rain, snow, or fog.</p>
                </Panel>
                <Panel header="Improved Scheduling and Efficiency" key="2">
                    <p>Anticipating weather-related disruptions helps in adjusting schedules proactively, minimizing overall delays.</p>
                </Panel>
                <Panel header="Better Passenger Experience" key="3">
                    <p>Passengers receive real-time updates about train statuses and potential delays due to weather, allowing for better travel planning.</p>
                </Panel>
                <Panel header="Resource Management" key="4">
                    <p>Railway operators can better allocate resources, such as maintenance crews and emergency services, based on weather forecasts.</p>
                </Panel>
                <Panel header="Predictive Analytics and Planning" key="5">
                    <p>Combining historical weather and train data helps in making informed, data-driven decisions for future planning.</p>
                </Panel>
                <Panel header="Environmental Benefits" key="6">
                    <p>Optimizing train operations based on weather conditions can lead to more energy-efficient routes and schedules.</p>
                </Panel>
            </Collapse>
        </div>
    );
};

export default About;
