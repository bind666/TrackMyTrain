import React from "react";
import { Input, Button } from "antd";
import RecentSearches from "../RecentSearch/RecentSearch";
import AdvantagesList from "../Advantages/Advantages";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const [trainNumber, setTrainNumber] = useState("");
    const navigate = useNavigate();

    const handleCheckStatus = () => {
        if (trainNumber.trim() !== "") {
            navigate(`/running-status?trainNumber=${trainNumber}`);
        } else {
            alert("Please enter a valid train number!");
        }
    };

    return (
        <div className=" h-full ">
            <div className="max-w-4xl mx-auto p-4">
                <h2 className="font-semibold mt-7 text-4xl">Train Running Status</h2>

                <div className="flex space-x-4 mt-2 text-gray-600 text-sm">

                    <span className="cursor-pointer text-blue-600 border-b-2 mt-2 text-2xl ">
                        📍 Running Status
                    </span>

                </div>

                <div className="bg-gray-100 rounded-lg mt-4 flex p-7 shadow-md gap-3 items-center">
                    <Input
                        className="flex-1 px-3 py-4 rounded-l-md text-[20px]"
                        placeholder="Enter the train number"
                        value={trainNumber}
                        onChange={(e) => setTrainNumber(e.target.value)}
                    />

                    <Button
                        className="bg-orange-500 hover:bg-orange-600 px-8 py-6 text-white rounded-r-md"
                        type="primary"
                        onClick={handleCheckStatus}
                    >
                        Check Live Status
                    </Button>
                </div>
            </div>

            <RecentSearches />
            <AdvantagesList />
        </div>

    );
};

export default Home;
