import React, { Component } from "react";

import "./App.css";

import { sampleText } from "./sampleText";

class App extends Component {
  render() {
    return (
      <div className="container pt-3">
        <section className="row markdown">
          <article className="col-12 order-2 col-md-6 order-md-1 markdown__content">
            <textarea
              className="form-control"
              name="content"
              id="content"
              rows="35"
              value={sampleText}
            ></textarea>
          </article>
          <article className="col-12 order-1 col-md-6 order-md-2  markdown__result">
            <h1 className="markdown__result__Title">Résultat</h1>
            <div className="markdown__result__content">{sampleText}</div>
          </article>
        </section>
      </div>
    );
  }
}

export default App;
