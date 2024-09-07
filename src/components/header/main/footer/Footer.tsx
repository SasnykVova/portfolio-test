import React from 'react';
import style from './Footer.module.scss';
import logo from '../../../../assets/footer/Logo.png'
import { ReactComponent as Facebook } from '../../../../assets/main/Facebook - Negative.svg';
import { ReactComponent as Twitter } from '../../../../assets/main/Twitter - Negative.svg';
import { ReactComponent as Instagram } from '../../../../assets/main/Instagram - Negative.svg';
import { ReactComponent as LinkedIn } from '../../../../assets/main/LinkedIn - Negative.svg';


interface MenuData {
    id: number
    text: string
}

const Footer: React.FC = () => {

    const menuData: MenuData[] = [
        {id: 1, text: 'Home'},
        {id: 2, text: 'About'},
        {id: 3, text: 'Services'},
        {id: 4, text: 'Projects'},
        {id: 5, text: 'Testimonials'},
        {id: 6, text: 'Contact Us'},
    ]

    const menu = menuData.map(({id, text}) => <div className={style.menuItem} key={id}>{text}</div>)
    return (
        <>
        <footer className={style.footerBlock}>
            <div className={style.firstBlock}>
                <div className={style.logoWrapper}><img src={logo} alt='logo'/></div>
                <div className={style.footerMenuWrapper}>
                    {menu}
                </div>
                <div className={style.iconWrapper}>
                    <a href='https://www.facebook.com/'><Facebook/></a>
                    <a href='https://x.com/?lang=uk/'><Twitter/></a>
                    <a href='https://www.instagram.com/'><Instagram/></a>
                    <a href='https://ua.linkedin.com/'><LinkedIn/></a>
                </div>
            </div>
            <div className={style.secondBlock}>
                <div>© 2023 <span>Muhammad</span> All Rights Reserved , Inc.</div>
            </div>
        </footer>
        </>
    );
}

export default Footer;
