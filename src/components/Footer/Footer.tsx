import footer from './footer.css';




function Footer() {
  return (
    <footer className="bg-black flex items-center justify-center py-4 relative z-10">
    <div className="container mx-auto text-center">
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://se.linkedin.com/in/christian-oertlin-phd-96828993" className="text-white hover:text-red-600 hover:font-bold">
          LinkedIn
        </a>
        <a href="https://github.com/ChrOertlin" className="text-white hover:text-red-600 hover:font-bold">
          GitHub
        </a>
      </div>
    </div>
  </footer>
  );
}

export default Footer;