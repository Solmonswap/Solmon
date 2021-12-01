
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
import "../components/trade/trade.css"

const Nav = styled.nav`
width: 100%; 
height: 55px;
padding: 0 20px;
display: flex;

.logo {
  padding: 15px 0;
}
`

const Navbar = () => {
const { connected, wallet } = useWallet();
  return (
    <Nav>
      <div className="App-Bar-left">
        <div className="App-logo">
          <a href="/">
            <img src={Logo} alt="Logo" className="App-logo"/>
          </a>
        </div>
        
        {!connected && (
            <Button 
              className="Active"
              type="text"
              size="large"
              style={{ color: "#FFFFFF" , marginLeft: "50px", borderBottom: "2px solid #fff"}}
            >
              Swap
            </Button>
          )}
          {!connected && (
            <Button 
            type="text"
            size="large"
            style={{ color: "#A7A0BD" }}
            >
              Pool
            </Button>
        )}
        {!connected && (
          
          <Button
            type="text"
            size="large"
            style={{ color: "#A7A0BD" }}
          >
            Staking
          </Button>
        
          
        )}
        {!connected && (
            <Button
              type="text"
              size="large"
              style={{ color: "#A7A0BD" }}
              className="NFT"
            >
              NFT Marketplace
            </Button>
          )}
          </div>
      
      <div className="App-Bar-right">
        <div className="tabs-right">
        <Button type="text" size="large">
          <a
            href={"/"}
            className="Sol_gradient"
          >
            0 SOL
          </a>
        </Button>
        <AccountInfo />
        </div>
        <div className="tabs-right">
          {!connected && (
            <Button
              type="text"
              size="large"
              onClick={connected ? wallet.disconnect : wallet.connect}
              
            >
              <p className="Connect_gradient">Connect to Wallet</p>
            </Button>
          )}
          </div>
          <div className="tabs-right">
          {connected && (
            <Popover
              placement="bottomRight"
              title="Wallet public key"
              trigger="click"
            ></Popover>
          )}
          {
            <Button
              shape="circle"
              size="large"
              type="text"
              icon={<Icon icon="ci:moon" color="white"/>}
            />
        }
        </div>
        <div className="tabs-right">
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
        </div>
        </div>
        
      <Burger />
      </Nav>
  )
}


export default Navbar