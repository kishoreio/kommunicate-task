import React from 'react';
import { UserData } from '../../App';
import background from '../../assets/background.png';
import styled from 'styled-components';

const ViewUserContainer = styled.div`
  width: 25%;
  height: 40%;
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  position: absolute;
  @media (max-width: 480px) {
    height: 45%;
    width: 85%;
    top: 20%;
  }
  @media (min-width: 480px) and (max-width: 1024px) {
    width: 45%;
    height: 35%;
  }
`;

const ImageContainer = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  text-align: end;
`;

const Img = styled.img`
  border: 5px solid #ff5c5c;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 1rem;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40%;
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const Button = styled.button`
  outline: none;
  background: #2d62de;
  border: none;
  padding: 0.5em 2rem;
  border-radius: 15px;
  color: #fff;
  cursor: pointer;
`;

interface ViewUser {
  userDetail: UserData;
  onClose: () => void;
}

const ViewUser: React.FC<ViewUser> = ({ userDetail, onClose }) => {
  const { avatar, first_name, last_name, email } = userDetail;
  return (
    <ViewUserContainer>
      <ImageContainer>
        <Img src={avatar} alt="avatar" />
      </ImageContainer>
      <DetailsContainer>
        <p>First Name: {first_name}</p>
        <p>Last Name: {last_name}</p>
        <p>Email: {email}</p>
      </DetailsContainer>
      <ButtonContainer>
        <Button onClick={onClose}>Close</Button>
      </ButtonContainer>
    </ViewUserContainer>
  );
};

export default ViewUser;
