import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const App: React.FC = () => {
    // 导航栏样式
    const navStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: '#282c34',
        color: 'white',
    };

    const titleStyle: React.CSSProperties = {
        margin: 10,
        textAlign: 'center'
    };

    const mainStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center', // 水平居中
        alignItems: 'center', // 垂直居中
        height: '50vh', // 使主区域占满整个视口高度
    };

    return (
        <div>
            <header>
                <h1 style={titleStyle}>React Next TypeScript</h1>
                <nav style={navStyle}>
                    <Link href="/pizzaMenu" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>Pizza Menu
                    </Link>
                    <Link href="/" style={{ margin: '0 15px', color: 'white', textDecoration: 'none' }}>尽情期待
                    </Link>
                </nav>
            </header>
            <main style={mainStyle}>
                <Image
                    src="/home/welcome.jpg" // 路径相对于 public 目录
                    alt="描述"
                    width={500} // 图片宽度
                    height={300} // 图片高度
                />
            </main>
        </div>
    );
};


export default App;