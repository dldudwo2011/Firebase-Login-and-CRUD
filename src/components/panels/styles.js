import styled from 'styled-components';

const PanelStyles= styled.section`
flex:1;
box-shadow: 0 0 2px 0 rgba(0,0,0,0.3) ;
background-color: #cbd5e1;
border-radius:3px ;
height: "calc(100vh - 5rem)";
margin-left: 17.5rem;
padding: 2rem;
`;

const PanelHeader = styled.header`
    h2{
        background-color: #e2e8f0;
        padding:0.5rem;
        border-radius: 3px ;
        border-bottom-left-radius:0;
        border-bottom-right-radius:0 ;
        color:#3f3f3f;
        font-weight: bold;
        border-left: 2px solid #7dd3fc;
        border-top: 2px solid #7dd3fc;
        border-right: 2px solid #7dd3fc;
    }
`;

const PanelBody = styled.div`
    height: 100;
    padding: 5rem;
    border-radius: 3px ;
    border-bottom-left-radius:0;
    border-bottom-right-radius:0 ;
    background-color: #f1f5f9;
    border-left: 2px solid #7dd3fc;
    border-bottom: 2px solid #7dd3fc;
    border-right: 2px solid #7dd3fc;
`;

export {PanelStyles, PanelBody, PanelHeader}