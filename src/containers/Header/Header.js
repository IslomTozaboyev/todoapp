import { FaSun } from "@react-icons/all-files/fa/FaSun";
import React, { Component } from 'react';
import { Button } from "reactstrap";
import "./Header.css"

export default class Header extends Component {
    render() {
        return (
            <div className="header d-flex justify-content-between align-items-center text-white">
                {
                    this.props.children
               }
            </div>
        )
    }
}
