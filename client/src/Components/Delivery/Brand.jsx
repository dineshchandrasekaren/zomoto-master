import React from 'react';
import Carousel from "../Carousel";

const Brand = () => {

    const BrandData=[{
        image:'https://b.zmtcdn.com/data/brand_creatives/logos/f2ac1ad991aa8311242cbe675661040e_1568097187.png?output-format=webp',
        time:'33 min'
    },{
        image:'https://b.zmtcdn.com/data/brand_creatives/logos/5ef673b417cd25b5a04176ce341d425a_1630505652.png?output-format=webp',
        time:'29 min'
    },{
        image:'https://b.zmtcdn.com/data/brand_creatives/logos/8e10f725d0d67a26c4b58e883cc99498_1551180403.png?output-format=webp',
        time:'22 min'
    },{
        image:'https://b.zmtcdn.com/data/brand_creatives/logos/08da44392a73e7e9db7be1e47863f07d_1605502636.png?output-format=webp',
        time:'48 min'
    },{
        image:'https://b.zmtcdn.com/data/brand_creatives/logos/979d427f19044ebe68404bd9429c8a3b_1629443003.png?output-format=webp',
        time:'35 min'
    },{
        image:'https://b.zmtcdn.com/data/brand_creatives/logos/2bfed94497ccfa09dc906b27dee6ab0a_1615965815.png?output-format=webp',
        time:'38 min'
    },{
        image:'https://b.zmtcdn.com/data/brand_creatives/logos/0a0d27465baf95aa3bb54875a2bb359d_1566562162.png?output-format=webp',
        time:'29 min'
    },{
        image:'https://b.zmtcdn.com/data/brand_creatives/logos/e08ef4c87f71a72467bcdf118286be55_1491906732.png?output-format=webp',
        time:'29 min'
    },{
        image:'https://b.zmtcdn.com/data/brand_creatives/logos/a416ed7cdf298a2b910540579147411d_1504863505.png?output-format=webp',
        time:'48 min'
    }]

  return(<>
          <h1 className='md:text-2xl text-xl text-gray-800 lg:text-3xl  font-medium  py-2'>Top brands for you</h1>
          <Carousel show={6} scroll={1} isInfinite={false} speed={800} isInitial={0} isArrow={true} scalable={true} >
              {BrandData.map(({image,time})=>
              <div className='flex flex-col max-w-48 px-4   items-center justify-center overflow-hidden rounded-2xl  '>
                  <div className='w-full  shadow-xl lg:max-w-40 h-40  rounded-2xl'>
                      <img className='w-full h-full shadow-xl object-cover rounded-2xl    '
                           src={image}
                           alt='brand logo'/>
                  </div>


                  <h2 className='w-full text-center'>
                      {time}
                  </h2>

              </div>
          )}

          </Carousel>
  </>

  );
}
export  default  Brand;