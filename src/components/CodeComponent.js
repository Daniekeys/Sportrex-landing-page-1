import React from 'react';

const CodeComponent = ({ code, className }) => {
    return (
        <div className={className}>
            <pre>
                <code>
                    {code}
                </code>
            </pre>
        </div>
    );
};

export default CodeComponent;