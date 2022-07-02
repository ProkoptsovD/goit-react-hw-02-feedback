import styled from 'styled-components';

const Text = styled.p`
    text-transform: capitalize;
`;

export const StatList = styled.ul``;
export const StatListItem = styled.li`
    display: flex;
    align-items: center;
    padding: ${({ theme }) => theme.spacing(1, 2)};

    & > :not(:last-child) {
        margin-right: ${({ theme }) => theme.spacing(2.5)};
    }
    &:nth-child(odd) {
        background-color: #cacaca;
    }
    &:nth-child(even) {
        background-color: #ffffff;
    }
`;
export const StatLabel = styled(Text)`
    font-weight: 500;
`;
export const StatValue = styled(Text)`
    font-weight: 700;
`;