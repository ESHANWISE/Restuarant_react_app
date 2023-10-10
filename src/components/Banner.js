

function Banner(){

    return (
        <>
            <section
                className="container-fluid p-0 m-0"
                style={{
                    backgroundImage: 'url("assets/images/banner.jpg")',
                    height: 200,
                    backgroundSize: "cover"
                }}
                >
                <div
                    className="row"
                    style={{ backgroundColor: "rgba(0,0,0,0.6)", height: "inherit" }}
                >
                    <div className="col">
                    <h1 className="text-center text-light mt-4">
                        Browse our Range of Mouth-Watering Menu
                    </h1>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Banner;