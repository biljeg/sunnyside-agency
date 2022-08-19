import { createGlobalStyle } from "styled-components/macro";

export const breakpoints = {
  tablet: "768px",
};

const GlobalStyle = createGlobalStyle`
:root{
    --soft-red: hsl(7, 99%, 70%);
    --yellow: hsl(51, 100%, 49%); 
    --bright-blue: hsl(200, 100%, 62%); 
    --dark-desaturated-cyan: hsl(167, 40%, 24%); // (graphic design text)
    --dark-blue: hsl(198, 62%, 26%);// (photography text)
    --dark-moderate-cyan: hsl(168, 34%, 41%); // (footer)
    --desaturated-cyan: hsl(167, 52%, 71%);
    --very-dark-desaturated-blue: hsl(212, 27%, 19%);
    --very-dark-grayish-blue: hsl(213, 9%, 39%);
    --dark-grayish-blue: hsl(232, 10%, 55%);
    --grayish-blue: hsl(210, 4%, 67%);
    --white: hsl(0, 0%, 100%);
  }


html{
	font-size: 62.5%;  
}

body{
    font-family: 'Barlow', sans-serif;
}
`;

export default GlobalStyle;
