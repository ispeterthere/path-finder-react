import React, {Component} from "react"
import {MenuItems} from "./MenuItems"
import "./NavBar.css"

import dijkstra, {orderedShortestPath, visualizeDijkstra} from '../Algorithms/Dijkstras';
import aStar, {orderedAStarPath, visualizeAStar} from '../Algorithms/A_star';
import PathFinder, {resetGrid, toggleObstacles, changeObstacles, changeDensity} from "../../PathFinder/PathFinder"

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
                    <ul className="nav-links">{isVisualizing
                        ? <div>
                            <div className="spinner">
                                <span></span><span></span><span></span>
                            </div>
                        </div>

                        : <ul className={"nav-links"}>
                            <label className={"dropDown"}>
                                <div className="dd-button">
                                    Visualizing
                                </div>
                                <input type={"checkbox"} className={"dd-input"} id={"test"}></input>
                                <ul className={"dd-menu"}>
                                    <li onClick={() => visualizeDijkstra}>Use Dijkstra's Algorithm</li>
                                    {/*Add onClick VisualizeDijkstra*/}
                                    <li onClick={() => visualizeAStar}>Use A* Algorithm</li>
                                    {/*Add onClick VisualizieAstar*/}
                                </ul>
                            </label>
                            <li onClick={() => resetGrid}>Reset Grid</li>
                            <li onClick={() => toggleObstacles}>Toggle Obstacles</li>
                            <label className={"dropDown"}>
                                <div className={"dd-button"}>
                                    Obstacle Options
                                </div>
                                <input type={"checkbox"} className={"dd-input"} id={"test"}></input>
                                <ul className={"dd-menu"}>
                                    <li onClick={() => changeObstacles()}>Change Obstacles</li>
                                    <li onClick={() => changeDensity(0.095)}>Low Density Obstacles</li>
                                    <li onClick={() => changeDensity(0.13)}>Medium Density Obstacles</li>
                                    <li onClick={() => changeDensity(0.25)}>High Density Obstacles</li>
                                </ul>
                            </label>
                            <li><a href={"#openModal-about"}>App Info</a></li>
                        </ul>
                    }</ul>
                    <br/>
                </nav>
            </div>
        )
    }

}

export default NavBar