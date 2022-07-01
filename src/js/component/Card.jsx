import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

const Card = ()=> {
    return (
        <div className="container mb-5">
        <div class="row row-cols-sm-1 row-cols-lg-4 g-4">
            <div className="col"> 
                <div className="card ms-4" style={{width: "18rem"}}>
                    <img src={rigoImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className="col"> 
                <div className="card ms-4" style={{width: "18rem"}}>
                    <img src={rigoImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div className="col"> 
            <div className="card ms-4" style={{width: "18rem"}}>
                <img src={rigoImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        <div className="col"> 
            <div className="card ms-4" style={{width: "18rem"}}>
                <img src={rigoImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Card