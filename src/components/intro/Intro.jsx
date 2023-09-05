import React from 'react';
import { useTranslation } from 'react-i18next';
import './intro.scss';
import mailIcon from "../../assets/mailIcon.svg";
import sendIcon from "../../assets/sendIcon.svg";
import scrollAnimation from "../../assets/mouse.gif";

const Intro = () => {
  const { t } = useTranslation();

  return (
    <div className='intro'>
      <h1>{t('intro.header')}</h1>
      <p>{t('intro.content')}</p>
      <div className='linktoproduct'>
        <button>
          <p>{t('intro.button')}</p>
        </button>
      </div>
      <img src={scrollAnimation} alt="scrollMouse" className='scrollMouse' />
    </div>
  );
}

export default Intro;
