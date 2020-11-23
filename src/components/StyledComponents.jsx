import styled from "styled-components";

export const RatingLabel = styled.span`
  font-size: 16px;
  font-weight: 600;
  padding: 5px 8px;
  color: #fff;
  border-radius: 5px;
`;

export const ErrorMessage = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: red;
  text-align: center;
`;

export const LinkButton = styled.a`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  padding: 10px 15px;
  background-color: teal;
  cursor: pointer;
  margin: 10px;

  &: hover {
    color: #fff;
  }
`;

export const DescriptionText = styled.div`
  font-size: 14px;
  font-weight: small;
  margin: 5px;
`;
