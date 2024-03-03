import "./Weather.css";
import sunny from "../assets/sunny_6092898.png";
import serch from "../assets/find_12363627.png";
import { useEffect, useState } from "react";

function Weather() {

    const [data, setData] = useState({
        icon:sunny,
        celcius: 0,
        name: "London",
        humidity: 0,
        windSpeed: 0
    });

    const [location, setLocation] = useState("");

    const citySearch = () => {
        const cityInput = document.getElementById("city-input");
        if (cityInput) {
            setLocation(cityInput.value);
        }
    };
   

    useEffect(() => {
        const fetchData = async () => {
            try {
                const api = `https://api.weatherapi.com/v1/current.json?key=e9efbd0df6294e5c9fb94321233012&q=${location}`;

                const res = await fetch(api);

                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }

                const resData = await res.json();

                setData({
                    icon:`https:${resData.current.condition.icon}`,
                    celcius: resData.current.temp_c,
                    name:  resData.location.name,
                    humidity:  resData.current.humidity,
                    windSpeed:  resData.current.wind_kph,
                });

            } catch (e) {
                console.error("Error fetching weather data:", e)
            }

        };

        if (location) {
            fetchData();
        }
    }, [location]);

   


    return (
        <div className="main container  ">

            <div className="container col-4">
                <div className="row col-3 "></div>
            </div>

            <div className="container weather-con col-9  ">
                <div className="row mb-5"></div>

                <div className="row ">
                    <div className="container  "></div>
                    <div className="col-3"></div>
                    <div className="col-5">
                        <input
                            type="text"
                            className="form-control"
                            id="city-input"
                            placeholder="Enter city name" />

                    </div>
                    <div className="container col-4">
                        <button className="btn btn-primary mb-4" 
                         onClick={citySearch}>
                            <img className="s-img" src={serch} alt="search"/>
                        </button>
                    </div>
                    <div >
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="container   col-10 mb-4">
                                <img className="img" src={data.icon} alt="" />
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-2"></div>
                        <div className="container temp  col-10 mb-4">
                            The Current tempreature is {data.celcius}°C
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="container temp  col-10 mb-4">
                            The Current windspeed is {data.windSpeed} kph
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="container temp  col-10 mb-4">
                            The Current humidity is {data.humidity}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Weather
