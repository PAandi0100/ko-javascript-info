///41.

//1.
async function loadJson(url) {
    let response = await fetch(url)
        if (response.status == 200) {
            let json = await response.json();
            return json;
        }
        throw new Error(response.status);
}

loadJson('no-such-user.json')
    .catch(alert);

//2.
class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    let response = await fetch(url)
    if (response.status == 200) {
        let json = await response.json();
        return json;
    }
    throw new Error(response.status);
}

function demoGithubUser() {
    let name = prompt("GitHub username을 입력하세요.", "iliakan");

    return loadJson(`https://api.github.com/users/${name}`)
        .then(user => {

            alert(`이름: ${user.name}.`);
            return user;
        })
        .catch(err => {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("일치하는 사용자가 없습니다. 다시 입력해 주세요.");
                return demoGithubUser();
            } else {
                throw err;
            }
        });
}

demoGithubUser();



//3.
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 10;
}

function f() {
    wait().then(result => alert(result));
}







