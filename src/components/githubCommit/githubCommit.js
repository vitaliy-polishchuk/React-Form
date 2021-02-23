import './githubCommit.css'
import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";


const GithubCommit = (props) => {

    const [page, setPage] = useState(0)
    const [commit, setCommit] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect( () =>{
     fetch(
         `https://api.github.com/search/commits?q=repo:facebook/react+css&page=${page}`,
         {
             method: 'GET',
             headers: new Headers({
                 Accept: "application/vnd.github.cloak-preview"
             })
         }
     ).then(r => r.json())
         .then(r => r.commit )
         .catch(error => console.log(error))
    },[page])

     return(
        <div className='component-github-commit'>
            {commit.forEach(res => {
                <li>{res.committer.date}</li>
            })

            }

        </div>
    )
}


export default GithubCommit
