import Button from "../common/Button";


const Header: React.FC = () => {
    return (
        <header className="flex flex-col bg-[#ffffff]">
            <div className=" flex items-center justify-center  h-[42px] px-4 gap-4 bg-[#34967c]">
                <img src="/images/Case Minimalistic.svg" alt="lable" />
                <p>Overseas trip? Get the latest information on travel guides</p>
                <Button  label="More Info" style="bg-black rounded-2xl text-white w-[86px] h-[30px]" variant="primary" onClick={() => {}} />
            </div>
           <div className=" flex items-center   h-[88px] ">

                {/* <nav className="flex space-x-4 ">
                    <img src="/images/Vector.png" alt="logo" />
                    <ul className="flex space-x-4">
                        <li><a href="http://">location</a></li>
                        <li><a href="http://">Check in</a></li>
                        <li><a href="http://">Check out</a></li>
                        <li><a href="http://">People</a></li>

                        <button></button>
                    </ul>
                </nav> */}
           </div>
        </header>
    )
}


export default Header;