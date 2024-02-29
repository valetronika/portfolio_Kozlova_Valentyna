import React from "react";
import s from "./StackRenderComponent.module.scss";
import PropTypes from "prop-types";
export default function StackRenderComponent({ stacks_array }) {
    // console.log(stacks_array);
    return (
        <div className={s.stack}>
            {stacks_array.map((stack) => (
                <div className={s.stack_container} key={`${stack.id}+${stack}`}>
                    {stack}
                </div>
            ))}
        </div>
    );
}

StackRenderComponent.propTypes = {
    stacks_array: PropTypes.array.isRequired,
};
