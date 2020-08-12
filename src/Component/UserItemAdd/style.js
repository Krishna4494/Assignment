import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ListCard = styled.div` 
    box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
    transition : box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background: white;
    padding: 10pxpx;
    overflow: hidden;
    border-radius: 5px;
    width: 80%;
    margin: 20px auto;
    padding:10px;
    
`;


export const AddButton = styled.button`
    height: 40px; 
    border: none;
    border-radius: 5px;
    text-align: center;
    background: #1DA0BC;
    color: white;
    font-size: 18px;
    min-width:100px;
    cursor:pointer
`;