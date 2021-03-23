import React, {Component, useState} from "react"

import "./NavBar.css"

import dijkstra, {orderedShortestPath, visualizeDijkstra} from '../Algorithms/Dijkstras';
import aStar, {orderedAStarPath, visualizeAStar} from '../Algorithms/A_star';
import PathFinder, {resetGrid, toggleObstacles, changeObstacles, changeDensity} from "../../PathFinder/PathFinder"

let isVisualizing = false

class NavBar extends Component {

    render() {

        return (
            <div>
                <nav>
                    <div className="logo" onClick={() => resetGrid()}>
                        PATH <br/> FINDER
                        <i className={"fab fa-react"}></i>
                    </div>
                    <ul className="nav-links">{isVisualizing
                        ? <div>
                            <div className="spinner">
                                <span></span><span></span><span></span>
                            </div>
                            <div className="label">
                                Visualizing
                            </div>
                        </div>

                        : <ul className="nav-links">
                            <label className="dropdown">
                                <div className="dd-button">Visualize</div>
                                <input type="checkbox" className="dd-input" id="test"></input>
                                <ul className="dd-menu">
                                    <li onClick={() => visualizeDijkstra}>Use Dijkstra's Algorithm</li>
                                    <li onClick={() => visualizeAStar}>Use A* Algorithm</li>
                                </ul>
                            </label>
                            <li onClick={() => resetGrid}>Reset Grid</li>
                            <li onClick={() => toggleObstacles}>Toggle Obstacles</li>
                            <label className="dropdown">
                                <div className="dd-button">
                                    Obstacle Options
                                </div>
                                <input type="checkbox" className="dd-input" id="test"></input>
                                <ul className="dd-menu">
                                    <li onClick={() => changeObstacles()}>Change Obstacles</li>
                                    <li onClick={() => changeDensity(0.095)}>Low Density Obstacles</li>
                                    <li onClick={() => changeDensity(0.13)}>Medium Density Obstacles</li>
                                    <li onClick={() => changeDensity(0.25)}>High Density Obstacles</li>
                                </ul>
                            </label>

                            <li><a href="#openModal-about">App Info</a></li>

                        </ul>
                    }</ul>
                    <br/>

                </nav>

            </div>
        )
    }


}

export default NavBar