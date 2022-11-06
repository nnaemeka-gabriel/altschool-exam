import React, { useState } from "react";

export default function TestError() {
    const [errrorText, setErrorText] = useState("");

    function handleError(e) {
        if (e.target.value.toUpperCase() === "ALTSCHOOL") {
            setErrorText("ALTSCHOOL");
        }
    }
    if (errrorText === "ALTSCHOOL") {
        throw new Error("Error Boundary. Checked.");
    }
    return (

        <div className="test-error">
            <input
                onChange={handleError}
                type="text"
                placeholder="Test Error boundary"
            />

            <h1>Enter "altschool" to check error!!</h1>
        </div>
    );
}