import React,{Component} from 'react';//first we import react and create {} component then from 'react'
import Card from './Card'
export default class First extends Component{//inheritance used we extend to the component class the use export to export the component default means this the single file you want to export
    
    constructor(props){
        super(props);
        console.log(this.props.name);//to get values in console
        this.state={//we have to create a state in constructor with this.state func. *we have to name it state its a fix 
            //email:"gurpreetachint@gmail.com"//her we passed the value
            users:[],
            filteredUsers:[]

        }
    
    
    }

    /*printName(demo){//we passed a demo parameter we passed the value in line 18
        console.log(this.props.name,demo);
    }

    changeEmail=()=>{//creating a change state function

        this.setState({email:"gurpreetcmc@gmail.com"});// this is how we pass a new change value to the email 

    }*/

    readInputValue=(value)=>{//we created a input value func. used event predefined java parameter used to get events
            //now we passed value as a parameter as we got our value from inputvalue function(event.target.value)
            console.log(value);//here we a printing console specifying event.target.value to get the value 

    }

    componentDidMount=()=>{//by default fetch calls get method

           fetch("https://jsonplaceholder.typicode.com/users")//java script fetch to fetch some data
           .then(response=>response.json())//first response is a variable
           .then((users)=>{
                this.setState({users:users});
                console.log(this.state.users);   
           })
           .catch((err)=>{console.log(err)})

           /*fetch("url",{
               method:"POST",
               body:{},
               header{}
           })*/
    }
    searchByName=(name)=>{
        let tempUsers = this.state.users.filter((users)=>{
            return(users.name.toLowerCase().includes(name.toLowerCase()))
        })
        this.setState({filteredUsers:tempUsers});
        
    }

    render(){//render func. should always be kept at last to avoid errors ;-)
      
      
        return(//in return it is imp to give div for as a single tag
           
           
           <div className="container">
                <input type="search" placeholder="Search by name" onChange={(event)=>{
                    this.searchByName(event.target.value)
                }}/>
               
                    {this.state.filteredUsers.map((users,index)=>{
                        return(
                            <Card users={users} key={index}/>

                    )    
                    })
                }
                
                {/*<table className="container">{/* className - correction the we named it container where we add css to the table 
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Website</th>
                        <th>Email</th>
                        <th>Company</th>
                        <th>City</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map((user,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.website}</td>
                                        <td>{user.email}</td>
                                        <td>{user.company.name}</td>
                                        <td>{user.address.city}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    </table>*/}
                

           </div>


        )//on click we are calling our function using ()>{} makes it a anonymus function
        //two diffrent ways for calling function




        /* 1) <h1> {this.props.name} </h1>
            <h1>{this.state.email}</h1>
            <input type="text" placeholder="city" onChange={(event)=>{this.readInputValue(event.target.value)}}/><br></br>
            <button onClick={()=>{this.printName("hello")}}>click</button>
            <button onClick={this.printName.bind(this,"holla")}>Click1</button>
            <button onClick={()=>{this.changeEmail()}}>Click2</button>*/
 
 
 
        /* 2){this.state.users[0]?.name}//question mark is imp as render is runnung first and value is enterned later so ? avoids that error */
    }
}