import "./Weather.css";

import serch from "../assets/find_12363627.png";
import rainy from "../assets/dana-marin-amsterdamian-O-wN5LK8Q3k-unsplash.jpg"
import { useEffect, useState } from "react";
import dry from "../assets/dry.jpg"
import snow from "../assets/snow.jpg"
import storms from "../assets/storms.jpg"

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
            <div className="row mb-1">
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
            <div className="container-fluid col-12 ">
           
               <div className="row">
               
               <div className="card col-2"  >
                    <img src={rainy} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Most raining cities in the world</h5>
                    </div>  
                    <div className="card-body">
                        <a href="https://www.thetravel.com/cities-with-the-highest-rains-in-the-world/" className="card-link">Click here</a>
                        
                    </div>
                </div>

                
                <div className="card col-2 mr-4"  >
                    <img  src={dry} className="card-img-top card-imgs" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Most driest cities in the world</h5>
                    </div>  
                    <div className="card-body">
                        <a href="https://www.livescience.com/30627-10-driest-places-on-earth.html" className="card-link">Click here</a>
                        
                    </div>
                </div>
               
                <div className="card col-2"  >
                    <img  src={snow} className="card-img-top card-imgs" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Most snowiest cities in the world</h5>
                    </div>  
                    <div className="card-body">
                        <a href="https://www.tripsavvy.com/the-worlds-top-snowiest-cities-4582630" className="card-link">Click here</a>
                        
                    </div>
                </div>
                
                <div className="card col-2"  >
                    <img  src={storms} className="card-img-top card-imgs" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">About storms</h5>
                    </div>  
                    <div className="card-body">
                        <a href="https://www.britannica.com/science/storm" className="card-link">Click here</a>
                        
                    </div>
                </div>
               
               </div>
                
            </div>
        </div>

    )
}
export default Weather
