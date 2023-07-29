import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "src/components/user/button";
// import { Iimages } from "src/core/statics/home-page-date";
import ToDoList from "src/components/user/to-do-list"

interface image {
    title: string;
    image: string;
}

export const Iimages: image[] = [
    {
        title: 'home.page.clinics',
        image: 'bg-a3'
    },
    {
        title: 'home.page.restaurants',
        image: 'bg-a6'
    },
    {
        title: 'home.page.companies',
        image: 'bg-a2'
    },
    {
        title: 'home.page.schools',
        image: 'bg-a5'
    },
    {
        title: 'home.page.stores',
        image: 'bg-a4'
    },
    {
        title: 'home.page.other',
        image: 'bg-a1'
    },
]


function HomeContainer() {
    const { t } = useTranslation();
    const [toggel, setToggel] = useState(false)

    return (
        //  <div className="flex flex-col justify-center items-center pt-[86px] sm:pb-[80px]">
        //     <h1 className="text-[40px] sm:text-[20px] font-title text-darkBlue pb-[22px]">{t('home.page.your')}</h1>
        //     <div className="flex gap-[16px] ">
        //         <Button color={`${toggel ? 'bg-gradient-to-r from-lightBlue to-darkBlue text-white' : 'bg-whiteColor border border-darkBlue'} `} onClick={() => { setToggel(true) }} text={t('home.page.advertisement')} />
        //         <Button color={`${toggel ? 'bg-whiteColor border border-darkBlue' : 'bg-gradient-to-r from-lightBlue to-darkBlue text-white'}`} onClick={() => { setToggel(false) }} text={t('home.page.content')} />
        //     </div>
        //     <div className=" m-4 grid grid-cols-3 sm:grid-cols-1 gap-[33px] pt-[85px] text-whiteColor font-title text-[32px] cursor-pointer">
        //         {
        //             Iimages.map((items, index) => {
        //                 return <div key={index} className={`${items.image} bg-cover bg-no-repeat flex justify-center items-center rounded-lg w-[352px] h-[180px] lg:w-[250px] lg:h-[120px] md:w-[250px] md:h-[120px] sm:w-[250px] sm:h-[120px]`}>
        //                     {
        //                         t(items.title)
        //                     }
        //                 </div>
        //             })
        //         }
        //     </div>
        // </div> 
         <ToDoList />

    )
}

export default HomeContainer;