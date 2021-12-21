## Counter

1. In the component IslandForm.js there is a counter that's not functional. Fix it.

## Search Bar

1. In the component `IslandList.js` there is a search bar that's not functional. Fix it.

## Change the island

1. In `App.js` we are rendring the `IslandList.js` and `IslandForm.js`.
2. Create a state called `island` that holds the island to be shown with an intial value of an empty string.
3. In `App.js` pass our state to the `IslandForm.js`.
4. Pass this `setIsland` to `IslandList.js`.
5. From `IslandList.js` let's pass it again to `Island.js`.
6. In `Island.js` add an `onClick` function to the whole `div` that calls our `setIsland` and give it the current island.

## Book Now

1. When clicking book now button in `IslandForm.js` show an alert that says the trip is booked.
