import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../../assets/original.svg';
import AvatarEditor from 'react-avatar-editor';
import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            {
                currentUser ?
                    <>
                        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                        {/* <AvatarEditor
                            className="profile-round"
                            image={currentUser.photoURL}
                            width={40}
                            height={40}
                            border={40}
                            borderRadius={50}
                            color={[255, 255, 255, 255]}
                            scale={1.1}
                            rotate={0}
                            disableHiDPIScaling={true}
                        /> */}
                    </>

                    :
                    <Link className="option" to="/signin">SIGN IN</Link>
            }
        </div>
    </div>
)

export default Header