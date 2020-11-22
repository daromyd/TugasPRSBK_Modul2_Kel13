import styled, {css,ThemeProvider} from 'styled-components';

export default styled.select`
    font-family: "roboto"; 
    font-size:1rem; 
    padding:5px 5px; 
    background:#f5f5f5;
    box-shadow: 3px 3px 3px grey;
    ${(props) =>
        props.color && 
        css`
        color:${(props) =>props.color};
        `}
`
