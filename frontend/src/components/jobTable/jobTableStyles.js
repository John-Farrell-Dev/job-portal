import { Link } from "react-router-dom";
import styled from "styled-components";

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const TableTitle = styled.h2`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 600px;
  background: white;
  border-radius: 8px;
  overflow: hidden;
`;

export const TableHead = styled.thead`
  background: #007bff;
  color: white;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background: #f2f2f2;
  }

  &:hover {
    background: #e2e6ea;
  }
`;

export const TableHeader = styled.th`
  padding: 12px 16px;
  text-align: left;
  font-size: 16px;
`;

export const TableData = styled.td`
  padding: 12px 16px;
  border-bottom: 1px solid #ddd;
  color: #333;
`;

export const JobLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;