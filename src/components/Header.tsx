export const Header = () => {
  return (
    <header className="w-full bg-red-50 shadow-sm py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        <h1 className="text-2xl font-bold text-blue-600">Easykaam</h1>

        <nav className="flex gap-6 text-black font-medium">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </nav>
      </div>
    </header>
  );
};
