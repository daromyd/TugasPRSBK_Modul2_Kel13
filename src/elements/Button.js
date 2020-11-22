import styled, {css} from 'styled-components';

export default styled.button`
    font-size: 15px;
    float: right;
    border: none;
    border-radius:5px;
    background:rgba(255, 0, 0, 0);
    ${(props) =>
        props.border && 
        css`
        border-color:${(props) =>props.border};
        `} 
    color:white; 
    transition-duration: 0.4s;
    &:hover{
        background:white;
        color:black;
    }
`;
