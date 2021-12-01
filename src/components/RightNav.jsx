import React, { useState } from "react";
import styled from 'styled-components';
import Burger from './Burger';
import { Button, Card, Popover } from "antd";
import { TradeEntry } from "./trade";
import { AddToLiquidity } from "./pool/add";
import { PoolAccounts } from "./pool/view";
import { useWallet } from "../utils/wallet";
import { AccountInfo } from "./accountInfo";
import { Settings } from "./settings";
import { SettingOutlined } from "@ant-design/icons";
import { Icon } from '@iconify/react';
import Logo from "../images/Solmon_Logo.png";
import "../App.less";

const NFT = styled.ul`
  @media (max-width: 450px) {
    display: block
  }

`
const Ul = styled.ul`
  position: absolute;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  display: none;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 1030px) {
    display: inline;
    flex-flow: column nowrap;
    background-color: #141111;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 1;
    li {
      color: #fff;
      margin-left: -30px;
    }
  }
`;

const RightNav = ({ open }) => {
    const { connected, wallet } = useWallet();
  return (
    <Ul open={open}>
      <li>
      <div className="App-logo-right-nav">
          <a href="/">
            <img src={Logo} alt="Logo" className="App-logo-right-nav"/>
          </a>
        </div>
      </li>
      <li>
      <Button type="text" size="large">
          <a
            href={"/"}
            className="Sol_gradient"
          >
            0 SOL
          </a>
        </Button>
        <AccountInfo />    
          
      </li>
      <li>
      {!connected && (
            <Button
              type="text"
              size="large"
              onClick={connected ? wallet.disconnect : wallet.connect}
              
            >
              <p className="Connect_gradient">Connect to Wallet</p>
            </Button>
          )}
      </li>
      <li>
      {
          <Popover
            placement="topRight"
            title="Settings"
            content={<Settings />}
            trigger="click"
          >
            <Button
              
              size="large"
              type="text"
              icon={<Icon icon="ci:moon" color="white"/>}
            />
          </Popover>
        }
      </li>
      <li>
      
        <Button 
        type="text" 
        size="large" 
        style={{ color: "#FFFFFF" }}
        icon={<Icon icon="bi:three-dots" color="white"/>}
        >
          <a
            href={"/"}
          >
          </a>
        </Button>
        <AccountInfo />
        
      </li>
      <li>
        <Button 
        type="text" 
        size="large" 
        style={{ color: "#FFFFFF"}}
        className="NFT-right"
        >
          <a
            href={"/"}
          >NFT Marketplace
          </a>
        </Button>
      </li>
    </Ul>
  )
}

export default RightNav