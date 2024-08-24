import ParticleRing from "../Components/ParticleRing"
import StarField from "../Components/Starfield"
import VisitCounter from "../Components/VisitCounter"

function Homepage(){
    return(
        <>
       <ParticleRing />
       <div>
       <b><VisitCounter/></b>
       </div>
        </>
    )
}

export default Homepage