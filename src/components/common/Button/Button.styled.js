import styled from 'styled-components';

export const Btn = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 30px;
    font: inherit;
    border: none;
    border-radius: 10px;
    background-color: #cacaca;
    color: #ffffff;

    cursor: pointer;

    &:active {
        box-shadow: inset 0px 0px 4px 0px #fafafa;
    }
`;