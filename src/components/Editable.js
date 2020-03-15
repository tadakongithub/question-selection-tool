import React, { useState, useEffect } from 'react';

const Editable = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        if (props.childRef && props.childRef.current && isEditing === true) {
          props.childRef.current.focus();
        }
      }, [isEditing, props.childRef]);

    const handleBlur = () => {
        setIsEditing(false);
    }

    return (
        <section>
            {isEditing ? (
            <div
                onBlur={handleBlur}
            >{props.children}</div>
        ) : (
            <div
            onClick={(e) => setIsEditing(true)}>
                <span>{props.grammar}</span>
            </div>
        )}
        </section>
    )
}

export default Editable;