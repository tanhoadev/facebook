"use client"
import React from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook';

function FacebookMsg() {

    return (
        <>
            <h1>hihihsi</h1>1115089526260261
            <FacebookProvider appId="1115089526260261" chatSupport>
                <CustomChat pageId="351071262235120" minimized={true} />
            </FacebookProvider>
        </>
    )
}

export default FacebookMsg