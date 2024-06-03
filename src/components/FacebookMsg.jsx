import React from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook';

function FacebookMsg() {
    return (
        <FacebookProvider appId="757695196514074" chatSupport>
            <CustomChat pageId="351071262235120" minimized={true} />
        </FacebookProvider>
    )
}

export default FacebookMsg