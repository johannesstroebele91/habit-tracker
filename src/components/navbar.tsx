import React from "react";
import {UserOutlined} from '@ant-design/icons'
import {Avatar} from 'antd';

export const Navbar = () => {
    return (
        <div className={"nav"}>
            <span className="logo">habitaza</span>
            <Avatar icon={<UserOutlined/>}/>
        </div>
    );
};
