import { Row, Col } from 'arwes';
import React, { useEffect, useState } from 'react';

const CoolDataComponent = () => {
    const [myData, setMyData] = useState([])
    //https://www.loom.com/share/f502be2faf4c45b8850757f120876c93
    useEffect(() => {
        async function fetchData() {
            // make the api call on load of this component
            // https://developer.trademe.co.nz/api-reference/catalogue-methods/search-the-blu-ray-catalogue/
            const response = await fetch('https://api.trademe.co.nz/v1/bluray/find.json?search=batman');
            const jsonData = await response.json();

            // store the result somewhere
            setMyData(jsonData.List); // as per the docs the array is in another property called List
        }
        fetchData();
    }, []);


    return (<div>
        <Row>HI, you got {myData.length} data</Row>
        { myData.map(data =>
            <Row>
                <Col s={6}>{data.Name} </Col>
                <Col s={6}>({data.MovieYear})</Col>
            </Row>
        )}
    </div >);
}

export default CoolDataComponent;


