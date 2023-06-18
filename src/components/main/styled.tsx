import styled from "styled-components";

export const Container = styled.main`
  color: #fff;
  height: 88vh;

  section:first-of-type {
  height: 470px;
}

`;

export const Form = styled.form`
  @media (min-width: 550px) {
    width: 450px;
  }
`;
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;
export const Label = styled.label`
  color: #aeaeae;
  margin-bottom: 5px;
`;
export const Input = styled.input`
  background-color: #0c0c0c;
  padding: 10px;
`;

export const DialogSuccess = styled.dialog`
  background-color: #222121;
  height: 180px;
  width: 500px;
  padding: 30px;
  text-align: center;
  color: #fff;
  border-radius: 8px;

  h1 {
    font-size: 24px;
  }
  button {
    height: 40px;
    border-radius: 5px;
    margin-top: 15px;
  }
`;
export const DialogError = styled.dialog`
  background-color: #222121;
  height: 180px;
  width: 500px;
  padding: 30px;
  text-align: center;
  color: #fff;
  border-radius: 8px;

  h1 {
    font-size: 24px;
  }
  button {
    height: 40px;
    border-radius: 5px;
    margin-top: 15px;
  }
`;
