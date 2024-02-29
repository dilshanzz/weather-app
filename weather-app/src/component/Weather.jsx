function Weather() {
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
            </div>
        </div>
    )
}
export default Weather