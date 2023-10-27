import { useState } from "react"

export default function RandomCatFact() {

    const [catFact, setCatFact] = useState('In the cartoon Tom & Jerry, Tom is a Cat :O :O :O')

    // TODO: Make an API call here every time the user refreshes the page

    return (
        <div>
            <h1>Random Cat Fact</h1>
            <p>{catFact}</p>
        </div>
    )
}