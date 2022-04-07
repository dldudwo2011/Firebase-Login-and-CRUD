import styled from "styled-components";

const Panel = styled.section`
  min-height: calc(100vh - (3rem + 64px));
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.35);
  background-color: white;
  border-radius: 3px;
  flex: 1;
  margin: 1.5rem;
  
`;
const PanelHeader = styled.header`
 
`;

const PanelTitle = styled.h1`
  
    background-color: #f8f8f8;
    padding: 0.5rem;
    border-radius: 3px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    font-weight:bold;
    color:#3f3f46;    
 
`;

const PanelBody = styled.div`
  margin: ${props => props.margin || "5rem"};
`;


export { Panel, PanelHeader, PanelBody, PanelTitle };
