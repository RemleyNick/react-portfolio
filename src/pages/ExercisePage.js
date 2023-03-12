import SubHeader from "../components/SubHeader";
import { Counter } from "../features/counter/Counter";
import ExerciseModal from "../features/modal/ExerciseModal";

const ExercisePage = () => {
    return (
        <div>
            <SubHeader current="Exercise" />
            <h1 className="text-center">Rate Your Pain Levels Today</h1>
            <h4 className="text-center">
                Rating is 1 - 10, 10 being extreme pain.
            </h4>
            <Counter />
            <p className="text-center">
                Exercise challenge will be based on your pain rating. The higher
                your pain today, the easier the exercise.
            </p>
            <ExerciseModal />
        </div>
    );
};

export default ExercisePage;
