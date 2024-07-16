'use client'
import React from 'react'
import { Provider } from 'react-redux';
import store from '../redux/store';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "../auth";
import { ThemeProvider } from "next-themes";
const msalInstance = new PublicClientApplication(msalConfig);
export default function ReduxStore({ children }) {

    return (
        <Provider store={store}>
            <ThemeProvider attribute="class">
                {children}
            </ThemeProvider>

        </Provider>



    );
}


