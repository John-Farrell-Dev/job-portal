import styled from "styled-components";
import { IoArrowBack } from "react-icons/io5";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

export const PageTitle = styled.h2`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

export const Card = styled.div`
  width: 80%;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const JobDetailsContainer = styled.div`
  margin-top: 20px;
`;

export const JobDetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
`;

export const JobDetailLabel = styled.span`
  font-weight: bold;
  color: #555;
`;

export const JobDetailValue = styled.span`
  color: #333;
`;

export const JobDescription = styled.p`
  margin-top: 20px;
  color: #333;
`;

export const BackButton = styled(IoArrowBack)`
  position: absolute;
  top: 20px;
  left: 20px;
  background: transparent;
  border: none;
  font-size: 28px;
  color: #007bff;
  cursor: pointer;

  &:hover {
    color: #0056b3;
  }
`;