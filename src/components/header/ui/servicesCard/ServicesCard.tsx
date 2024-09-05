import React from 'react';
import style from './ServicesCard.module.scss';

interface ServicesCardProps {
    title: string
    description: string
    children: React.ReactNode
}

const ServicesCard: React.FC<ServicesCardProps> = ({title, description, children}) => {
    return (
        <>  
            <div className={style.servicesCard}>
                {children}
                <div className={style.cardTitle}>{title}</div>
                <div className={style.cardDescription}>{description}</div>
            </div>         
        </>
    );
}

export default ServicesCard;
