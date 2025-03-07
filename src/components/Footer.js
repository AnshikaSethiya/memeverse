import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from "@ant-design/icons";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
    return (
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left text-gray-400">
          <p>&copy; {currentYear} My Company. All rights reserved.</p>
        </div>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/about" className="text-gray-300 hover:text-white transition duration-300">About Us</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition duration-300">Contact</Link>
          <Link href="/privacy" className="text-gray-300 hover:text-white transition duration-300">Privacy Policy</Link>
        </div>

        <div className="flex space-x-6 mt-4 md:mt-0"> {/* Social Media Icons */}
          <a href="#" className="text-gray-500 hover:text-white transition duration-300">
            <TwitterOutlined className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-500 hover:text-white transition duration-300">
            <FacebookOutlined className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-500 hover:text-white transition duration-300">
            <InstagramOutlined className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-500 hover:text-white transition duration-300">
            <LinkedinOutlined className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Optional: Add a subtle divider or line above the footer */}
      <div className="border-t border-gray-700 mt-6 pt-4">
          <p className="text-center text-gray-500">MemeVerse Made by Anshika Sethiya</p>
        </div> 
    </footer>
    );
  };
  
  export default Footer;
  