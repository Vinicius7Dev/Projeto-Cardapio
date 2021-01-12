/**
 * Styles: Food Item
 */

import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    max-width: 250px;
    min-height: 300px;
    background-color: #FFFFFF;
    box-shadow: 1px 1px 3px #757575;

    margin: 0 10px 15px;
    border-radius: 10px;
    list-style: none;
`;

export const RemoveItemButton = styled.button`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 50px;
    top: -10px;
    left: -10px;

    border: none;
    border-radius: 50%;


    box-shadow: 1px 1px 5px #757575;
    background-color: #C90000;
    color: #C0C0C0;
    font-size: 25px;

    transition: background-color 0.2s;

    &:hover {
        background-color: ${shade(0.2, '#C90000')};
    }
`;

export const ItemContent = styled.div`
    border: none;
    text-align: left;
    border-radius: 10px;

    img {
        width: 100%;
    }

    div.discount-percent {
        position: absolute;
        background-color: #0050C9;
        color: #FFFFFF;

        font-size: 25px;
        font-weight: 600;
        font-family: 'Poppins', 'sans-serif';

        top: 0;
        right: 0;
        padding: 5px 10px;
        border-radius: 0 7px 0 25px;
    }
`;

export const ItemDataContent = styled.div`
    background-color: #FFFFFF;
    margin-top: -10px;
    padding: 5px;

    div.item-data {
        strong.item-title {
            color: #E2B100;
            font-size: 25px;
            text-shadow: 1px 1px 1px #000000;
        }

        p.item-description {
            margin-top: 5px;
            font-family: 'Archivo', 'sans-serif';
            font-size: 15px;
            color: #2F2F2F;
        }
    }

    div.item-price {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;

        text-align: right;
        margin-top: 20px;

        font-family: 'Poppins', 'sans-serif';

        p.price-on {
            color: #008C0E;
            font-weight: 600;
            font-size: 20px;
        }

        p.price-off {
            color: #A4A4A4;
            margin-left: 5px;
            font-size: 15px;
            text-decoration: line-through;
        }
    }
`;

export const EditItemButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    font-size: 18px;
    font-family: 'Poppins', 'sans-serif';

    border: none;
    padding: 8px 0;
    border-radius: 0 0 10px 10px;

    background-color: #FFE5CC;
    color: #994A00;

    svg {
        margin-right: 5px;
    }

    transition: background-color 0.2s;

    &:hover {
        background-color: ${shade(0.05, '#FFE5CC')};
        text-decoration: underline;
    }
`;