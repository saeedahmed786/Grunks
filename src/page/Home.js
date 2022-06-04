import React from 'react'
import { CenterBox } from '../components/CenterBox'
import { Header } from '../components/Header'

export const Home = () => {
    return (
        <div className='home'>
            <Header />
            <main className='text-center'>
                <div>
                    <div className='logo-cont mt-3 mt-md-0' style={{ position: 'relative' }}>
                        <img src='/assets/logo.svg' className='logo' alt='Line' />
                        <div style={{ position: 'relative' }}>
                            <div className='text-under-logo'>
                                <p>6 <span>3</span> Ultra rares</p>
                            </div>
                        </div>
                    </div>
                    <CenterBox />
                    <footer className='tex-center'>
                        <p className='erc'>*ERC-721a contract: low gas</p>
                        <p className='primary-sales mt-0 mb-0'><span className='percent'>5%</span> of total primary sales</p>
                        <p className='primary-sales primary-sales2'>will go straight to <span>xcopy's grifter fund</span></p>
                    </footer>
                </div>
            </main>
        </div>
    )
}
