import React, { Component } from "react";
import { sampleText } from "./sampleText";
import marked from "marked";
import "./App.css";
class App extends Component {
  state = {
    text: sampleText,
  };

  componentDidMount() {
    const text = localStorage.getItem("content");
    if (text) {
      this.setState({ text });
    } else {
      this.setState({ sampleText });
    }
  }

  componentDidUpdate() {
    const { text } = this.state;
    localStorage.setItem("content", text);
  }

  handleChange = (e) => {
    const text = e.target.value;
    this.setState({ text });
  };

  renderText = (text) => {
    const __html = marked(text, { sanitize: true });
    return { __html };
  };

  render() {
    const { text } = this.state;
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
              value={text}
            ></textarea>
          </article>
          <article className="col-12 order-1 col-md-6 order-md-2  markdown__result">
            <h1 className="markdown__result__Title">Résultat</h1>
            <div
              dangerouslySetInnerHTML={this.renderText(text)}
              className="markdown__result__content"
            ></div>
          </article>
        </section>
      </div>
    );
  }
}

export default App;
