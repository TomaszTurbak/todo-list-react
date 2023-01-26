import "./style.css";

const Buttons = ({ tasks, hiddeDoneTasks }) => (
    tasks.lenght > 0 && (
        <div className="buttons">
            <button className="buttons__button">
                {hiddeDoneTasks ? "Pokaż" : "Ukryj"} ukończone
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