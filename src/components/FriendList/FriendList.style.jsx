import styled from '@emotion/styled';

export const FriendListStyled = styled.ul`
    margin: 20px;`

export const Item = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    background-color: yellow;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    border-radius: 10px;
    background: radial-gradient(189.32% 190.93% at 59.76% -23.42%, #4F2EE8 18.03%, #FFF 100%);
    box-shadow: 0px 10px 10px 0px rgba(245, 245, 247, 0.10);`

export const Status = styled.span`
    width: 15px;
    height: 15px;
    margin-right: 15px;
    border-radius: 50%;
    background-color: ${props => (props.status ? 'green' : 'red')};`

export const Avatar = styled.img`
    margin-left: 10px;
    width: 50px;
    height: 50px;`

export const Name = styled.p`
    margin-left: 20px;
    text-align: center;
    font-weight: 700;
    font-size: 22px;
    color: #333;`