import React from 'react';
import { useTranslation } from 'react-i18next';
import Service from './Service';
import sImgOne from '../../assets/truckUnscreen.gif';
import sImgTwo from '../../assets/busUnscreen.gif';
import sImgThree from '../../assets/wheelUnscreen.gif';

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className='services' id='services'>
      <h2>{t('services.header')}</h2>
      <div className='servicesBox'>
        <Service
          sImg={sImgOne}
          sHeader={t('services.service1.header')}
          sParagraph={t('services.service1.description')}
        />
        <Service
          sImg={sImgTwo}
          sHeader={t('services.service2.header')}
          sParagraph={t('services.service2.description')}
        />
        <Service
          sImg={sImgThree}
          sHeader={t('services.service3.header')}
          sParagraph={t('services.service3.description')}
        />
      </div>
    </div>
  );
}

export default Services;
