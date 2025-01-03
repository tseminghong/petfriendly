import Head from 'next/head';
import React from 'react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pet Friendly</title>
        <style jsx global>{`
          body {
            background-color: #ffbd59;
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          .slogan {
            display: flex;
            align-items: center;
            font-size: 48px;
            font-family: Arial, sans-serif;
          }
          .slogan .paw-icon {
            font-size: 48px;
            margin-left: 10px;
          }
          .cat-image {
            position: absolute;
            bottom: 0;
            width: 200px;
            height: auto;
          }
          .fade-out {
            animation: fadeOut 1s forwards;
          }
          @keyframes fadeOut {
            to {
              opacity: 0;
            }
          }
        `}</style>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              setTimeout(function() {
                  document.body.classList.add('fade-out');
                  setTimeout(function() {
                      window.location.href = "userinput.html";
                  }, 1000);
              }, 1000);
            `,
          }}
        />
      </Head>
      <div className="slogan">
        Happy Paw
        <span className="paw-icon">🐾</span>
      </div>
      <img className="cat-image" src="/cat-cartoon.png" alt="Cartoon Cat" />
    </>
  );
}