import React, {Component} from "react";
import "./Node.css"

class Node extends Component {
    render() {
        const {
            column,
            isEnd,
            isStart,
            isBarrier,
            whileMousePressed,
            onMouseEnter,
            onMouseLeave,
            onMouseUp,
            row,
        } = this.props;
        const nodeType=
                isEnd ? 'node-end'
                : isStart ? "node-start"
                : isBarrier ? "node-barrier"
                : "";

        return (
            <div>
                id={`node-${row}-${column}`}
                className={`node ${nodeType}`}
                onMouseDown={() => whileMousePressed(row,column)}
                onMouseEnter={() => onMouseEnter(row,column)}
                onMouseUp={() => onMouseUp(row,column)}
            </div>
        );
    }
}

export default Node