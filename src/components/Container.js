import React from 'react';
import Widget from './Widget';

const Container = ({ apiData, pincode, width }) => {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", width: width }}>
            {apiData.map((i) => {
                if (i.slotType === 'WIDGET') {
                    return (
                        <div key={i.slotId} style={{ width: i.grow }}>
                            <Widget
                                assets={i.assets}
                                imageCount={i.imageCount}
                                serviceablePincodes={i.serviceablePincodes}
                                pincode={pincode}
                            />
                        </div>
                    )
                }
                else {
                    return (
                        <Container
                            key={i.children[0].assets[0].id}
                            pincode={pincode}
                            apiData={i.children}
                            width={i.grow}
                        />
                    )
                }
            })
            }
        </div>
    )
}

export default Container;