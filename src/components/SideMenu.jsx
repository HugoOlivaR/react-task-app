import React, {useContext} from 'react'
import { esFlag, usFlag ,moon,profile,sun } from '../assets';
import { LangContext } from '../config/LangContext';

const SideMenu = () => {

    var { lang, setLang } = useContext(LangContext);
    var theme = "dark";

    const switchLanguage = () => {
        if(lang === "es"){
            document.getElementById('btnFlag').src = usFlag;
            setLang("us")
        }else{
            document.getElementById('btnFlag').src = esFlag;
            setLang("es")
        }
    }
    const switchTheme = () => {
        if(theme === "dark"){
            document.getElementById('btnTheme').src = sun;
            theme = "light"
        }else{
            document.getElementById('btnTheme').src = moon;
            theme = "dark"
        }
    }

    return (
        <div className='p-4 bg-sky-950 rounded-md w-1/4 float-right m-3 h-1/4 grid grid-cols-3'>
            <button>
                <img src={profile} alt="Profile Info" className='h-9'/>
            </button>
            <button onClick={switchTheme}>
                <img src={moon} className='h-9' id='btnTheme'/>
            </button>
            <button onClick={switchLanguage}>
            <img src={esFlag} className='h-9' id='btnFlag'/>
            </button>
        </div>
    );
};

export default SideMenu