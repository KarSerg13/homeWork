import React from 'react'
import styles from './BaseLayout.module.css'
export const BaseLayout = ({children}) => {
    return(
        <div className={styles}>
            <header>header</header>
            <main>
                {children}
            </main>
            <footer>footer</footer>
        </div>
    )
}