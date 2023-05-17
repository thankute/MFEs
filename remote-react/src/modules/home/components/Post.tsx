import { Input, Row } from 'antd'
import React from 'react'
import Avatar from '../../../assets/image/avatar.jpg';
import { ReactComponent as Dots } from '../../../assets/image/svgexport-11.svg';
import { ReactComponent as Heart } from '../../../assets/image/Like-1.svg';
import { ReactComponent as Comment } from '../../../assets/image/Comment-1.svg';
import { ReactComponent as Direct } from '../../../assets/image/Share-Post-1.svg';
import { ReactComponent as Save } from '../../../assets/image/Save-1.svg';
import '../assets/scss/post.scss';

const Post = () => {
    return (
        <div className='post-container'>
            <Row align="middle" justify="space-between" className='user-info'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={Avatar} alt="ava" style={{ width: 30, height: 30, borderRadius: '50%', objectFit: 'cover' }} />
                    <h3>thanhcutephomaique</h3>
                    <h4>5h</h4>
                </div>
                <div>
                    <Dots />
                </div>
            </Row>
            <Row className='image'>
                <img src={Avatar} alt="img" />
            </Row>
            <Row>
                <div className='icons'>
                    <div>
                        <Heart />
                        <Comment />
                        <Direct />
                    </div>
                    <div>
                        <Save />
                    </div>
                </div>
                <div className="">
                    <h4>9,989 likes</h4>
                </div>
            </Row>
            <Row>
                <div>
                    <h4>thanhcutephomaique <span>Bien ha long dep qua mng a 🌴 #halong#summer</span>
                    </h4>
                </div>
                <div style={{ color: 'rgba(255,255,255,0.6)' }}>
                    View all 2 comments
                </div>
            </Row>
            <Row style={{ marginTop: 6 }}>
                <Input placeholder='Add a comment...' />
            </Row>

        </div>
    )
}

export default Post;