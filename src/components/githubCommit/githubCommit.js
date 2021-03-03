import './githubCommit.css'
import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";


const GithubCommit = (props) => {

    const [page, setPage] = useState(0)
    const [commit, setCommit] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const changeButton = () => {
        setPage(page + 1)
    }

    const showLoading = () => {
        setIsLoading(true)
    }

    const hideLoading = () => {
        setIsLoading(false)
    }

    useEffect(() => {
        showLoading()
        fetch(
            `https://api.github.com/search/commits?q=repo:facebook/react+css&page=${page}`,
            {
                method: 'GET',
                headers: new Headers({
                    Accept: "application/vnd.github.cloak-preview"
                })
            }
        ).then(r => r.json())
            .then(res => {
                setCommit(res.items)
                hideLoading()
            })
            .catch(error => console.log(error))
    }, [page])

    return (
        <div className='component-github-commit'>

            {
                isLoading
                    ? (
                        <div className='display-4 text-center my-3'>Loading message...</div>
                    )
                    : (
                        <div>
                            <button className='text-danger border bg-secondary h2' onClick={changeButton}>Change page</button>
                            <div className='border bg-light p-5'> {commit.map((res, index) =>
                                <li key={index}>{res.commit.committer.date}
                                    <div className='h3 my-3 text-capitalize border-bottom'>{res.commit.message}</div>
                                </li>
                            )}
                            </div>
                        </div>
                    )
            }
        </div>
    )
}


export default GithubCommit
