import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HomeVideo.css";
import { Link } from "react-router-dom";

function HomeVideo() {
    return (
        <div className="home-container">
            <video src="/videos/video.mp4" autoPlay loop muted />
            <h1>Pain Relief Awaits</h1>
            <p>What are you waiting for?</p>
            <div className="home-btns">
                <Link to="/exercise">
                    <Button
                        className="btns"
                        buttonStyle="btn--outline"
                        buttonSize="btn--large"
                    >
                        GET STARTED
                    </Button>
                </Link>
                <Link to="/about">
                    <Button
                        className="btns"
                        buttonStyle="btn--primary"
                        buttonSize="btn--large"
                    >
                        LEARN MORE
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default HomeVideo;

