// eslint-disable-next-line
import React from "react";
import './index.css';
//import  JSMpeg from "../../assets/scripts/jsmpeg-master/jsmpeg.min.js";
//declare var JSMpeg: any;
export default class Home extends React.Component {
    componentDidMount(){
        let player = new JSMpeg.Player('ws://localhost:9999', {
            canvas: document.getElementById('camera-viewer'),
            preserveDrawingBuffer: true,
        });
    }

    render() {
      return (
        <div className="home">
            <h1>Visualizando cámara</h1>
            <canvas id="camera-viewer"></canvas>
        </div>
      );        
    }
}