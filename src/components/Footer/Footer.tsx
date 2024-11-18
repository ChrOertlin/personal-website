import footer from './footer.css';




function Footer() {
  return (
    <footer className="bg-zinc-700 flex items-center justify-center py-4">
    <div className="container mx-auto text-center">
      <p className="text-white">Christian Oertlin</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="https://se.linkedin.com/in/christian-oertlin-phd-96828993" className="text-white hover:text-blue-700">
          LinkedIn
        </a>
        <a href="https://github.com/ChrOertlin" className="text-white hover:text-gray-500">
          GitHub
        </a>
      </div>
    </div>
  </footer>
  );
}

export default Footer;