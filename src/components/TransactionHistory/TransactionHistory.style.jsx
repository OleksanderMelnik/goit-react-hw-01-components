import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  border: 2px solid black;
  width: 460px;
  margin: 60px auto;
  padding: 10px;
  border-collapse: collapse;`

export const Th = styled.th`
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid black;
  background-color: #31D0AA;
  font-weight: bold;`

export const Td = styled.td`
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid black;
  background-color: white;
  &:hover {
    background-color: #E7E9FC;
  }`
  