import Link from "next/link";
import Logo from "./logo";
import {GithubIcon, LinkedinIcon, TwitterIcon} from "../icons";

const Header = () => {
  return (
    <Header className="w-full p-4 px-10 flex items-center justify-between">
      <Logo/>
      <nav className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalise flex items-center
      fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm">
        <link href="/" className="mr-2">Home</link>
        <link href="/" className="mx-2">About</link>
        <link href="/" className="mr-2">Contact</link>
        <button>T</button>
      </nav>
      <div>
        <a href="http://example.com" className="inline-block w-6 h-6 mr-4"><LinkedinIcon className="hover:scale-125 transition-all ease duration-200"/></a>
        <a href="http://example.com" className="inline-block w-6 h-6 mr-4"><TwitterIcon className="hover:scale-125 transition-all ease duration-200"/></a>
        <a href="http://example.com" className="inline-block w-6 h-6 mr-4"><GithubIcon className="hover:scale-125 transition-all ease duration-200"/></a>
    
      </div>
    </Header>
    
  )
}

export default Header;