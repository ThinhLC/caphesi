import CustomButton from "./CustomButton";
import TrungNguyen from "../assets/img/Trungnguyen.png";
import HexagonWithLogo from "./HexagonWithLogo";

function Section2() {
    return (
        <div className="bg-green-50 p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
                <div className="text-center md:text-left mb-6 md:mb-0 md:mr-10 flex-1">
                    <p className="font-bold text-3xl mb-2">10+ Nhà cung cấp cà phê hàng đầu Việt Nam</p>
                    <p className="text-gray-700 mb-4">
                        Chúng tôi tự hào là đối tác của hơn 10 nhà cung cấp cà phê hàng đầu tại Việt Nam, những đơn vị đã được chứng nhận về chất lượng và uy tín. Với cam kết cung cấp sản phẩm cà phê đạt tiêu chuẩn cao nhất, chúng tôi mang đến cho bạn những ly cà phê thơm ngon, đậm đà hương vị đặc trưng của vùng đất Việt.
                    </p>
                    <CustomButton className="px-5 py-2">Explore More</CustomButton>
                </div>

                {/* Lưới hình ảnh lục giác */}
                <div className="grid grid-cols-3">
                    <HexagonWithLogo logo={TrungNguyen} />
                    <HexagonWithLogo logo={TrungNguyen} />
                    <HexagonWithLogo logo={TrungNguyen} />
                    <HexagonWithLogo logo={TrungNguyen} />
                    <HexagonWithLogo logo={TrungNguyen} />
                    <HexagonWithLogo logo={TrungNguyen} />
                    
                </div>
            </div>

            <div className="flex justify-center space-x-4 text-gray-600 text-lg mt-6">
                <a href="/#" className="hover:scale-110 transition-transform duration-300">Trung Nguyen Legend</a>
                <a href="/#" className="hover:scale-110 transition-transform duration-300">Vinacafé</a>
                <a href="/#" className="hover:scale-110 transition-transform duration-300">Phúc Long</a>
                <a href="/#" className="hover:scale-110 transition-transform duration-300">Nestlé (Nescafé)</a>
                <a href="/#" className="hover:scale-110 transition-transform duration-300">Lamant Coffee</a>
            </div>

        </div>
    );
}

export default Section2;
