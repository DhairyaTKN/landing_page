import React from 'react'

const commonStyle = "inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors ease-in-out disabled:pointer-events-none disabled:opacity-50";
const variants = {
    primary: `px-4 py-2 bg-[rgba(35,84,141,0.15)] border-[1px] border-borderColor rounded-[10px]`

}

const Button = ({ className=``, variant = "default", children, ...props }) => {
    return (
      <button
        className={`${variants[variant]} ${commonStyle} ${className}`}
        {...props} // all other passed props like onClick, onHover, etc.
      >
        {children}
      </button>
    );
  };
  
  export default React.memo(Button);