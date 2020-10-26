import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { colors, breakpoints, sizes } from '../../variables';

export const Nav = styled.div`
    width: 100%;
    box-shadow: 0px 3px 3px rgba(68, 68, 68, 0.05);
    z-index: 1000;
    position: sticky;
    top: 0;
`;

export const NavWrapper = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;

    @media screen and (max-width: ${breakpoints.tablet}) {
        margin-right: 16px;
        margin-left: 16px;
        justify-content: flex-end;
        transition: all 350ms;
        &.active {
            justify-content: space-between;
        }
    }
`;

export const NavLogo = styled.img`
    height: 160px;
    width: 160px;
    border-radius: 50%;
    position: relative;
    transition: all 1.5s ease-in-out;
    top: 80px;
    cursor: pointer;
    z-index: 100;
    
    &.active {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        //position: static;
        position: relative;
        top: 0;
    }

    @media screen and (max-width: ${breakpoints.tablet}) {
        height: 140px;
        width: 140px;
        border-radius: 50%;
        cursor: pointer;
        transition: all 1.5s ease-in-out;
        position: absolute;           
        left: 50%;
        top: 35px;
        transform: translateX(-50%);
        &.active {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            position: relative;
            top: 0;
            transform: none;
            left: 0;
        }
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    justify-content: space-between;
    z-index: 10;

    @media screen and (max-width: 960px) {
        padding-top: 120px;
        justify-content: flex-start;
        width: 100%;
        flex-direction: column; 
        position: fixed; 
        z-index: 1; 
        top: 80px;
        right: ${({click}) => (click ? 0 : '-100%')};
        background-color: ${colors.white}; 
        overflow-x: hidden; 
        padding-bottom: 40px;
        transition: 0.4s; 
        height: 90vh;
            &.active {
                padding-top: 40px;
                }
        }
    }
    @media screen and (max-width: 376px) {
        padding-top: 130px;
    }

    @media screen and (max-width: 321px) {
        padding-top: 110px;
    }
`;

export const NavItem = styled.li`
    border-bottom: 2px solid transparent;
    font-weight: 400;
    color:${colors.grey};
    margin-left: 2em;

    @media screen and (max-width: 960px) {
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const NavLinks = styled(NavLink)`
    display: flex;
    text-decoration: none;
    align-items: center;
    height: 100%;

    &:hover {
        color: ${colors.mainBlue} ;
    }

    @media screen and (max-width: 960px) {
        width: 100%;
        font-size: ${sizes.sizeM};
        padding-top: 30px;
        padding-bottom: 30px;
        justify-content: center;
        align-items: center;

        &:hover {
            color: ${colors.mainBlue};
            transition: all 0.3 ease;
        }

        @media screen and (max-width: 321px) {
            font-size: ${sizes.sizeS};
            margin-top: 25px;
            margin-bottom: 25px;
        }
    }
    `;

export const Social = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    justify-content: space-between;
    top: 110px;
    right: 70px;

    @media only screen and (max-width: 768px) {
        right: 20px;
    }
`;

export const SocialIcon = styled.img`
    width: 22px;
    height: 22px;
    margin-bottom: 18px;

    @media only screen and (max-width: 768px) {
        width: 20px;
        height: 20px;
        margin-bottom: 14px;
    }
    :hover{
        filter: invert(100%);
    }
`;

export const MobileIcon = styled.div`
    display: none;
    
    @media screen and (max-width: 960px) {
        display: flex;
        cursor: pointer;
    }
    :hover{
        filter: invert(100%);
    }
`;

export const MobileIconClose = styled.img`
    width: 20px;
`;

export const MobileIconMenu = styled.img`
    width: 25px;
`;