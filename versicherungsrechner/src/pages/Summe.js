import HomeButton from "../Components/HomeButton";
import HausratVersicherungsrechner from "../Components/SummenRechner";

const Summe= () => {
    return (
        <div id="summseite">
            <h1>Versicherungssummenmodell</h1>
            <br />
            <HausratVersicherungsrechner />
            <br />
            <HomeButton/ >
        </div>
    );
};

export default Summe;