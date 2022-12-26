import SubHeader from "../components/SubHeader";
import { Counter } from "../features/counter/Counter";
import { Button } from "../features/Button";

const ExercisePage = () => {
    return (
    <div>
        <SubHeader current='Exercise' />
        <h1 className="text-center">Rate Your Pain Levels Today</h1>
        <h4 className="text-center">Rating is 1 - 10, 10 being extreme pain.</h4>
        <Counter /> 
    </div>
    )
};

export default ExercisePage;