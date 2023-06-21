import styled from "styled-components";

export const AppStyle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const RetryButton = styled.button`
  padding: 10px;
  color: #fff;
  background-color: #000;
  border: none;
  outline: none;
  width: 100px;
  cursor: pointer;
  border-bottom-left-radius: 9999px;
  border-bottom-right-radius: 9999px;
  border-top-left-radius: 9999px;
  border-top-right-radius: 9999px;
`;

export const NetworkStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const TodoCreateStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const TodoCreateFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  & input {
    padding: 10px;
    margin-bottom: 20px;
  }

  & button {
    color: #fff;
    background: #000;
    padding: 10px;
    border-radius: 4px;
    outline: none;
    border: none;
    width: 100px;
  }
`;

export const TodoListStyle = styled.div`
  display: grid;
  gap: 50px;
  grid-template-columns: auto auto auto;
  justify-content: center;
  margin-top: 30px;
`;

export const TodoShowStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #000;
  color: #fff;
  width: 200px;
`;

export const TodoActionStyle = styled.div`
  & button {
    background: #fff;
    color: #000;
    outline: none;
    border: none;
    padding: 5px;
    margin-right: 10px;
    cursor: pointer;
  }

  & button:last-child {
    margin-right: 0;
  }
`;

export const TodoEditFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
