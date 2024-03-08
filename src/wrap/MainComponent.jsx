import React from 'react';
import Section1ComPonent from './main/Section1ComPonent';
import Section2ComPonent from './main/Section2ComPonent';
import Section3ComPonent from './main/Section3Component';
import Section4ComPonent from './main/Section4ComPonent';
import Section5ComPonent from './main/Section5ComPonent';
import Section6ComPonent from './main/Section6ComPonent';
import Section7ComPonent from './main/Section7ComPonent';

export default function MainComponent ({currentViewProduct}) {
    return (
        <div id='main'>
            <Section1ComPonent />
            <Section2ComPonent currentViewProduct={currentViewProduct} />
            <Section3ComPonent currentViewProduct={currentViewProduct} />
            <Section4ComPonent currentViewProduct={currentViewProduct} />
            <Section5ComPonent  />
            <Section6ComPonent currentViewProduct={currentViewProduct} />
            <Section7ComPonent currentViewProduct={currentViewProduct} />
        </div>
    );
};