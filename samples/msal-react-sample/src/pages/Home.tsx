import React from 'react';
import { MsalConsumer, AuthenticatedComponent } from "../msal-react";

export function HomePage() {
    return (
        <MsalConsumer>
            {msal => (
                <div>
                    <AuthenticatedComponent
                        onError={error => (
                            <p>{error.errorMessage}</p>
                        )}
                        forceLogin={false}
                        authenticationParameters={{
                            scopes: [ "user.read" ]
                        }}
                    >
                        <h2>{msal?.getAccount() && ("Welcome, " + msal?.getAccount().name)}</h2>
                        <p>Click one of the links above to demo MSAL.js 2.0 with Auth Code Flow, using React.</p>
                    </AuthenticatedComponent>
                </div>
            )}
        </MsalConsumer>
    )}
