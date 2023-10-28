import styled from '@emotion/styled';

export const generateColor = () =>
  `#${Math.floor(Math.random() * 16777215)
    .toString(16)}`

export const StatisticsSection = styled.section`
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    width: 302px;
    padding: 60px 60px;
    border-radius: 10px;
    background: radial-gradient(189.32% 190.93% at 59.76% -23.42%, #4F2EE8 18.03%, #FFF 100%);
    box-shadow: 0px 10px 10px 0px rgba(245, 245, 247, 0.10);`

export const Title = styled.h2`
    padding-top: 30px;
    padding-bottom: 30px;
    text-align: center;
    text-transform: uppercase;
    background-color: #E7E9FC;
    font-weight: 700;
    border-radius: 10px;`

export const StatList = styled.ul`
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    padding: 0;`

export const StatItem = styled.li`
    padding: 10px 5px;
    width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;`

export const Label = styled.span`
    font-weight: 500;
    font-size: 16px;`

export const Percentage = styled.span`
    font-weight: 700;
    font-size: 18px;
    margin-top: 5px;`