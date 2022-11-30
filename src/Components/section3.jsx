import React from "react";
import vsCode from '../imgs/vsCode.png';
import git from '../imgs/git.png';
import github from '../imgs/github.png';
import html from '../imgs/html.png';
import css from '../imgs/css.png';
import js from '../imgs/javascript.png';
import nodejs from '../imgs/nodeJS.png';
import react from '../imgs/react.png';
import redux from '../imgs/redux.png';
import express from '../imgs/express.png';
import sequelize from '../imgs/sequelize.png';
import postgress from '../imgs/postgresSQL.png';
import sql from '../imgs/SQL.png';
import tailwind from '../imgs/tailwind.png';
import thunder from '../imgs/thunderClient.png';
import nodemailer from '../imgs/nodemailer.png';
import auth0 from '../imgs/auth0.png';
import trello from '../imgs/trello.png';
import scrum from '../imgs/SCRUM.png';
import canva from '../imgs/canva.png';
import sweetalert from '../imgs/sweetalert2.png';
import wsMockitt from '../imgs/wondershareMockitt.png';
import emailJS from '../imgs/emailJS.png';


const Section3 = () => {

    const imgs = [
        { name: "VS Code", img: vsCode },
        { name: "Git", img: git },
        { name: "Github", img: github },
        { name: "HTML", img: html },
        { name: "CSS", img: css },
        { name: "JavaScript", img: js },
        { name: "Node JS", img: nodejs },
        { name: "React JS", img: react },
        { name: "Redux", img: redux },
        { name: "Express", img: express },
        { name: "Sequelize", img: sequelize },
        { name: "PostgresSQL", img: postgress },
        { name: "SQL", img: sql },
        { name: "Tailwind", img: tailwind },
        { name: "ThunderClient", img: thunder },
        { name: "Nodemailer", img: nodemailer },
        { name: "Auth0", img: auth0 },
        { name: "Trello", img: trello },
        { name: "SCRUM", img: scrum },
        { name: "Canva", img: canva },
        { name: "SweetAlert2", img: sweetalert },
        { name: "WS Mockitt", img: wsMockitt },
        { name: "Email JS", img: emailJS }
    ];

    return (
        <div className="2xl:container 2xl:mx-auto lg:px-20 md:px-6 h-auto pb-9 px-4 bg-stone-900 py-5 sm:py-12 lg:py-16 ">
            <p className="text-center font-PT text-5xl leading-snug md:text-5xl lg:text-5xl text-slate-50 mb-6 sm:mb-12 md:mb-16 lg:mb-16">TECNOLOGÍAS Y HERRAMIENTAS</p>
            <div class="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 px-4 lg:px-16 mb-5 lg:mb-14">
                {
                    imgs.map((el) => {
                        return (
                            <div class="flex items-center justify-center flex-col bg-stone-800 hover:bg-slate-200 p-3 rounded-3xl ">
                                <img src={el.img} alt={el.name} class="w-20 sm:w-24 lg:w-24 sm:my-2 md:my-4 lg:my-4 xl:mt-5 md:w-32 mb-2 sm:mb-4 lg:mb-5" />
                                <p class="font-PT text-sm sm:text-lg md:text-xl lg:text-xl text-black">{el.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Section3;