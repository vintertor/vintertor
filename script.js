{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener('DOMContentLoaded', function() \{\
    const typedText = document.querySelector('.h0.typed-words');\
    const strings = ["Web Developer", "Designer"];\
    let maxHeight = 0;\
\
    const tempElement = document.createElement('div');\
    tempElement.style.position = 'absolute';\
    tempElement.style.visibility = 'hidden';\
    tempElement.style.whiteSpace = 'pre-wrap';\
    document.body.appendChild(tempElement);\
\
    strings.forEach(string => \{\
        tempElement.textContent = string;\
        const height = tempElement.offsetHeight;\
        if (height > maxHeight) \{\
            maxHeight = height;\
        \}\
    \});\
    document.body.removeChild(tempElement);\
    typedText.style.height = maxHeight + 'px';\
    typedText.style.overflow = 'hidden';\
\});}