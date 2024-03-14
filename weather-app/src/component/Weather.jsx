import "./Weather.css";
import sunny from "../assets/sunny_6092898.png";
import serch from "../assets/find_12363627.png";
import wind from "../assets/wind.png";
import hum from "../assets/hum.png";
import { useEffect, useState } from "react";

function Weather() {

    const [data, setData] = useState({

        celcius: 0,
        feelsLike: 0,
        name: "None",
        region: "None",
        country: "None",
        tzId: "None",
        humidity: 0,
        windSpeed: 0,
        cloud: 0

    });

    const [location, setLocation] = useState("");

    const citySearch = () => {
        const cityInput = document.getElementById("city-input");
        // cityInput = cityInput.value
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
                    celcius: resData.current.temp_c,
                    feelsLike: resData.current.feelslike_c,
                    name: resData.location.name,
                    region: resData.location.region,
                    country: resData.location.country,
                    tzId: resData.location.tz_id,
                    humidity: resData.current.humidity,
                    windSpeed: resData.current.wind_kph,
                    cloud: resData.current.cloud
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

        <div className="container-fluid">
            <div className="row">
                <div className="container-fluid weather-con col-12  ">
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
                                <img className="s-img" src={serch} alt="search" />
                            </button>
                        </div>
                        <div >
                            <div className="row">
                                <div className="col-2"></div>

                            </div>
                        </div>
                        <div className="row">

                            <div className="container temp  col-2 bg-light p-2 text-dark bg-opacity-25 ">
                                {data.celcius}°C
                                <div className="feel">
                                    Feels Like {data.feelsLike}°C
                                </div>
                                <div className="city container-fluid d-flex align-items-center justify-content-center ">
                                    {location}
                                </div>

                            </div>
                            <div className="container col-9">
                                <div className="container  ">
                                    <div className="row container other  bg-light p-2 text-dark bg-opacity-25 col-12  mb-5">
                                        <div className="contrainer col-4">
                                            Windspeed : {data.windSpeed} kph
                                        </div>
                                        <div className="container col-4">
                                            Humidity : {data.humidity}
                                        </div>
                                        <div className="container col-4">
                                            Cloud : {data.cloud}
                                        </div>

                                    </div>
                                </div>



                                <div className="container other1 bg-light p-2 text-dark bg-opacity-25 col-12 ">
                                    <div className="row">
                                        <div className="container col-4">
                                            Region : {data.region}
                                        </div>
                                        <div className="container col-4">
                                            Country : {data.country}
                                        </div>
                                        <div className="container col-4">
                                            Continent : {data.tzId}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="container oth  col-10 mb-4">
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="container oth  col-10 mb-4">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="card"  style={{"width: 18rem;"}}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                    </ul>
                    <div className="card-body">
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Weather
