import React from 'react';
import './Page1.css';

function Page1() {
    return (
        <div id="Page1">
            <div class="img-container">
                <div class="navbar">
                    <div id="logo">EscrowBear</div>
                    <div id="Home">Home</div>
                    <div id="Aboutus">About us</div>
                    <div id="Login">Login</div>
                    <div id="Signup"><button id="sign"> Sign up</button></div>
                
                </div>
                <div class="inner-container">
                    <h1>The Leading Bitcoin Escrow and <br />Cryptocurrency Escrow System!</h1>
            <h2>Escaroo is the Worlds most secure Cross Chain DeFi platform allowing users to deploy 

crypto-based escrow smart contracts with no coding required.</h2>
<a class="btn" href="#">Get Started</a>
                </div>
            </div>
            
        </div>
    )
}

export default Page1
