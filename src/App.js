import React, { Component } from "react";

import "./App.css";

import { sampleText } from "./sampleText";

class App extends Component {
  state = {
    text: sampleText,
  };

  handleChange = (e) => {
    const text = e.target.value;
    this.setState({ text });
  };
  render() {
    return (
      <div className="container pt-3">
        <section className="row markdown">
          <article className="col-12 order-2 col-md-6 order-md-1 markdown__content">
            <textarea
              onChange={this.handleChange}
              className="form-control"
              name="content"
              id="content"
              rows="35"
              value={this.state.text}
            ></textarea>
          </article>
          <article className="col-12 order-1 col-md-6 order-md-2  markdown__result">
            <h1 className="markdown__result__Title">Résultat</h1>
            <div className="markdown__result__content">{this.state.text}</div>
          </article>
        </section>
      </div>
    );
  }
}

export default App;
