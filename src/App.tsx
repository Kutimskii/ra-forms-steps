import { ReactElement} from 'react';
import './App.css';
import Data from './components/Data';
import {useState} from 'react';
import { ActionProps } from './components/Data';
import Form from './components/Form';

function App(): ReactElement {
  const [actions, setActions] = useState<ActionProps[]>([{
    dateSteps:null,
    distanse:0,
    id:null,
    remove:handlerDelete,
  }]);
  function handlerAdd(e:any,date:string|null|number, distanse:null|number):void{
    e.preventDefault();
    console.log(date)
    setActions((prevActions: ActionProps[]):ActionProps[]=>{
      console.log(prevActions)
      if(date && distanse){
        if(prevActions.find(el => el.dateSteps === date )){
          let newIndex:number = prevActions.findIndex(el => el.dateSteps === date )
          let newDistance:number|null= [...prevActions][newIndex].distanse
          if (newDistance!==null){
            [...prevActions][newIndex].distanse = +distanse + newDistance;
          }
          return [...prevActions]
        }else{
          return ([...prevActions,{
            dateSteps: date,
            distanse:+distanse,
            id:performance.now(),
            remove:handlerDelete,
          }])
        }
      }else{
        return [...prevActions]
      }
  })
}
  function handlerDelete(element:ActionProps):void{
    setActions(function (prevActions: ActionProps[]):ActionProps[]{
        return prevActions.filter(el=> el.id !== element.id)
    })
  }

  return (
    <div className="container">
      <Form 
      callback= {handlerAdd}/>
      <Data items = {actions}/>
    </div>
  );
}

export default App;
