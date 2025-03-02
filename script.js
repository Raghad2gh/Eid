body {
    background-color: #2e0e3a; /* اللون البنفسجي الغامق */
    color: white;
    font-family: 'Arial', sans-serif;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
}

button {
    background-color: #ffcc00;
    color: #2e0e3a;
    border: none;
    padding: 10px 20px;
    font-size: 20px;
    cursor: pointer;
    margin-top: 20px;
    transition: transform 0.2s;
}

button:hover {
    transform: scale(1.1);
}

/* تأثير الانفجار */
#explosion {
    width: 100px;
    height: 100px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    animation: explode 0.5s ease-out forwards;
    display: none;
}

@keyframes explode {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(5); opacity: 0.8; background-color: orange; }
    100% { transform: scale(10); opacity: 0; background-color: yellow; }
}

/* زينة العيد */
.decorations {
    font-size: 50px;
    margin-top: 20px;
    opacity: 0;
    animation: appear 1s ease-in 1s forwards;
}

@keyframes appear {
    from { opacity: 0; transform: scale(0.5); }
    to { opacity: 1; transform: scale(1); }
}
