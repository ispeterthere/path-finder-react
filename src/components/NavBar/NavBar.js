import React, {Component} from "react"
import {MenuItems} from "./MenuItems"
import "./NavBar.css"

import {dijkstra, orderedShortestPath} from '../Algorithms/Dijkstras';
import {aStar, orderedAStarPath} from '../Algorithms/A_star';

let isVisualizing = false

class NavBar extends Component {
    state = {clicked: false}

    handleClick = () => {
        this.this.setState({clicked: this.state.clicked})
    }

    render() {
        return (
            <div>
                <nav className={"NavbarItems"}>
                    <h1 className={"navbar-logo"} onClick={() => this.re}> Path <br/> Finder
                        <i className={"fab fa-react"}></i>
                    </h1>
                    <ul className="nav-links">{isVisualizing}
                        ? <div>
                            <div className="spinner">
                                <span></span><span></span><span></span>
                            </div>
                          </div>

                        :
                        <ul className={"nav-links"}>
                                <label className={"dropDown"}>

                                    <input type={"checkbox"} className={"dd-input"} id={"test"}></input>
                                    <ul className={"dd-menu"}>
                                        <li>Use Dijkstra's Algorithm</li> {/*Add onClick VisualizeDijkstra*/}
                                        <li>Use A* Algorithm</li> {/*Add onClick VisualizieAstar*/}
                                    </ul>
                                </label>
                        </ul>
                    </ul>
                </nav>
            </div>
        )
    }

}

export default NavBar