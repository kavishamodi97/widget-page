import React, { useEffect, useState } from 'react';

const Widget = ({ assets, imageCount, serviceablePincodes, pincode }) => {
    const [selectDiv, setSelectDiv] = useState(false);
    const [isData, IsSetData] = useState(false);

    useEffect(() => {
        if (serviceablePincodes && serviceablePincodes.includes(pincode)) {
            IsSetData(true);
        }
    }, [pincode, serviceablePincodes])

    return (
        isData &&
        <div onClick={() => setSelectDiv((selectDiv) => !selectDiv)}
            style={
                selectDiv ?
                    {
                        width: assets.grow,
                        border: "2px solid black",
                        display: 'flex'
                    }
                    : {
                        display: 'flex',
                        width: assets.grow
                    }
            }
        >
            {assets.slice(0, imageCount).map((i) => {
                return (
                    <div style={{ flex: 1 }} key={i.id}>
                        <img
                            style={{ width: "100%" }}
                            src={i.imageUrl}
                            alt="hello-widget"
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Widget;