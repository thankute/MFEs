import { Row } from 'antd';
import React from 'react'
import Avatar from '../../../assets/image/avatar.jpg';
import '../assets/scss/user_suggest.scss';

const UserSuggest = () => {
    return (
        <div className='user_suggest'>
            <Row align="middle" justify="space-between" className='user-info'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={Avatar} alt="ava" style={{ width: 50, height: 50, borderRadius: '50%', objectFit: 'contain' }} />
                    <div style={{ marginLeft: 10 }}>
                        <h4>thanhcutephomaique</h4>
                        Pham Thanh

                    </div>
                </div>
                <div style={{ color: 'rgb(0, 149, 246)' }}>
                    Switch
                </div>
            </Row>

            <Row style={{ width: '100%' }}>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
                    <h3>Suggested for you </h3>
                    <h3>See all</h3>
                </div>
                <Row align="middle" justify="space-between" style={{ width: '100%', marginTop: 20 }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={Avatar} alt="ava" style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'contain' }} />
                        <div style={{ marginLeft: 10 }}>
                            <h4>betterhuydapoez</h4>
                            <p> Suggested for you</p>
                        </div>
                    </div>
                    <div style={{ color: 'rgb(0, 149, 246)', fontSize: 12 }}>
                        Follow
                    </div>
                </Row>

                <Row align="middle" justify="space-between" style={{ width: '100%', marginTop: 20 }} >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={Avatar} alt="ava" style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'contain' }} />
                        <div style={{ marginLeft: 10 }}>
                            <h4>kemkem.ngankhanh</h4>
                            <p> Followed by _phganhhhhh</p>
                        </div>
                    </div>
                    <div style={{ color: 'rgb(0, 149, 246)', fontSize: 12 }}>
                        Follow
                    </div>
                </Row>

                <Row align="middle" justify="space-between" style={{ width: '100%', marginTop: 20 }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={Avatar} alt="ava" style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'contain' }} />
                        <div style={{ marginLeft: 10 }}>
                            <h4>pamperthepeace.02</h4>
                            <p> Followed by febrhuy.15 + 03 more</p>
                        </div>
                    </div>
                    <div style={{ color: 'rgb(0, 149, 246)', fontSize: 12 }}>
                        Follow
                    </div>
                </Row>
            </Row>
        </div>
    )
}

export default UserSuggest;