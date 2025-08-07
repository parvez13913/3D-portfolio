const Footer = () => {
  return (
    <footer className="sm:px-10 px-5 pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p className="font-serif">Terms & Conditions</p>
        <p>|</p>
        <p className="font-serif">Privacy Policy</p>
      </div>
      <div className="flex gap-3">
        <a
          href="https://github.com/parvez13913"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex justify-center items-center bg-black-300 border border-black-200 cursor-pointer"
        >
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>

        <a
          href="https://x.com/parvez13913"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex justify-center items-center bg-black-300 border border-black-200 cursor-pointer"
        >
          <img src="/assets/twitter.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a
          href="https://www.instagram.com/parvez13913/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex justify-center items-center bg-black-300 border border-black-200 cursor-pointer"
        >
          <img
            src="/assets/instagram.svg"
            alt="github"
            className="w-1/2 h-1/2"
          />
        </a>
      </div>
      <p className="text-white-500 font-serif">
        © 2025 Parvez Rahman. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
