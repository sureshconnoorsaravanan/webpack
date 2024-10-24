import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosNotifications } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div className="bg-info"> 
            <div className="py-2 d-flex align-items-center justify-content-between container">
                <div className='d-flex align-items-center'>
                    <h3 
                        className='mb-0 text-dark'  
                        style={{ cursor: "pointer" }} 
                        onClick={() => navigate("/")}
                    >
                        {t('app-title')}
                    </h3>
                </div>
                <div>
                    <IoIosNotifications color='#ffffff' size={25} className='me-2' />
                    <FaShoppingCart color='#ffffff' size={20} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
