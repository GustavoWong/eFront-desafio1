import { Container } from "./styled.tsx";

function Header() {
  return (
    <>
      <Container>
        <nav className="flex justify-around items-center">
          <h1 className="text-3xl"> <strong className="text-newGreen">e</strong>Front</h1>
          <button className="border-2 rounded-md border-newGreen p-2 font-semibold w-40 h-12">comprar ebook</button>
        </nav>
      </Container>
    </>
  );
}

export default Header;
