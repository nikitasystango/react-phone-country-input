import React from "react";
import countryData from "./countries.json";
import InputMask from "react-input-mask";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

class ReactCountryInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      countries: [],
      isOpen: false,
      value: undefined,
    };
  }

  componentDidMount() {
    let countryFlags = [];
    countryData
      .sort((a, b) => this.sortCountries(a, b))
      .map((data) => {
        countryFlags.push({
          value: data.code,
          label: `${data.flag}${" "}${data.text}${" "}${data.dial_code}`,
        });
        return countryFlags;
      });
    this.setState({
      ...this.state,
      countries: countryFlags,
    });
  }

  sortCountries = (a, b) => {
    const nameFirst = a.text.toUpperCase();
    const nameSecond = b.text.toUpperCase();

    let comparison = 0;
    if (nameFirst > nameSecond) {
      comparison = 1;
    } else if (nameFirst < nameSecond) {
      comparison = -1;
    }
    return comparison;
  };
  toggleOpen = () => {
    this.setState((state) => ({ isOpen: !state.isOpen }));
  };

  onCountryChange = (option) => {
    const { value } = option;
    const { setPhoneNumber, setCountryCode } = this.props;
    const dialCode = countryData.filter((item) => item.code === value)[0];
    this.setState({
      ...this.state,
      selectedOption: dialCode,
    });
    setCountryCode(dialCode.dial_code);
    setPhoneNumber("");
    this.toggleOpen();
  };

  render() {
    const { selectedOption, isOpen, countries, value } = this.state;
    const {
      phoneNumber,
      setPhoneNumber,
      className,
      countryCode,
      placeholder,
    } = this.props;
    return (
      <div className={"row"}>
        <div className={"col-2 country-select"}>
          <div style={{ position: "relative" }}>
            <button className={"select-btn"} onClick={this.toggleOpen}>
              {selectedOption ? `${selectedOption.flag}` : countryData[0].flag}{" "}
              <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.20238 7.85359L1.14177 1.85342C0.947994 1.65478 0.953557 1.33825 1.1542 1.14641C1.34992 0.959254 1.6602 0.959254 1.8559 1.14641L7.55944 6.79307L13.263 1.14641C13.4602 0.951197 13.7799 0.951197 13.9771 1.14641C14.1743 1.34168 14.1743 1.65818 13.9771 1.85342L7.91651 7.85359C7.71927 8.0488 7.39958 8.0488 7.20238 7.85359Z" fill="#C9D0D9" stroke="#C9D0D9"/>
              </svg>
            </button>
            {isOpen ? (
              <div
                style={{
                  backgroundColor: "white",
                  borderRadius: 4,
                  boxShadow: `0 0 0 1px hsla(218, 50%, 10%, 0.1), 0 4px 11px hsla(218, 50%, 10%, 0.1)`,
                  marginTop: 8,
                  position: "absolute",
                  zIndex: 2,
                }}
              >
                <Select
                  autoFocus
                  backspaceRemovesValue={false}
                  controlShouldRenderValue={false}
                  hideSelectedOptions={false}
                  isClearable={false}
                  menuIsOpen
                  className={"country-select-box"}
                  onChange={this.onCountryChange}
                  options={countries}
                  placeholder="Search..."
                  tabSelectsValue={false}
                  value={value}
                />
              </div>
            ) : null}

            {isOpen ? (
              <div
                style={{
                  bottom: 0,
                  left: 0,
                  top: 0,
                  right: 0,
                  position: "fixed",
                  zIndex: 1,
                }}
                onClick={this.toggleOpen}
              />
            ) : null}
          </div>
        </div>
        <div className={"col-10"}>
          <div className={"row input-mask"}>
            <div className={"col-2 country-code"}>
              <span>{countryCode}</span>
            </div>
            <div className={"col-10 phone-input"}>
              <InputMask
                mask={selectedOption ? selectedOption.inputMask : ""}
                alwaysShowMask={false}
                maskChar={null}
                label={""}
                type={"text"}
                name={"phone"}
                value={phoneNumber}
                className={className ? className : "form-control mask-input"}
                placeholder={placeholder ? placeholder : "Mobile Number"}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReactCountryInput;
