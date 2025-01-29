function Footer() {
  return (
    <footer className="flex justify-between items-center p-6 bg-black text-white w-[85%] mx-auto border-t-2">
      {/* Left Side: Logo */}
      <div className="text-lg font-bold">{import.meta.env.VITE_APP_NAME}</div>

      {/* Right Side: Links */}
      <nav className="flex gap-6 text-xs">
        <a href="/pricing" className="hover:text-gray-400">
          Pricing
        </a>
        <a href="/price" className="hover:text-gray-400">
          Price
        </a>
        <a href="/blog" className="hover:text-gray-400">
          Blog
        </a>
        <a href="/showcase" className="hover:text-gray-400">
          Showcase
        </a>
        <a
          href="/privacy-policy"
          className="hover:text-gray-300 transition-colors duration-200"
        >
          Privacy Policy
        </a>
        <a
          href="/terms-and-conditions"
          className="hover:text-gray-300 transition-colors duration-200"
        >
          Terms & Conditions
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
