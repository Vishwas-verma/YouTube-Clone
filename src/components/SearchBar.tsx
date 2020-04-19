import React from "react";

class SearchBar extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {term: ""};
  }


  onFormSubmit = (event: any) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <form onSubmit = {this.onFormSubmit}>
        <div className = {"searchBar"}>
          <input style = {{
            width       : "100%",
            marginBottom: "25px",
            border      : "2px solid black",
            height      : "30px",
            textAlign   : "center",
            left        : "50%",
            alignContent: "center",
          }}
                 value = {this.state.term}
                 onChange = {this.onInputChange} type = {"text"} placeholder = {"Search.."}/>
        </div>
      </form>
    );
  }


  onInputChange = (event: any) => {
    this.setState({term: event.target.value});
  }
}

export default SearchBar;