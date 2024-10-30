export default function MealDetails({params}) {
    return <>
    <h1>Meal details</h1>
    <div>{params.mealSlug}</div>
    </>
}