import {useState} from 'react'

const Cigars = () => {
    
    const [cigar, setCigar] = useState(0)

    const addCigar = () => setCigar(cigar+1)

    return (
        <div>
            <hr />
            <button onClick={addCigar}>Comprar Marlboro</button>
            {cigar}
        </div>
    )
}

export default Cigars