import React, {FC, useEffect} from 'react'
import {Input} from './style'

interface Props {
  register: any;
  selectValue: string;
  onUpdate: (value: number) => void;
}

const ControlledInput: FC<Props> = ({register, selectValue, onUpdate}) => {
  // useEffect(()=>{
  //   fetch(`https://api.apilayer.com/currency_data/live?base=USD`, {
  //     method: 'GET',
  //     headers: {
  //       apikey: 'r1SiCgffiqhAZ8ItDPX5DmZctBIEn4Pm',
  //     }
  //   }).then(res => res.json())
  //     .then(data => {
  //       console.log(data);
        
  //       const { USDRUB, USDCNY } = data?.quotes;
  //       if (selectValue === 'USD') {
  //         onUpdate(USDRUB)
  //       } else if (selectValue === 'CYN') {
  //         onUpdate(USDRUB / USDCNY)
  //       } else {
  //         onUpdate(1)
  //       }
  //     })
  //     .catch(console.log)
  // }, [selectValue])
  
  return (
    <Input
      topTitle="Курс"
      disabled
      title="Выберите валюту и курс выберется автоматически"
      {...register('rate', {required: true})}
      />
  )
}

export default ControlledInput