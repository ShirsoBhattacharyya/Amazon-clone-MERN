import { css } from "styled-components";

export const mobile = (props:any) => {
  return css`
    @media only screen and (max-width: 1020px) {
      ${props}
    }
  `;
};