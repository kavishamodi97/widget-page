import React from "react";
import Card from './Card';

const Container = ({ children }) => {
    return (
        <div>
            {
                children.map((child, key) => {
                    return <Card key={Math.random()} child={child}
                    />
                })
            }
        </div>
    )
}

export default Container;