
function Weather() {
let api = "7feba465acef36f12dc3c8e8d685e9fd"

function search(){
    
}

    return (
        <div className="container-fluid">
            <div className="container mt-4 col-6 ">
                <div className="row col-4">
                    <div class="mb-3 ">
                        {/* <label for="txt-city" class="form-label"></label> */}
                        <input type="text" className="form-control" id="txt-city" placeholder="City"></input>
                    </div>
                </div>
                <div className=" col-2" >
                    <button className="btn btn-primary ml-1">Search</button>
                </div>
                <div className="container ">
                    <div className="temp  mt-4 ">24°C</div>
                    <div className="loc ">London</div>
                    <div className="humidity">Humidity</div>
                    <div className="wind">Wind Speed</div>

                </div>

            </div>
        </div>
    )
}
export default Weather