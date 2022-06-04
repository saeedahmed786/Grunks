import React, { useState } from 'react'

export const CenterBox = () => {
    const [mint, setMint] = useState(2);
    return (
        <div>
            <div className='center-box'>
                <img src='/assets/skull.png' className='skull' alt='Skull' />
                <div className='mint'>
                    <div>Mint</div>
                    <div>/666</div>
                </div>
                <div className='columns'>
                    <div>
                        <div className='amount d-flex align-items-center justify-content-between gap-5 py-2'>
                            <div>Amount</div>
                            <div className='add d-flex align-items-center gap-2'>
                                <div><a onClick={() => setMint(mint >= 2 ? mint - 1 : mint)}>-</a></div>
                                <div>{mint}</div>
                                <div><a onClick={() => setMint(mint + 1)}>+</a></div>
                            </div>
                        </div>
                        <div className='vertical d-none d-sm-block'></div>
                        <div className='right-part p-2'>
                            <div className='d-flex align-items-center gap-2'>
                                <div className='d-none d-sm-block'>or</div>
                                <div className='btn-container'>
                                    <button className='btn d-none d-sm-block'>5</button>
                                    <button className='btn d-none d-sm-block'>10</button>
                                    <button className='btn'>Max</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='total d-flex justify-content-between'>
                        <div>Total</div>
                        <div><img src='/assets/menu.png' className='menu' alt='Menu' width='23' /></div>
                    </div>                </div>
                <div className='mint-btn'>
                    <button className='btn'>
                        <img src='/assets/mint-btn.png' alt='Menu' />
                        <span>mint</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
