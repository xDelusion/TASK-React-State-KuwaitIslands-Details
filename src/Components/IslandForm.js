
export default function IslandForm(props) {
    let counter = 0

    return (
        <div className="form">
            <h2>{props.island.name}</h2>
            <img src={props.island.img} />
            <h3>Book a trip to {props.island.name} island</h3>
            <input placeholder="Enter first name" />
            <input placeholder="Enter last name" />
            <input placeholder="Enter phone number" />
            <span>Number of persons</span>
            <button > + </button> {counter} <button >-</button>

            <button className="book">Book for today!</button>
        </div>
    )
}
