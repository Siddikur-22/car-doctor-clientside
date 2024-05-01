import { FaInstagramSquare, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "../../../../public/icons/logo.svg"


const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <aside>
                    <img className="" src={logo} alt="" />
                    <p>Go Destination Ltd.<br />Providing reliable tech since 2024</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <div>

                    <a href="https://www.linkedin.com/feed/"> <FaLinkedinIn className="text-3xl"></FaLinkedinIn></a>

                    <a href="https://twitter.com/home"> <FaSquareXTwitter className="text-3xl">
                    </FaSquareXTwitter></a>

                    <a href="https://www.instagram.com/"><FaInstagramSquare className="text-3xl">
                    </FaInstagramSquare></a>

                    <a href="https://www.youtube.com/"> <FaYoutube className="text-3xl">
                    </FaYoutube></a>
                </div>
            </footer>



            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved by Go Destination Ltd</p>
                </aside>
            </footer>
        </>
    );
};

export default Footer;