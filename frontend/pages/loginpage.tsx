import Login from "../components/login";
import { SegmentedControl } from "@mantine/core";
import { useState } from "react";
import { useEffect } from "react";
const loginpage = () => {
    const [isStudent, setIsStudent] = useState(true);
    useEffect(() => {
        console.log(isStudent);
    }, [isStudent]);
    return (
        <div className="bg-cyanlight  w-[100vw] h-[100vh] flex justify-center items-center flex-col">
            <div className="items-end  w-auto md:w-[30vw]">
                <SegmentedControl
                    onChange={(value) => setIsStudent(value === "S")}
                    data={[
                        { label: "Student", value: "S" },
                        { label: "Instructor", value: "I" },
                    ]}
                />
            </div>
            {<Login isStudent={isStudent} />}
        </div>
    );
};
export default loginpage;
