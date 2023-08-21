import Link from "next/link"
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa"

async function fetchMyRepos() {
    const response = await fetch('https://api.github.com/users/25mohit/repos', {
        next:{
            revalidate: 60
        }
    })
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const repos = await response.json()
    return repos
}

const CodeRepoPage = async () => {
    const repos = await fetchMyRepos()

    // console.log("repos", repos);
  return (
    <div className="repos-container">
        <h2>Repositories</h2>
        <ul className="repo-list">
            {
                repos?.map((repo, index) => (
                    <li key={index}>
                        <Link href={`/code/repos/${repo?.name}`}>
                            <h3>{repo?.name}</h3>
                            <p>{repo?.description}</p>
                            <div className="repo-details">
                                <span>
                                    <FaStar />{repo?.stargazers_count}
                                </span>
                                <span>
                                    <FaCodeBranch />{repo?.forks_count}
                                </span>
                                <span>
                                    <FaEye />{repo?.watchers_count}
                                </span>
                            </div>
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default CodeRepoPage