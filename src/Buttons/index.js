import "./style.css";

const Buttons = ({ tasks, hidenDoneTasks }) => (
    tasks.lenght > 0 && (
        <div className="buttons">
            <button className={"section__buttons">
                {hiddenDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button
                className="section__buttons"
                disabled={tasks.every(({ done }) => done)}
                >
                Ukończ wszystkie
            </button>
        </div >
    )
);

export default Buttons;