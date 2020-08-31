import React from 'react';
import { UserData } from '../../App';
import background from '../../assets/background.png';
import { MdAccountCircle, MdEmail } from 'react-icons/md';
import styled from 'styled-components';

const ViewUserContainer = styled.div`
  width: 25%;
  height: 40%;
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
  position: absolute;
  @media (max-width: 480px) {
    height: 50%;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Img = styled.img`
  border: 5px solid #1d6f42;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 1rem;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 35%;
  padding: 1rem;
`;

const Details = styled.p`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 1.5rem;
  margin-left: 1em;
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
        <Title>User Info</Title>
        <Img src={avatar} alt="avatar" />
      </ImageContainer>
      <DetailsContainer>
        <Details>
          <MdAccountCircle size="2rem" style={{ marginRight: '0.5em' }} />
          {first_name} {last_name}
        </Details>
        <Details>
          <MdEmail size="2rem" style={{ marginRight: '0.5em' }} /> {email}
        </Details>
      </DetailsContainer>
      <ButtonContainer>
        <Button onClick={onClose}>Close</Button>
      </ButtonContainer>
    </ViewUserContainer>
  );
};

export default ViewUser;
