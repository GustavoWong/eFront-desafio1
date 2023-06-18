import { useState, FormEvent } from "react";
import {
  Container,
  FormGroup,
  Label,
  Input,
  Form,
  DialogSuccess,
  DialogError,
} from "./styled.tsx";

function Main() {
  const dialogS = document.querySelector(
    "#Dsucces"
  ) as HTMLDialogElement | null;
  const dialogErrors = document.querySelector(
    "#Derror"
  ) as HTMLDialogElement | null;
  const dialogClose = document.querySelector(
    "#closeModal"
  ) as HTMLDialogElement | null;
  const dialogCloseError = document.querySelector(
    "#closeModalError"
  ) as HTMLDialogElement | null;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Feachar modal
  [dialogCloseError, dialogClose].forEach((e) => {
    e?.addEventListener("click", () => {
      dialogS?.close();
      dialogErrors?.close();
    });
  });
  function Valida(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      // Validar nome
      if (name && email) {
        dialogS?.showModal();
        setName("");
        setEmail("");
        return;
      } else if (!name && !email) {
        // Se não existir nome mostra o modal de erro.
        dialogErrors?.showModal();
      }
    } catch (e) {
      // amostra um erro caso não consiga.
      dialogErrors?.showModal();
      return;
    }
  }

  return (
    <>
      <Container className="py-4 pb-12 px-5 sm:px-20">
        <section className="flex flex-col justify-center items-center lg:px-56 gap-8">
          <section className="text-center mb-2">
            <h1 className=" sm:text-5xl text-3xl">
              Seja bem-vindo a <br /> sua melhor newsletter
            </h1>
            <h2 className="text-newGreen sm:text-2xl">
              Fique por dentro de todas a novidades
            </h2>
          </section>

          <section>
            <Form action="POST" onSubmit={Valida}>
              <span className="text-darkGray">
                Preencha os campos para receber as notícias sobre
                programação
              </span>

              {/* Inputs */}
              <FormGroup>
                <Label htmlFor="nome">Nome</Label>
                <Input
                  type="text"
                  name="nome"
                  maxLength={30}
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </FormGroup>
              <button className="bg-newGreen w-full mt-6 p-2 rounded-md text-black font-bold">
                Enviar
              </button>
            </Form>
          </section>

          <DialogSuccess id="Dsucces">
            <h1>
              E-mail cadastrado com
              <span className="text-newGreen">sucesso</span>!
            </h1>
            <button className="bg-newGreen w-full" id="closeModal">
              Fechar
            </button>
          </DialogSuccess>
          <DialogError id="Derror">
            <h1>
              E-mail <strong className="text-red-500">não</strong> cadastrado!
            </h1>
            <button className="bg-red-500 w-full" id="closeModalError">
              Fechar
            </button>
          </DialogError>
        </section>
      </Container>
    </>
  );
}

export default Main;
