import backyard from "../photos/backyard.png" 
import backpatio from "../photos/in-work-back-patio.png"
import patio from "../photos/patio.png"
import yard from "../photos/yard.png"

function OutdoorSpace() {
    var photos = [backyard, backpatio, patio, yard]

    return(
        <div>
        <div>
            <h1>In-progress Outdoor space</h1>
            <p>In-progress photos of our outdoor spaces.</p>
        </div>
        <div class="outdoor-pics">
            {photos.map((photo) => (
                <img src={photo} width="80%" class="outdoor-img" alt="progress of yard" />
            ))
            }
        </div>
        </div>
    )
}

export default OutdoorSpace
