'use client'

import { CalendarDaysIcon } from "@heroicons/react/24/outline";

export default function Titles() {
    return (
        <div className={"flex flex-row justify-between items-center"}>
            <div className={"flex flex-col justify-start"}>
                <h1 className={"text-2xl font-bold"}>El Nombre de Mi Cliente S.A. de C.V.</h1>
                <h1 className={"text-2xl font-bold text-[#B2B2B2]"}>| Moneda: Pesos Mexicanos</h1>
            </div>
            <div className={"flex flex-row items-center gap-3"}>
                <div
                    className={"h-16 w-16 flex flex-col justify-center items-center rounded-full border border-[#B2B2B2] border-2"}>
                    <h1 className={"text-2xl"}>21</h1>
                </div>
                <div className={"flex flex-col pr-4 border-r-2 border-[#B2B2B2]"}>
                    <h3 className={"font-bold"}>Jueves,</h3>
                    <h3 className={"font-bold"}>Diciembre</h3>
                </div>
                <div className={"flex flex-row p-3 bg-white rounded-full hover:bg-[#B2B2B2]"}>
                    <CalendarDaysIcon className={"size-5 text-black bg-transparent"} />
                    <select className={"rounded full bg-transparent border-0 px-2 text-sm"}
                            id={"dates"} name={"dates"}>
                        <option value={"1"}>Ene 2020, Dic 2020</option>
                        <option value={"2"}>Ene 2021, Dic 2021</option>
                        <option value={"3"}>Ene 2022, Dic 2022</option>
                        <option value={"4"}>Ene 2023, Dic 2023</option>
                    </select>
                </div>
            </div>
        </div>
    )
}