import React, { PureComponent } from "react";
import img1 from "../assets/imgs/1.jpg";
import img2 from "../assets/imgs/2.jpg";
import img3 from "../assets/imgs/3.png";
import img4 from "../assets/imgs/4.jpg";
import img5 from "../assets/imgs/5.jpg";
import img6 from "../assets/imgs/6.jpg";

export default class SlideShow extends PureComponent {
  constructor() {
    super();
    this.state = {
      currentIdx: 0,
      intervalId: null,
    };
    this.imgs = [img1, img2, img3, img4, img5, img6];
  }

  componentWillUnmount() {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
    }
  }

  next = () => {
    this.setState((prevState) => ({
      currentIdx: (prevState.currentIdx + 1) % this.imgs.length,
    }));
  };

  back = () => {
    this.setState((prevState) => ({
      currentIdx: (prevState.currentIdx - 1 + this.imgs.length) % this.imgs.length,
    }));
  };

  stop = () => {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
      this.setState({ intervalId: null });
    }
  };

  play = (speed = 6000) => {
    this.stop();
    const intervalId = setInterval(this.next, speed);
    this.setState({ intervalId });
  };

  render() {
    const { currentIdx, intervalId } = this.state;

    return (
      <div className="slideshow">
        <img src={this.imgs[currentIdx]} alt={`Slide ${currentIdx + 1}`} />
        <div>
          <button onClick={this.back}>{"<<"}</button>
          <button onClick={this.next}>{">>"}</button>
          <button onClick={this.stop}>Stop</button>
          <button onClick={() => this.play()}>Play</button>
          <button onClick={() => this.play(6000)}>1x 6s</button>
          <button onClick={() => this.play(3000)}>2x 3s</button>
          <button onClick={() => this.play(2000)}>3x 2s</button>
        </div>
        <p>{intervalId ? "▶️ Playing" : "⏸️ Stopped"}</p>
      </div>
    );
  }
}
