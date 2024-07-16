
import { LogLevel } from "@azure/msal-browser";


export const msalConfig = {
    auth: {

        // Local 
        clientId: "dc33c71d-b7dc-46c9-a3f7-3d384de95002",
        authority: "https://login.microsoftonline.com/common",
        redirectUri: "http://localhost:3000/",
        // redirectUri: "https://redingtonsnowflakelatest-wckqd7o3eq-uw.a.run.app/",
        //GCP
        // clientId: "dc33c71d-b7dc-46c9-a3f7-3d384de95002",
        // authority: "https://login.microsoftonline.com/common",
        // redirectUri: "https://hrdashboardui-wckqd7o3eq-uw.a.run.app/",

        // Aws
        // clientId: "3816d6d6-fb42-4770-a866-853c58f416e2",
        // authority: "https://login.microsoftonline.com/e79918f6-a69b-4b33-8166-e897131f7346",
        // redirectUri: "https://172.20.36.39:8090/HrAnalyticsDashboard/"


        //Aws43

        // clientId: "1a1f5068-6e64-4ecb-869a-6ca8577ab992",
        // authority: "https://login.microsoftonline.com/e79918f6-a69b-4b33-8166-e897131f7346",
        // redirectUri: "https://172.20.43.39:8090/HrAnalyticsDashboard/"

        // Production
        // clientId: "1a1f5068-6e64-4ecb-869a-6ca8577ab992",
        // authority: "https://login.microsoftonline.com/e79918f6-a69b-4b33-8166-e897131f7346",
        // redirectUri: 'https://analytics.redingtongroup.com/HrAnalyticsDashboard/',



    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                }
            }
        }
    }
};

export const loginRequest = {
    scopes: ["User.Read"]
};


export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};
