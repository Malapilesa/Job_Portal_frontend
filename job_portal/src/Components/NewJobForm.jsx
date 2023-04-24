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
        useEffect(() =>{

            const requestOptions = {
                method : 'POST',
                headers : {'Content-Type': 'application/json'},
                body: JSON.stringify({
                        title:'title',
                        location:'location',
                        company:'company',
                        description:'description',
                        requirements: 'requirements',
                        salary : 'salary',
                        level: 'level'
    
                })
            };
            fetch('http://127.0.0.1:8000/job_app/Job', requestOptions)
                .then ((res) =>res.json())
                .then((jobs) => {
                    setJobs(jobs)
                    console.log(jobs.token);
                  }
              );   
        
        },[]);
    }

    return(
        <form onSubmit={onSubmit}>
        <div className="row">
            <div className="col-sm">
                 <label>Title</label>
                 <input required='required' type='text' className="form-control" 
                 id="title"
                 value={title}
                 onChange={(event) => setTitle(event.target.value)}></input>
             </div>
             <div className="col-sm"> 
                 <label>Location</label>
                 <input required='required' type='text' className="form-control" 
                 id="location"
                 value={location}
                 onChange={(event) => setLocation(event.target.value)}></input>
            </div>
             <div className="col-sm"> 
                 <label>Company</label>
                 <input required='required' type='text' className="form-control" 
                 id="company"
                 value={company}
                 onChange={(event) => setCompany(event.target.value)}></input>
            </div>
             <div className="col-sm"> 
                 <label>Description</label>
                 <input required='required' type='textarea' className="form-control" 
                 id="description"
                 value={description}
                 onChange={(event) => setDescription(event.target.value)}></input>
            </div>
             <div className="col-sm"> 
                 <label>Requirements</label>
                 <input required='required' type='textarea' className="form-control" 
                 id="requirements"
                 value={requirements}
                 onChange={(event) => setRequirements(event.target.value)}></input>
            </div>
             <div className="col-sm"> 
                 <label>Salary</label>
                 <input required='required' type='text' className="form-control" 
                 id="salary"
                 value={salary}
                 onChange={(event) => setSalary(event.target.value)}></input>
            </div>
             <div className="col-sm"> 
                 <label>Position Level</label>
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