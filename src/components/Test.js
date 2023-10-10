

function Test(){
    const h1Style = {
        background: "red",
        color: "black",
    }


    return (
        <div>
            <h1 style={h1Style}>I am testing my inline css</h1>
            <p style={{
                color:"green",
                fontSize: "50px"
            }}>Good job</p>
        </div>
    )


}

export default Test;