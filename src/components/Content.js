



function Content({categories}){
    return (
        <>
                <div className="album py-5 bg-light">
                <div className="container" id="shopnow">
                    <div className="row">
                    <div className="col-md-12">
                        <h5 className="mb-3 text-danger">CATEGORIES</h5>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3" id="shopnow">
                        {
                            categories.map((cat,index) =>{

                                return(
                                    <div className="col">
                                        <div className="card shadow-sm">
                                        <img src={cat.strCategoryThumb} alt={cat.strCategoryThumb}  className="img-fluid" />
                                        <div className="card-body">
                                            <p className="card-text">{cat.strCategory}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-sm btn-danger">
                                                More Details
                                                </button>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                            
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Content;