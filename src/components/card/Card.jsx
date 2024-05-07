/* eslint-disable react/prop-types */
import { Card, CardContent } from "@mui/material";
import { toStartCase } from "../../utils/string";

function JobCard({item}) {
    return ( <Card style={{borderRadius:'12px'}}><CardContent >
    <div className="relative rounded-lg">
        <div className="flex w-fit mb-2" style={{

            'padding': " 6px 6px",
            boxShadow: " rgba(6, 6, 6, 0.05) 0px 2px 6px 0px",
            borderRadius: " 20px",
            border: " 1px solid rgb(230, 230, 230)"
        }}>
            <p>⏳ Posted  10 days ego</p>
        </div>
        <div className="flex ">
            {item.logoUrl ? <img src={item.logoUrl} className="w-[12%] h-[12%]" alt="logo " /> : <></>}
            <div className="flex flex-col ml-2">
                <p className="text-[#969492]">{toStartCase(item.companyName)}</p>
                <p className="text-black">{toStartCase(item.jobRole)}</p>
                <p className="text-black">{toStartCase(item.location)}</p>
            </div>
        </div>
        <div>

            {<p className="text-[#4A4A4A] font-[400]"> Estimated Salary: {item.salaryCurrencyCode === 'USD' ? "$" : "₹"} {item.minJdSalary ? item.minJdSalary : 0} - {item.maxJdSalary} LPA</p>}
        </div>
        <div>
            <p className="text-[#747474] font-semibold">About Company:</p>
            <p>{item?.jobDetailsFromCompany?.substr(0, 400)}</p>
        </div>
        <div
            style={{ background: "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(251,251,251,1) 79%, rgba(244,244,244,0.5131302521008403) 100%)" }}
            className="absolute bottom-0 bg-white w-full  ">
            <div className="min-h-10 min-w-10"></div>
            <p className="text-center text-[#4943da] text-sm">Show More</p>
            <div>
                {item.minExp ? <><p className="text-[#8b8b8b] ">Minimum Experience</p> <p className="text-[#8b8b8b]">{item.minExp} years</p></> : null}

                <div>
                    <button className="rounded-lg p-2 mt-2" style={{
                        width: " 100%",
                        backgroundColor: " rgb(85, 239, 196)"
                    }} ><p className="text-center font-[500]">⚡ Easy Apply</p></button>
                </div>

            </div>
        </div>
    </div>
</CardContent>
</Card> );
}

export default JobCard;