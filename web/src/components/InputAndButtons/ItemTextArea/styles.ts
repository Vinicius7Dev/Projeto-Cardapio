/**
 * Styles: Add Text Area
 */

import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;

    margin-bottom: 25px;

    strong {
        margin-left: 15px;

        font-size: 25px;
        line-height: 15px;
    }

    textarea {
        width: 100%;
        min-height: 50px;

        padding: 15px;

        border: none;
        border-radius: 25px;

        box-shadow: 1px 1px 3px #757575;
        background-color: #ECECEC;

        font-family: 'Poppins', 'sans-serif';
        font-size: 20px;
    }

    @media (max-width: 768px) {
        strong {
            font-size: 20px;
        }

        textarea {
            font-size: 18px;
        }
    }
`;