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
      <form action="">
        <img src={mailIcon} alt="mailIcon" />
        <input type="email" placeholder={t('intro.placeholder')} />
        <button>
          <img src={sendIcon} alt="sendIcon" />
          <p>{t('intro.button')}</p>
        </button>
      </form>
      <img src={scrollAnimation} alt="scrollMouse" className='scrollMouse' />
    </div>
  );
}

export default Intro;
