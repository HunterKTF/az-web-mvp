'use client'

import { DocumentTextIcon } from "@heroicons/react/24/outline";

export default function Reporting() {
    return(
        <div className={"flex flex-col gap-3"}>
            <div className={"flex flex-row gap-2 items-center"}>
                <DocumentTextIcon className={"size-6 text-[#1F60EE]"}/>
                <h3 className={"text-lg font-bold"}>Reporting</h3>
            </div>
            <div className={"flex flex-row gap-2 items-center"}>
                <p className={"text-sm"}>
                    Unleash the Power of Precision: Elevate Your Business Insights with Seamless
                    Reporting on our SaaS Platform
                </p>
            </div>
        </div>
    )
}