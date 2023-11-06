import { useRef } from "react";
function Form({callback}:any){
  let inputDate: React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  let inputDistanse: React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  return(
    <form name='steps' className='steps_form' onSubmit={(e)=>callback(e,inputDate.current?.value,inputDistanse.current?.value)}>
          <div className='date_wrapper'>
            <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
            <input name="date" type="text" ref={inputDate} pattern='[0-9]{2}.[0-9]{2}.[0-9]{2}'/>
          </div>
          <div className='distanse_wrapper'>
            <label htmlFor="distanse">Пройдено, км</label>
            <input name="distanse" type="text" ref={inputDistanse}/>
          </div>
          <div className='button_wrapper'>
            <button type='submit'>OK</button>
          </div>
        </form>
  )
}
export default Form