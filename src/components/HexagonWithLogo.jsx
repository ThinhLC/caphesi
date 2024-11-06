import Polygon from "../assets/img/Polygon.png";

function HexagonWithLogo({ logo }) {
    return (
        <div className="relative w-36 h-36 hover:scale-105 transition-transform duration-300">
            <img src={Polygon} alt="Polygon background" className="w-full h-full hover:brightness-125 transition duration-300" />
            <img
                src={logo}
                alt="Brand Logo"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 hover:scale-110 transition-transform duration-300"
            />
        </div>
    );
}

export default HexagonWithLogo;