import React from 'react';
import { useTranslation } from 'react-i18next';
import './intro.scss';
import scrollAnimation from "../../assets/mouse.gif";

const Intro = () => {
  const { t } = useTranslation();

  return (
    <div className='intro'>
      <h1>{t('intro.header')}</h1>
      <p>{t('intro.content')}</p>
      {/* <div className='linktoproduct'>
        <button>
          {t('intro.start')}
        </button>
      </div> */}
      <img src={scrollAnimation} alt="scrollMouse" className='scrollMouse' />
    </div>
  );
}

export default Intro;
