### Steps
Fork and clone [this repo](https://github.com/JoinCODED/TASK-React-KuwaitIslands-Details) into your `Development` folder

## Part1: Change the island

1. In `App.js` we are rendring the `IslandList` and `IslandForm`.
2. Create a state called `island` that holds the island to be shown with an intial value of an empty string.
3. In `App.js` pass our state to the `IslandForm`.
4. Pass this `setIsland` to `IslandList`.
5. From `IslandList` let's pass it again to `Island`.
6. In `Island` add an `onClick` function to the whole `div` that calls our `setIsland` and give it the current island.

## Part2: Book Now

1. When clicking book now button in `IslandForm` show an alert that says the trip is booked.
