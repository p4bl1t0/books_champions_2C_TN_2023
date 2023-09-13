import React from 'react';
function If ({ condition, children}) {
    const childs = React.Children.toArray();
    return children.map((item) => {
        if (condition && item.type === If.True) return item;
        if (!condition && item.type === If.Else) return item;
        return <></>
    })
    
}
If.True = ({ children }) => {
    return children;
}
If.Else = ({ children }) => {
    return children;
}

export default If;