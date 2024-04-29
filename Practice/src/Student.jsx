

function Student(props){

    return(
        <div className="student">
            <p><b>Name: </b>{props.name}</p>
            <p><b>Age: </b>{props.age}</p>
        </div>
    )
}

Student.defaultProps={
    name:"Guest",
    age:0,
}


export default Student