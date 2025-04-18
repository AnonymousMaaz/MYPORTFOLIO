const Logo = () => {
  return (
    <div className="flex items-center gap-3 group">
      {/* Logo Mark */}
      <div className="relative">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/30">
          <span className="text-white font-bold text-2xl tracking-tighter font-sans">M</span>
        </div>
        {/* Decorative elements */}
        <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Logo Type */}
      <div className="text-white text-2xl tracking-wider font-medium relative overflow-hidden">
        <span className="relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-indigo-500 after:via-purple-500 after:to-pink-500 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
          Maaz
        </span>
        <span className="ml-2 relative inline-block transition-transform duration-300 group-hover:text-purple-200">Khan</span>
      </div>
    </div>
  );
};

export default Logo; 