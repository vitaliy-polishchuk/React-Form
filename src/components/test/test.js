import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

const Test = (props) => {
    const [count, setCount] = useState(0);


    useEffect(() => {
        document.title = `Вы нажали ${count} раз`;
    }, [count]);

    return (
        <div>
            <div className='home my-3 h3'><NavLink to=''>Home</NavLink></div>
            <p>Вы нажали {count} раз</p>
            <button className='text-success btn-dark shadow' onClick={() => setCount(count + 1)}>
                Нажми на меня
            </button>

        </div>
    );
}

export default Test



// const [page, setPage] = useState(1);
// const [commitHistory, setCommitHistory] = useState([]);
// const [isLoading, setIsLoading] = useState(true);
//
// const loadMoreCommit = () => {
//     setPage(page + 1);
// };
//
// useEffect(() => {
//     setIsLoading(true)
//     fetch(
//         `https://api.github.com/search/commits?q=repo:facebook/react+css&page=${page}`,
//         {
//             method: "GET",
//             headers: new Headers({
//                 Accept: "application/vnd.github.cloak-preview"
//             })
//         }
//     )
//         .then(res => res.json())
//         .then(response => {
//             setCommitHistory(response.items);
//             setIsLoading(false);
//         })
//         .catch(error => console.log(error));
// }, [page]);
//
// return (
//     <div className="component-github-commit">
//         <div className='home mx-4 my-3 h3'><NavLink to=''>Home</NavLink></div>
//         <h1> API calls with React Hooks </h1>
//         {isLoading && <p>Wait I'm Loading comments for you</p>}
//
//         {commitHistory.length !== 0 && (
//             <button className='text-danger text-success shadow' onClick={loadMoreCommit}>Load More Commits</button>
//         )}
//
//         {commitHistory.map((c, index) => (
//             <div key={index}>
//                 {c.commit && (
//                     <>
//                         <div>
//                             <h2 style={{textDecoration: "Underline"}}>
//                                 {c.commit.committer.name}
//                             </h2>
//                             <p>{c.commit.message}</p>
//                         </div>
//                         <hr/>
//                     </>
//                 )}
//             </div>
//         ))}
//     </div>
// );
// }
