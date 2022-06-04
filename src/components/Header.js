import React from 'react'
import { Link } from 'react-router-dom'
import { TimerCountDown } from './TimerCountDown'

export const Header = () => {
    return (
        <header style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(' + '/assets/header.png' + ')', height: '375px' }}>
            <div className='d-flex justify-content-between mx-4 mx-md-5'>
                <div className='left'>
                    <div className='d-flex'>
                        <div>
                            <a href='/'>OPENSEA</a>
                            <br />
                            <img src='/assets/lineUnderOpenSea.svg' alt='Line' />
                        </div>
                        <div className='mt-3 d-none d-sm-block'>
                            <a href='https://objkt.com/collection/KT19QrZvpKD2XFkd4iqisXmf8iUSmuJrKZPd' target='_blank'>FUNCKS</a>
                            <br />
                            <img src='/assets/funcks.png' alt='Line' />
                        </div>
                    </div>
                    <div className='mt-0'>
                        <a href='https://twitter.com/funcksxyz' target='_blank'>TWITTER</a>
                        <br />
                        <img src='/assets/lineUnderOpenSea.svg' alt='Line' />
                    </div>
                </div>
                <div>
                    <div className='right text-center' style={{ backgroundImage: 'url(' + '/assets/connect.png' + ')' }}>
                        <button className='btn'>
                            CONNECT WALLET
                        </button>
                        <br />
                    </div>
                    <p className='mt-3 d-none d-sm-block'>
                        <div className='d-flex align-items-center gap-1'>
                            <div>
                                CLOSING IN
                            </div>
                            <TimerCountDown />
                        </div>
                    </p>
                </div>
            </div>
        </header>
    )
}
