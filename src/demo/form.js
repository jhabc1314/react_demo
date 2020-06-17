import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nameValue: '', selectedValue: '' };
    }
    handleChange = (e) => {
        this.setState({ nameValue: e.target.value });
    }
    handleSubmit = (e) => {
        alert(this.state.nameValue);
        e.preventDefault();
    }
    handleSelectChange = (e) => {
        this.setState({ selectedValue: e.target.value });
    }
    selectOption = () => {
        return this.props.options.map(option => 
            <option key={option.id}>{option.value}</option>
        )
    }
    componentDidMount() {
        this.setState({ selectedValue: 'Jack'})
    }
    render() {
        const name = this.state.nameValue;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    姓名:
                    <input type="text" value={name} onChange={this.handleChange} />
                </label>
                <label>
                    选择:
                    <select value={this.state.selectedValue} onChange={this.handleSelectChange}>
                        <this.selectOption />
                    </select>
                </label>
                <label>

                </label>
                <input type="submit" value="提交" />
            </form>
        )
    }
}

export default Form;
