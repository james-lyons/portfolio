import React from 'react';
import Typing from 'react-typing-animation';
import '../../Styles.css';

const Header = (props) => {
    return (
        <>
            <header id="header" className="vertical-center">
                <div className="header-div">
                    <h1 className="header-h1">Hi, I'm James!</h1>
                    <Typing speed={65}>
                        <span className="typing-span">I'm a thinker...</span>
                        <Typing.Delay ms={1300} />
                        <Typing.Backspace count={16} speed={90} />
                        <span className="typing-span">a creator...</span>
                        <Typing.Delay ms={1300} />
                        <Typing.Backspace count={10} speed={90} />
                        <span className="typing-span">recursion enthusiast...</span>
                        <Typing.Delay ms={1300} />
                        <Typing.Backspace count={25} speed={90} />
                        <span className="typing-span">And I'm a software engineer!!!</span>
                        <Typing.Delay ms={1300} />
                    </Typing>
                </div>
            </header>
        </>
    );
};

export default Header;