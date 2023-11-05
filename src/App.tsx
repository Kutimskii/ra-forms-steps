import { ReactElement} from 'react';
import './App.css';
import Action from './components/Action';
import { useRef } from 'react';
import {useState} from 'react';
import { ActionProps } from './components/Action';

function App(): ReactElement {
  const [actions, setActions] = useState<ActionProps[]>([{
    dateSteps:null,
    distanse:null,
    id:null,
    remove:handlerDelete,
  }]);
  let inputDate: React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  let inputDistanse: React.RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  function handlerAdd(e:React.FormEvent<HTMLFormElement>):void{
    e.preventDefault();
    setActions(function (prevActions: ActionProps[]):ActionProps[]{
      if(inputDate.current && inputDistanse.current){
        return ([...prevActions,{
          dateSteps: inputDate.current.value,
          distanse:inputDistanse.current.value,
          id:performance.now(),
          remove:handlerDelete,
        }])
      }else{
        return [...prevActions]
      }
  })
}
  function handlerDelete(element:ActionProps):void{
    console.log(element)
    setActions(function (prevActions: ActionProps[]):ActionProps[]{
        return prevActions.filter(el=> el.id !== element.id)
    })
  }

  return (
    <div className="container">
        <form name='steps' className='steps_form' onSubmit={handlerAdd}>
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
        <div className='history_wrapper'>
          <div className='history_headers'>
            <p className='history_date header'>Дата (ДД.ММ.ГГ)</p>
            <p className='history_distanse header'>Пройдено, км</p>
            <p className='history_actions header'>Действия</p>
          </div>
          <ul className='history_steps'>
            <Action items = {actions}/>
          </ul>

        </div>
      <div>

      </div>
    </div>
  );
}

export default App;
