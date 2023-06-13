function Header() {
  return (
    <>
      <header className="text-white py-3 px-11">
        <nav className="flex sm:justify-around justify-between items-center">
          <h1 className="text-3xl"> <strong className="text-newGreen">e</strong>Front</h1>
          <button className="border-2 rounded-md border-newGreen p-2 font-semibold w-40 h-12">comprar ebook</button>
        </nav>
      </header>
    </>
  );
}

export default Header;
