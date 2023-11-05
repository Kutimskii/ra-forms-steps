export interface ActionProps{
  dateSteps: string|null|number,
  distanse: number|string|null,
  id: number|null,
  remove:Function,
}
export interface ActionPropsHistory{
  items:ActionProps[];
}
function Action({items}:ActionPropsHistory){

  let array = items.map((el,index) => {
    if(el.dateSteps===null){
      return
    }
    return <li className='history_action' key={index} data-id={performance.now()}>
        <div className='history_action_steps'>{el.dateSteps}</div>
        <div className='history_action_distanse'>{el.distanse}</div>
        <div className="btn_wrap">
          <button>&#9998;</button>
          <button onClick={()=>el.remove(el)}>&#10007;</button>
        </div>
      </li>
  });
  return array.reverse()
}
export default Action;
