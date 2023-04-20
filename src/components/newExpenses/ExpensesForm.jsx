import { Button } from "../UL/Button";
import { Input } from "../UL/Input";
import { useState } from "react";
import { Expenses } from "../expenses/Expenses";
import styled, { css } from "styled-components";
export const ExpensesForm = ({ onClick, onSubmit, data }) => {
  const [inputText, setInputText] = useState("");
  const [inputNumber, setInputNumber] = useState(0);
  const [inputDate, setInputDate] = useState(null);

  function getinputValue(e) {
    setInputText(e.target.value);
    console.log(e.target.value);
  }

  function getInputNumberValue(e) {
    console.log(e.target.value);
    setInputNumber(e.target.value);
  }

  function getInputDate(e) {
    console.log(e.target.value);
    setInputDate(e.target.value);
  }
  function submitHandler() {
    const data = {
      title: inputText,
      price: inputNumber,
      date: inputDate,
    };
    onSubmit(data);
    setInputText("");
    setInputNumber("");
    setInputDate("");
  }
  return (
    <div>
      <Container>
        <Title1>Title</Title1>
        <Input1 type="text" value={inputText} onChange={getinputValue} />
        <Amount>Amount</Amount>
        <Input2
          type="number"
          value={inputNumber}
          onChange={getInputNumberValue}
        />
        <Date>Date</Date>
        <Input3 type="date" value={inputDate} onChange={getInputDate} />
        <Button1 onClick={onClick}>Отмена</Button1>
        <Button2 onClick={submitHandler}>Добавить расходы</Button2>
      </Container>
      <Expenses data={data} />
    </div>
  );
};
const styles = css`
  position: relative;
  width: 340px;
  height: 39px;
  border-radius: 8px;
  border-style: none;
`;
const stylesTitle = css`
  position: relative;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 17px;
  color: #000000;
`;
const button = css`
  padding: 20px;
  font-weight: 600;
  color: aliceblue;
  background-color: #4a026b;
  border: none;
  border-radius: 10px;
`;
const Container = styled.div`
  display: flex;
  background-color: #ad9be9;
  border-radius: 8px;
  width: 780px;
  height: 287px;
  margin-left: 330px;
  margin-top: 241px;
`;
const Title1 = styled.div`
  top: 30px;
  left: 23px;
  ${stylesTitle}
`;
const Amount = styled.div`
  top: 30px;
  left: 20px;
  ${stylesTitle}
`;
const Date = styled.div`
  top: 120px;
  right: 770px;
  ${stylesTitle}
`;
const Input1 = styled.input`
  top: 55px;
  right: 20px;
  ${styles}
`;

const Input2 = styled.input`
  top: 55px;
  right: 50px;
  ${styles}
`;
const Input3 = styled.input`
  top: 146px;
  right: 813px;
  ${styles}
`;

const Button1 = styled.button`
  position: relative;
  top: 206px;
  right: 720px;
  width: 97px;
  height: 51px;
  ${button}
`;
const Button2 = styled.button`
  width: 186px;
  height: 51px;
  margin-top: 206px;
  margin-left: -710px;
  ${button}
`;
