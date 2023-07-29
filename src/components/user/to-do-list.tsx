import { useTranslation } from "react-i18next";
import { useState } from "react";
import i18n from "src/core/configs/i18n";


interface task {
    id: string;
    title: string;
    done: boolean;
}

export const tasks: task[] = []

function ToDoList(){
    const { t } = useTranslation();
    const [task, setTask] = useState<task>({id: "", title: '', done: false})
    const [tasks, setTasks] = useState<task[]>([]);

    const removeObjectFromArrayById = (arr: task[], id: string)=> {
        setTasks( arr.filter(obj => obj.id !== id))};

    const editObjectFromArrayById = (arr: task[], id: string)=>{
        let temp = arr.filter(obj => obj.id == id)[0]
        temp.done =  !temp.done 
        setTasks([...arr.filter(obj => obj.id !== id), temp])
    }

    return (
        <><div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
            <div className="mb-4">
                <h1 className="text-grey-darkest">{t('home.page.to.do.list.title')}</h1>
                <div className="flex mßt-4">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" 
                    onChange={(e)=>{setTask({id: new Date().toString(), title: e.target.value, done: false})}}/>
                    <button className="flex-no-shrink p-2 border-2 rounded text-white  hover:bg-darkBlue bg-gradient-to-r from-lightBlue to-darkBlue"
                    onClick={()=>{ setTasks(prev => [...prev, task ]) }}>{t('home.page.to.do.list.add')}</button>
                </div>
            </div>
            <div>
          { tasks.map((items, index) => {
               return( <div className="flex mb-4 items-center">
                    <p className={items.done? "w-full text-decoration-line: line-through" : "w-full text-grey-darkest"}>{items.title}</p>
                    <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-white  hover:bg-teal bg-gradient-to-r from-lightBlue to-darkBlue"
                      onClick={()=>{  editObjectFromArrayById(tasks, items.id)  }}>{t('home.page.to.do.list.check')}</button>
                    <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red text-white  hover:bg-teal bg-gradient-to-r from-lightBlue to-darkBlue" 
                    onClick={()=>{ removeObjectFromArrayById(tasks, items.id)  } }>{t('home.page.to.do.list.delete')}</button>
                </div> )})}
            
            </div>
        </div>
    </div>
            </>
    )
}

export default ToDoList;