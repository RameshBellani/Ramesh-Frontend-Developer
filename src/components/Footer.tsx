import Image from "next/image";
import {
  FaTelegramPlane,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaDiscord,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-darkBlue text-white py-10 px-6 sm:px-20">
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-10 sm:space-y-0">
        <div className="flex flex-col items-center sm:items-start">
          <div className="flex items-center space-x-2">
            <Image
              src="https://res.cloudinary.com/dwffepf9q/image/upload/v1729008065/pd8rttforz5jdksy5fkt.png"
              alt="EthAi Logo"
              height={40}
              width={40}
            />
            <span className="text-2xl font-semibold">EthAi</span>
          </div>
          <div className="flex mt-4 space-x-4">
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <FaTelegramPlane className="w-6 h-6 text-white hover:text-gray-400 transition duration-300" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6 text-white hover:text-gray-400 transition duration-300" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="w-6 h-6 text-white hover:text-gray-400 transition duration-300" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook className="w-6 h-6 text-white hover:text-gray-400 transition duration-300" />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
            >
              <FaDiscord className="w-6 h-6 text-white hover:text-gray-400 transition duration-300" />
            </a>
          </div>
        </div>

        <div className="hidden sm:block text-center sm:text-right">
          <p className="text-lg sm:text-xl font-semibold mb-4">
            “Designed for traders of today, just like you.”
          </p>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <input
              type="email"
              placeholder="What's your work email?"
              className="w-full sm:w-auto py-2 px-4 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white py-2 px-6 rounded-lg transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
