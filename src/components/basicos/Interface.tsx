export default function Interface() {
    return (

        <div className="interface">

            <header>
                <h1 className="brilhante">META CASINO</h1>
                <div className="pyramid-loader">
                    <div className="wrapper">
                    <span className="side side1"></span>
                    <span className="side side2"></span>
                    <span className="side side3"></span>
                    <span className="side side4"></span>
                    <span className="shadow"></span>
                    </div>  
                </div>
            </header>

            <button className="btn start-btn" type="button">
                <strong>START</strong>
                <div id="container-stars">
                <div id="stars"></div>
                </div>
            
                <div id="glow">
                <div className="circle"></div>
                <div className="circle"></div>
                </div>
            </button>

        </div>
        
    )
}