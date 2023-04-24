import React, { useState } from "react";

const NewJobForm = () =>{

    const[title, setTitle] = useState("");
    const[location, setLocation] = useState(""); 
    const[company, setCompany] = useState("");
    const[description, setDescription] = useState(""); 
    const[requirements, setRequirements] = useState("");
    const[salary, setSalary] = useState(""); 
    const[level, setLevel] = useState(""); 

    const onSubmit= () =>{

        fetch('http://127.0.0.1:8000/jobs/', {
            method : 'POST',
            headers : {'Content-Type': 'application/json'},
            body: JSON.stringify(
                
            )
        }).then (jobs =>jobs.json())
           .then(jobs => {

           })   
            }
    }
    return(
        <form onSubmit={onSubmit}>
        <div className="row">
            <div className="col-sm">
                 <label for='title'>Title</label>
                 <input required='required' type='text' className="form-control" 
                 id="title"
                 value={title}
                 onChange={(event) => setTitle(event.target.value)}></input>
             </div>
             <div className="col-sm"> 
                 <label for='location'>Location</label>
                 <input required='required' type='text' className="form-control" 
                 id="location"
                 value={location}
                 onChange={(event) => setLocation(event.target.value)}></input>
            </div>
             <div className="col-sm"> 
                 <label for='company'>Company</label>
                 <input required='required' type='text' className="form-control" 
                 id="company"
                 value={company}
                 onChange={(event) => setCompany(event.target.value)}></input>
            </div>
             <div className="col-sm"> 
                 <label for='description'>Description</label>
                 <input required='required' type='textarea' className="form-control" 
                 id="description"
                 value={description}
                 onChange={(event) => setDescription(event.target.value)}></input>
            </div>
             <div className="col-sm"> 
                 <label for='requirements'>Requirements</label>
                 <input required='required' type='textarea' className="form-control" 
                 id="requirements"
                 value={requirements}
                 onChange={(event) => setRequirements(event.target.value)}></input>
            </div>
             <div className="col-sm"> 
                 <label for='location'>Salary</label>
                 <input required='required' type='text' className="form-control" 
                 id="salary"
                 value={salary}
                 onChange={(event) => setSalary(event.target.value)}></input>
            </div>
             <div className="col-sm"> 
                 <label for='location'>Position Level</label>
                 <input required='required' type='text' className="form-control" 
                 id="level"
                 value={level}
                 onChange={(event) => setLevel(event.target.value)}></input>
            </div>
             <div className="col-sm"> 
                <button type="submit" className="btn btn-primary">Save</button>
            </div>
        </div>
    </form>
    )
}

export default NewJobForm