import HomeButton from "../Components/HomeButton";
import HausratVersicherungsrechner from "../Components/SummenRechner";

const Summe= () => {
    return (
        <div>
            <h1>Versicherungssummenmodell</h1>
            <HausratVersicherungsrechner />
            <HomeButton/ >
        </div>
    );
};

export default Summe;