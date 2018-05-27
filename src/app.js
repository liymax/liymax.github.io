import React from "react";
import { injectGlobal } from 'styled-components';
import WithContext from "./utils/WithContext";
import store from "./reducers/index";
import actions from "./actions/index";
import { StoreContext } from "./context";
import Router from "./routes/index";
const StoreProvider = WithContext(store, actions, StoreContext);

injectGlobal`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
/* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export default function App() {
  return (
    <StoreProvider>
      <Router />
    </StoreProvider>
  );
}
