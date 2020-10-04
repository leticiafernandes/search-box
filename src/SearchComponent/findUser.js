export default async function findUser(username) {
    if (!username) { return }
    await fetch(`${process.env.REACT_APP_GITHUB_USER_API}/${username}`)
    .then(response => {
        if (response.ok) {
            response.json().then(body => { return body })
        } else {
            throw Error(`${response.status} - Something went wrong in the network request`)
        }
    })
    .catch(err => console.log(err))
}