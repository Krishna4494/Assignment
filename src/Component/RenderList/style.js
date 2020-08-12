import styled from "styled-components";

export const ListWrapper = styled.div`
text-align: left;
`;

export const Label = styled.label`
    text-decoration-line: underline;
    text-decoration-style: dotted;
    text-style: italic;
    text-transform: capitalize;
`;

export const LabelBody = styled.p`
    font-weight:300;
    margin: 10px 0;
`;

export const OverlayCard = styled.div`
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background-color: rgba(0,0,0,0.5);
    overflow: scroll;
`;

export const EditTitle = styled.div`
    position: fixed;
    top: 50%;
    left: 20%;
    width: 60%;
    text-align: center;
`;
