axios.get('http://localhost:18085/user/employee/'+this.state.id)
        .then(response => {
            ReactDOM.render(
            <Employee value = {response}/>
            )
        });
      }

function Employee(props) {
    console.log(props);
    return (
    <div>
    <p>Contact: ${props.value.contact}</p>
    <p>Salary: ${props.value.salary}</p>
    </div>
    )
}