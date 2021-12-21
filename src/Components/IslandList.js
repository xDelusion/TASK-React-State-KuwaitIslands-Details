import IslandsData from '../Islands'
import Island from './Island'

export default function IslandList() {

    let islandsArray = IslandsData.map(island => <Island island={island} />)

    return (


        <div>
            <input className="search" placeholder="Search for an island" />
            <div className="islandList">

                {islandsArray}
            </div>
        </div>


    )
}
